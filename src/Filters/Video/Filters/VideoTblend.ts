import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.13 tblend
  * Blend two video frames into each other.
  * 
  * The blend filter takes two input streams and outputs one stream, the first input is the "top" layer and second input is "bottom" layer. By default, the output terminates when the longest input terminates.
  * 
  * The tblend (time blend) filter takes two consecutive frames from one single stream, and outputs the result obtained by blending the new frame on top of the old frame.
  * 
  * A description of the accepted options follows.
  */
export class VideoTblend extends Filter<VideoTblendParameters> {
    outputs : FilterStreamRef<VideoTblendParameters, VideoTblend>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTblendParameters = {} as any ) {
        super( inputs, 'tblend', parameters );
    }
}

export interface VideoTblendParameters {
    /**
      * Set blend mode for specific pixel component or all pixel components in case of all_mode. Default value is normal.
      * Available values for component modes are:
      * ‘addition’
      * ‘grainmerge’
      * ‘and’
      * ‘average’
      * ‘burn’
      * ‘darken’
      * ‘difference’
      * ‘grainextract’
      * ‘divide’
      * ‘dodge’
      * ‘freeze’
      * ‘exclusion’
      * ‘extremity’
      * ‘glow’
      * ‘hardlight’
      * ‘hardmix’
      * ‘heat’
      * ‘lighten’
      * ‘linearlight’
      * ‘multiply’
      * ‘multiply128’
      * ‘negation’
      * ‘normal’
      * ‘or’
      * ‘overlay’
      * ‘phoenix’
      * ‘pinlight’
      * ‘reflect’
      * ‘screen’
      * ‘softlight’
      * ‘subtract’
      * ‘vividlight’
      * ‘xor’
      */
    c0_mode ?: string | number;
    /** Set blend opacity for specific pixel component or all pixel components in case of all_opacity. Only used in combination with pixel component blend modes. */
    c1_mode ?: string | number;
    /**
      * Set blend expression for specific pixel component or all pixel components in case of all_expr. Note that related mode options will be ignored if those are set.
      * The expressions can use the following variables:
      * N
      * The sequential number of the filtered frame, starting from 0.
      * X
      * Y
      * the coordinates of the current sample
      * W
      * H
      * the width and height of currently filtered plane
      * SW
      * SH
      * Width and height scale for the plane being filtered. It is the ratio between the dimensions of the current plane to the luma plane, e.g. for a yuv420p frame, the values are 1,1 for the luma plane and 0.5,0.5 for the chroma planes.
      * T
      * Time of the current frame, expressed in seconds.
      * TOP, A
      * Value of pixel component at current location for first video frame (top layer).
      * BOTTOM, B
      * Value of pixel component at current location for second video frame (bottom layer).
      */
    c2_mode ?: string | number;
    c3_mode ?: string | number;
    all_mode ?: string | number;
    c0_opacity ?: string | number;
    c1_opacity ?: string | number;
    c2_opacity ?: string | number;
    c3_opacity ?: string | number;
    all_opacity ?: string | number;
    c0_expr ?: string | number;
    c1_expr ?: string | number;
    c2_expr ?: string | number;
    c3_expr ?: string | number;
    all_expr ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.13 tblend
  * Blend two video frames into each other.
  * 
  * The blend filter takes two input streams and outputs one stream, the first input is the "top" layer and second input is "bottom" layer. By default, the output terminates when the longest input terminates.
  * 
  * The tblend (time blend) filter takes two consecutive frames from one single stream, and outputs the result obtained by blending the new frame on top of the old frame.
  * 
  * A description of the accepted options follows.
  */
export function videoTblend ( inputs : Stream | Stream[] = [], parameters : VideoTblendParameters = {} as any ) {
    return new VideoTblend( inputs, parameters );
}