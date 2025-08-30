import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.63 eq
  * Set brightness, contrast, saturation and approximate gamma adjustment.
  * 
  * The filter accepts the following options:
  */
export class VideoEq extends Filter<VideoEqParameters> {
    outputs : FilterStreamRef<VideoEqParameters, VideoEq>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoEqParameters = {} as any ) {
        super( inputs, 'eq', parameters );
    }
}

export interface VideoEqParameters {
    /**
      * Set the contrast expression. The value must be a float value in range
      * -1000.0 to 1000.0. The default value is "1".
      */
    contrast ?: string | number;
    /** Set the brightness expression. The value must be a float value in range -1.0 to 1.0. The default value is "0". */
    brightness ?: string | number;
    /** Set the saturation expression. The value must be a float in range 0.0 to 3.0. The default value is "1". */
    saturation ?: string | number;
    /**
      * Set the gamma expression. The value must be a float in range
      * 0.1 to 10.0. The default value is "1".
      */
    gamma ?: string | number;
    /** Set the gamma expression for red. The value must be a float in range 0.1 to 10.0. The default value is "1". */
    gamma_r ?: string | number;
    /**
      * Set the gamma expression for green. The value must be a float in range
      * 0.1 to 10.0. The default value is "1".
      */
    gamma_g ?: string | number;
    /**
      * Set the gamma expression for blue. The value must be a float in range
      * 0.1 to 10.0. The default value is "1".
      */
    gamma_b ?: string | number;
    /** Set the gamma weight expression. It can be used to reduce the effect of a high gamma value on bright image areas, e.g. keep them from getting overamplified and just plain white. The value must be a float in range 0.0 to 1.0. A value of 0.0 turns the gamma correction all the way down while 1.0 leaves it at its full strength. Default is "1". */
    gamma_weight ?: string | number;
    /**
      * Set when the expressions for brightness, contrast, saturation and gamma expressions are evaluated.
      * It accepts the following values:
      * ‘init’
      * only evaluate expressions once during the filter initialization or when a command is processed
      * ‘frame’
      * evaluate expressions for each incoming frame
      * Default value is ‘init’.
      */
    'eval' ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.63 eq
  * Set brightness, contrast, saturation and approximate gamma adjustment.
  * 
  * The filter accepts the following options:
  */
export function videoEq ( inputs : Stream | Stream[] = [], parameters : VideoEqParameters = {} as any ) {
    return new VideoEq( inputs, parameters );
}