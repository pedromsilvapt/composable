import { Stream } from "../Stream";
import { IFragment } from "./IFragment";

export interface ICompiler {
    emit ( fragment : IFragment ) : void;

    hasStreamName ( stream : Stream ) : boolean;

    getStreamName ( stream : Stream ) : string;

    getInputStreamName ( stream : Stream ) : number;

    getEmissionsFor ( type : string ) : string[];

    toString () : string;
}