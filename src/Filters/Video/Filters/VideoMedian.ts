import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.126 median
  * Pick median pixel from certain rectangle defined by radius.
  * 
  * This filter accepts the following options:
  */
export class VideoMedian extends Filter<VideoMedianParameters> {
    outputs : FilterStreamRef<VideoMedianParameters, VideoMedian>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMedianParameters = {} as any ) {
        super( inputs, 'median', parameters );
    }
}

export interface VideoMedianParameters {
    /** Set horizontal radius size. Default value is 1. Allowed range is integer from 1 to 127. */
    radius ?: string | number;
    /** Set which planes to process. Default is 15, which is all available planes. */
    planes ?: string | number;
    /** Set vertical radius size. Default value is 0. Allowed range is integer from 0 to 127. If it is 0, value will be picked from horizontal radius option. */
    radiusV ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.126 median
  * Pick median pixel from certain rectangle defined by radius.
  * 
  * This filter accepts the following options:
  */
export function videoMedian ( inputs : Stream | Stream[] = [], parameters : VideoMedianParameters = {} as any ) {
    return new VideoMedian( inputs, parameters );
}