import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.213 uspp
  * Apply ultra slow/simple postprocessing filter that compresses and decompresses the image at several (or - in the case of quality level 8 - all) shifts and average the results.
  * 
  * The way this differs from the behavior of spp is that uspp actually encodes & decodes each case with libavcodec Snow, whereas spp uses a simplified intra only 8x8 DCT similar to MJPEG.
  * 
  * The filter accepts the following options:
  */
export class VideoUspp extends Filter<VideoUsppParameters> {
    outputs : FilterStreamRef<VideoUsppParameters, VideoUspp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoUsppParameters = {} as any ) {
        super( inputs, 'uspp', parameters );
    }
}

export interface VideoUsppParameters {
    /**
      * Set quality. This option defines the number of levels for averaging. It accepts an integer in the range 0-8. If set to 0, the filter will have no effect. A value of 8 means the higher quality. For each increment of that value the speed drops by a factor of approximately 2. Default value is
      * 3.
      */
    quality ?: string | number;
    /** Force a constant quantization parameter. If not set, the filter will use the QP from the video stream (if available). */
    qp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.213 uspp
  * Apply ultra slow/simple postprocessing filter that compresses and decompresses the image at several (or - in the case of quality level 8 - all) shifts and average the results.
  * 
  * The way this differs from the behavior of spp is that uspp actually encodes & decodes each case with libavcodec Snow, whereas spp uses a simplified intra only 8x8 DCT similar to MJPEG.
  * 
  * The filter accepts the following options:
  */
export function videoUspp ( inputs : Stream | Stream[] = [], parameters : VideoUsppParameters = {} as any ) {
    return new VideoUspp( inputs, parameters );
}