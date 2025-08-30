import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.125 mcdeint
  * Apply motion-compensation deinterlacing.
  * 
  * It needs one field per frame as input and must thus be used together with yadif=1/3 or equivalent.
  * 
  * This filter accepts the following options:
  */
export class VideoMotionCompDeint extends Filter<VideoMotionCompDeintParameters> {
    outputs : FilterStreamRef<VideoMotionCompDeintParameters, VideoMotionCompDeint>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMotionCompDeintParameters = {} as any ) {
        super( inputs, 'mcdeint', parameters );
    }
}

export interface VideoMotionCompDeintParameters {
    /**
      * Set the deinterlacing mode.
      * It accepts one of the following values:
      * ‘fast’
      * ‘medium’
      * ‘slow’
      * use iterative motion estimation
      * ‘extra_slow’
      * like ‘slow’, but use multiple reference frames.
      * Default value is ‘fast’.
      */
    mode ?: string | number;
    /**
      * Set the picture field parity assumed for the input video. It must be one of the following values:
      * ‘0, tff’
      * assume top field first
      * ‘1, bff’
      * assume bottom field first
      * Default value is ‘bff’.
      */
    parity ?: string | number;
    /**
      * Set per-block quantization parameter (QP) used by the internal encoder.
      * Higher values should result in a smoother motion vector field but less optimal individual vectors. Default value is 1.
      */
    qp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.125 mcdeint
  * Apply motion-compensation deinterlacing.
  * 
  * It needs one field per frame as input and must thus be used together with yadif=1/3 or equivalent.
  * 
  * This filter accepts the following options:
  */
export function videoMotionCompDeint ( inputs : Stream | Stream[] = [], parameters : VideoMotionCompDeintParameters = {} as any ) {
    return new VideoMotionCompDeint( inputs, parameters );
}