import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.48 bandreject
  * Apply a two-pole Butterworth band-reject filter with central frequency frequency, and (3dB-point) band-width width. The filter roll off at 6dB per octave (20dB per decade).
  * 
  * The filter accepts the following options:
  */
export class AudioBandReject extends Filter<AudioBandRejectParameters> {
    outputs : FilterStreamRef<AudioBandRejectParameters, AudioBandReject>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioBandRejectParameters = {} as any ) {
        super( inputs, 'bandreject', parameters );
    }
}

export interface AudioBandRejectParameters {
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
  * 8.48 bandreject
  * Apply a two-pole Butterworth band-reject filter with central frequency frequency, and (3dB-point) band-width width. The filter roll off at 6dB per octave (20dB per decade).
  * 
  * The filter accepts the following options:
  */
export function audioBandReject ( inputs : Stream | Stream[] = [], parameters : AudioBandRejectParameters = {} as any ) {
    return new AudioBandReject( inputs, parameters );
}