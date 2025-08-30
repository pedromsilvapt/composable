import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.58 crystalizer
  * Simple algorithm to expand audio dynamic range.
  * 
  * The filter accepts the following options:
  */
export class AudioCrystalizer extends Filter<AudioCrystalizerParameters> {
    outputs : FilterStreamRef<AudioCrystalizerParameters, AudioCrystalizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCrystalizerParameters = {} as any ) {
        super( inputs, 'crystalizer', parameters );
    }
}

export interface AudioCrystalizerParameters {
    /** Sets the intensity of effect (default: 2.0). Must be in range between 0.0 (unchanged sound) to 10.0 (maximum effect). */
    i ?: string | number;
    /** Enable clipping. By default is enabled. */
    c ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.58 crystalizer
  * Simple algorithm to expand audio dynamic range.
  * 
  * The filter accepts the following options:
  */
export function audioCrystalizer ( inputs : Stream | Stream[] = [], parameters : AudioCrystalizerParameters = {} as any ) {
    return new AudioCrystalizer( inputs, parameters );
}