import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { OutputStream, Stream } from "../Stream";
import { color } from "./Sources/Color";

export class OverlayFilter extends NativeFilter {
    name : string = 'overlay';

    parameters : string[] = [ 'x', 'y', 'eof_action', 'eval', 'shortest', 'format', 'repeatlast' ];
}

export function overlay ( input1 : Stream, input2 : Stream, named ?: FilterNamedArguments ) : OutputStream;
export function overlay ( input1 : Stream, input2 : Stream, positional : FilterArgument[], named ?: FilterNamedArguments ) : OutputStream;
export function overlay ( input1 : Stream, input2 : Stream, positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ): OutputStream {
    const filter = new OverlayFilter( positional as any, named ).from( [ input1, input2 ] );

    return filter.outputs[ 0 ];
}

export function blackout ( input : Stream, width : number, height : number, start : number, end : number ) : OutputStream {
    const black = color( 'black', width, height, end - start );

    return overlay( input, black, { enable: `'between(t,${ start },${ end })'` } );
}