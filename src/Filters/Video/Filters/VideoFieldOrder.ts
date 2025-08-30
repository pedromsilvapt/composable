import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.72 fieldorder
  * Transform the field order of the input video.
  * 
  * It accepts the following parameters:
  */
export class VideoFieldOrder extends Filter<VideoFieldOrderParameters> {
    outputs : FilterStreamRef<VideoFieldOrderParameters, VideoFieldOrder>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFieldOrderParameters = {} as any ) {
        super( inputs, 'fieldorder', parameters );
    }
}

export interface VideoFieldOrderParameters {
    /** The output field order. Valid values are tff for top field first or bff for bottom field first. */
    order ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.72 fieldorder
  * Transform the field order of the input video.
  * 
  * It accepts the following parameters:
  */
export function videoFieldOrder ( inputs : Stream | Stream[] = [], parameters : VideoFieldOrderParameters = {} as any ) {
    return new VideoFieldOrder( inputs, parameters );
}