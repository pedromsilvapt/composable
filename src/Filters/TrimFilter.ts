import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { Stream, DynamicStream, OutputStream } from "../Stream";
import { setpts, vsetpts, asetpts } from "./SetPtsFilter";

export class GenericTrimFilter extends NativeFilter {
    
}

export class ATrimFilter extends GenericTrimFilter {
    name : string = 'atrim';
}

export class TrimFilter extends GenericTrimFilter {
    name : string = 'trim';
}

export function trim ( video : Stream, audio : Stream, start : number, end : number ) : OutputStream[] {
    return [ vtrim( video, start, end ), atrim( audio, start, end ) ];
}

export function vtrim ( video : Stream, start : number, end : number ) : OutputStream {
    const videoTrim = new TrimFilter( { start, end } ).from( [ video ] );
    
    return vsetpts( videoTrim.outputs[ 0 ], 'PTS-STARTPTS' );
}

export function atrim ( audio : Stream, start : number, end : number ) : OutputStream {
    const audioTrim = new ATrimFilter( { start, end } ).from( [ audio ] );

    return asetpts( audioTrim.outputs[ 0 ], 'PTS-STARTPTS' );
}