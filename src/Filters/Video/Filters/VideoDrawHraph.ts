import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.57 drawgraph
  * Draw a graph using input video metadata.
  * 
  * It accepts the following parameters:
  */
export class VideoDrawHraph extends Filter<VideoDrawHraphParameters> {
    outputs : FilterStreamRef<VideoDrawHraphParameters, VideoDrawHraph>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDrawHraphParameters = {} as any ) {
        super( inputs, 'drawgraph', parameters );
    }
}

export interface VideoDrawHraphParameters {
    /** Set 1st frame metadata key from which metadata values will be used to draw a graph. */
    m1 ?: string | number;
    /** Set 1st foreground color expression. */
    fg1 ?: string | number;
    /** Set 2nd frame metadata key from which metadata values will be used to draw a graph. */
    m2 ?: string | number;
    /** Set 2nd foreground color expression. */
    fg2 ?: string | number;
    /** Set 3rd frame metadata key from which metadata values will be used to draw a graph. */
    m3 ?: string | number;
    /** Set 3rd foreground color expression. */
    fg3 ?: string | number;
    /** Set 4th frame metadata key from which metadata values will be used to draw a graph. */
    m4 ?: string | number;
    /** Set 4th foreground color expression. */
    fg4 ?: string | number;
    /** Set minimal value of metadata value. */
    min ?: string | number;
    /** Set maximal value of metadata value. */
    max ?: string | number;
    /** Set graph background color. Default is white. */
    bg ?: string | number;
    /**
      * Set graph mode.
      * Available values for mode is:
      * ‘bar’
      * ‘dot’
      * ‘line’
      * Default is line.
      */
    mode ?: string | number;
    /**
      * Set slide mode.
      * Available values for slide is:
      * ‘frame’
      * Draw new frame when right border is reached.
      * ‘replace’
      * Replace old columns with new ones.
      * ‘scroll’
      * Scroll from right to left.
      * ‘rscroll’
      * Scroll from left to right.
      * ‘picture’
      * Draw single picture.
      * Default is frame.
      */
    slide ?: string | number;
    /**
      * Set size of graph video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. The default value is 900x256.
      */
    size ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * The foreground color expressions can use the following variables:
      * MIN
      * Minimal value of metadata value.
      * MAX
      * Maximal value of metadata value.
      * VAL
      * Current metadata key value.
      * The color is defined as 0xAABBGGRR.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * The foreground color expressions can use the following variables:
      * MIN
      * Minimal value of metadata value.
      * MAX
      * Maximal value of metadata value.
      * VAL
      * Current metadata key value.
      * The color is defined as 0xAABBGGRR.
      * @aliasof rate
      */
    r ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.57 drawgraph
  * Draw a graph using input video metadata.
  * 
  * It accepts the following parameters:
  */
export function videoDrawHraph ( inputs : Stream | Stream[] = [], parameters : VideoDrawHraphParameters = {} as any ) {
    return new VideoDrawHraph( inputs, parameters );
}