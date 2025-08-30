import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.154 pp7
  * Apply Postprocessing filter 7. It is variant of the spp filter, similar to spp = 6 with 7 point DCT, where only the center sample is used after IDCT.
  * 
  * The filter accepts the following options:
  */
export class VideoPostProc7 extends Filter<VideoPostProc7Parameters> {
    outputs : FilterStreamRef<VideoPostProc7Parameters, VideoPostProc7>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPostProc7Parameters = {} as any ) {
        super( inputs, 'pp7', parameters );
    }
}

export interface VideoPostProc7Parameters {
    /** Force a constant quantization parameter. It accepts an integer in range 0 to 63. If not set, the filter will use the QP from the video stream (if available). */
    qp ?: string | number;
    /**
      * Set thresholding mode. Available modes are:
      * ‘hard’
      * Set hard thresholding.
      * ‘soft’
      * Set soft thresholding (better de-ringing effect, but likely blurrier).
      * ‘medium’
      * Set medium thresholding (good results, default).
      */
    mode ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.154 pp7
  * Apply Postprocessing filter 7. It is variant of the spp filter, similar to spp = 6 with 7 point DCT, where only the center sample is used after IDCT.
  * 
  * The filter accepts the following options:
  */
export function videoPostProc7 ( inputs : Stream | Stream[] = [], parameters : VideoPostProc7Parameters = {} as any ) {
    return new VideoPostProc7( inputs, parameters );
}