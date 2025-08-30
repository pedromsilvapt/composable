import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.215 vaguedenoiser
  * Apply a wavelet based denoiser.
  * 
  * It transforms each frame from the video input into the wavelet domain, using Cohen-Daubechies-Feauveau 9/7. Then it applies some filtering to the obtained coefficients. It does an inverse wavelet transform after. Due to wavelet properties, it should give a nice smoothed result, and reduced noise, without blurring picture features.
  * 
  * This filter accepts the following options:
  */
export class VideoAgueDenoiser extends Filter<VideoAgueDenoiserParameters> {
    outputs : FilterStreamRef<VideoAgueDenoiserParameters, VideoAgueDenoiser>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAgueDenoiserParameters = {} as any ) {
        super( inputs, 'vaguedenoiser', parameters );
    }
}

export interface VideoAgueDenoiserParameters {
    /** The filtering strength. The higher, the more filtered the video will be. Hard thresholding can use a higher threshold than soft thresholding before the video looks overfiltered. Default value is 2. */
    threshold ?: string | number;
    /**
      * The filtering method the filter will use.
      * It accepts the following values:
      * ‘hard’
      * All values under the threshold will be zeroed.
      * ‘soft’
      * All values under the threshold will be zeroed. All values above will be reduced by the threshold.
      * ‘garrote’
      * Scales or nullifies coefficients - intermediary between (more) soft and (less) hard thresholding.
      * Default is garrote.
      */
    method ?: string | number;
    /** Number of times, the wavelet will decompose the picture. Picture can’t be decomposed beyond a particular point (typically, 8 for a 640x480 frame - as 2^9 = 512 > 480). Valid values are integers between 1 and 32. Default value is 6. */
    nsteps ?: string | number;
    /** Partial of full denoising (limited coefficients shrinking), from 0 to 100. Default value is 85. */
    percent ?: string | number;
    /** A list of the planes to process. By default all planes are processed. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.215 vaguedenoiser
  * Apply a wavelet based denoiser.
  * 
  * It transforms each frame from the video input into the wavelet domain, using Cohen-Daubechies-Feauveau 9/7. Then it applies some filtering to the obtained coefficients. It does an inverse wavelet transform after. Due to wavelet properties, it should give a nice smoothed result, and reduced noise, without blurring picture features.
  * 
  * This filter accepts the following options:
  */
export function videoAgueDenoiser ( inputs : Stream | Stream[] = [], parameters : VideoAgueDenoiserParameters = {} as any ) {
    return new VideoAgueDenoiser( inputs, parameters );
}