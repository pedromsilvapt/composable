import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.176 scroll
  * Scroll input video horizontally and/or vertically by constant speed.
  * 
  * The filter accepts the following options:
  */
export class VideoScroll extends Filter<VideoScrollParameters> {
    outputs : FilterStreamRef<VideoScrollParameters, VideoScroll>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoScrollParameters = {} as any ) {
        super( inputs, 'scroll', parameters );
    }
}

export interface VideoScrollParameters {
    /**
      * Set the horizontal scrolling speed. Default is 0. Allowed range is from -1 to 1. Negative values changes scrolling direction.
      * @aliases h
      */
    horizontal ?: string | number;
    /**
      * Set the horizontal scrolling speed. Default is 0. Allowed range is from -1 to 1. Negative values changes scrolling direction.
      * @aliasof horizontal
      */
    h ?: string | number;
    /**
      * Set the vertical scrolling speed. Default is 0. Allowed range is from -1 to 1. Negative values changes scrolling direction.
      * @aliases v
      */
    vertical ?: string | number;
    /**
      * Set the vertical scrolling speed. Default is 0. Allowed range is from -1 to 1. Negative values changes scrolling direction.
      * @aliasof vertical
      */
    v ?: string | number;
    /** Set the initial horizontal scrolling position. Default is 0. Allowed range is from 0 to 1. */
    hpos ?: string | number;
    /** Set the initial vertical scrolling position. Default is 0. Allowed range is from 0 to 1. */
    vpos ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.176 scroll
  * Scroll input video horizontally and/or vertically by constant speed.
  * 
  * The filter accepts the following options:
  */
export function videoScroll ( inputs : Stream | Stream[] = [], parameters : VideoScrollParameters = {} as any ) {
    return new VideoScroll( inputs, parameters );
}