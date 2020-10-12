import { ICompiler, ISource, Stream, StreamRef, IPlaceholder, IFilter, IFragment } from './Compiler';

/**
 * @category composable
 */
export type FilterParams = Record<string, string | number>;

/**
 * @category composable
 */
export class FilterStreamRef<P extends FilterParams = FilterParams, F extends Filter<P> = Filter<P>> extends StreamRef {
    protected _name : string;

    public filter : F;

    public get name () : string {
        return this._name;
    }

    public constructor ( filter : F ) {
        super();

        this.filter = filter;
    }
    
    public compile ( compiler : ICompiler ) : void {
        if ( this._name == null ) {
            this._name = compiler.getStreamName( this );
        } else {
            compiler.setStreamName( this, this._name );
        }
        
        compiler.compile( this.filter );
    }

    public named ( name : string ) : this {
        this._name = name;
        
        return this;
    }

    public clone () : FilterStreamRef<P, F> {
        return new FilterStreamRef<P, F>( this.filter.clone() as F );
    }
}

/**
 * Represents a native FFMPEG filter. Filters are made of four parts: a list of inputs, a name, some parameters, and finally, a list of outputs.
 * 
 * Some of those parts are optional. For example, some filters (sources) have no inputs: These can be represented by instantiating the ***Filter*
 * class with an empty array `[]` or `null`.
 * ```typescript
 * const filter = new Filter( null, 'color', {
 *    color: 'black',
 *    size: `1920x1080`,
 *    rate: frameRate,
 *    duration: '5000'
 * } );
 * ```
 * 
 * In the same line, not all filters require parameters, so those can be ommited (or an empty object `{}` can be passed).
 * ```typescript
 * const filter = new Filter( input, 'anullsink' );
 * ```
 * 
 * When filters have more than one input, an array of streams can be provided. Similarly, by default this module allocates one output stream for each
 * filter. In case a filter outputs more than one though, a fourth parameter can be provided indicating how many output streams should be allocated.
 * ```typescript
 * const concatFilter = new Filter( 
 *    [ video1, audio1, video2, audio2 ], 
 *    'concat', 
 *    { n: 2, v: 1, a: 1 }, 
 *    2 
 * );
 * ```
 * In the example above, the [concat](https://ffmpeg.org/ffmpeg-filters.html#toc-concat) filter generates two output streams: one for video, and one for audio (it is always `v + a`). 
 * These can be accessed through the [[Filter.outputs]] property, or by destructuring the filter itself.
 * 
 * ```typescript
 * const video = concatFilter.outputs[ 0 ];
 * const audio = concatFilter.outputs[ 1 ];
 * // Or equivalent
 * const [ video, audio ] = concatFilter;
 * ```
 * 
 * @category composable
 */
export class Filter<P extends FilterParams = FilterParams> implements IFilter {
    name : string;
    
    parameters : P;
    
    inputs : Stream[] = [];

    outputs : FilterStreamRef<P, Filter<P>>[] = [];

    protected _customOutputsCount : number = 1;

    public get dependencies () : IFragment[] {
        return [ this ];
    }

    constructor ( inputs : Stream | Stream[], name : string, parameters : P = {} as any, outputs : number = 1 ) {
        this.inputs = StreamRef.normalizeAll( inputs );
        this.name = name;
        this.parameters = parameters;
        this._customOutputsCount = outputs;

        this.rebuildOutputs();
    }
    
    protected rebuildOutputs () {
        this.outputs = Array.from( Array( this.getOutputCount() ).keys() ).map( () => new FilterStreamRef( this ) );
    }

    public getOutputCount () {
        return this._customOutputsCount;
    }

    public getParameter<T = number | string> ( name : string, defaultValue : T = null ) : T {
        if ( name in this.parameters ) {
            return ( this.parameters as any )[ name ] as T;
        }

        return defaultValue;
    }

    public compileStreams ( compiler : ICompiler, streams : Stream[] ) : string {
        return streams.map( stream => {
            const streamRef = compiler.getStreamRef( stream );

            compiler.compile( streamRef );

            return '[' +  streamRef.name + ']';
        } ).join( '' );
    }

