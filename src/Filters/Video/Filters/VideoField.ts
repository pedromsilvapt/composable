import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.69 field
  * Extract a single field from an interlaced image using stride arithmetic to avoid wasting CPU time. The output frames are marked as non-interlaced.
  * 
  * The filter accepts the following options:
  */
export class VideoField extends Filter<VideoFieldParameters> {
    outputs : FilterStreamRef<VideoFieldParameters, VideoField>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFieldParameters = {} as any ) {
        super( inputs, 'field', parameters );
    }
}

export interface VideoFieldParameters {
    /**
      * Specify whether to extract the top (if the value is 0 or
      * top) or the bottom field (if the value is 1 or
      * bottom).
      */
    type ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.69 field
  * Extract a single field from an interlaced image using stride arithmetic to avoid wasting CPU time. The output frames are marked as non-interlaced.
  * 
  * The filter accepts the following options:
  */
export function videoField ( inputs : Stream | Stream[] = [], parameters : VideoFieldParameters = {} as any ) {
    return new VideoField( inputs, parameters );
}