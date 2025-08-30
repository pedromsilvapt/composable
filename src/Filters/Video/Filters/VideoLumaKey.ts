import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.117 lumakey
  * Turn certain luma values into transparency.
  * 
  * The filter accepts the following options:
  */
export class VideoLumaKey extends Filter<VideoLumaKeyParameters> {
    outputs : FilterStreamRef<VideoLumaKeyParameters, VideoLumaKey>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLumaKeyParameters = {} as any ) {
        super( inputs, 'lumakey', parameters );
    }
}

export interface VideoLumaKeyParameters {
    /** Set the luma which will be used as base for transparency. Default value is 0. */
    threshold ?: string | number;
    /** Set the range of luma values to be keyed out. Default value is 0.01. */
    tolerance ?: string | number;
    /** Set the range of softness. Default value is 0. Use this to control gradual transition from zero to full transparency. */
    softness ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.117 lumakey
  * Turn certain luma values into transparency.
  * 
  * The filter accepts the following options:
  */
export function videoLumaKey ( inputs : Stream | Stream[] = [], parameters : VideoLumaKeyParameters = {} as any ) {
    return new VideoLumaKey( inputs, parameters );
}