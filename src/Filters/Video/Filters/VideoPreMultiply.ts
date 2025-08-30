import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.155 premultiply
  * Apply alpha premultiply effect to input video stream using first plane of second stream as alpha.
  * 
  * Both streams must have same dimensions and same pixel format.
  * 
  * The filter accepts the following option:
  */
export class VideoPreMultiply extends Filter<VideoPreMultiplyParameters> {
    outputs : FilterStreamRef<VideoPreMultiplyParameters, VideoPreMultiply>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPreMultiplyParameters = {} as any ) {
        super( inputs, 'premultiply', parameters );
    }
}

export interface VideoPreMultiplyParameters {
    /** Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. */
    planes ?: string | number;
    /** Do not require 2nd input for processing, instead use alpha plane from input stream. */
    inplace ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.155 premultiply
  * Apply alpha premultiply effect to input video stream using first plane of second stream as alpha.
  * 
  * Both streams must have same dimensions and same pixel format.
  * 
  * The filter accepts the following option:
  */
export function videoPreMultiply ( inputs : Stream | Stream[] = [], parameters : VideoPreMultiplyParameters = {} as any ) {
    return new VideoPreMultiply( inputs, parameters );
}