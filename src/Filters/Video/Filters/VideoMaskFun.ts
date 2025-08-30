import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.124 maskfun
  * Create mask from input video.
  * 
  * For example it is useful to create motion masks after tblend filter.
  * 
  * This filter accepts the following options:
  */
export class VideoMaskFun extends Filter<VideoMaskFunParameters> {
    outputs : FilterStreamRef<VideoMaskFunParameters, VideoMaskFun>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMaskFunParameters = {} as any ) {
        super( inputs, 'maskfun', parameters );
    }
}

export interface VideoMaskFunParameters {
    /** Set low threshold. Any pixel component lower or exact than this value will be set to 0. */
    low ?: string | number;
    /** Set high threshold. Any pixel component higher than this value will be set to max value allowed for current pixel format. */
    high ?: string | number;
    /** Set planes to filter, by default all available planes are filtered. */
    planes ?: string | number;
    /** Fill all frame pixels with this value. */
    fill ?: string | number;
    /** Set max average pixel value for frame. If sum of all pixel components is higher that this average, output frame will be completely filled with value set by fill option. Typically useful for scene changes when used in combination with tblend filter. */
    sum ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.124 maskfun
  * Create mask from input video.
  * 
  * For example it is useful to create motion masks after tblend filter.
  * 
  * This filter accepts the following options:
  */
export function videoMaskFun ( inputs : Stream | Stream[] = [], parameters : VideoMaskFunParameters = {} as any ) {
    return new VideoMaskFun( inputs, parameters );
}