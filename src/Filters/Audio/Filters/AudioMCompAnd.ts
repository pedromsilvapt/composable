import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.77 mcompand
  * Multiband Compress or expand the audio’s dynamic range.
  * 
  * The input audio is divided into bands using 4th order Linkwitz-Riley IIRs. This is akin to the crossover of a loudspeaker, and results in flat frequency response when absent compander action.
  * 
  * It accepts the following parameters:
  */
export class AudioMCompAnd extends Filter<AudioMCompAndParameters> {
    outputs : FilterStreamRef<AudioMCompAndParameters, AudioMCompAnd>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioMCompAndParameters = {} as any ) {
        super( inputs, 'mcompand', parameters );
    }
}

export interface AudioMCompAndParameters {
    /** This option syntax is: attack,decay,[attack,decay..] soft-knee points crossover_frequency [delay [initial_volume [gain]]] | attack,decay ... For explanation of each item refer to compand filter documentation. */
    args ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.77 mcompand
  * Multiband Compress or expand the audio’s dynamic range.
  * 
  * The input audio is divided into bands using 4th order Linkwitz-Riley IIRs. This is akin to the crossover of a loudspeaker, and results in flat frequency response when absent compander action.
  * 
  * It accepts the following parameters:
  */
export function audioMCompAnd ( inputs : Stream | Stream[] = [], parameters : AudioMCompAndParameters = {} as any ) {
    return new AudioMCompAnd( inputs, parameters );
}