import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.22 colorbalance
  * Modify intensity of primary colors (red, green and blue) of input frames.
  * 
  * The filter allows an input frame to be adjusted in the shadows, midtones or highlights regions for the red-cyan, green-magenta or blue-yellow balance.
  * 
  * A positive adjustment value shifts the balance towards the primary color, a negative value towards the complementary color.
  * 
  * The filter accepts the following options:
  */
export class VideoColorBalance extends Filter<VideoColorBalanceParameters> {
    outputs : FilterStreamRef<VideoColorBalanceParameters, VideoColorBalance>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorBalanceParameters = {} as any ) {
        super( inputs, 'colorbalance', parameters );
    }
}

export interface VideoColorBalanceParameters {
    /** Adjust red, green and blue shadows (darkest pixels). */
    rs ?: string | number;
    /** Adjust red, green and blue midtones (medium pixels). */
    gs ?: string | number;
    /**
      * Adjust red, green and blue highlights (brightest pixels).
      * Allowed ranges for options are [-1.0, 1.0]. Defaults are 0.
      */
    bs ?: string | number;
    /** Preserve lightness when changing color balance. Default is disabled. */
    rm ?: string | number;
    gm ?: string | number;
    bm ?: string | number;
    rh ?: string | number;
    gh ?: string | number;
    bh ?: string | number;
    pl ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.22 colorbalance
  * Modify intensity of primary colors (red, green and blue) of input frames.
  * 
  * The filter allows an input frame to be adjusted in the shadows, midtones or highlights regions for the red-cyan, green-magenta or blue-yellow balance.
  * 
  * A positive adjustment value shifts the balance towards the primary color, a negative value towards the complementary color.
  * 
  * The filter accepts the following options:
  */
export function videoColorBalance ( inputs : Stream | Stream[] = [], parameters : VideoColorBalanceParameters = {} as any ) {
    return new VideoColorBalance( inputs, parameters );
}