import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.8 concat
  * Concatenate audio and video streams, joining them together one after the other.
  * 
  * The filter works on segments of synchronized video and audio streams. All segments must have the same number of streams of each type, and that will also be the number of streams at output.
  * 
  * The filter accepts the following options:
  */
export class Concat extends Filter<ConcatParameters> {
    outputs : FilterStreamRef<ConcatParameters, Concat>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ConcatParameters = {} as any ) {
        super( inputs, 'concat', parameters );
    }

    public getOutputCount() {
        const v = this.getParameter<number>('v', 1);
        const a = this.getParameter<number>('a', 0);
        return v + a;
    }
}

export interface ConcatParameters {
    /** Set the number of segments. Default is 2. */
    n ?: string | number;
    /** Set the number of output video streams, that is also the number of video streams in each segment. Default is 1. */
    v ?: string | number;
    /** Set the number of output audio streams, that is also the number of audio streams in each segment. Default is 0. */
    a ?: string | number;
    /** Activate unsafe mode: do not fail if segments have a different format. */
    unsafe ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.8 concat
  * Concatenate audio and video streams, joining them together one after the other.
  * 
  * The filter works on segments of synchronized video and audio streams. All segments must have the same number of streams of each type, and that will also be the number of streams at output.
  * 
  * The filter accepts the following options:
  */
export function concat ( inputs : Stream | Stream[] = [], parameters : ConcatParameters = {} as any ) {
    return new Concat( inputs, parameters );
}