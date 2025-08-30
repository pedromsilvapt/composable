import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.180 setfield
  * Force field for the output video frame.
  * 
  * The setfield filter marks the interlace type field for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by following filters (e.g. fieldorder or yadif).
  * 
  * The filter accepts the following options:
  */
export class VideoSetField extends Filter<VideoSetFieldParameters> {
    outputs : FilterStreamRef<VideoSetFieldParameters, VideoSetField>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSetFieldParameters = {} as any ) {
        super( inputs, 'setfield', parameters );
    }
}

export interface VideoSetFieldParameters {
    /**
      * Available values are:
      * ‘auto’
      * Keep the same field property.
      * ‘bff’
      * Mark the frame as bottom-field-first.
      * ‘tff’
      * Mark the frame as top-field-first.
      * ‘prog’
      * Mark the frame as progressive.
      */
    mode ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.180 setfield
  * Force field for the output video frame.
  * 
  * The setfield filter marks the interlace type field for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by following filters (e.g. fieldorder or yadif).
  * 
  * The filter accepts the following options:
  */
export function videoSetField ( inputs : Stream | Stream[] = [], parameters : VideoSetFieldParameters = {} as any ) {
    return new VideoSetField( inputs, parameters );
}