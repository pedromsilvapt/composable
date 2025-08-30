import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.144 owdenoise
  * Apply Overcomplete Wavelet denoiser.
  * 
  * The filter accepts the following options:
  */
export class VideoOwDenoise extends Filter<VideoOwDenoiseParameters> {
    outputs : FilterStreamRef<VideoOwDenoiseParameters, VideoOwDenoise>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoOwDenoiseParameters = {} as any ) {
        super( inputs, 'owdenoise', parameters );
    }
}

export interface VideoOwDenoiseParameters {
    /**
      * Set depth.
      * Larger depth values will denoise lower frequency components more, but slow down filtering.
      * Must be an int in the range 8-16, default is 8.
      */
    depth ?: string | number;
    /**
      * Set luma strength.
      * Must be a double value in the range 0-1000, default is 1.0.
      * @aliases ls
      */
    luma_strength ?: string | number;
    /**
      * Set luma strength.
      * Must be a double value in the range 0-1000, default is 1.0.
      * @aliasof luma_strength
      */
    ls ?: string | number;
    /**
      * Set chroma strength.
      * Must be a double value in the range 0-1000, default is 1.0.
      * @aliases cs
      */
    chroma_strength ?: string | number;
    /**
      * Set chroma strength.
      * Must be a double value in the range 0-1000, default is 1.0.
      * @aliasof chroma_strength
      */
    cs ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.144 owdenoise
  * Apply Overcomplete Wavelet denoiser.
  * 
  * The filter accepts the following options:
  */
export function videoOwDenoise ( inputs : Stream | Stream[] = [], parameters : VideoOwDenoiseParameters = {} as any ) {
    return new VideoOwDenoise( inputs, parameters );
}