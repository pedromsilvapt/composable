import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.108 kerndeint
  * Deinterlace input video by applying Donald Graft’s adaptive kernel deinterling. Work on interlaced parts of a video to produce progressive frames.
  * 
  * The description of the accepted parameters follows.
  */
export class VideoKernelDeinterling extends Filter<VideoKernelDeinterlingParameters> {
    outputs : FilterStreamRef<VideoKernelDeinterlingParameters, VideoKernelDeinterling>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoKernelDeinterlingParameters = {} as any ) {
        super( inputs, 'kerndeint', parameters );
    }
}

export interface VideoKernelDeinterlingParameters {
    /** Set the threshold which affects the filter’s tolerance when determining if a pixel line must be processed. It must be an integer in the range [0,255] and defaults to 10. A value of 0 will result in applying the process on every pixels. */
    thresh ?: string | number;
    /** Paint pixels exceeding the threshold value to white if set to 1. Default is 0. */
    map ?: string | number;
    /** Set the fields order. Swap fields if set to 1, leave fields alone if 0. Default is 0. */
    order ?: string | number;
    /** Enable additional sharpening if set to 1. Default is 0. */
    sharp ?: string | number;
    /** Enable twoway sharpening if set to 1. Default is 0. */
    twoway ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.108 kerndeint
  * Deinterlace input video by applying Donald Graft’s adaptive kernel deinterling. Work on interlaced parts of a video to produce progressive frames.
  * 
  * The description of the accepted parameters follows.
  */
export function videoKernelDeinterling ( inputs : Stream | Stream[] = [], parameters : VideoKernelDeinterlingParameters = {} as any ) {
    return new VideoKernelDeinterling( inputs, parameters );
}