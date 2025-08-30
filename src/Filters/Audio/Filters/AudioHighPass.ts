import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.71 highpass
  * Apply a high-pass filter with 3dB point frequency. The filter can be either single-pole, or double-pole (the default). The filter roll off at 6dB per pole per octave (20dB per pole per decade).
  * 
  * The filter accepts the following options:
  */
export class AudioHighPass extends Filter<AudioHighPassParameters> {
    outputs : FilterStreamRef<AudioHighPassParameters, AudioHighPass>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioHighPassParameters = {} as any ) {
        super( inputs, 'highpass', parameters );
    }
}

export interface AudioHighPassParameters {
    /**
      * Set frequency in Hz. Default is 3000.
      * @aliases f
      */
    frequency ?: string | number;
    /**
      * Set frequency in Hz. Default is 3000.
      * @aliasof frequency
      */
    f ?: string | number;
    /**
      * Set number of poles. Default is 2.
      * @aliases p
      */
    poles ?: string | number;
    /**
      * Set number of poles. Default is 2.
      * @aliasof poles
      */
    p ?: string | number;
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
      * Specify the band-width of a filter in width_type units. Applies only to double-pole filter. The default is 0.707q and gives a Butterworth response.
      * @aliases w
      */
    width ?: string | number;
    /**
      * Specify the band-width of a filter in width_type units. Applies only to double-pole filter. The default is 0.707q and gives a Butterworth response.
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
  * 8.71 highpass
  * Apply a high-pass filter with 3dB point frequency. The filter can be either single-pole, or double-pole (the default). The filter roll off at 6dB per pole per octave (20dB per pole per decade).
  * 
  * The filter accepts the following options:
  */
export function audioHighPass ( inputs : Stream | Stream[] = [], parameters : AudioHighPassParameters = {} as any ) {
    return new AudioHighPass( inputs, parameters );
}