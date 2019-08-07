import { Stream } from "../Stream";
import { IFragment, FragmentLike } from "./IFragment";

export interface ICompiler {
    emit ( fragment : IFragment | FragmentLike[] ) : void;

    compile ( fragment : FragmentLike | FragmentLike[] ) : string;

    hasStreamName ( stream : Stream ) : boolean;

    getStreamName ( stream : Stream ) : string;

    getInputStreamName ( stream : Stream ) : number;

    getEmissionsFor ( type : string ) : string[];

    toString () : string;
}