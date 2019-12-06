import { NativeFilter, FilterArgument, FilterNamedArguments } from "./Base/Filter";
import { OutputStream, Stream } from "../Stream";
import { vsetpts, asetpts } from './SetPtsFilter';

export class SelectFilter extends NativeFilter {
    name : string = 'select';

    parameters : string[] = [ 'expr', 'outputs' ];
}

export function select ( input : Stream, named ?: FilterNamedArguments ) : OutputStream;
export function select ( input : Stream, positional : FilterArgument[], named ?: FilterNamedArguments ) : OutputStream;
export function select ( input : Stream, positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ) : OutputStream {
    const filter = new SelectFilter( positional as any, named ).from( [ input ] );

    return filter.outputs[ 0 ];
}

export class ASelectFilter extends NativeFilter {
    name : string = 'aselect';

    parameters : string[] = [ 'expr', 'outputs' ];
}

export function aselect ( input : Stream, named ?: FilterNamedArguments ) : OutputStream;
export function aselect ( input : Stream, positional : FilterArgument[], named ?: FilterNamedArguments ) : OutputStream;
export function aselect ( input : Stream, positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ) : OutputStream {
    const filter = new ASelectFilter( positional as any, named ).from( [ input ] );

    return filter.outputs[ 0 ];
}

export function skip ( video : Stream, audio : Stream, start : number, end : number ) : [ OutputStream, OutputStream ] {
    return [ vskip( video, start, end ), askip( audio, start, end ) ];
}

export function vskip ( input : Stream, start : number, end : number ) : OutputStream {
    const video = select( input, { expr: `'not(between(t,${ start },${ end }))'` } );

    return vsetpts( video, 'PTS-STARTPTS' );
}

export function askip ( input : Stream, start : number, end : number ) : OutputStream {
    const audio = aselect( input, { expr: `'not(between(t,${ start },${ end }))'` } );

    return asetpts( audio, 'PTS-STARTPTS' );
}