import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.133 negate
  * Negate (invert) the input video.
  * 
  * It accepts the following option:
  */
export class VideoNegate extends Filter<VideoNegateParameters> {
    outputs : FilterStreamRef<VideoNegateParameters, VideoNegate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNegateParameters = {} as any ) {
        super( inputs, 'negate', parameters );
    }
}

export interface VideoNegateParameters {
    /** With value 1, it negates the alpha component, if present. Default value is 0. */
    negate_alpha ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.133 negate
  * Negate (invert) the input video.
  * 
  * It accepts the following option:
  */
export function videoNegate ( inputs : Stream | Stream[] = [], parameters : VideoNegateParameters = {} as any ) {
    return new VideoNegate( inputs, parameters );
}