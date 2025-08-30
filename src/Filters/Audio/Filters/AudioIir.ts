import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.21 aiir
  * Apply an arbitrary Infinite Impulse Response filter.
  * 
  * It accepts the following parameters:
  */
export class AudioIir extends Filter<AudioIirParameters> {
    outputs : FilterStreamRef<AudioIirParameters, AudioIir>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioIirParameters = {} as any ) {
        super( inputs, 'aiir', parameters );
    }
}

export interface AudioIirParameters {
    /** Set numerator/zeros coefficients. */
    z ?: string | number;
    /** Set denominator/poles coefficients. */
    p ?: string | number;
    /** Set channels gains. */
    k ?: string | number;
    /** Set input gain. */
    dry_gain ?: string | number;
    /** Set output gain. */
    wet_gain ?: string | number;
    /**
      * Set coefficients format.
      * ‘tf’
      * transfer function
      * ‘zp’
      * Z-plane zeros/poles, cartesian (default)
      * ‘pr’
      * Z-plane zeros/poles, polar radians
      * ‘pd’
      * Z-plane zeros/poles, polar degrees
      */
    f ?: string | number;
    /** Set kind of processing. Can be d - direct or s - serial cascading. Default is s. */
    r ?: string | number;
    /**
      * Set filtering precision.
      * ‘dbl’
      * double-precision floating-point (default)
      * ‘flt’
      * single-precision floating-point
      * ‘i32’
      * 32-bit integers
      * ‘i16’
      * 16-bit integers
      */
    e ?: string | number;
    /** How much to use filtered signal in output. Default is 1. Range is between 0 and 1. */
    mix ?: string | number;
    /** Show IR frequency response, magnitude(magenta), phase(green) and group delay(yellow) in additional video stream. By default it is disabled. */
    response ?: string | number;
    /** Set for which IR channel to display frequency response. By default is first channel displayed. This option is used only when response is enabled. */
    channel ?: string | number;
    /** Set video stream size. This option is used only when response is enabled. */
    size ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.21 aiir
  * Apply an arbitrary Infinite Impulse Response filter.
  * 
  * It accepts the following parameters:
  */
export function audioIir ( inputs : Stream | Stream[] = [], parameters : AudioIirParameters = {} as any ) {
    return new AudioIir( inputs, parameters );
}