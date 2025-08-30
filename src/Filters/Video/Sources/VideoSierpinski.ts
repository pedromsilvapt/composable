import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.10 sierpinski
  * Generate a Sierpinski carpet/triangle fractal, and randomly pan around.
  * 
  * This source accepts the following options:
  */
export class VideoSierpinski extends Filter<VideoSierpinskiParameters> {
    outputs : FilterStreamRef<VideoSierpinskiParameters, VideoSierpinski>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSierpinskiParameters = {} as any ) {
        super( inputs, 'sierpinski', parameters );
    }
}

export interface VideoSierpinskiParameters {
    /**
      * Set frame size. For the syntax of this option, check the (ffmpeg-utils)"Video
      * size" section in the ffmpeg-utils manual. Default value is "640x480".
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set frame size. For the syntax of this option, check the (ffmpeg-utils)"Video
      * size" section in the ffmpeg-utils manual. Default value is "640x480".
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
    /** Set seed which is used for random panning. */
    seed ?: string | number;
    /** Set max jump for single pan destination. Allowed range is from 1 to 10000. */
    jump ?: string | number;
    /** Set fractal type, can be default carpet or triangle. */
    type ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.10 sierpinski
  * Generate a Sierpinski carpet/triangle fractal, and randomly pan around.
  * 
  * This source accepts the following options:
  */
export function videoSierpinski ( inputs : Stream | Stream[] = [], parameters : VideoSierpinskiParameters = {} as any ) {
    return new VideoSierpinski( inputs, parameters );
}