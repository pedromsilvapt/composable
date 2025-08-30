import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.229 xfade
  * Apply cross fade from one input video stream to another input video stream. The cross fade is applied for specified duration.
  * 
  * The filter accepts the following options:
  */
export class VideoXFade extends Filter<VideoXFadeParameters> {
    outputs : FilterStreamRef<VideoXFadeParameters, VideoXFade>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoXFadeParameters = {} as any ) {
        super( inputs, 'xfade', parameters );
    }
}

export interface VideoXFadeParameters {
    /**
      * Set one of available transition effects:
      * ‘custom’
      * ‘fade’
      * ‘wipeleft’
      * ‘wiperight’
      * ‘wipeup’
      * ‘wipedown’
      * ‘slideleft’
      * ‘slideright’
      * ‘slideup’
      * ‘slidedown’
      * ‘circlecrop’
      * ‘rectcrop’
      * ‘distance’
      * ‘fadeblack’
      * ‘fadewhite’
      * ‘radial’
      * ‘smoothleft’
      * ‘smoothright’
      * ‘smoothup’
      * ‘smoothdown’
      * Default transition effect is fade.
      */
    transition ?: string | number;
    /** Set cross fade duration in seconds. Default duration is 1 second. */
    duration ?: string | number;
    /** Set cross fade start relative to first input stream in seconds. Default offset is 0. */
    offset ?: string | number;
    /**
      * Set expression for custom transition effect.
      * The expressions can use the following variables and functions:
      * X
      * Y
      * The coordinates of the current sample.
      * W
      * H
      * The width and height of the image.
      * P
      * Progress of transition effect.
      * PLANE
      * Currently processed plane.
      * A
      * Return value of first input at current location and plane.
      * B
      * Return value of second input at current location and plane.
      * a0(x, y)
      * a1(x, y)
      * a2(x, y)
      * a3(x, y)
      * Return the value of the pixel at location (x,y) of the first/second/third/fourth component of first input.
      * b0(x, y)
      * b1(x, y)
      * b2(x, y)
      * b3(x, y)
      * Return the value of the pixel at location (x,y) of the first/second/third/fourth component of second input.
      */
    expr ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.229 xfade
  * Apply cross fade from one input video stream to another input video stream. The cross fade is applied for specified duration.
  * 
  * The filter accepts the following options:
  */
export function videoXFade ( inputs : Stream | Stream[] = [], parameters : VideoXFadeParameters = {} as any ) {
    return new VideoXFade( inputs, parameters );
}