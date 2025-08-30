import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.11 aderivative
  * Compute derivative/integral of audio stream.
  * 
  * Applying both filters one after another produces original audio.
  */
export class AudioDerivative extends Filter<AudioDerivativeParameters> {
    outputs : FilterStreamRef<AudioDerivativeParameters, AudioDerivative>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDerivativeParameters = {} as any ) {
        super( inputs, 'aderivative', parameters );
    }
}

export interface AudioDerivativeParameters {


    [key : string] : string | number;
}

/**
  * 8.11 aderivative
  * Compute derivative/integral of audio stream.
  * 
  * Applying both filters one after another produces original audio.
  */
export function audioDerivative ( inputs : Stream | Stream[] = [], parameters : AudioDerivativeParameters = {} as any ) {
    return new AudioDerivative( inputs, parameters );
}