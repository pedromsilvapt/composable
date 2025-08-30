import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.137 noise
  * Add noise on video input frame.
  * 
  * The filter accepts the following options:
  */
export class VideoNoise extends Filter<VideoNoiseParameters> {
    outputs : FilterStreamRef<VideoNoiseParameters, VideoNoise>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNoiseParameters = {} as any ) {
        super( inputs, 'noise', parameters );
    }
}

export interface VideoNoiseParameters {
    /** Set noise seed for specific pixel component or all pixel components in case of all_seed. Default value is 123457. */
    all_seed ?: string | number;
    /**
      * Set noise strength for specific pixel component or all pixel components in case
      * all_strength. Default value is 0. Allowed range is [0, 100].
      */
    c0_seed ?: string | number;
    /**
      * Set pixel component flags or set flags for all components if all_flags. Available values for component flags are:
      * ‘a’
      * averaged temporal noise (smoother)
      * ‘p’
      * mix random noise with a (semi)regular pattern
      * ‘t’
      * temporal noise (noise pattern changes between frames)
      * ‘u’
      * uniform noise (gaussian otherwise)
      */
    c1_seed ?: string | number;
    c2_seed ?: string | number;
    c3_seed ?: string | number;
    /** @aliases alls */
    all_strength ?: string | number;
    /** @aliasof all_strength */
    alls ?: string | number;
    /** @aliases c0s */
    c0_strength ?: string | number;
    /** @aliasof c0_strength */
    c0s ?: string | number;
    /** @aliases c1s */
    c1_strength ?: string | number;
    /** @aliasof c1_strength */
    c1s ?: string | number;
    /** @aliases c2s */
    c2_strength ?: string | number;
    /** @aliasof c2_strength */
    c2s ?: string | number;
    /** @aliases c3s */
    c3_strength ?: string | number;
    /** @aliasof c3_strength */
    c3s ?: string | number;
    /** @aliases allf */
    all_flags ?: string | number;
    /** @aliasof all_flags */
    allf ?: string | number;
    /** @aliases c0f */
    c0_flags ?: string | number;
    /** @aliasof c0_flags */
    c0f ?: string | number;
    /** @aliases c1f */
    c1_flags ?: string | number;
    /** @aliasof c1_flags */
    c1f ?: string | number;
    /** @aliases c2f */
    c2_flags ?: string | number;
    /** @aliasof c2_flags */
    c2f ?: string | number;
    /** @aliases c3f */
    c3_flags ?: string | number;
    /** @aliasof c3_flags */
    c3f ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.137 noise
  * Add noise on video input frame.
  * 
  * The filter accepts the following options:
  */
export function videoNoise ( inputs : Stream | Stream[] = [], parameters : VideoNoiseParameters = {} as any ) {
    return new VideoNoise( inputs, parameters );
}