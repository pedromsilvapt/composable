import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.44 atempo
  * Adjust audio tempo.
  * 
  * The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range.
  * 
  * Note that tempo greater than 2 will skip some samples rather than blend them in. If for any reason this is a concern it is always possible to daisy-chain several instances of atempo to achieve the desired product tempo.
  */
export class AudioTempo extends Filter<AudioTempoParameters> {
    outputs : FilterStreamRef<AudioTempoParameters, AudioTempo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioTempoParameters = {} as any ) {
        super( inputs, 'atempo', parameters );
    }
}

export interface AudioTempoParameters {


    [key : string] : string | number;
}

/**
  * 8.44 atempo
  * Adjust audio tempo.
  * 
  * The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range.
  * 
  * Note that tempo greater than 2 will skip some samples rather than blend them in. If for any reason this is a concern it is always possible to daisy-chain several instances of atempo to achieve the desired product tempo.
  */
export function audioTempo ( inputs : Stream | Stream[] = [], parameters : AudioTempoParameters = {} as any ) {
    return new AudioTempo( inputs, parameters );
}