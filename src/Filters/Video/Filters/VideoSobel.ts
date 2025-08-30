import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.189 sobel
  * Apply sobel operator to input video stream.
  * 
  * The filter accepts the following option:
  */
export class VideoSobel extends Filter<VideoSobelParameters> {
    outputs : FilterStreamRef<VideoSobelParameters, VideoSobel>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSobelParameters = {} as any ) {
        super( inputs, 'sobel', parameters );
    }
}

export interface VideoSobelParameters {
    /** Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. */
    planes ?: string | number;
    /** Set value which will be multiplied with filtered result. */
    scale ?: string | number;
    /** Set value which will be added to filtered result. */
    delta ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.189 sobel
  * Apply sobel operator to input video stream.
  * 
  * The filter accepts the following option:
  */
export function videoSobel ( inputs : Stream | Stream[] = [], parameters : VideoSobelParameters = {} as any ) {
    return new VideoSobel( inputs, parameters );
}