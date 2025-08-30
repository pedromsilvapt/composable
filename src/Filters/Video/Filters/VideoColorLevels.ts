import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.26 colorlevels
  * Adjust video input frames using levels.
  * 
  * The filter accepts the following options:
  */
export class VideoColorLevels extends Filter<VideoColorLevelsParameters> {
    outputs : FilterStreamRef<VideoColorLevelsParameters, VideoColorLevels>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorLevelsParameters = {} as any ) {
        super( inputs, 'colorlevels', parameters );
    }
}

export interface VideoColorLevelsParameters {
    /** Adjust red, green, blue and alpha input black point. Allowed ranges for options are [-1.0, 1.0]. Defaults are 0. */
    rimin ?: string | number;
    /**
      * Adjust red, green, blue and alpha input white point. Allowed ranges for options are [-1.0, 1.0]. Defaults are 1.
      * Input levels are used to lighten highlights (bright tones), darken shadows (dark tones), change the balance of bright and dark tones.
      */
    gimin ?: string | number;
    /** Adjust red, green, blue and alpha output black point. Allowed ranges for options are [0, 1.0]. Defaults are 0. */
    bimin ?: string | number;
    /**
      * Adjust red, green, blue and alpha output white point. Allowed ranges for options are [0, 1.0]. Defaults are 1.
      * Output levels allows manual selection of a constrained output level range.
      */
    aimin ?: string | number;
    rimax ?: string | number;
    gimax ?: string | number;
    bimax ?: string | number;
    aimax ?: string | number;
    romin ?: string | number;
    gomin ?: string | number;
    bomin ?: string | number;
    aomin ?: string | number;
    romax ?: string | number;
    gomax ?: string | number;
    bomax ?: string | number;
    aomax ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.26 colorlevels
  * Adjust video input frames using levels.
  * 
  * The filter accepts the following options:
  */
export function videoColorLevels ( inputs : Stream | Stream[] = [], parameters : VideoColorLevelsParameters = {} as any ) {
    return new VideoColorLevels( inputs, parameters );
}