import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.56 drawbox
  * Draw a colored box on the input image.
  * 
  * It accepts the following parameters:
  */
export class VideoDrawBox extends Filter<VideoDrawBoxParameters> {
    outputs : FilterStreamRef<VideoDrawBoxParameters, VideoDrawBox>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDrawBoxParameters = {} as any ) {
        super( inputs, 'drawbox', parameters );
    }
}

export interface VideoDrawBoxParameters {
    /** The expressions which specify the top left corner coordinates of the box. It defaults to 0. */
    x ?: string | number;
    /** The expressions which specify the width and height of the box; if 0 they are interpreted as the input width and height. It defaults to 0. */
    y ?: string | number;
    /**
      * Specify the color of the box to write. For the general syntax of this option, check the (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. If the special value invert is used, the box edge color is the same as the video with inverted luma.
      * @aliases w
      */
    width ?: string | number;
    /**
      * Specify the color of the box to write. For the general syntax of this option, check the (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. If the special value invert is used, the box edge color is the same as the video with inverted luma.
      * @aliasof width
      */
    w ?: string | number;
    /**
      * The expression which sets the thickness of the box edge. A value of fill will create a filled box. Default value is 3.
      * See below for the list of accepted constants.
      * @aliases h
      */
    height ?: string | number;
    /**
      * The expression which sets the thickness of the box edge. A value of fill will create a filled box. Default value is 3.
      * See below for the list of accepted constants.
      * @aliasof height
      */
    h ?: string | number;
    /**
      * Applicable if the input has alpha. With value 1, the pixels of the painted box will overwrite the video’s color and alpha pixels. Default is 0, which composites the box onto the input, leaving the video’s alpha intact.
      * @aliases c
      */
    color ?: string | number;
    /**
      * Applicable if the input has alpha. With value 1, the pixels of the painted box will overwrite the video’s color and alpha pixels. Default is 0, which composites the box onto the input, leaving the video’s alpha intact.
      * @aliasof color
      */
    c ?: string | number;
    /** @aliases t */
    thickness ?: string | number;
    /** @aliasof thickness */
    t ?: string | number;
    replace ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.56 drawbox
  * Draw a colored box on the input image.
  * 
  * It accepts the following parameters:
  */
export function videoDrawBox ( inputs : Stream | Stream[] = [], parameters : VideoDrawBoxParameters = {} as any ) {
    return new VideoDrawBox( inputs, parameters );
}