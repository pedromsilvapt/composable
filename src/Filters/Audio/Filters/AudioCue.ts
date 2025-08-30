import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.7 acue
  * Delay audio filtering until a given wallclock timestamp. See the cue filter.
  */
export class AudioCue extends Filter<AudioCueParameters> {
    outputs : FilterStreamRef<AudioCueParameters, AudioCue>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCueParameters = {} as any ) {
        super( inputs, 'acue', parameters );
    }
}

export interface AudioCueParameters {


    [key : string] : string | number;
}

/**
  * 8.7 acue
  * Delay audio filtering until a given wallclock timestamp. See the cue filter.
  */
export function audioCue ( inputs : Stream | Stream[] = [], parameters : AudioCueParameters = {} as any ) {
    return new AudioCue( inputs, parameters );
}