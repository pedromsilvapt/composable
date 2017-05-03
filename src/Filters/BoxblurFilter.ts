import { NativeFilter, FilterNamedArguments } from "./Base/Filter";
import { Stream, OutputStream } from "../Stream";

export class BoxblurFilter extends NativeFilter {
    name : string = 'boxblur';

    parameters : string[] = [ 'luma_radius', 'luma_power', 'chroma_radius', 'chroma_power', 'alpha_radius', 'alpha_power', 'enable' ];
}

export function boxblur ( input : Stream, options ?: FilterNamedArguments ): OutputStream {
    const filter = new BoxblurFilter( options ).from( [ input ] );

    return filter.outputs[ 0 ];
}