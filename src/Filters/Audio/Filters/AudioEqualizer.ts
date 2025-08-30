import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.64 equalizer
  * Apply a two-pole peaking equalisation (EQ) filter. With this filter, the signal-level at and around a selected frequency can be increased or decreased, whilst (unlike bandpass and bandreject filters) that at all other frequencies is unchanged.
  * 
  * In order to produce complex equalisation curves, this filter can be given several times, each with a different central frequency.
  * 
  * The filter accepts the following options:
  */
export class AudioEqualizer extends Filter<AudioEqualizerParameters> {
    outputs : FilterStreamRef<AudioEqualizerParameters, AudioEqualizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioEqualizerParameters = {} as any ) {
        super( inputs, 'equalizer', parameters );
    }
}

export interface AudioEqualizerParameters {
    /**
      * Set the filter’s central frequency in Hz.
      * @aliases f
      */
    frequency ?: string | number;
    /**
      * Set the filter’s central frequency in Hz.
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
      * Set the required gain or attenuation in dB. Beware of clipping when using a positive gain.
      * @aliases g
      */
    gain ?: string | number;
    /**
      * Set the required gain or attenuation in dB. Beware of clipping when using a positive gain.
      * @aliasof gain
      */
    g ?: string | number;
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
  * 8.64 equalizer
  * Apply a two-pole peaking equalisation (EQ) filter. With this filter, the signal-level at and around a selected frequency can be increased or decreased, whilst (unlike bandpass and bandreject filters) that at all other frequencies is unchanged.
  * 
  * In order to produce complex equalisation curves, this filter can be given several times, each with a different central frequency.
  * 
  * The filter accepts the following options:
  */
export function audioEqualizer ( inputs : Stream | Stream[] = [], parameters : AudioEqualizerParameters = {} as any ) {
    return new AudioEqualizer( inputs, parameters );
}