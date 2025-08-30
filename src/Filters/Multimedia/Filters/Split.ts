import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.29 split
  * Split input into several identical outputs.
  * 
  * asplit works with audio input, split with video.
  * 
  * The filter accepts a single parameter which specifies the number of outputs. If unspecified, it defaults to 2.
  */
export class Split extends Filter<SplitParameters> {
    outputs : FilterStreamRef<SplitParameters, Split>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : SplitParameters = {} as any ) {
        super( inputs, 'split', parameters );
    }
}

export interface SplitParameters {


    [key : string] : string | number;
}

/**
  * 16.29 split
  * Split input into several identical outputs.
  * 
  * asplit works with audio input, split with video.
  * 
  * The filter accepts a single parameter which specifies the number of outputs. If unspecified, it defaults to 2.
  */
export function split ( inputs : Stream | Stream[] = [], parameters : SplitParameters = {} as any ) {
    return new Split( inputs, parameters );
}