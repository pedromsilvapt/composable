import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.14 aselect
  * Select frames to pass in output.
  * 
  * This filter accepts the following options:
  */
export class AudioSelect extends Filter<AudioSelectParameters> {
    outputs : FilterStreamRef<AudioSelectParameters, AudioSelect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSelectParameters = {} as any ) {
        super( inputs, 'aselect', parameters );
    }
}

export interface AudioSelectParameters {
    /**
      * Set expression, which is evaluated for each input frame.
      * If the expression is evaluated to zero, the frame is discarded.
      * If the evaluation result is negative or NaN, the frame is sent to the first output; otherwise it is sent to the output with index
      * ceil(val)-1, assuming that the input index starts from 0.
      * For example a value of 1.2 corresponds to the output with index
      * ceil(1.2)-1 = 2-1 = 1, that is the second output.
      * @aliases e
      */
    expr ?: string | number;
    /**
      * Set expression, which is evaluated for each input frame.
      * If the expression is evaluated to zero, the frame is discarded.
      * If the evaluation result is negative or NaN, the frame is sent to the first output; otherwise it is sent to the output with index
      * ceil(val)-1, assuming that the input index starts from 0.
      * For example a value of 1.2 corresponds to the output with index
      * ceil(1.2)-1 = 2-1 = 1, that is the second output.
      * @aliasof expr
      */
    e ?: string | number;
    /**
      * Set the number of outputs. The output to which to send the selected frame is based on the result of the evaluation. Default value is 1.
      * @aliases n
      */
    outputs ?: string | number;
    /**
      * Set the number of outputs. The output to which to send the selected frame is based on the result of the evaluation. Default value is 1.
      * @aliasof outputs
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.14 aselect
  * Select frames to pass in output.
  * 
  * This filter accepts the following options:
  */
export function audioSelect ( inputs : Stream | Stream[] = [], parameters : AudioSelectParameters = {} as any ) {
    return new AudioSelect( inputs, parameters );
}