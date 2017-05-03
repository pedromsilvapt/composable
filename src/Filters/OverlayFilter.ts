import { NativeFilter } from "./Base/Filter";
import { OutputStream, Stream } from "../Stream";

export class OverlayFilter extends NativeFilter {
    name : string = 'overlay';

    parameters : string[] = [ 'x', 'y', 'eof_action', 'eval', 'shortest', 'format', 'repeatlast' ];
}

export function overlay ( input1 : Stream, input2 : Stream ) : OutputStream {
    const filter = new OverlayFilter().from( [ input1, input2 ] );

    return filter.outputs[ 0 ];
}