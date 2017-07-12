import { NativeFilter } from "./Base/Filter";
import { OutputStream, Stream } from "../Stream";

export class ScaleFilter extends NativeFilter {
    name : string = 'scale';

    parameters : string[] = [ 'width', 'height', 'eval', 'interl', 'flags', 'param0', 'param1', 'size', 'in_color_matrix', 'out_color_matrix', 'in_range', 'out_range', 'force_original_aspect_ratio', 'sar',  ];
}

export function scale ( input : Stream, width : number, height : number ) : OutputStream {
    const filter = new ScaleFilter( {
        width: width,
        height: height
    } ).from( [ input ] );

    return filter.outputs[ 0 ];
}