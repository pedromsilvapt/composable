import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.23 allpass
  * Apply a two-pole all-pass filter with central frequency (in Hz)
  * frequency, and filter-width width. An all-pass filter changes the audio’s frequency to phase relationship without changing its frequency to amplitude relationship.
  * 
  * The filter accepts the following options:
  */
export class AudioLlpass extends Filter<AudioLlpassParameters> {
    outputs : FilterStreamRef<AudioLlpassParameters, AudioLlpass>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLlpassParameters = {} as any ) {
        super( inputs, 'allpass', parameters );
    }
}

export interface AudioLlpassParameters {
    /**
      * Set frequency in Hz.
      * @aliases f
      */
    frequency ?: string | number;
    /**
      * Set frequency in Hz.
      * @aliasof frequency
      */
    f ?: string | number;
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
  * 8.23 allpass
  * Apply a two-pole all-pass filter with central frequency (in Hz)
  * frequency, and filter-width width. An all-pass filter changes the audio’s frequency to phase relationship without changing its frequency to amplitude relationship.
  * 
  * The filter accepts the following options:
  */
export function audioLlpass ( inputs : Stream | Stream[] = [], parameters : AudioLlpassParameters = {} as any ) {
    return new AudioLlpass( inputs, parameters );
}