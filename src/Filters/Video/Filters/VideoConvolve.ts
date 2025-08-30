import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.30 convolve
  * Apply 2D convolution of video stream in frequency domain using second stream as impulse.
  * 
  * The filter accepts the following options:
  */
export class VideoConvolve extends Filter<VideoConvolveParameters> {
    outputs : FilterStreamRef<VideoConvolveParameters, VideoConvolve>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoConvolveParameters = {} as any ) {
        super( inputs, 'convolve', parameters );
    }
}

export interface VideoConvolveParameters {
    /** Set which planes to process. */
    planes ?: string | number;
    /** Set which impulse video frames will be processed, can be first or all. Default is all. */
    impulse ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.30 convolve
  * Apply 2D convolution of video stream in frequency domain using second stream as impulse.
  * 
  * The filter accepts the following options:
  */
export function videoConvolve ( inputs : Stream | Stream[] = [], parameters : VideoConvolveParameters = {} as any ) {
    return new VideoConvolve( inputs, parameters );
}