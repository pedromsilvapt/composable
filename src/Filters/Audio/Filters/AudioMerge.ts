import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.25 amerge
  * Merge two or more audio streams into a single multi-channel stream.
  * 
  * The filter accepts the following options:
  */
export class AudioMerge extends Filter<AudioMergeParameters> {
    outputs : FilterStreamRef<AudioMergeParameters, AudioMerge>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioMergeParameters = {} as any ) {
        super( inputs, 'amerge', parameters );
    }
}

export interface AudioMergeParameters {
    /** Set the number of inputs. Default is 2. */
    inputs ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.25 amerge
  * Merge two or more audio streams into a single multi-channel stream.
  * 
  * The filter accepts the following options:
  */
export function audioMerge ( inputs : Stream | Stream[] = [], parameters : AudioMergeParameters = {} as any ) {
    return new AudioMerge( inputs, parameters );
}