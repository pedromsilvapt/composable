import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.89 superequalizer
  * Apply 18 band equalizer.
  * 
  * The filter accepts the following options:
  */
export class AudioSuperEqualizer extends Filter<AudioSuperEqualizerParameters> {
    outputs : FilterStreamRef<AudioSuperEqualizerParameters, AudioSuperEqualizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSuperEqualizerParameters = {} as any ) {
        super( inputs, 'superequalizer', parameters );
    }
}

export interface AudioSuperEqualizerParameters {
    /** Set 65Hz band gain. */
    '1b' ?: string | number;
    /** Set 92Hz band gain. */
    '2b' ?: string | number;
    /** Set 131Hz band gain. */
    '3b' ?: string | number;
    /** Set 185Hz band gain. */
    '4b' ?: string | number;
    /** Set 262Hz band gain. */
    '5b' ?: string | number;
    /** Set 370Hz band gain. */
    '6b' ?: string | number;
    /** Set 523Hz band gain. */
    '7b' ?: string | number;
    /** Set 740Hz band gain. */
    '8b' ?: string | number;
    /** Set 1047Hz band gain. */
    '9b' ?: string | number;
    /** Set 1480Hz band gain. */
    '10b' ?: string | number;
    /** Set 2093Hz band gain. */
    '11b' ?: string | number;
    /** Set 2960Hz band gain. */
    '12b' ?: string | number;
    /** Set 4186Hz band gain. */
    '13b' ?: string | number;
    /** Set 5920Hz band gain. */
    '14b' ?: string | number;
    /** Set 8372Hz band gain. */
    '15b' ?: string | number;
    /** Set 11840Hz band gain. */
    '16b' ?: string | number;
    /** Set 16744Hz band gain. */
    '17b' ?: string | number;
    /** Set 20000Hz band gain. */
    '18b' ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.89 superequalizer
  * Apply 18 band equalizer.
  * 
  * The filter accepts the following options:
  */
export function audioSuperEqualizer ( inputs : Stream | Stream[] = [], parameters : AudioSuperEqualizerParameters = {} as any ) {
    return new AudioSuperEqualizer( inputs, parameters );
}