import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.152 pixscope
  * Display sample values of color channels. Mainly useful for checking color and levels. Minimum supported resolution is 640x480.
  * 
  * The filters accept the following options:
  */
export class VideoPixScope extends Filter<VideoPixScopeParameters> {
    outputs : FilterStreamRef<VideoPixScopeParameters, VideoPixScope>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPixScopeParameters = {} as any ) {
        super( inputs, 'pixscope', parameters );
    }
}

export interface VideoPixScopeParameters {
    /** Set scope X position, relative offset on X axis. */
    x ?: string | number;
    /** Set scope Y position, relative offset on Y axis. */
    y ?: string | number;
    /** Set scope width. */
    w ?: string | number;
    /** Set scope height. */
    h ?: string | number;
    /** Set window opacity. This window also holds statistics about pixel area. */
    o ?: string | number;
    /** Set window X position, relative offset on X axis. */
    wx ?: string | number;
    /** Set window Y position, relative offset on Y axis. */
    wy ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.152 pixscope
  * Display sample values of color channels. Mainly useful for checking color and levels. Minimum supported resolution is 640x480.
  * 
  * The filters accept the following options:
  */
export function videoPixScope ( inputs : Stream | Stream[] = [], parameters : VideoPixScopeParameters = {} as any ) {
    return new VideoPixScope( inputs, parameters );
}