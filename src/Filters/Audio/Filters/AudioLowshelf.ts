import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.49 lowshelf
  * Boost or cut the bass (lower) frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi’s tone-controls. This is also known as shelving equalisation (EQ).
  * 
  * The filter accepts the following options:
  */
export class AudioLowshelf extends Filter<AudioLowshelfParameters> {
    outputs : FilterStreamRef<AudioLowshelfParameters, AudioLowshelf>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLowshelfParameters = {} as any ) {
        super( inputs, 'lowshelf', parameters );
    }
}

export interface AudioLowshelfParameters {
    /**
      * Give the gain at 0 Hz. Its useful range is about -20 (for a large cut) to +20 (for a large boost). Beware of clipping when using a positive gain.
      * @aliases g
      */
    gain ?: string | number;
    /**
      * Give the gain at 0 Hz. Its useful range is about -20 (for a large cut) to +20 (for a large boost). Beware of clipping when using a positive gain.
      * @aliasof gain
      */
    g ?: string | number;
    /**
      * Set the filter’s central frequency and so can be used to extend or reduce the frequency range to be boosted or cut. The default value is 100 Hz.
      * @aliases f
      */
    frequency ?: string | number;
    /**
      * Set the filter’s central frequency and so can be used to extend or reduce the frequency range to be boosted or cut. The default value is 100 Hz.
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
      * Determine how steep is the filter’s shelf transition.
      * @aliases w
      */
    width ?: string | number;
    /**
      * Determine how steep is the filter’s shelf transition.
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
  * 8.49 lowshelf
  * Boost or cut the bass (lower) frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi’s tone-controls. This is also known as shelving equalisation (EQ).
  * 
  * The filter accepts the following options:
  */
export function audioLowshelf ( inputs : Stream | Stream[] = [], parameters : AudioLowshelfParameters = {} as any ) {
    return new AudioLowshelf( inputs, parameters );
}