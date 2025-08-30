import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.109 lagfun
  * Slowly update darker pixels.
  * 
  * This filter makes short flashes of light appear longer. This filter accepts the following options:
  */
export class VideoLagFun extends Filter<VideoLagFunParameters> {
    outputs : FilterStreamRef<VideoLagFunParameters, VideoLagFun>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLagFunParameters = {} as any ) {
        super( inputs, 'lagfun', parameters );
    }
}

export interface VideoLagFunParameters {
    /** Set factor for decaying. Default is .95. Allowed range is from 0 to 1. */
    decay ?: string | number;
    /** Set which planes to filter. Default is all. Allowed range is from 0 to 15. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.109 lagfun
  * Slowly update darker pixels.
  * 
  * This filter makes short flashes of light appear longer. This filter accepts the following options:
  */
export function videoLagFun ( inputs : Stream | Stream[] = [], parameters : VideoLagFunParameters = {} as any ) {
    return new VideoLagFun( inputs, parameters );
}