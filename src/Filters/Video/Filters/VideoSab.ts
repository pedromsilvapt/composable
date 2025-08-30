import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.172 sab
  * Apply Shape Adaptive Blur.
  * 
  * The filter accepts the following options:
  */
export class VideoSab extends Filter<VideoSabParameters> {
    outputs : FilterStreamRef<VideoSabParameters, VideoSab>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSabParameters = {} as any ) {
        super( inputs, 'sab', parameters );
    }
}

export interface VideoSabParameters {
    /**
      * Set luma blur filter strength, must be a value in range 0.1-4.0, default value is 1.0. A greater value will result in a more blurred image, and in slower processing.
      * @aliases lr
      */
    luma_radius ?: string | number;
    /**
      * Set luma blur filter strength, must be a value in range 0.1-4.0, default value is 1.0. A greater value will result in a more blurred image, and in slower processing.
      * @aliasof luma_radius
      */
    lr ?: string | number;
    /**
      * Set luma pre-filter radius, must be a value in the 0.1-2.0 range, default value is 1.0.
      * @aliases lpfr
      */
    luma_pre_filter_radius ?: string | number;
    /**
      * Set luma pre-filter radius, must be a value in the 0.1-2.0 range, default value is 1.0.
      * @aliasof luma_pre_filter_radius
      */
    lpfr ?: string | number;
    /**
      * Set luma maximum difference between pixels to still be considered, must be a value in the 0.1-100.0 range, default value is 1.0.
      * @aliases ls
      */
    luma_strength ?: string | number;
    /**
      * Set luma maximum difference between pixels to still be considered, must be a value in the 0.1-100.0 range, default value is 1.0.
      * @aliasof luma_strength
      */
    ls ?: string | number;
    /**
      * Set chroma blur filter strength, must be a value in range -0.9-4.0. A greater value will result in a more blurred image, and in slower processing.
      * @aliases cr
      */
    chroma_radius ?: string | number;
    /**
      * Set chroma blur filter strength, must be a value in range -0.9-4.0. A greater value will result in a more blurred image, and in slower processing.
      * @aliasof chroma_radius
      */
    cr ?: string | number;
    /**
      * Set chroma pre-filter radius, must be a value in the -0.9-2.0 range.
      * @aliases cpfr
      */
    chroma_pre_filter_radius ?: string | number;
    /**
      * Set chroma pre-filter radius, must be a value in the -0.9-2.0 range.
      * @aliasof chroma_pre_filter_radius
      */
    cpfr ?: string | number;
    /**
      * Set chroma maximum difference between pixels to still be considered, must be a value in the -0.9-100.0 range.
      * @aliases cs
      */
    chroma_strength ?: string | number;
    /**
      * Set chroma maximum difference between pixels to still be considered, must be a value in the -0.9-100.0 range.
      * @aliasof chroma_strength
      */
    cs ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.172 sab
  * Apply Shape Adaptive Blur.
  * 
  * The filter accepts the following options:
  */
export function videoSab ( inputs : Stream | Stream[] = [], parameters : VideoSabParameters = {} as any ) {
    return new VideoSab( inputs, parameters );
}