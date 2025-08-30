import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.31 anull
  * Pass the audio source unchanged to the output.
  */
export class AudioNull extends Filter<AudioNullParameters> {
    outputs : FilterStreamRef<AudioNullParameters, AudioNull>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNullParameters = {} as any ) {
        super( inputs, 'anull', parameters );
    }
}

export interface AudioNullParameters {


    [key : string] : string | number;
}

/**
  * 8.31 anull
  * Pass the audio source unchanged to the output.
  */
export function audioNull ( inputs : Stream | Stream[] = [], parameters : AudioNullParameters = {} as any ) {
    return new AudioNull( inputs, parameters );
}