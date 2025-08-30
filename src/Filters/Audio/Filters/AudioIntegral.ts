import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.11 aintegral
  * Compute derivative/integral of audio stream.
  * 
  * Applying both filters one after another produces original audio.
  */
export class AudioIntegral extends Filter<AudioIntegralParameters> {
    outputs : FilterStreamRef<AudioIntegralParameters, AudioIntegral>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioIntegralParameters = {} as any ) {
        super( inputs, 'aintegral', parameters );
    }
}

export interface AudioIntegralParameters {


    [key : string] : string | number;
}

/**
  * 8.11 aintegral
  * Compute derivative/integral of audio stream.
  * 
  * Applying both filters one after another produces original audio.
  */
export function audioIntegral ( inputs : Stream | Stream[] = [], parameters : AudioIntegralParameters = {} as any ) {
    return new AudioIntegral( inputs, parameters );
}