import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.29 asplit
  * Split input into several identical outputs.
  * 
  * asplit works with audio input, split with video.
  * 
  * The filter accepts a single parameter which specifies the number of outputs. If unspecified, it defaults to 2.
  */
export class Asplit extends Filter<AsplitParameters> {
    outputs : FilterStreamRef<AsplitParameters, Asplit>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AsplitParameters = {} as any ) {
        super( inputs, 'asplit', parameters );
    }
}

export interface AsplitParameters {


    [key : string] : string | number;
}

/**
  * 16.29 asplit
  * Split input into several identical outputs.
  * 
  * asplit works with audio input, split with video.
  * 
  * The filter accepts a single parameter which specifies the number of outputs. If unspecified, it defaults to 2.
  */
export function asplit ( inputs : Stream | Stream[] = [], parameters : AsplitParameters = {} as any ) {
    return new Asplit( inputs, parameters );
}