import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.170 roberts
  * Apply roberts cross operator to input video stream.
  * 
  * The filter accepts the following option:
  */
export class VideoRoberts extends Filter<VideoRobertsParameters> {
    outputs : FilterStreamRef<VideoRobertsParameters, VideoRoberts>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRobertsParameters = {} as any ) {
        super( inputs, 'roberts', parameters );
    }
}

export interface VideoRobertsParameters {
    /** Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. */
    planes ?: string | number;
    /** Set value which will be multiplied with filtered result. */
    scale ?: string | number;
    /** Set value which will be added to filtered result. */
    delta ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.170 roberts
  * Apply roberts cross operator to input video stream.
  * 
  * The filter accepts the following option:
  */
export function videoRoberts ( inputs : Stream | Stream[] = [], parameters : VideoRobertsParameters = {} as any ) {
    return new VideoRoberts( inputs, parameters );
}