    public compileArgumentValue ( arg: string | number ) : string {
        if ( typeof arg === 'number' ) {
            return '' + arg;
        } else {
            if ( /[\[\]=;,']/g.test( arg ) ) {
                return "'" + arg.replace( /\\/g, '\\\\' )
                    .replace( /'/g, '\\\'' ) + "'";
            } else {
                return arg;
            }
        }
    }

    public compileArguments ( compiler : ICompiler ) : string {
        const parameters = this.parameters;

        const named = Object.keys( this.parameters )
            .filter( key => parameters[ key ] !== null && parameters[ key ] !== void 0 )
            .map( key => `${key}=${ this.compileArgumentValue( parameters[ key ] ) }` );

        return named.join( ':' );
    }

    public compile ( compiler : ICompiler ) : void {
        const inputs = this.compileStreams( compiler, this.inputs );

        const outputs = this.compileStreams( compiler, this.outputs );

        const args = this.compileArguments( compiler );

        const filter = `${ inputs }${ this.name }${ args ? '=' + args : '' }${ outputs }`;

        compiler.filterGraph.appendFilter( filter );
    }

    public materialize () {
        return this.outputs[ 0 ].materialize();
    }
    
    public clone () : Filter<P> {
        return null;
    }

    public named ( ...names : string[] ) : this {
        if ( names.length > this.outputs.length ) {
            throw new Error( `Too many output names for filter "${ this.name }", got ${ names.length } but expected ${ this.outputs.length }.` );
        }

        for ( let i = 0; i < names.length; i++ ) {
            if ( names[ i ] != null ) {
                this.outputs[ 0 ].named( names[ i ] );
            }
        }

        return this;
    }

    [ Symbol.iterator ] () : IterableIterator<FilterStreamRef> {
        return this.outputs[ Symbol.iterator ]();
    }
}

/**
 * @category composable
 */
export function filter ( inputs : Stream | Stream[], name : string, parameters ?: FilterParams ) : Filter;
export function filter ( inputs : Stream | Stream[], name : string, parameters : FilterParams, outputs : number ) : Filter;
export function filter ( inputs : Stream | Stream[], name : string, parameters : FilterParams = {}, outputs ?: number ) : Filter {
    return new Filter( inputs, name, parameters, outputs );
}

/**
 * A Composite is similar to a filter, but instead of being a mapping to a real, native FFMPEG filter, it is a virtual one: 
 * behind it may be other composites or other complex FFMPEG filter.
 * 
 * To create a new composite, just extends the [[Composite]] class (implementing the two abstract methods [[Composite.compose]] and [[Composite.clone]]).
 * 
 * ```typescript
 * export class BlackoutComposite extends Composite {
 *     public constructor ( 
 *          public original : Stream, public width : number, public height : number, 
 *          public start : number, public end : number 
 *     ) {
 *         super();
 *     }
 * 
 *     public compose () : Stream {
 *         const black = new VideoColor( null, { 
 *             color: 'black',
 *             size: '' + this.width + 'x' + this.height, 
 *             duration: this.end - this.start 
 *         } );
 *         
 *         return new VideoOverlay( 
 *              [ this.original, black ], 
 *              { enable: `'between(t,${ this.start },${ this.end })'` } 
 *         );
 *     }
 *     
 *     public clone () : Composite {
 *         return new BlackoutComposite( 
 *              this.original, this.width, this.height, this.start, this.end 
 *         );
 *     }
 * }
 * ```
 * 
 * Once created, composites can be used almost anywhere a regular filter can.
 * ```typescript
 * const input = new Input( 'input.mp4' );
 * 
 * const filter = new BlackoutComposite( input, 1920, 1080, 10, 20 );
 * 
 * const output = Output( 'output.mp4', [ '-map', filter ] );
 * ```
 * 
 * The `compose` method can return one or multiple streams. Only streams returned
 * by the `compose` method (and their *implicit* dependencies) will be compiled.
 * 
 * Aditionally, composites can be created in a more functional style using the [[composite]] function.
 * 
 * @category composable
 */
export abstract class Composite implements IFilter {
    public inputs : Stream[] = [];

    protected _outputs : StreamRef[];

    public get outputs () : StreamRef[] {
        if ( this._outputs == null ) {
            this._outputs = StreamRef.normalizeAll( this.compose() );
        }

        return this._outputs;
    }

    public get dependencies () : IFragment[] {
        return this.outputs;
    }

    public abstract compose () : Stream[] | Stream;

    public abstract clone () : Composite;

    public compile ( compiler : ICompiler ) : void {
        compiler.compile( ...this.outputs );
    }

    public materialize () : string {
        return this.outputs[ 0 ].materialize();
    }

    public named ( ...names : string[] ) : this {
        if ( names.length > this.outputs.length ) {
            throw new Error( `Too many output names for composite "${ this.constructor.name }", got ${ names.length } but expected ${ this.outputs.length }.` );
        }

        for ( let i = 0; i < names.length; i++ ) {
            if ( names[ i ] != null ) {
                this.outputs[ 0 ].named( names[ i ] );
            }
        }

        return this;
    }

    [ Symbol.iterator ] () : IterableIterator<StreamRef> {
        return this.outputs[ Symbol.iterator ]();
    }
}

/**
 * @category composable
 */
export function composite <T extends any[]> ( compose : ( ...args : T ) => Stream | Stream[] ) : ( ...args : T ) => Composite {
    return ( ...args : T ) => {
        return new class extends Composite {
            public compose () : Stream | Stream[] {
                return compose( ...args );
            }

            public clone () : Composite {
                return composite( compose )( ...args );
            }
        };
    };
}