import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.161 random
  * Flush video frames from internal cache of frames into a random order. No frame is discarded. Inspired by frei0r nervous filter.
  */
export class VideoRandom extends Filter<VideoRandomParameters> {
    outputs : FilterStreamRef<VideoRandomParameters, VideoRandom>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRandomParameters = {} as any ) {
        super( inputs, 'random', parameters );
    }
}

export interface VideoRandomParameters {
    /**
      * Set size in number of frames of internal cache, in range from 2 to
      * 512. Default is 30.
      */
    frames ?: string | number;
    /**
      * Set seed for random number generator, must be an integer included between
      * 0 and UINT32_MAX. If not specified, or if explicitly set to less than 0, the filter will try to use a good random seed on a best effort basis.
      */
    seed ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.161 random
  * Flush video frames from internal cache of frames into a random order. No frame is discarded. Inspired by frei0r nervous filter.
  */
export function videoRandom ( inputs : Stream | Stream[] = [], parameters : VideoRandomParameters = {} as any ) {
    return new VideoRandom( inputs, parameters );
}