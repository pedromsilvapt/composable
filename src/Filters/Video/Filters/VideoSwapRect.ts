import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.197 swaprect
  * Swap two rectangular objects in video.
  * 
  * This filter accepts the following options:
  */
export class VideoSwapRect extends Filter<VideoSwapRectParameters> {
    outputs : FilterStreamRef<VideoSwapRectParameters, VideoSwapRect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSwapRectParameters = {} as any ) {
        super( inputs, 'swaprect', parameters );
    }
}

export interface VideoSwapRectParameters {
    /** Set object width. */
    w ?: string | number;
    /** Set object height. */
    h ?: string | number;
    /** Set 1st rect x coordinate. */
    x1 ?: string | number;
    /** Set 1st rect y coordinate. */
    y1 ?: string | number;
    /** Set 2nd rect x coordinate. */
    x2 ?: string | number;
    /**
      * Set 2nd rect y coordinate.
      * All expressions are evaluated once for each frame.
      */
    y2 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.197 swaprect
  * Swap two rectangular objects in video.
  * 
  * This filter accepts the following options:
  */
export function videoSwapRect ( inputs : Stream | Stream[] = [], parameters : VideoSwapRectParameters = {} as any ) {
    return new VideoSwapRect( inputs, parameters );
}