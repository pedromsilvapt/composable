import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.58 drawgrid
  * Draw a grid on the input image.
  * 
  * It accepts the following parameters:
  */
export class VideoDrawGrid extends Filter<VideoDrawGridParameters> {
    outputs : FilterStreamRef<VideoDrawGridParameters, VideoDrawGrid>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDrawGridParameters = {} as any ) {
        super( inputs, 'drawgrid', parameters );
    }
}

export interface VideoDrawGridParameters {
    /** The expressions which specify the coordinates of some point of grid intersection (meant to configure offset). Both default to 0. */
    x ?: string | number;
    /** The expressions which specify the width and height of the grid cell, if 0 they are interpreted as the input width and height, respectively, minus thickness, so image gets framed. Default to 0. */
    y ?: string | number;
    /**
      * Specify the color of the grid. For the general syntax of this option, check the (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. If the special value invert is used, the grid color is the same as the video with inverted luma.
      * @aliases w
      */
    width ?: string | number;
    /**
      * Specify the color of the grid. For the general syntax of this option, check the (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. If the special value invert is used, the grid color is the same as the video with inverted luma.
      * @aliasof width
      */
    w ?: string | number;
    /**
      * The expression which sets the thickness of the grid line. Default value is 1.
      * See below for the list of accepted constants.
      * @aliases h
      */
    height ?: string | number;
    /**
      * The expression which sets the thickness of the grid line. Default value is 1.
      * See below for the list of accepted constants.
      * @aliasof height
      */
    h ?: string | number;
    /**
      * Applicable if the input has alpha. With 1 the pixels of the painted grid will overwrite the video’s color and alpha pixels. Default is 0, which composites the grid onto the input, leaving the video’s alpha intact.
      * @aliases c
      */
    color ?: string | number;
    /**
      * Applicable if the input has alpha. With 1 the pixels of the painted grid will overwrite the video’s color and alpha pixels. Default is 0, which composites the grid onto the input, leaving the video’s alpha intact.
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
  * 11.58 drawgrid
  * Draw a grid on the input image.
  * 
  * It accepts the following parameters:
  */
export function videoDrawGrid ( inputs : Stream | Stream[] = [], parameters : VideoDrawGridParameters = {} as any ) {
    return new VideoDrawGrid( inputs, parameters );
}