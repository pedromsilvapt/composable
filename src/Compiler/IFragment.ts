import { ICompiler } from "./ICompiler";

export interface Emission {
    type: string;
    content: string;
}

export interface IFragment {
    emit ( compiler : ICompiler ) : Emission[];

    compile ( compiler : ICompiler ) : string;
}

export type FragmentLike = IFragment | string;