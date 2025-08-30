import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.113 limiter
  * Limits the pixel components values to the specified range [min, max].
  * 
  * The filter accepts the following options:
  */
export class VideoLimiter extends Filter<VideoLimiterParameters> {
    outputs : FilterStreamRef<VideoLimiterParameters, VideoLimiter>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLimiterParameters = {} as any ) {
        super( inputs, 'limiter', parameters );
    }
}

export interface VideoLimiterParameters {
    /** Lower bound. Defaults to the lowest allowed value for the input. */
    min ?: string | number;
    /** Upper bound. Defaults to the highest allowed value for the input. */
    max ?: string | number;
    /** Specify which planes will be processed. Defaults to all available. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.113 limiter
  * Limits the pixel components values to the specified range [min, max].
  * 
  * The filter accepts the following options:
  */
export function videoLimiter ( inputs : Stream | Stream[] = [], parameters : VideoLimiterParameters = {} as any ) {
    return new VideoLimiter( inputs, parameters );
}