import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.43 deconvolve
  * Apply 2D deconvolution of video stream in frequency domain using second stream as impulse.
  * 
  * The filter accepts the following options:
  */
export class VideoDeconvolve extends Filter<VideoDeconvolveParameters> {
    outputs : FilterStreamRef<VideoDeconvolveParameters, VideoDeconvolve>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDeconvolveParameters = {} as any ) {
        super( inputs, 'deconvolve', parameters );
    }
}

export interface VideoDeconvolveParameters {
    /** Set which planes to process. */
    planes ?: string | number;
    /** Set which impulse video frames will be processed, can be first or all. Default is all. */
    impulse ?: string | number;
    /** Set noise when doing divisions. Default is 0.0000001. Useful when width and height are not same and not power of 2 or if stream prior to convolving had noise. */
    noise ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.43 deconvolve
  * Apply 2D deconvolution of video stream in frequency domain using second stream as impulse.
  * 
  * The filter accepts the following options:
  */
export function videoDeconvolve ( inputs : Stream | Stream[] = [], parameters : VideoDeconvolveParameters = {} as any ) {
    return new VideoDeconvolve( inputs, parameters );
}