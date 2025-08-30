import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.37 arnndn
  * Reduce noise from speech using Recurrent Neural Networks.
  * 
  * This filter accepts the following options:
  */
export class AudioRnndn extends Filter<AudioRnndnParameters> {
    outputs : FilterStreamRef<AudioRnndnParameters, AudioRnndn>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioRnndnParameters = {} as any ) {
        super( inputs, 'arnndn', parameters );
    }
}

export interface AudioRnndnParameters {
    /**
      * Set train model file to load. This option is always required.
      * @aliases m
      */
    model ?: string | number;
    /**
      * Set train model file to load. This option is always required.
      * @aliasof model
      */
    m ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.37 arnndn
  * Reduce noise from speech using Recurrent Neural Networks.
  * 
  * This filter accepts the following options:
  */
export function audioRnndn ( inputs : Stream | Stream[] = [], parameters : AudioRnndnParameters = {} as any ) {
    return new AudioRnndn( inputs, parameters );
}