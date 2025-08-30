import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.10 interleave
  * Temporally interleave frames from several inputs.
  * 
  * interleave works with video inputs, ainterleave with audio.
  * 
  * These filters read frames from several inputs and send the oldest queued frame to the output.
  * 
  * Input streams must have well defined, monotonically increasing frame timestamp values.
  * 
  * In order to submit one frame to output, these filters need to enqueue at least one frame for each input, so they cannot work in case one input is not yet terminated and will not receive incoming frames.
  * 
  * For example consider the case when one input is a select filter which always drops input frames. The interleave filter will keep reading from that input, but it will never be able to send new frames to output until the input sends an end-of-stream signal.
  * 
  * Also, depending on inputs synchronization, the filters will drop frames in case one input receives more frames than the other ones, and the queue is already filled.
  * 
  * These filters accept the following options:
  */
export class Interleave extends Filter<InterleaveParameters> {
    outputs : FilterStreamRef<InterleaveParameters, Interleave>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : InterleaveParameters = {} as any ) {
        super( inputs, 'interleave', parameters );
    }
}

export interface InterleaveParameters {
    /**
      * Set the number of different inputs, it is 2 by default.
      * @aliases n
      */
    nb_inputs ?: string | number;
    /**
      * Set the number of different inputs, it is 2 by default.
      * @aliasof nb_inputs
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.10 interleave
  * Temporally interleave frames from several inputs.
  * 
  * interleave works with video inputs, ainterleave with audio.
  * 
  * These filters read frames from several inputs and send the oldest queued frame to the output.
  * 
  * Input streams must have well defined, monotonically increasing frame timestamp values.
  * 
  * In order to submit one frame to output, these filters need to enqueue at least one frame for each input, so they cannot work in case one input is not yet terminated and will not receive incoming frames.
  * 
  * For example consider the case when one input is a select filter which always drops input frames. The interleave filter will keep reading from that input, but it will never be able to send new frames to output until the input sends an end-of-stream signal.
  * 
  * Also, depending on inputs synchronization, the filters will drop frames in case one input receives more frames than the other ones, and the queue is already filled.
  * 
  * These filters accept the following options:
  */
export function interleave ( inputs : Stream | Stream[] = [], parameters : InterleaveParameters = {} as any ) {
    return new Interleave( inputs, parameters );
}