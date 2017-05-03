import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { Stream, DynamicStream, OutputStream } from "../Stream";

export class FormatFilter extends NativeFilter {
    name : string = 'format';

    parameters : string[] = [ 'pix_fmts' ];
}

export class AFormatFilter extends NativeFilter {
    name : string = 'aformat';

    parameters : string[] = [ 'sample_fmts', 'sample_rates', 'channel_layouts' ];
}

export function format ( input : Stream, format : string ) : OutputStream {
    const filter = new FormatFilter( [ format ] ).from( [ input ] );

    return filter.outputs[ 0 ];
}

export function aformat ( input : Stream, args ?: FilterNamedArguments ) : OutputStream {
    const filter = new AFormatFilter( args ).from( [ input ] );

    return filter.outputs[ 0 ];
}