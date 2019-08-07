import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { Stream, OutputStream } from "../Stream";

export class BlackDetectFilter extends NativeFilter {
    name : string = 'blackdetect';

    parameters : string[] = [ 'black_min_duration', 'pixel_black_th', 'picture_black_ratio_th' ];
}


export function blackDetect ( input : Stream, named ?: FilterNamedArguments ) : OutputStream;
export function blackDetect ( input : Stream, positional : FilterArgument[], named ?: FilterNamedArguments ) : OutputStream;
export function blackDetect ( input : Stream, positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ) : OutputStream {
    const filter = new BlackDetectFilter( positional as any, named ).from( [ input ] );

    return filter.outputs[ 0 ];
}