/**
 * @category composable
 */
export interface IFragment {
    compile ( compiler : ICompiler ) : void;

    clone () : IFragment;
}

/**
 * @category composable
 */
export interface IPlaceholder<T> {
    readonly dependencies : IFragment[];

    materialize () : T;
}

/**
 * @category composable
 */
export function isPlaceholder ( obj : any ) : obj is IPlaceholder<any> {
    return obj != void 0 && typeof obj.materialize === 'function' && obj.dependencies instanceof Array;
}

/**
 * @category composable
 */
export class Placeholder<T> implements IPlaceholder<T> {
    protected getter : () => T;

    readonly dependencies : IFragment[];

    constructor ( getter : () => T, dependencies : IFragment[] = [] ) {
        this.getter = getter;
        this.dependencies = dependencies;
    }

    materialize () {
        return this.getter();
    }

    map<U> ( fn : ( value : T ) => U ) {
        return new Placeholder<U>( () => fn( this.materialize() ), this.dependencies );
    }
}

/**
 * @category composable
 */
export interface ISource extends IFragment, IPlaceholder<string> {
    outputs : StreamRef[];

    named ( ...names : string[] ) : this;

    [ Symbol.iterator ] () : IterableIterator<StreamRef>;
}

/**
 * @category composable
 */
export interface ISink extends IFragment {
    inputs : Stream[];
}

/**
 * @category composable
 */
export interface IFilter extends ISource, ISink {  }

/**
 * @category composable
 */
export type Stream = string | StreamRef | ISource;

/**
 * @category composable
 */
export abstract class StreamRef implements IFragment, IPlaceholder<string> {
    public static normalize ( streams : Stream[] ) : StreamRef[];
    public static normalize ( streams : Stream ) : StreamRef;
    public static normalize ( streams : Stream | Stream[] ) : StreamRef | StreamRef[] {
        if ( streams instanceof Array ) {
            return streams.map( stream => StreamRef.normalize( stream ) );
        } else {
            if ( typeof streams === 'string' ) {
                return new StaticStream( streams );
            } else if ( streams instanceof StreamRef ) {
                return streams;
            } else {
                return streams.outputs[ 0 ];
            }
        }
    }

    public static normalizeAll ( streams : Stream | Stream[] ) : StreamRef[] {
        if ( streams === null || streams === void 0 ) {
            return [];
        }

        if ( streams instanceof Array ) {
            return streams.flatMap( stream => StreamRef.normalizeAll( stream ) );
        } else {
            if ( typeof streams === 'string' ) {
                return [ new StaticStream( streams ) ];
            } else if ( streams instanceof StreamRef ) {
                return [ streams ];
            } else {
                return streams.outputs;
            }
        }
    }
    
    public get dependencies () {
        return [ this ];
    }

    readonly name : string;

    abstract compile ( compiler : ICompiler ) : void;

    abstract named ( name : string ) : this;

    abstract clone () : StreamRef;

    public select ( suffix : string ) : SelectStreamRef {
        return new SelectStreamRef( this, suffix );
    }

    public materialize () : string {
        return '[' + this.name + ']';
    }
}

/**
 * @category composable
 */
export class SelectStreamRef extends StreamRef {
    public selector : string;

    public parentStream : StreamRef;

    get name () : string {
        return this.parentStream.name + ':' + this.selector;
    }

    public constructor ( parentStream : StreamRef, selector : string ) {
        super();

        this.parentStream = parentStream;
        this.selector = selector;
    }

    public named ( name : string ) : this {
        throw new Error( `Selected stream cannot be manually named` );
    }

    public compile ( compiler : ICompiler ) : void {
        compiler.compile( this.parentStream );
    }

    public clone () : SelectStreamRef {
        return new SelectStreamRef( this.parentStream.clone(), this.selector );
    }
}

/**
 * @category composable
 */
export class StaticStream extends StreamRef {
    readonly name : string;

    public constructor ( name : string ) {
        super();

        this.name = name;
    }
    
    public named ( name : string ) : this {
        throw new Error( `Static stream cannot be manually named` );
    }

    public compile ( compiler : ICompiler ) : this {
        return this;
    }
    
    public clone () : StaticStream {
        return new StaticStream( this.name );
    }
}

/**
 * @category composable
 */
export type FragmentLike = IFragment;

/**
 * @category composable
 */
export interface ICompiler {
    readonly filterGraph : FiltergraphCommandOptions;

    readonly inputs : CommandOptions;

    readonly outputs : CommandOptions;

    readonly options : CommandOptions;

    readonly command : CommandOptions;

    compile ( ...fragments : FragmentLike[] ) : this;

    clone () : ICompiler;

    hasStreamName ( stream : Stream ) : boolean;

    getStreamName ( stream : Stream ) : string;

    setStreamName ( stream : Stream, name : string ) : this;

    getInputStreamName ( stream : Stream ) : number;

    getStreamRef ( stream : Stream ) : StreamRef;

    toString () : string;
}

/**
 * A command is composed of fragments: these can be an [[Input]], an [[Output]], a [[Filter]], a [[Composite]] or a [[StreamRef]].
 * 
 * This class is responsible for creating the command from multiple fragments. These fragments can be passed to it's constructor, or to it's [[`Compiler.compile`]] method.
 * ```typescript
 * const input = new Input( 'movie.mkv' );
 * 
 * const filter = new Filter( input.select( 'v' ), 'scale', { width: 1080, height: 720 } );
 * 
 * const output = new Output( 'movie.mp4', [ '-map', filter, '-map', input.select( 'a' ) ] );
 * 
 * const compiler = new Compiler( output );
 * 
 * // Any aditional fragments can be passed on to the compile method
 * compiler.compile( output );
 * ```
 * 
 * Once all necessary fragments are compiled, you can obtain the [[CommandOptions]] as a string through [[`CommandOptions.toString`]] or an array of strings through [[`CommandOptions.toArray`]]
 * ```typescript
 * compiler.command.toString();
 * compiler.command.toArray();
 * ```
 * 
 * A compiler can be cloned at any time. This is useful when you want to create multiple, similar commands, 
 * so you don't have to recompile every fragment, but can compile them first, and then clone the compiler as many times as necessary.
 * 
 * @category composable
 */
