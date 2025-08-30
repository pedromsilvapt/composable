import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.114 loop
  * Loop video frames.
  * 
  * The filter accepts the following options:
  */
export class VideoLoop extends Filter<VideoLoopParameters> {
    outputs : FilterStreamRef<VideoLoopParameters, VideoLoop>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLoopParameters = {} as any ) {
        super( inputs, 'loop', parameters );
    }
}

export interface VideoLoopParameters {
    /** Set the number of loops. Setting this value to -1 will result in infinite loops. Default is 0. */
    loop ?: string | number;
    /** Set maximal size in number of frames. Default is 0. */
    size ?: string | number;
    /** Set first frame of loop. Default is 0. */
    start ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.114 loop
  * Loop video frames.
  * 
  * The filter accepts the following options:
  */
export function videoLoop ( inputs : Stream | Stream[] = [], parameters : VideoLoopParameters = {} as any ) {
    return new VideoLoop( inputs, parameters );
}