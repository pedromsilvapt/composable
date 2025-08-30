import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.51 despill
  * Remove unwanted contamination of foreground colors, caused by reflected color of greenscreen or bluescreen.
  * 
  * This filter accepts the following options:
  */
export class VideoDespill extends Filter<VideoDespillParameters> {
    outputs : FilterStreamRef<VideoDespillParameters, VideoDespill>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDespillParameters = {} as any ) {
        super( inputs, 'despill', parameters );
    }
}

export interface VideoDespillParameters {
    /** Set what type of despill to use. */
    type ?: string | number;
    /** Set how spillmap will be generated. */
    mix ?: string | number;
    /** Set how much to get rid of still remaining spill. */
    expand ?: string | number;
    /** Controls amount of red in spill area. */
    red ?: string | number;
    /** Controls amount of green in spill area. Should be -1 for greenscreen. */
    green ?: string | number;
    /** Controls amount of blue in spill area. Should be -1 for bluescreen. */
    blue ?: string | number;
    /** Controls brightness of spill area, preserving colors. */
    brightness ?: string | number;
    /** Modify alpha from generated spillmap. */
    alpha ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.51 despill
  * Remove unwanted contamination of foreground colors, caused by reflected color of greenscreen or bluescreen.
  * 
  * This filter accepts the following options:
  */
export function videoDespill ( inputs : Stream | Stream[] = [], parameters : VideoDespillParameters = {} as any ) {
    return new VideoDespill( inputs, parameters );
}