import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.36 cue
  * Delay video filtering until a given wallclock timestamp. The filter first passes on preroll amount of frames, then it buffers at most
  * buffer amount of frames and waits for the cue. After reaching the cue it forwards the buffered frames and also any subsequent frames coming in its input.
  * 
  * The filter can be used synchronize the output of multiple ffmpeg processes for realtime output devices like decklink. By putting the delay in the filtering chain and pre-buffering frames the process can pass on data to output almost immediately after the target wallclock timestamp is reached.
  * 
  * Perfect frame accuracy cannot be guaranteed, but the result is good enough for some use cases.
  */
export class VideoCue extends Filter<VideoCueParameters> {
    outputs : FilterStreamRef<VideoCueParameters, VideoCue>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCueParameters = {} as any ) {
        super( inputs, 'cue', parameters );
    }
}

export interface VideoCueParameters {
    /** The cue timestamp expressed in a UNIX timestamp in microseconds. Default is 0. */
    cue ?: string | number;
    /** The duration of content to pass on as preroll expressed in seconds. Default is 0. */
    preroll ?: string | number;
    /** The maximum duration of content to buffer before waiting for the cue expressed in seconds. Default is 0. */
    buffer ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.36 cue
  * Delay video filtering until a given wallclock timestamp. The filter first passes on preroll amount of frames, then it buffers at most
  * buffer amount of frames and waits for the cue. After reaching the cue it forwards the buffered frames and also any subsequent frames coming in its input.
  * 
  * The filter can be used synchronize the output of multiple ffmpeg processes for realtime output devices like decklink. By putting the delay in the filtering chain and pre-buffering frames the process can pass on data to output almost immediately after the target wallclock timestamp is reached.
  * 
  * Perfect frame accuracy cannot be guaranteed, but the result is good enough for some use cases.
  */
export function videoCue ( inputs : Stream | Stream[] = [], parameters : VideoCueParameters = {} as any ) {
    return new VideoCue( inputs, parameters );
}