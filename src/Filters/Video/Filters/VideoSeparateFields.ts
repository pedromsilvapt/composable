import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.178 separatefields
  * The separatefields takes a frame-based video input and splits each frame into its components fields, producing a new half height clip with twice the frame rate and twice the frame count.
  * 
  * This filter use field-dominance information in frame to decide which of each pair of fields to place first in the output. If it gets it wrong use setfield filter before separatefields filter.
  */
export class VideoSeparateFields extends Filter<VideoSeparateFieldsParameters> {
    outputs : FilterStreamRef<VideoSeparateFieldsParameters, VideoSeparateFields>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSeparateFieldsParameters = {} as any ) {
        super( inputs, 'separatefields', parameters );
    }
}

export interface VideoSeparateFieldsParameters {


    [key : string] : string | number;
}

/**
  * 11.178 separatefields
  * The separatefields takes a frame-based video input and splits each frame into its components fields, producing a new half height clip with twice the frame rate and twice the frame count.
  * 
  * This filter use field-dominance information in frame to decide which of each pair of fields to place first in the output. If it gets it wrong use setfield filter before separatefields filter.
  */
export function videoSeparateFields ( inputs : Stream | Stream[] = [], parameters : VideoSeparateFieldsParameters = {} as any ) {
    return new VideoSeparateFields( inputs, parameters );
}