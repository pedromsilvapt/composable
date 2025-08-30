import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.68 haas
  * Apply Haas effect to audio.
  * 
  * Note that this makes most sense to apply on mono signals. With this filter applied to mono signals it give some directionality and stretches its stereo image.
  * 
  * The filter accepts the following options:
  */
export class AudioHaas extends Filter<AudioHaasParameters> {
    outputs : FilterStreamRef<AudioHaasParameters, AudioHaas>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioHaasParameters = {} as any ) {
        super( inputs, 'haas', parameters );
    }
}

export interface AudioHaasParameters {
    /** Set input level. By default is 1, or 0dB */
    level_in ?: string | number;
    /** Set output level. By default is 1, or 0dB. */
    level_out ?: string | number;
    /** Set gain applied to side part of signal. By default is 1. */
    side_gain ?: string | number;
    /**
      * Set kind of middle source. Can be one of the following:
      * ‘left’
      * Pick left channel.
      * ‘right’
      * Pick right channel.
      * ‘mid’
      * Pick middle part signal of stereo image.
      * ‘side’
      * Pick side part signal of stereo image.
      */
    middle_source ?: string | number;
    /** Change middle phase. By default is disabled. */
    middle_phase ?: string | number;
    /** Set left channel delay. By default is 2.05 milliseconds. */
    left_delay ?: string | number;
    /** Set left channel balance. By default is -1. */
    left_balance ?: string | number;
    /** Set left channel gain. By default is 1. */
    left_gain ?: string | number;
    /** Change left phase. By default is disabled. */
    left_phase ?: string | number;
    /** Set right channel delay. By defaults is 2.12 milliseconds. */
    right_delay ?: string | number;
    /** Set right channel balance. By default is 1. */
    right_balance ?: string | number;
    /** Set right channel gain. By default is 1. */
    right_gain ?: string | number;
    /** Change right phase. By default is enabled. */
    right_phase ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.68 haas
  * Apply Haas effect to audio.
  * 
  * Note that this makes most sense to apply on mono signals. With this filter applied to mono signals it give some directionality and stretches its stereo image.
  * 
  * The filter accepts the following options:
  */
export function audioHaas ( inputs : Stream | Stream[] = [], parameters : AudioHaasParameters = {} as any ) {
    return new AudioHaas( inputs, parameters );
}