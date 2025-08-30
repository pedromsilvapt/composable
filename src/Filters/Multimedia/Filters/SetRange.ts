import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.17 setrange
  * Force color range for the output video frame.
  * 
  * The setrange filter marks the color range property for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by following filters.
  * 
  * The filter accepts the following options:
  */
export class SetRange extends Filter<SetRangeParameters> {
    outputs : FilterStreamRef<SetRangeParameters, SetRange>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : SetRangeParameters = {} as any ) {
        super( inputs, 'setrange', parameters );
    }
}

export interface SetRangeParameters {
    /**
      * Available values are:
      * ‘auto’
      * Keep the same color range property.
      * ‘unspecified, unknown’
      * Set the color range as unspecified.
      * ‘limited, tv, mpeg’
      * Set the color range as limited.
      * ‘full, pc, jpeg’
      * Set the color range as full.
      */
    range ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.17 setrange
  * Force color range for the output video frame.
  * 
  * The setrange filter marks the color range property for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by following filters.
  * 
  * The filter accepts the following options:
  */
export function setRange ( inputs : Stream | Stream[] = [], parameters : SetRangeParameters = {} as any ) {
    return new SetRange( inputs, parameters );
}