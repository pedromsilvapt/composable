import { IFragment } from "../../Compiler/IFragment";
import { Stream } from "../../Stream";

export interface IFilter extends IFragment {
    inputs : Stream[];
    outputs : Stream[];

    redirect ( source : Stream, redirected : Stream ) : IFilter;
}