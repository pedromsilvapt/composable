import { OutputStream } from "../../Stream";
import { ICompiler, Emission } from "../../main";
import { NativeFilter } from "../Base/Filter";

export class SilenceSourceStream extends OutputStream {
    constructor () {
        super( null );
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.getInputStreamName( this );

        const content = `-f lavfi -i anullsrc`;

        return [ { type: 'source', content } ];
    }

    compile ( compiler : ICompiler ) : string {
        return '' + compiler.getInputStreamName( this ) + ':a';
    }
}

export class AudioEvalSourceFilter extends NativeFilter {
    name : string = 'aevalsrc';

    parameters : string[] = [ 'exprs', 'channel_layout', 'duration', 'duration', 'nb_samples', 'sample_rate' ];
}

export function silence ( duration : number = null ) : OutputStream {
    return new AudioEvalSourceFilter( [ 0 ], {
        duration: duration
    } ).outputs[ 0 ];
}