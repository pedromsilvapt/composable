import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.193 stereo3d
  * Convert between different stereoscopic image formats.
  * 
  * The filters accept the following options:
  */
export class VideoStereo3D extends Filter<VideoStereo3DParameters> {
    outputs : FilterStreamRef<VideoStereo3DParameters, VideoStereo3D>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoStereo3DParameters = {} as any ) {
        super( inputs, 'stereo3d', parameters );
    }
}

export interface VideoStereo3DParameters {
    /**
      * Set stereoscopic image format of input.
      * Available values for input image formats are:
      * ‘sbsl’
      * side by side parallel (left eye left, right eye right)
      * ‘sbsr’
      * side by side crosseye (right eye left, left eye right)
      * ‘sbs2l’
      * side by side parallel with half width resolution (left eye left, right eye right)
      * ‘sbs2r’
      * side by side crosseye with half width resolution (right eye left, left eye right)
      * ‘abl’
      * ‘tbl’
      * above-below (left eye above, right eye below)
      * ‘abr’
      * ‘tbr’
      * above-below (right eye above, left eye below)
      * ‘ab2l’
      * ‘tb2l’
      * above-below with half height resolution (left eye above, right eye below)
      * ‘ab2r’
      * ‘tb2r’
      * above-below with half height resolution (right eye above, left eye below)
      * ‘al’
      * alternating frames (left eye first, right eye second)
      * ‘ar’
      * alternating frames (right eye first, left eye second)
      * ‘irl’
      * interleaved rows (left eye has top row, right eye starts on next row)
      * ‘irr’
      * interleaved rows (right eye has top row, left eye starts on next row)
      * ‘icl’
      * interleaved columns, left eye first
      * ‘icr’
      * interleaved columns, right eye first
      * Default value is ‘sbsl’.
      */
    'in' ?: string | number;
    /**
      * Set stereoscopic image format of output.
      * ‘sbsl’
      * side by side parallel (left eye left, right eye right)
      * ‘sbsr’
      * side by side crosseye (right eye left, left eye right)
      * ‘sbs2l’
      * side by side parallel with half width resolution (left eye left, right eye right)
      * ‘sbs2r’
      * side by side crosseye with half width resolution (right eye left, left eye right)
      * ‘abl’
      * ‘tbl’
      * above-below (left eye above, right eye below)
      * ‘abr’
      * ‘tbr’
      * above-below (right eye above, left eye below)
      * ‘ab2l’
      * ‘tb2l’
      * above-below with half height resolution (left eye above, right eye below)
      * ‘ab2r’
      * ‘tb2r’
      * above-below with half height resolution (right eye above, left eye below)
      * ‘al’
      * alternating frames (left eye first, right eye second)
      * ‘ar’
      * alternating frames (right eye first, left eye second)
      * ‘irl’
      * interleaved rows (left eye has top row, right eye starts on next row)
      * ‘irr’
      * interleaved rows (right eye has top row, left eye starts on next row)
      * ‘arbg’
      * anaglyph red/blue gray (red filter on left eye, blue filter on right eye)
      * ‘argg’
      * anaglyph red/green gray (red filter on left eye, green filter on right eye)
      * ‘arcg’
      * anaglyph red/cyan gray (red filter on left eye, cyan filter on right eye)
      * ‘arch’
      * anaglyph red/cyan half colored (red filter on left eye, cyan filter on right eye)
      * ‘arcc’
      * anaglyph red/cyan color (red filter on left eye, cyan filter on right eye)
      * ‘arcd’
      * anaglyph red/cyan color optimized with the least squares projection of dubois (red filter on left eye, cyan filter on right eye)
      * ‘agmg’
      * anaglyph green/magenta gray (green filter on left eye, magenta filter on right eye)
      * ‘agmh’
      * anaglyph green/magenta half colored (green filter on left eye, magenta filter on right eye)
      * ‘agmc’
      * anaglyph green/magenta colored (green filter on left eye, magenta filter on right eye)
      * ‘agmd’
      * anaglyph green/magenta color optimized with the least squares projection of dubois (green filter on left eye, magenta filter on right eye)
      * ‘aybg’
      * anaglyph yellow/blue gray (yellow filter on left eye, blue filter on right eye)
      * ‘aybh’
      * anaglyph yellow/blue half colored (yellow filter on left eye, blue filter on right eye)
      * ‘aybc’
      * anaglyph yellow/blue colored (yellow filter on left eye, blue filter on right eye)
      * ‘aybd’
      * anaglyph yellow/blue color optimized with the least squares projection of dubois (yellow filter on left eye, blue filter on right eye)
      * ‘ml’
      * mono output (left eye only)
      * ‘mr’
      * mono output (right eye only)
      * ‘chl’
      * checkerboard, left eye first
      * ‘chr’
      * checkerboard, right eye first
      * ‘icl’
      * interleaved columns, left eye first
      * ‘icr’
      * interleaved columns, right eye first
      * ‘hdmi’
      * HDMI frame pack
      * Default value is ‘arcd’.
      */
    out ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.193 stereo3d
  * Convert between different stereoscopic image formats.
  * 
  * The filters accept the following options:
  */
export function videoStereo3D ( inputs : Stream | Stream[] = [], parameters : VideoStereo3DParameters = {} as any ) {
    return new VideoStereo3D( inputs, parameters );
}