import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.190 spp
  * Apply a simple postprocessing filter that compresses and decompresses the image at several (or - in the case of quality level 6 - all) shifts and average the results.
  * 
  * The filter accepts the following options:
  */
export class VideoSpp extends Filter<VideoSppParameters> {
    outputs : FilterStreamRef<VideoSppParameters, VideoSpp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSppParameters = {} as any ) {
        super( inputs, 'spp', parameters );
    }
}

export interface VideoSppParameters {
    /**
      * Set quality. This option defines the number of levels for averaging. It accepts an integer in the range 0-6. If set to 0, the filter will have no effect. A value of 6 means the higher quality. For each increment of that value the speed drops by a factor of approximately 2. Default value is
      * 3.
      */
    quality ?: string | number;
    /** Force a constant quantization parameter. If not set, the filter will use the QP from the video stream (if available). */
    qp ?: string | number;
    /**
      * Set thresholding mode. Available modes are:
      * ‘hard’
      * Set hard thresholding (default).
      * ‘soft’
      * Set soft thresholding (better de-ringing effect, but likely blurrier).
      */
    mode ?: string | number;
    /**
      * Enable the use of the QP from the B-Frames if set to 1. Using this option may cause flicker since the B-Frames have often larger QP. Default is
      * 0 (not enabled).
      */
    use_bframe_qp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.190 spp
  * Apply a simple postprocessing filter that compresses and decompresses the image at several (or - in the case of quality level 6 - all) shifts and average the results.
  * 
  * The filter accepts the following options:
  */
export function videoSpp ( inputs : Stream | Stream[] = [], parameters : VideoSppParameters = {} as any ) {
    return new VideoSpp( inputs, parameters );
}