import { ICompiler, IFragment, ISource, StreamRef, IPlaceholder, SelectStreamRef, isPlaceholder } from './Compiler';

/**
 * @category composable
 */
export type FilterParams = Record<string, string | number>;

/**
 * @category composable
 */
export class InputStreamRef extends StreamRef {
    protected _name : string;

    public input : Input;

    public get name () : string {
        return this._name;
    }

    public constructor ( input : Input ) {
        super();

        this.input = input;
    }
    
    public named ( ...names : string[] ) : this {
        throw new Error( `Input stream cannot be manually named` );
    }

    public compile ( compiler : ICompiler ) : void {
        compiler.compile( this.input );
        
        this._name = this.input.index.toString();
    }

    public clone () : InputStreamRef {
        return new InputStreamRef( this.input.clone() as Input );
    }
}

/**
 * Represents an input (like a video file or a lavfi filter).
 * ```typescript
 * const input = new Input( 'path/to/file.mp4' );
 * ```
 * 
 * Optionally can also receive an array of arguments to include before the input (for example, for seeking the media).
 * ```typescript
 * // Starts the input at the 1-minute mark.
 * const input = new Input( 'path/to/file.mp4', [ '-ss', 60 ] );
 * ```
 * 
 * 
 * @category composable
 */
export class Input implements ISource {
    url : string;

    index : number;
    
    options : ( string | number | IPlaceholder<string | number> )[];
    
    outputs : InputStreamRef[] = [];

    public get dependencies () : IFragment[] {
        return [ this, ...this.outputs[ 0 ].dependencies ];
    }

    constructor ( url : string, options : ( string | number | IPlaceholder<string | number> )[] = [] ) {
        this.url = url;
        this.index = null;
        this.options = options;

        this.outputs = [ new InputStreamRef( this ) ];
    }

    protected compileOptions () : string[] {
        return this.options.map( opt => {
            if ( typeof opt === 'string' || typeof opt === 'number' ) {
                return opt.toString();
            }

            return opt.materialize().toString();
        } );
    }

    public compile ( compiler : ICompiler ) : void {
        compiler.compile( ...this.options.filter( isPlaceholder ).flatMap( pl => pl.dependencies ) );
        
        compiler.inputs.options.push( ...this.compileOptions(), '-i', this.url );

        this.index = compiler.getInputStreamName( this.outputs[ 0 ] );
    }
    
    public select ( selector : string ) : SelectStreamRef {
        return this.outputs[ 0 ].select( selector );
    }

    public named ( ...names : string[] ) : this {
        throw new Error( `Input stream cannot be manually named` );
    }

    public clone () : Input {
        return new Input( this.url, this.options );
    }

    public materialize () {
        return this.outputs[ 0 ].materialize();
    }
    
    public [ Symbol.iterator ] () {
        return this.outputs[ Symbol.iterator ]();
    }

    public static isStream ( obj : any ) : obj is Input | InputStreamRef {
        return obj instanceof Input || obj instanceof InputStreamRef;
    }

    public static isStreamLike ( obj : any ) : obj is Input | InputStreamRef | string {
        return Input.isStream( obj ) || typeof obj === 'string';
    }
}