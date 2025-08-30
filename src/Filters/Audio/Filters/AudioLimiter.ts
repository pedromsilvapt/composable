import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.22 alimiter
  * The limiter prevents an input signal from rising over a desired threshold. This limiter uses lookahead technology to prevent your signal from distorting. It means that there is a small delay after the signal is processed. Keep in mind that the delay it produces is the attack time you set.
  * 
  * The filter accepts the following options:
  */
export class AudioLimiter extends Filter<AudioLimiterParameters> {
    outputs : FilterStreamRef<AudioLimiterParameters, AudioLimiter>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLimiterParameters = {} as any ) {
        super( inputs, 'alimiter', parameters );
    }
}

export interface AudioLimiterParameters {
    /** Set input gain. Default is 1. */
    level_in ?: string | number;
    /** Set output gain. Default is 1. */
    level_out ?: string | number;
    /** Don’t let signals above this level pass the limiter. Default is 1. */
    limit ?: string | number;
    /** The limiter will reach its attenuation level in this amount of time in milliseconds. Default is 5 milliseconds. */
    attack ?: string | number;
    /** Come back from limiting to attenuation 1.0 in this amount of milliseconds. Default is 50 milliseconds. */
    release ?: string | number;
    /** When gain reduction is always needed ASC takes care of releasing to an average reduction level rather than reaching a reduction of 0 in the release time. */
    asc ?: string | number;
    /** Select how much the release time is affected by ASC, 0 means nearly no changes in release time while 1 produces higher release times. */
    asc_level ?: string | number;
    /** Auto level output signal. Default is enabled. This normalizes audio back to 0dB if enabled. */
    level ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.22 alimiter
  * The limiter prevents an input signal from rising over a desired threshold. This limiter uses lookahead technology to prevent your signal from distorting. It means that there is a small delay after the signal is processed. Keep in mind that the delay it produces is the attack time you set.
  * 
  * The filter accepts the following options:
  */
export function audioLimiter ( inputs : Stream | Stream[] = [], parameters : AudioLimiterParameters = {} as any ) {
    return new AudioLimiter( inputs, parameters );
}