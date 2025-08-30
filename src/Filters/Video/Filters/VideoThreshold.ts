import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.201 threshold
  * Apply threshold effect to video stream.
  * 
  * This filter needs four video streams to perform thresholding. First stream is stream we are filtering. Second stream is holding threshold values, third stream is holding min values, and last, fourth stream is holding max values.
  * 
  * The filter accepts the following option:
  */
export class VideoThreshold extends Filter<VideoThresholdParameters> {
    outputs : FilterStreamRef<VideoThresholdParameters, VideoThreshold>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoThresholdParameters = {} as any ) {
        super( inputs, 'threshold', parameters );
    }
}

export interface VideoThresholdParameters {
    /** Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.201 threshold
  * Apply threshold effect to video stream.
  * 
  * This filter needs four video streams to perform thresholding. First stream is stream we are filtering. Second stream is holding threshold values, third stream is holding min values, and last, fourth stream is holding max values.
  * 
  * The filter accepts the following option:
  */
export function videoThreshold ( inputs : Stream | Stream[] = [], parameters : VideoThresholdParameters = {} as any ) {
    return new VideoThreshold( inputs, parameters );
}