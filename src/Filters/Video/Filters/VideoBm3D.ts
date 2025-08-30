import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.14 bm3d
  * Denoise frames using Block-Matching 3D algorithm.
  * 
  * The filter accepts the following options.
  */
export class VideoBm3D extends Filter<VideoBm3DParameters> {
    outputs : FilterStreamRef<VideoBm3DParameters, VideoBm3D>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBm3DParameters = {} as any ) {
        super( inputs, 'bm3d', parameters );
    }
}

export interface VideoBm3DParameters {
    /** Set denoising strength. Default value is 1. Allowed range is from 0 to 999.9. The denoising algorithm is very sensitive to sigma, so adjust it according to the source. */
    sigma ?: string | number;
    /** Set local patch size. This sets dimensions in 2D. */
    block ?: string | number;
    /** Set sliding step for processing blocks. Default value is 4. Allowed range is from 1 to 64. Smaller values allows processing more reference blocks and is slower. */
    bstep ?: string | number;
    /** Set maximal number of similar blocks for 3rd dimension. Default value is 1. When set to 1, no block matching is done. Larger values allows more blocks in single group. Allowed range is from 1 to 256. */
    group ?: string | number;
    /** Set radius for search block matching. Default is 9. Allowed range is from 1 to INT32_MAX. */
    range ?: string | number;
    /** Set step between two search locations for block matching. Default is 1. Allowed range is from 1 to 64. Smaller is slower. */
    mstep ?: string | number;
    /** Set threshold of mean square error for block matching. Valid range is 0 to INT32_MAX. */
    thmse ?: string | number;
    /** Set thresholding parameter for hard thresholding in 3D transformed domain. Larger values results in stronger hard-thresholding filtering in frequency domain. */
    hdthr ?: string | number;
    /** Set filtering estimation mode. Can be basic or final. Default is basic. */
    estim ?: string | number;
    /** If enabled, filter will use 2nd stream for block matching. Default is disabled for basic value of estim option, and always enabled if value of estim is final. */
    ref ?: string | number;
    /** Set planes to filter. Default is all available except alpha. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.14 bm3d
  * Denoise frames using Block-Matching 3D algorithm.
  * 
  * The filter accepts the following options.
  */
export function videoBm3D ( inputs : Stream | Stream[] = [], parameters : VideoBm3DParameters = {} as any ) {
    return new VideoBm3D( inputs, parameters );
}