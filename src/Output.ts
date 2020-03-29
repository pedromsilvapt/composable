import { ICompiler, IFragment, IPlaceholder, isPlaceholder, Placeholder } from './Compiler';

/**
 * Represents an output of the command. Usually there's only one per command, but can be more. 
 * The [Streams]{@link Stream} to be included in the output should be passed in the options array, using the `-map` option.
 * ```typescript
 * const output = new Output( '/output.mp4', [ '-map', stream1, '-map', video ] );
 * ```
 * 
 * @category composable
 */
export class Output implements IFragment {
    url : string;

    options : ( string | number | IPlaceholder<string | number> )[];

    constructor ( url : string, options : ( string | number | IPlaceholder<string | number> )[] = [] ) {
        this.url = url;
        this.options = options;
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

        compiler.outputs.options.push( ...this.compileOptions(), this.url );
    }
    
    public clone () : Output {
        return new Output( this.url, this.options );
    }
}