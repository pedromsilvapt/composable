import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.24 aloop
  * Loop audio samples.
  * 
  * The filter accepts the following options:
  */
export class AudioLoop extends Filter<AudioLoopParameters> {
    outputs : FilterStreamRef<AudioLoopParameters, AudioLoop>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLoopParameters = {} as any ) {
        super( inputs, 'aloop', parameters );
    }
}

export interface AudioLoopParameters {
    /** Set the number of loops. Setting this value to -1 will result in infinite loops. Default is 0. */
    loop ?: string | number;
    /** Set maximal number of samples. Default is 0. */
    size ?: string | number;
    /** Set first sample of loop. Default is 0. */
    start ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.24 aloop
  * Loop audio samples.
  * 
  * The filter accepts the following options:
  */
export function audioLoop ( inputs : Stream | Stream[] = [], parameters : AudioLoopParameters = {} as any ) {
    return new AudioLoop( inputs, parameters );
}