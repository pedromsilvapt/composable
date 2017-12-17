import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { Stream, OutputStream } from "../Stream";

export class BoxblurFilter extends NativeFilter {
    name : string = 'boxblur';

    parameters : string[] = [ 'luma_radius', 'luma_power', 'chroma_radius', 'chroma_power', 'alpha_radius', 'alpha_power', 'enable' ];
}


export function boxblur ( input : Stream, named ?: FilterNamedArguments ) : OutputStream;
export function boxblur ( input : Stream, positional : FilterArgument[], named ?: FilterNamedArguments ) : OutputStream;
export function boxblur ( input : Stream, positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ): OutputStream {
    const filter = new BoxblurFilter( positional as any, named ).from( [ input ] );

    return filter.outputs[ 0 ];
}