export class Compiler implements ICompiler {
    protected streamRefs : Map<string, StreamRef> = new Map();

    protected streams : PrefixableIdentifierGenerator<Stream> = new PrefixableIdentifierGenerator<Stream>( 'stream' );

    protected sources : IndexableIdentifierGenerator<Stream> = new IndexableIdentifierGenerator( 0 );

    protected compiledFragments : Set<IFragment> = new Set();

    public filterGraph : FiltergraphCommandOptions = new FiltergraphCommandOptions();

    public inputs : CommandOptions = new CommandOptions();

    public outputs : CommandOptions = new CommandOptions();

    public options : CommandOptions = new CommandOptions();

    get command () : CommandOptions {
        return new CommandOptions( [ ...this.inputs.options, ...this.filterGraph.options, ...this.options.options, ...this.outputs.options ] );
    }
    
    public constructor ( ...fragments : FragmentLike[] ) {
        this.compile( ...fragments );
    }

    public compile ( ...fragments : FragmentLike[] ) : this {
        for ( let frag of fragments ) {
            if ( frag != null && !this.compiledFragments.has( frag ) ) {
                this.compiledFragments.add( frag );

                frag.compile( this );
            }
        }

        return this;
    }

    public clone () : ICompiler {
        const compiler = new Compiler();

        compiler.streamRefs = new Map( this.streamRefs );
        compiler.streams = this.streams.clone();
        compiler.sources = this.sources.clone();
        compiler.compiledFragments = new Set( this.compiledFragments );

        compiler.filterGraph = this.filterGraph.clone();
        compiler.inputs = this.inputs.clone();
        compiler.outputs = this.outputs.clone();
        compiler.options = this.options.clone();

        return compiler;
    }

    public getStreamRef ( stream : Stream ) : StreamRef {
        if ( stream instanceof StreamRef ) {
            return stream;
        }

        if ( typeof stream === 'string' ) {
            if ( !this.streamRefs.has( stream ) ) {
                this.streamRefs.set( stream, new StaticStream( stream ) );
            }

            return this.streamRefs.get( stream );
        }
        
        return stream.outputs[ 0 ];
    }

    public hasStreamName ( stream : Stream ) : boolean {
        return this.streams.has( stream );
    }

    public getStreamName ( stream : Stream ) : string {
        return this.streams.get( stream );
    }

    public getInputStreamName ( stream : Stream ) : number {
        return this.sources.get( stream );
    }
    
    public setStreamName ( stream : Stream, name : string ) : this {
        this.streams.set( stream, name );

        return this;
    }
}

/**
 * @category composable
 */
export function command ( ...fragments : FragmentLike[] ) : CommandOptions {
    return new Compiler( ...fragments ).command;
}

/**
 * @category composable
 */
export class CommandOptions {
    options : string[] = [];

    public constructor ( options : string[] = [] ) {
        this.options = options;
    }

    public clone () : CommandOptions {
        return new CommandOptions( this.options.slice() );
    }

    public toArray () {
        return this.options.slice();
    }

    public toString () {
        return this.options.join( ' ' );
    }
}

/**
 * @category composable
 */
export class FiltergraphCommandOptions extends CommandOptions {
    options : string[] = [];

    public constructor ( options : string[] = [] ) {
        super( options );
    }

    public appendFilter ( filter : string ) {
        if ( this.options.length == 0 ) {
            this.options.push( '-filter_complex', filter );
        } else {
            this.options[ 1 ] = this.options[ 1 ] + ';' + filter;
        }
    }

    public clone () : FiltergraphCommandOptions {
        return new FiltergraphCommandOptions( this.options.slice() );
    }
}

/**
 * @category composable
 */
export abstract class IdentifierGenerator<T, K> {
    cache : Map<T, K> = new Map;

    seed : number = 0;

    constructor ( seed : number = 0 ) {
        this.seed = seed;
    }

    abstract generate ( id : number ) : K;

    has ( key : T ) : boolean {
        return this.cache.has( key );
    }

    getCached ( key : T ) : K {
        return this.cache.get( key );
    }

    get ( key : T ) : K {
        if ( this.has( key ) ) {
            return this.getCached( key );
        }

        const value = this.generate( this.seed++ );

        this.cache.set( key, value );

        return value;
    }

    set ( key : T, name : K ) {
        this.cache.set( key, name );
    }
}

/**
 * @category composable
 */
export class PrefixableIdentifierGenerator<T> extends IdentifierGenerator<T, string> {
    prefix : string = 'stream';

    constructor ( prefix : string, seed : number = 0 ) {
        super( seed );

        this.prefix = prefix;
    }

    generate ( id : number ) : string {
        return `${ this.prefix }${ id }`;
    }

    clone () : PrefixableIdentifierGenerator<T> {
        const generator = new PrefixableIdentifierGenerator<T>( this.prefix, this.seed );

        generator.cache = new Map( this.cache );

        return generator;
    }
}

/**
 * @category composable
 */
export class IndexableIdentifierGenerator<T> extends IdentifierGenerator<T, number> {
    generate ( id : number ) : number {
        return id;
    }
    
    clone () : IndexableIdentifierGenerator<T> {
        const generator = new IndexableIdentifierGenerator<T>( this.seed );

        generator.cache = new Map( this.cache );

        return generator;
    }
}
