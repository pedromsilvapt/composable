import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.41 deblock
  * Remove blocking artifacts from input video.
  * 
  * The filter accepts the following options:
  */
export class VideoDeblock extends Filter<VideoDeblockParameters> {
    outputs : FilterStreamRef<VideoDeblockParameters, VideoDeblock>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDeblockParameters = {} as any ) {
        super( inputs, 'deblock', parameters );
    }
}

export interface VideoDeblockParameters {
    /** Set filter type, can be weak or strong. Default is strong. This controls what kind of deblocking is applied. */
    filter ?: string | number;
    /** Set size of block, allowed range is from 4 to 512. Default is 8. */
    block ?: string | number;
    /** Set blocking detection thresholds. Allowed range is 0 to 1. Defaults are: 0.098 for alpha and 0.05 for the rest. Using higher threshold gives more deblocking strength. Setting alpha controls threshold detection at exact edge of block. Remaining options controls threshold detection near the edge. Each one for below/above or left/right. Setting any of those to 0 disables deblocking. */
    alpha ?: string | number;
    /** Set planes to filter. Default is to filter all available planes. */
    beta ?: string | number;
    gamma ?: string | number;
    delta ?: string | number;
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.41 deblock
  * Remove blocking artifacts from input video.
  * 
  * The filter accepts the following options:
  */
export function videoDeblock ( inputs : Stream | Stream[] = [], parameters : VideoDeblockParameters = {} as any ) {
    return new VideoDeblock( inputs, parameters );
}