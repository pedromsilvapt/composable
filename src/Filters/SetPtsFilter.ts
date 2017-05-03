import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { Stream, DynamicStream, OutputStream } from "../Stream";

// setpts=PTS-STARTPTS

export class GenericSetPtsFilter extends NativeFilter {
    parameters : string[] = [ 'expr' ];    
}

export class ASetPtsFilter extends GenericSetPtsFilter {
    name : string = 'asetpts';
}

export class SetPtsFilter extends GenericSetPtsFilter {
    name : string = 'setpts';
}

export function setpts ( video : Stream, audio : Stream, expr : string ) : OutputStream[] {
    return [ vsetpts( video, expr ), asetpts( audio, expr ) ];
}

export function vsetpts ( video : Stream, expr : string ) : OutputStream {
    const videoSetPts = new SetPtsFilter( [ expr ] ).from( [ video ] );

    return videoSetPts.outputs[ 0 ];
}

export function asetpts ( audio : Stream, expr : string ) : OutputStream {
    const audioSetPts = new ASetPtsFilter( [ expr ] ).from( [ audio ] );

    return audioSetPts.outputs[ 0 ];
}