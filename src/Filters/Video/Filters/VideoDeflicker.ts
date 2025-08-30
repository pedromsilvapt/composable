import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.46 deflicker
  * Remove temporal frame luminance variations.
  * 
  * It accepts the following options:
  */
export class VideoDeflicker extends Filter<VideoDeflickerParameters> {
    outputs : FilterStreamRef<VideoDeflickerParameters, VideoDeflicker>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDeflickerParameters = {} as any ) {
        super( inputs, 'deflicker', parameters );
    }
}

export interface VideoDeflickerParameters {
    /**
      * Set moving-average filter size in frames. Default is 5. Allowed range is 2 - 129.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set moving-average filter size in frames. Default is 5. Allowed range is 2 - 129.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set averaging mode to smooth temporal luminance variations.
      * Available values are:
      * ‘am’
      * Arithmetic mean
      * ‘gm’
      * Geometric mean
      * ‘hm’
      * Harmonic mean
      * ‘qm’
      * Quadratic mean
      * ‘cm’
      * Cubic mean
      * ‘pm’
      * Power mean
      * ‘median’
      * Median
      * @aliases m
      */
    mode ?: string | number;
    /**
      * Set averaging mode to smooth temporal luminance variations.
      * Available values are:
      * ‘am’
      * Arithmetic mean
      * ‘gm’
      * Geometric mean
      * ‘hm’
      * Harmonic mean
      * ‘qm’
      * Quadratic mean
      * ‘cm’
      * Cubic mean
      * ‘pm’
      * Power mean
      * ‘median’
      * Median
      * @aliasof mode
      */
    m ?: string | number;
    /** Do not actually modify frame. Useful when one only wants metadata. */
    bypass ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.46 deflicker
  * Remove temporal frame luminance variations.
  * 
  * It accepts the following options:
  */
export function videoDeflicker ( inputs : Stream | Stream[] = [], parameters : VideoDeflickerParameters = {} as any ) {
    return new VideoDeflicker( inputs, parameters );
}