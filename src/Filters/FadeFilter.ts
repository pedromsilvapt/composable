import { NativeFilter } from "./Base/Filter";
import { Stream, OutputStream } from "../Stream";

export class FadeFilter extends NativeFilter {
    name : string = 'fade';

    parameters : string[] = [ 'type', 'start_frame', 'nb_frames', 'alpha', 'start_time', 'duration', 'color' ];
}

export class AFadeFilter extends NativeFilter {
    name : string = 'afade';

    parameters : string[] = [ 'type', 'start_sample', 'nb_samples', 'start_time', 'duration', 'curve' ];
}

export function fade ( input : Stream, type : string, start : number, duration : number, alpha : number = 1 ) : OutputStream {
    const filter = new FadeFilter( {
        type, start_time: start, duration, alpha
    } ).from( [ input ] );

    return filter.outputs[ 0 ];
}