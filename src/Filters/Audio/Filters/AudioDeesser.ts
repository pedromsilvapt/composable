import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.60 deesser
  * Apply de-essing to the audio samples.
  */
export class AudioDeesser extends Filter<AudioDeesserParameters> {
    outputs : FilterStreamRef<AudioDeesserParameters, AudioDeesser>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDeesserParameters = {} as any ) {
        super( inputs, 'deesser', parameters );
    }
}

export interface AudioDeesserParameters {
    /** Set intensity for triggering de-essing. Allowed range is from 0 to 1. Default is 0. */
    i ?: string | number;
    /** Set amount of ducking on treble part of sound. Allowed range is from 0 to 1. Default is 0.5. */
    m ?: string | number;
    /** How much of original frequency content to keep when de-essing. Allowed range is from 0 to 1. Default is 0.5. */
    f ?: string | number;
    /**
      * Set the output mode.
      * It accepts the following values:
      * i
      * Pass input unchanged.
      * o
      * Pass ess filtered out.
      * e
      * Pass only ess.
      * Default value is o.
      */
    s ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.60 deesser
  * Apply de-essing to the audio samples.
  */
export function audioDeesser ( inputs : Stream | Stream[] = [], parameters : AudioDeesserParameters = {} as any ) {
    return new AudioDeesser( inputs, parameters );
}