import { IExecutor } from './IExecutor';
import { Stream } from '../Stream';
import { ICompiler } from '../Compiler/ICompiler';

export abstract class Executor<O> implements IExecutor<O> {
    protected customBinaryPath : string;

    get binaryPath () : string {
        if ( this.customBinaryPath == null ) {
            return 'ffmpeg';
        }

        return this.customBinaryPath;
    }

    set binaryPath ( value : string ) {
        this.customBinaryPath = value;
    }
    
    abstract streams : Stream[];
    
    abstract compiler : ICompiler;

    abstract execute () : O;
}