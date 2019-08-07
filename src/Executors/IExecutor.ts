import { Stream } from '../Stream';
import { ICompiler } from '../Compiler/ICompiler';

export interface IExecutor<O> {
    streams : Stream[];

    compiler : ICompiler;

    binaryPath : string;

    execute () : O;
}