import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.7 sinc
  * Generate a sinc kaiser-windowed low-pass, high-pass, band-pass, or band-reject FIR coefficients.
  * 
  * The resulting stream can be used with afir filter for filtering the audio signal.
  * 
  * The filter accepts the following options:
  */
export class AudioSinc extends Filter<AudioSincParameters> {
    outputs : FilterStreamRef<AudioSincParameters, AudioSinc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSincParameters = {} as any ) {
        super( inputs, 'sinc', parameters );
    }
}

export interface AudioSincParameters {
    /**
      * Set sample rate, default is 44100.
      * @aliases r
      */
    sample_rate ?: string | number;
    /**
      * Set sample rate, default is 44100.
      * @aliasof sample_rate
      */
    r ?: string | number;
    /**
      * Set number of samples per each frame. Default is 1024.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set number of samples per each frame. Default is 1024.
      * @aliasof nb_samples
      */
    n ?: string | number;
    /** Set high-pass frequency. Default is 0. */
    hp ?: string | number;
    /** Set low-pass frequency. Default is 0. If high-pass frequency is lower than low-pass frequency and low-pass frequency is higher than 0 then filter will create band-pass filter coefficients, otherwise band-reject filter coefficients. */
    lp ?: string | number;
    /** Set filter phase response. Default is 50. Allowed range is from 0 to 100. */
    phase ?: string | number;
    /** Set Kaiser window beta. */
    beta ?: string | number;
    /** Set stop-band attenuation. Default is 120dB, allowed range is from 40 to 180 dB. */
    att ?: string | number;
    /** Enable rounding, by default is disabled. */
    round ?: string | number;
    /** Set number of taps for high-pass filter. */
    hptaps ?: string | number;
    /** Set number of taps for low-pass filter. */
    lptaps ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.7 sinc
  * Generate a sinc kaiser-windowed low-pass, high-pass, band-pass, or band-reject FIR coefficients.
  * 
  * The resulting stream can be used with afir filter for filtering the audio signal.
  * 
  * The filter accepts the following options:
  */
export function audioSinc ( inputs : Stream | Stream[] = [], parameters : AudioSincParameters = {} as any ) {
    return new AudioSinc( inputs, parameters );
}