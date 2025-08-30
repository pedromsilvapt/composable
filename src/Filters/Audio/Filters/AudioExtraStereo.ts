import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.65 extrastereo
  * Linearly increases the difference between left and right channels which adds some sort of "live" effect to playback.
  * 
  * The filter accepts the following options:
  */
export class AudioExtraStereo extends Filter<AudioExtraStereoParameters> {
    outputs : FilterStreamRef<AudioExtraStereoParameters, AudioExtraStereo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioExtraStereoParameters = {} as any ) {
        super( inputs, 'extrastereo', parameters );
    }
}

export interface AudioExtraStereoParameters {
    /** Sets the difference coefficient (default: 2.5). 0.0 means mono sound (average of both channels), with 1.0 sound will be unchanged, with -1.0 left and right channels will be swapped. */
    m ?: string | number;
    /** Enable clipping. By default is enabled. */
    c ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.65 extrastereo
  * Linearly increases the difference between left and right channels which adds some sort of "live" effect to playback.
  * 
  * The filter accepts the following options:
  */
export function audioExtraStereo ( inputs : Stream | Stream[] = [], parameters : AudioExtraStereoParameters = {} as any ) {
    return new AudioExtraStereo( inputs, parameters );
}