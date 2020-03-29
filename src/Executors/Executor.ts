import { IExecutor } from './IExecutor';
import { ICompiler } from '../Compiler';

/**
 * @category composable/executors
 */
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
        
    abstract compiler : ICompiler;

    abstract execute () : O;
}