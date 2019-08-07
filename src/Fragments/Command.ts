import { IFragment, Emission, FragmentLike } from '../Compiler/IFragment';
import { ICompiler } from '../Compiler/ICompiler';
import { Stream } from '../Stream';
import { filters, sources } from './Emissions';
import { maps } from './Maps';

export interface CommandOptions {
    output: string;
    args : string[];
    inputArgs : string[];
    outputArgs : string[];
    binary : string;
}

export class CommandFragment implements IFragment {
    outputs : Stream[];

    options : CommandOptions;

    protected fragments : FragmentLike[] = null;

    public constructor ( outputs : Stream[], options : Partial<CommandOptions> = {} ) {
        this.outputs = outputs;
        
        this.options = {
            output: '',
            args: [],
            inputArgs : [],
            outputArgs : [],
            binary: 'ffmpeg',
            ...options
        };
    }

    createFragments () : FragmentLike[] {
        const vf = filters( this.outputs, true );

        const outputs = maps( this.outputs );

        const inputArgs = ' ' + this.options.inputArgs.join( ' ' ) + ' ';

        const args = ' ' + this.options.args.join( ' ' ) + ' ';

        const outputArgs = ' ' + this.options.outputArgs.join( ' ' ) + ' ';

        return [ this.options.binary, ' ', inputArgs, sources( this.outputs ), args, vf, ' ', outputs, ' ', outputArgs, this.options.output || 'pipe:1' ];
    }

    emit ( compiler : ICompiler ) : Emission[] {
        if ( this.fragments == null ) {
            this.fragments = this.createFragments();
        }

        compiler.emit( this.fragments );

        return [];
    }
    
    compile ( compiler : ICompiler ) : string {
        if ( this.fragments == null ) {
            this.fragments = this.createFragments();
        }

        return compiler.compile( this.fragments );
    }
}

export function command ( outputs : Stream[], output : string = '', options : Partial<CommandOptions> = {} ) : CommandFragment {
    return new CommandFragment( outputs, {
        output, 
        ...options
    } );
}