import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.211 unpremultiply
  * Apply alpha unpremultiply effect to input video stream using first plane of second stream as alpha.
  * 
  * Both streams must have same dimensions and same pixel format.
  * 
  * The filter accepts the following option:
  */
export class VideoUnPreMultiply extends Filter<VideoUnPreMultiplyParameters> {
    outputs : FilterStreamRef<VideoUnPreMultiplyParameters, VideoUnPreMultiply>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoUnPreMultiplyParameters = {} as any ) {
        super( inputs, 'unpremultiply', parameters );
    }
}

export interface VideoUnPreMultiplyParameters {
    /**
      * Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
      * If the format has 1 or 2 components, then luma is bit 0. If the format has 3 or 4 components: for RGB formats bit 0 is green, bit 1 is blue and bit 2 is red; for YUV formats bit 0 is luma, bit 1 is chroma-U and bit 2 is chroma-V. If present, the alpha channel is always the last bit.
      */
    planes ?: string | number;
    /** Do not require 2nd input for processing, instead use alpha plane from input stream. */
    inplace ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.211 unpremultiply
  * Apply alpha unpremultiply effect to input video stream using first plane of second stream as alpha.
  * 
  * Both streams must have same dimensions and same pixel format.
  * 
  * The filter accepts the following option:
  */
export function videoUnPreMultiply ( inputs : Stream | Stream[] = [], parameters : VideoUnPreMultiplyParameters = {} as any ) {
    return new VideoUnPreMultiply( inputs, parameters );
}