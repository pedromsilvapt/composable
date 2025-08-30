import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.129 midequalizer
  * Apply Midway Image Equalization effect using two video streams.
  * 
  * Midway Image Equalization adjusts a pair of images to have the same histogram, while maintaining their dynamics as much as possible. It’s useful for e.g. matching exposures from a pair of stereo cameras.
  * 
  * This filter has two inputs and one output, which must be of same pixel format, but may be of different sizes. The output of filter is first input adjusted with midway histogram of both inputs.
  * 
  * This filter accepts the following option:
  */
export class VideoMidEqualizer extends Filter<VideoMidEqualizerParameters> {
    outputs : FilterStreamRef<VideoMidEqualizerParameters, VideoMidEqualizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMidEqualizerParameters = {} as any ) {
        super( inputs, 'midequalizer', parameters );
    }
}

export interface VideoMidEqualizerParameters {
    /** Set which planes to process. Default is 15, which is all available planes. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.129 midequalizer
  * Apply Midway Image Equalization effect using two video streams.
  * 
  * Midway Image Equalization adjusts a pair of images to have the same histogram, while maintaining their dynamics as much as possible. It’s useful for e.g. matching exposures from a pair of stereo cameras.
  * 
  * This filter has two inputs and one output, which must be of same pixel format, but may be of different sizes. The output of filter is first input adjusted with midway histogram of both inputs.
  * 
  * This filter accepts the following option:
  */
export function videoMidEqualizer ( inputs : Stream | Stream[] = [], parameters : VideoMidEqualizerParameters = {} as any ) {
    return new VideoMidEqualizer( inputs, parameters );
}