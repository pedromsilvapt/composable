import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.27 amultiply
  * Multiply first audio stream with second audio stream and store result in output audio stream. Multiplication is done by multiplying each sample from first stream with sample at same position from second stream.
  * 
  * With this element-wise multiplication one can create amplitude fades and amplitude modulations.
  */
export class AudioMultiply extends Filter<AudioMultiplyParameters> {
    outputs : FilterStreamRef<AudioMultiplyParameters, AudioMultiply>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioMultiplyParameters = {} as any ) {
        super( inputs, 'amultiply', parameters );
    }
}

export interface AudioMultiplyParameters {


    [key : string] : string | number;
}

/**
  * 8.27 amultiply
  * Multiply first audio stream with second audio stream and store result in output audio stream. Multiplication is done by multiplying each sample from first stream with sample at same position from second stream.
  * 
  * With this element-wise multiplication one can create amplitude fades and amplitude modulations.
  */
export function audioMultiply ( inputs : Stream | Stream[] = [], parameters : AudioMultiplyParameters = {} as any ) {
    return new AudioMultiply( inputs, parameters );
}