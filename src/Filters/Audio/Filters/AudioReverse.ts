import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.36 areverse
  * Reverse an audio clip.
  * 
  * Warning: This filter requires memory to buffer the entire clip, so trimming is suggested.
  */
export class AudioReverse extends Filter<AudioReverseParameters> {
    outputs : FilterStreamRef<AudioReverseParameters, AudioReverse>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioReverseParameters = {} as any ) {
        super( inputs, 'areverse', parameters );
    }
}

export interface AudioReverseParameters {


    [key : string] : string | number;
}

/**
  * 8.36 areverse
  * Reverse an audio clip.
  * 
  * Warning: This filter requires memory to buffer the entire clip, so trimming is suggested.
  */
export function audioReverse ( inputs : Stream | Stream[] = [], parameters : AudioReverseParameters = {} as any ) {
    return new AudioReverse( inputs, parameters );
}