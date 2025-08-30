import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.227 weave
  * The weave takes a field-based video input and join each two sequential fields into single frame, producing a new double height clip with half the frame rate and half the frame count.
  * 
  * The doubleweave works same as weave but without halving frame rate and frame count.
  * 
  * It accepts the following option:
  */
export class VideoWeave extends Filter<VideoWeaveParameters> {
    outputs : FilterStreamRef<VideoWeaveParameters, VideoWeave>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoWeaveParameters = {} as any ) {
        super( inputs, 'weave', parameters );
    }
}

export interface VideoWeaveParameters {
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
  * 11.227 weave
  * The weave takes a field-based video input and join each two sequential fields into single frame, producing a new double height clip with half the frame rate and half the frame count.
  * 
  * The doubleweave works same as weave but without halving frame rate and frame count.
  * 
  * It accepts the following option:
  */
export function videoWeave ( inputs : Stream | Stream[] = [], parameters : VideoWeaveParameters = {} as any ) {
    return new VideoWeave( inputs, parameters );
}