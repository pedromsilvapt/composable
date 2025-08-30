import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.92 tremolo
  * Sinusoidal amplitude modulation.
  * 
  * The filter accepts the following options:
  */
export class AudioTremolo extends Filter<AudioTremoloParameters> {
    outputs : FilterStreamRef<AudioTremoloParameters, AudioTremolo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioTremoloParameters = {} as any ) {
        super( inputs, 'tremolo', parameters );
    }
}

export interface AudioTremoloParameters {
    /** Modulation frequency in Hertz. Modulation frequencies in the subharmonic range (20 Hz or lower) will result in a tremolo effect. This filter may also be used as a ring modulator by specifying a modulation frequency higher than 20 Hz. Range is 0.1 - 20000.0. Default value is 5.0 Hz. */
    f ?: string | number;
    /** Depth of modulation as a percentage. Range is 0.0 - 1.0. Default value is 0.5. */
    d ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.92 tremolo
  * Sinusoidal amplitude modulation.
  * 
  * The filter accepts the following options:
  */
export function audioTremolo ( inputs : Stream | Stream[] = [], parameters : AudioTremoloParameters = {} as any ) {
    return new AudioTremolo( inputs, parameters );
}