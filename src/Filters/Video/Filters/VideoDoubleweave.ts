import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.227 doubleweave
  * The weave takes a field-based video input and join each two sequential fields into single frame, producing a new double height clip with half the frame rate and half the frame count.
  * 
  * The doubleweave works same as weave but without halving frame rate and frame count.
  * 
  * It accepts the following option:
  */
export class VideoDoubleweave extends Filter<VideoDoubleweaveParameters> {
    outputs : FilterStreamRef<VideoDoubleweaveParameters, VideoDoubleweave>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDoubleweaveParameters = {} as any ) {
        super( inputs, 'doubleweave', parameters );
    }
}

export interface VideoDoubleweaveParameters {
    /**
      * Set first field. Available values are:
      * ‘top, t’
      * Set the frame as top-field-first.
      * ‘bottom, b’
      * Set the frame as bottom-field-first.
      */
    first_field ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.227 doubleweave
  * The weave takes a field-based video input and join each two sequential fields into single frame, producing a new double height clip with half the frame rate and half the frame count.
  * 
  * The doubleweave works same as weave but without halving frame rate and frame count.
  * 
  * It accepts the following option:
  */
export function videoDoubleweave ( inputs : Stream | Stream[] = [], parameters : VideoDoubleweaveParameters = {} as any ) {
    return new VideoDoubleweave( inputs, parameters );
}