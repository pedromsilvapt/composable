import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.156 prewitt
  * Apply prewitt operator to input video stream.
  * 
  * The filter accepts the following option:
  */
export class VideoPrewitt extends Filter<VideoPrewittParameters> {
    outputs : FilterStreamRef<VideoPrewittParameters, VideoPrewitt>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPrewittParameters = {} as any ) {
        super( inputs, 'prewitt', parameters );
    }
}

export interface VideoPrewittParameters {
    /** Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. */
    planes ?: string | number;
    /** Set value which will be multiplied with filtered result. */
    scale ?: string | number;
    /** Set value which will be added to filtered result. */
    delta ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.156 prewitt
  * Apply prewitt operator to input video stream.
  * 
  * The filter accepts the following option:
  */
export function videoPrewitt ( inputs : Stream | Stream[] = [], parameters : VideoPrewittParameters = {} as any ) {
    return new VideoPrewitt( inputs, parameters );
}