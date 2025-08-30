import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.59 dcshift
  * Apply a DC shift to the audio.
  * 
  * This can be useful to remove a DC offset (caused perhaps by a hardware problem in the recording chain) from the audio. The effect of a DC offset is reduced headroom and hence volume. The astats filter can be used to determine if a signal has a DC offset.
  */
export class AudioDcShift extends Filter<AudioDcShiftParameters> {
    outputs : FilterStreamRef<AudioDcShiftParameters, AudioDcShift>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDcShiftParameters = {} as any ) {
        super( inputs, 'dcshift', parameters );
    }
}

export interface AudioDcShiftParameters {
    /** Set the DC shift, allowed range is [-1, 1]. It indicates the amount to shift the audio. */
    shift ?: string | number;
    /** Optional. It should have a value much less than 1 (e.g. 0.05 or 0.02) and is used to prevent clipping. */
    limitergain ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.59 dcshift
  * Apply a DC shift to the audio.
  * 
  * This can be useful to remove a DC offset (caused perhaps by a hardware problem in the recording chain) from the audio. The effect of a DC offset is reduced headroom and hence volume. The astats filter can be used to determine if a signal has a DC offset.
  */
export function audioDcShift ( inputs : Stream | Stream[] = [], parameters : AudioDcShiftParameters = {} as any ) {
    return new AudioDcShift( inputs, parameters );
}