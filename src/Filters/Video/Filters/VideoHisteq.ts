import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.93 histeq
  * This filter applies a global color histogram equalization on a per-frame basis.
  * 
  * It can be used to correct video that has a compressed range of pixel intensities. The filter redistributes the pixel intensities to equalize their distribution across the intensity range. It may be viewed as an "automatically adjusting contrast filter". This filter is useful only for correcting degraded or poorly captured source video.
  * 
  * The filter accepts the following options:
  */
export class VideoHisteq extends Filter<VideoHisteqParameters> {
    outputs : FilterStreamRef<VideoHisteqParameters, VideoHisteq>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHisteqParameters = {} as any ) {
        super( inputs, 'histeq', parameters );
    }
}

export interface VideoHisteqParameters {
    /** Determine the amount of equalization to be applied. As the strength is reduced, the distribution of pixel intensities more-and-more approaches that of the input frame. The value must be a float number in the range [0,1] and defaults to 0.200. */
    strength ?: string | number;
    /** Set the maximum intensity that can generated and scale the output values appropriately. The strength should be set as desired and then the intensity can be limited if needed to avoid washing-out. The value must be a float number in the range [0,1] and defaults to 0.210. */
    intensity ?: string | number;
    /**
      * Set the antibanding level. If enabled the filter will randomly vary the luminance of output pixels by a small amount to avoid banding of the histogram. Possible values are none, weak or
      * strong. It defaults to none.
      */
    antibanding ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.93 histeq
  * This filter applies a global color histogram equalization on a per-frame basis.
  * 
  * It can be used to correct video that has a compressed range of pixel intensities. The filter redistributes the pixel intensities to equalize their distribution across the intensity range. It may be viewed as an "automatically adjusting contrast filter". This filter is useful only for correcting degraded or poorly captured source video.
  * 
  * The filter accepts the following options:
  */
export function videoHisteq ( inputs : Stream | Stream[] = [], parameters : VideoHisteqParameters = {} as any ) {
    return new VideoHisteq( inputs, parameters );
}