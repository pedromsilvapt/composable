import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.47 bandpass
  * Apply a two-pole Butterworth band-pass filter with central frequency frequency, and (3dB-point) band-width width. The csg option selects a constant skirt gain (peak gain = Q) instead of the default: constant 0dB peak gain. The filter roll off at 6dB per octave (20dB per decade).
  * 
  * The filter accepts the following options:
  */
export class AudioBandPass extends Filter<AudioBandPassParameters> {
    outputs : FilterStreamRef<AudioBandPassParameters, AudioBandPass>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioBandPassParameters = {} as any ) {
        super( inputs, 'bandpass', parameters );
    }
}

export interface AudioBandPassParameters {
    /**
      * Set the filter’s central frequency. Default is 3000.
      * @aliases f
      */
    frequency ?: string | number;
    /**
      * Set the filter’s central frequency. Default is 3000.
      * @aliasof frequency
      */
    f ?: string | number;
    /** Constant skirt gain if set to 1. Defaults to 0. */
    csg ?: string | number;
    /**
      * Set method to specify band-width of filter.
      * h
      * Hz
      * q
      * Q-Factor
      * o
      * octave
      * s
      * slope
      * k
      * kHz
      * @aliases t
      */
    width_type ?: string | number;
    /**
      * Set method to specify band-width of filter.
      * h
      * Hz
      * q
      * Q-Factor
      * o
      * octave
      * s
      * slope
      * k
      * kHz
      * @aliasof width_type
      */
    t ?: string | number;
    /**
      * Specify the band-width of a filter in width_type units.
      * @aliases w
      */
    width ?: string | number;
    /**
      * Specify the band-width of a filter in width_type units.
      * @aliasof width
      */
    w ?: string | number;
    /**
      * How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
      * @aliases m
      */
    mix ?: string | number;
    /**
      * How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
      * @aliasof mix
      */
    m ?: string | number;
    /**
      * Specify which channels to filter, by default all available are filtered.
      * @aliases c
      */
    channels ?: string | number;
    /**
      * Specify which channels to filter, by default all available are filtered.
      * @aliasof channels
      */
    c ?: string | number;
    /**
      * Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
      * @aliases n
      */
    normalize ?: string | number;
    /**
      * Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
      * @aliasof normalize
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.47 bandpass
  * Apply a two-pole Butterworth band-pass filter with central frequency frequency, and (3dB-point) band-width width. The csg option selects a constant skirt gain (peak gain = Q) instead of the default: constant 0dB peak gain. The filter roll off at 6dB per octave (20dB per decade).
  * 
  * The filter accepts the following options:
  */
export function audioBandPass ( inputs : Stream | Stream[] = [], parameters : AudioBandPassParameters = {} as any ) {
    return new AudioBandPass( inputs, parameters );
}