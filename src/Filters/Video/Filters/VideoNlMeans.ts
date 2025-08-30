import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.134 nlmeans
  * Denoise frames using Non-Local Means algorithm.
  * 
  * Each pixel is adjusted by looking for other pixels with similar contexts. This context similarity is defined by comparing their surrounding patches of size
  * pxp. Patches are searched in an area of rxr around the pixel.
  * 
  * Note that the research area defines centers for patches, which means some patches will be made of pixels outside that research area.
  * 
  * The filter accepts the following options.
  */
export class VideoNlMeans extends Filter<VideoNlMeansParameters> {
    outputs : FilterStreamRef<VideoNlMeansParameters, VideoNlMeans>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNlMeansParameters = {} as any ) {
        super( inputs, 'nlmeans', parameters );
    }
}

export interface VideoNlMeansParameters {
    /** Set denoising strength. Default is 1.0. Must be in range [1.0, 30.0]. */
    s ?: string | number;
    /** Set patch size. Default is 7. Must be odd number in range [0, 99]. */
    p ?: string | number;
    /**
      * Same as p but for chroma planes.
      * The default value is 0 and means automatic.
      */
    pc ?: string | number;
    /** Set research size. Default is 15. Must be odd number in range [0, 99]. */
    r ?: string | number;
    /**
      * Same as r but for chroma planes.
      * The default value is 0 and means automatic.
      */
    rc ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.134 nlmeans
  * Denoise frames using Non-Local Means algorithm.
  * 
  * Each pixel is adjusted by looking for other pixels with similar contexts. This context similarity is defined by comparing their surrounding patches of size
  * pxp. Patches are searched in an area of rxr around the pixel.
  * 
  * Note that the research area defines centers for patches, which means some patches will be made of pixels outside that research area.
  * 
  * The filter accepts the following options.
  */
export function videoNlMeans ( inputs : Stream | Stream[] = [], parameters : VideoNlMeansParameters = {} as any ) {
    return new VideoNlMeans( inputs, parameters );
}