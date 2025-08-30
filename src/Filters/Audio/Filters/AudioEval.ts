import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.14 aeval
  * Modify an audio signal according to the specified expressions.
  * 
  * This filter accepts one or more expressions (one for each channel), which are evaluated and used to modify a corresponding audio signal.
  * 
  * It accepts the following parameters:
  */
export class AudioEval extends Filter<AudioEvalParameters> {
    outputs : FilterStreamRef<AudioEvalParameters, AudioEval>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioEvalParameters = {} as any ) {
        super( inputs, 'aeval', parameters );
    }
}

export interface AudioEvalParameters {
    /** Set the ’|’-separated expressions list for each separate channel. If the number of input channels is greater than the number of expressions, the last specified expression is used for the remaining output channels. */
    exprs ?: string | number;
    /**
      * Set output channel layout. If not specified, the channel layout is specified by the number of expressions. If set to ‘same’, it will use by default the same input channel layout.
      * @aliases c
      */
    channel_layout ?: string | number;
    /**
      * Set output channel layout. If not specified, the channel layout is specified by the number of expressions. If set to ‘same’, it will use by default the same input channel layout.
      * @aliasof channel_layout
      */
    c ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.14 aeval
  * Modify an audio signal according to the specified expressions.
  * 
  * This filter accepts one or more expressions (one for each channel), which are evaluated and used to modify a corresponding audio signal.
  * 
  * It accepts the following parameters:
  */
export function audioEval ( inputs : Stream | Stream[] = [], parameters : AudioEvalParameters = {} as any ) {
    return new AudioEval( inputs, parameters );
}