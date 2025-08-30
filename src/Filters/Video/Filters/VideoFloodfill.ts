import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.76 floodfill
  * Flood area with values of same pixel components with another values.
  * 
  * It accepts the following options:
  */
export class VideoFloodfill extends Filter<VideoFloodfillParameters> {
    outputs : FilterStreamRef<VideoFloodfillParameters, VideoFloodfill>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFloodfillParameters = {} as any ) {
        super( inputs, 'floodfill', parameters );
    }
}

export interface VideoFloodfillParameters {
    /** Set pixel x coordinate. */
    x ?: string | number;
    /** Set pixel y coordinate. */
    y ?: string | number;
    /** Set source #0 component value. */
    s0 ?: string | number;
    /** Set source #1 component value. */
    s1 ?: string | number;
    /** Set source #2 component value. */
    s2 ?: string | number;
    /** Set source #3 component value. */
    s3 ?: string | number;
    /** Set destination #0 component value. */
    d0 ?: string | number;
    /** Set destination #1 component value. */
    d1 ?: string | number;
    /** Set destination #2 component value. */
    d2 ?: string | number;
    /** Set destination #3 component value. */
    d3 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.76 floodfill
  * Flood area with values of same pixel components with another values.
  * 
  * It accepts the following options:
  */
export function videoFloodfill ( inputs : Stream | Stream[] = [], parameters : VideoFloodfillParameters = {} as any ) {
    return new VideoFloodfill( inputs, parameters );
}