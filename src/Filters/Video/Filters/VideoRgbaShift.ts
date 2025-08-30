import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.169 rgbashift
  * Shift R/G/B/A pixels horizontally and/or vertically.
  * 
  * The filter accepts the following options:
  */
export class VideoRgbaShift extends Filter<VideoRgbaShiftParameters> {
    outputs : FilterStreamRef<VideoRgbaShiftParameters, VideoRgbaShift>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRgbaShiftParameters = {} as any ) {
        super( inputs, 'rgbashift', parameters );
    }
}

export interface VideoRgbaShiftParameters {
    /** Set amount to shift red horizontally. */
    rh ?: string | number;
    /** Set amount to shift red vertically. */
    rv ?: string | number;
    /** Set amount to shift green horizontally. */
    gh ?: string | number;
    /** Set amount to shift green vertically. */
    gv ?: string | number;
    /** Set amount to shift blue horizontally. */
    bh ?: string | number;
    /** Set amount to shift blue vertically. */
    bv ?: string | number;
    /** Set amount to shift alpha horizontally. */
    ah ?: string | number;
    /** Set amount to shift alpha vertically. */
    av ?: string | number;
    /** Set edge mode, can be smear, default, or warp. */
    edge ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.169 rgbashift
  * Shift R/G/B/A pixels horizontally and/or vertically.
  * 
  * The filter accepts the following options:
  */
export function videoRgbaShift ( inputs : Stream | Stream[] = [], parameters : VideoRgbaShiftParameters = {} as any ) {
    return new VideoRgbaShift( inputs, parameters );
}