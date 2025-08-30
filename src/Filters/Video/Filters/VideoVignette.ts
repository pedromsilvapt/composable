import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.222 vignette
  * Make or reverse a natural vignetting effect.
  * 
  * The filter accepts the following options:
  */
export class VideoVignette extends Filter<VideoVignetteParameters> {
    outputs : FilterStreamRef<VideoVignetteParameters, VideoVignette>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoVignetteParameters = {} as any ) {
        super( inputs, 'vignette', parameters );
    }
}

export interface VideoVignetteParameters {
    /**
      * Set lens angle expression as a number of radians.
      * The value is clipped in the [0,PI/2] range.
      * Default value: "PI/5"
      * @aliases a
      */
    angle ?: string | number;
    /**
      * Set lens angle expression as a number of radians.
      * The value is clipped in the [0,PI/2] range.
      * Default value: "PI/5"
      * @aliasof angle
      */
    a ?: string | number;
    /** Set center coordinates expressions. Respectively "w/2" and "h/2" by default. */
    x0 ?: string | number;
    /**
      * Set forward/backward mode.
      * Available modes are:
      * ‘forward’
      * The larger the distance from the central point, the darker the image becomes.
      * ‘backward’
      * The larger the distance from the central point, the brighter the image becomes. This can be used to reverse a vignette effect, though there is no automatic detection to extract the lens angle and other settings (yet). It can also be used to create a burning effect.
      * Default value is ‘forward’.
      */
    y0 ?: string | number;
    /**
      * Set evaluation mode for the expressions (angle, x0, y0).
      * It accepts the following values:
      * ‘init’
      * Evaluate expressions only once during the filter initialization.
      * ‘frame’
      * Evaluate expressions for each incoming frame. This is way slower than the ‘
      * init’ mode since it requires all the scalers to be re-computed, but it allows advanced dynamic expressions.
      * Default value is ‘init’.
      */
    mode ?: string | number;
    /** Set dithering to reduce the circular banding effects. Default is 1 (enabled). */
    'eval' ?: string | number;
    /**
      * Set vignette aspect. This setting allows one to adjust the shape of the vignette. Setting this value to the SAR of the input will make a rectangular vignetting following the dimensions of the video.
      * Default is 1/1.
      */
    dither ?: string | number;
    aspect ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.222 vignette
  * Make or reverse a natural vignetting effect.
  * 
  * The filter accepts the following options:
  */
export function videoVignette ( inputs : Stream | Stream[] = [], parameters : VideoVignetteParameters = {} as any ) {
    return new VideoVignette( inputs, parameters );
}