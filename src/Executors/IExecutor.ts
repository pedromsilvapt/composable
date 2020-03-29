import { ICompiler } from '../Compiler';

/**
 * @category composable/executors
 */
export interface IExecutor<O> {
    compiler : ICompiler;

    binaryPath : string;

    execute () : O;
}