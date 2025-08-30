import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.93 vibrato
  * Sinusoidal phase modulation.
  * 
  * The filter accepts the following options:
  */
export class AudioVibrato extends Filter<AudioVibratoParameters> {
    outputs : FilterStreamRef<AudioVibratoParameters, AudioVibrato>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioVibratoParameters = {} as any ) {
        super( inputs, 'vibrato', parameters );
    }
}

export interface AudioVibratoParameters {
    /** Modulation frequency in Hertz. Range is 0.1 - 20000.0. Default value is 5.0 Hz. */
    f ?: string | number;
    /** Depth of modulation as a percentage. Range is 0.0 - 1.0. Default value is 0.5. */
    d ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.93 vibrato
  * Sinusoidal phase modulation.
  * 
  * The filter accepts the following options:
  */
export function audioVibrato ( inputs : Stream | Stream[] = [], parameters : AudioVibratoParameters = {} as any ) {
    return new AudioVibrato( inputs, parameters );
}