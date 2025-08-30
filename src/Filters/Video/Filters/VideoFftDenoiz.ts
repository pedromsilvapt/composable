import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.67 fftdnoiz
  * Denoise frames using 3D FFT (frequency domain filtering).
  * 
  * The filter accepts the following options:
  */
export class VideoFftDenoiz extends Filter<VideoFftDenoizParameters> {
    outputs : FilterStreamRef<VideoFftDenoizParameters, VideoFftDenoiz>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFftDenoizParameters = {} as any ) {
        super( inputs, 'fftdnoiz', parameters );
    }
}

export interface VideoFftDenoizParameters {
    /** Set the noise sigma constant. This sets denoising strength. Default value is 1. Allowed range is from 0 to 30. Using very high sigma with low overlap may give blocking artifacts. */
    sigma ?: string | number;
    /** Set amount of denoising. By default all detected noise is reduced. Default value is 1. Allowed range is from 0 to 1. */
    amount ?: string | number;
    /** Set size of block, Default is 4, can be 3, 4, 5 or 6. Actual size of block in pixels is 2 to power of block, so by default block size in pixels is 2^4 which is 16. */
    block ?: string | number;
    /** Set block overlap. Default is 0.5. Allowed range is from 0.2 to 0.8. */
    overlap ?: string | number;
    /** Set number of previous frames to use for denoising. By default is set to 0. */
    prev ?: string | number;
    /** Set number of next frames to to use for denoising. By default is set to 0. */
    next ?: string | number;
    /** Set planes which will be filtered, by default are all available filtered except alpha. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.67 fftdnoiz
  * Denoise frames using 3D FFT (frequency domain filtering).
  * 
  * The filter accepts the following options:
  */
export function videoFftDenoiz ( inputs : Stream | Stream[] = [], parameters : VideoFftDenoizParameters = {} as any ) {
    return new VideoFftDenoiz( inputs, parameters );
}