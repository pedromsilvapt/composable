import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.8 allyuv
  * The allrgb source returns frames of size 4096x4096 of all rgb colors.
  * 
  * The allyuv source returns frames of size 4096x4096 of all yuv colors.
  * 
  * The color source provides an uniformly colored input.
  * 
  * The haldclutsrc source provides an identity Hald CLUT. See also
  * haldclut filter.
  * 
  * The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data.
  * 
  * The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels.
  * 
  * The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels.
  * 
  * The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom.
  * 
  * The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990.
  * 
  * The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002.
  * 
  * The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes.
  * 
  * The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion.
  * 
  * The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom.
  * 
  * The sources accept the following parameters:
  */
export class VideoAllyuv extends Filter<VideoAllyuvParameters> {
    outputs : FilterStreamRef<VideoAllyuvParameters, VideoAllyuv>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAllyuvParameters = {} as any ) {
        super( inputs, 'allyuv', parameters );
    }
}

export interface VideoAllyuvParameters {
    /** Specify the level of the Hald CLUT, only available in the haldclutsrc source. A level of N generates a picture of N*N*N by N*N*N pixels to be used as identity matrix for 3D lookup tables. Each component is coded on a 1/(N*N) scale. */
    level ?: string | number;
    /**
      * Specify the color of the source, only available in the color source. For the syntax of this option, check the
      * (ffmpeg-utils)"Color" section in the ffmpeg-utils manual.
      * @aliases c
      */
    color ?: string | number;
    /**
      * Specify the color of the source, only available in the color source. For the syntax of this option, check the
      * (ffmpeg-utils)"Color" section in the ffmpeg-utils manual.
      * @aliasof color
      */
    c ?: string | number;
    /**
      * Specify the size of the sourced video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. The default value is 320x240.
      * This option is not available with the allrgb, allyuv, and
      * haldclutsrc filters.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the size of the sourced video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. The default value is 320x240.
      * This option is not available with the allrgb, allyuv, and
      * haldclutsrc filters.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format
      * frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format
      * frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Set the duration of the sourced video. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
      * If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Set the duration of the sourced video. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
      * If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
      * @aliasof duration
      */
    d ?: string | number;
    /** Set the sample aspect ratio of the sourced video. */
    sar ?: string | number;
    /**
      * Specify the alpha (opacity) of the background, only available in the
      * testsrc2 source. The value must be between 0 (fully transparent) and 255 (fully opaque, the default).
      */
    alpha ?: string | number;
    /**
      * Set the number of decimals to show in the timestamp, only available in the
      * testsrc source.
      * The displayed timestamp value will correspond to the original timestamp value multiplied by the power of 10 of the specified value. Default value is 0.
      * @aliases n
      */
    decimals ?: string | number;
    /**
      * Set the number of decimals to show in the timestamp, only available in the
      * testsrc source.
      * The displayed timestamp value will correspond to the original timestamp value multiplied by the power of 10 of the specified value. Default value is 0.
      * @aliasof decimals
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.8 allyuv
  * The allrgb source returns frames of size 4096x4096 of all rgb colors.
  * 
  * The allyuv source returns frames of size 4096x4096 of all yuv colors.
  * 
  * The color source provides an uniformly colored input.
  * 
  * The haldclutsrc source provides an identity Hald CLUT. See also
  * haldclut filter.
  * 
  * The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data.
  * 
  * The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels.
  * 
  * The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels.
  * 
  * The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom.
  * 
  * The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990.
  * 
  * The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002.
  * 
  * The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes.
  * 
  * The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion.
  * 
  * The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom.
  * 
  * The sources accept the following parameters:
  */
export function videoAllyuv ( inputs : Stream | Stream[] = [], parameters : VideoAllyuvParameters = {} as any ) {
    return new VideoAllyuv( inputs, parameters );
}