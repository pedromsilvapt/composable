import { NativeFilter, FilterArgument, FilterNamedArguments } from "./Base/Filter";
import { OutputStream, Stream } from "../Stream";

export class VolumeFilter extends NativeFilter {
    name : string = 'volume';

    parameters : string[] = [ 'volume', 'precision', 'replaygain', 'replaygain_preamp', 'eval', 'enable' ];
}

export function volume ( input : Stream, named ?: FilterNamedArguments ) : OutputStream;
export function volume ( input : Stream, positional : FilterArgument[], named ?: FilterNamedArguments ) : OutputStream;
export function volume ( input : Stream, positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ) : OutputStream {
    const filter = new VolumeFilter( positional as any, named ).from( [ input ] );

    return filter.outputs[ 0 ];
}

export function mute ( input : Stream, start : number, end : number ) : OutputStream {
    return volume( input, { volume: 0, enable: `'between(t,${ start },${ end })'` } );
}