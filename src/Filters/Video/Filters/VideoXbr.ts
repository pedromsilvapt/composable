import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.228 xbr
  * Apply the xBR high-quality magnification filter which is designed for pixel art. It follows a set of edge-detection rules, see
  * https://forums.libretro.com/t/xbr-algorithm-tutorial/123.
  * 
  * It accepts the following option:
  */
export class VideoXbr extends Filter<VideoXbrParameters> {
    outputs : FilterStreamRef<VideoXbrParameters, VideoXbr>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoXbrParameters = {} as any ) {
        super( inputs, 'xbr', parameters );
    }
}

export interface VideoXbrParameters {
    /**
      * Set the scaling dimension: 2 for 2xBR, 3 for
      * 3xBR and 4 for 4xBR. Default is 3.
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.228 xbr
  * Apply the xBR high-quality magnification filter which is designed for pixel art. It follows a set of edge-detection rules, see
  * https://forums.libretro.com/t/xbr-algorithm-tutorial/123.
  * 
  * It accepts the following option:
  */
export function videoXbr ( inputs : Stream | Stream[] = [], parameters : VideoXbrParameters = {} as any ) {
    return new VideoXbr( inputs, parameters );
}