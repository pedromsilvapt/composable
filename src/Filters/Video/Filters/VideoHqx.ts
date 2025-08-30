import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.100 hqx
  * Apply a high-quality magnification filter designed for pixel art. This filter was originally created by Maxim Stepin.
  * 
  * It accepts the following option:
  */
export class VideoHqx extends Filter<VideoHqxParameters> {
    outputs : FilterStreamRef<VideoHqxParameters, VideoHqx>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHqxParameters = {} as any ) {
        super( inputs, 'hqx', parameters );
    }
}

export interface VideoHqxParameters {
    /**
      * Set the scaling dimension: 2 for hq2x, 3 for
      * hq3x and 4 for hq4x. Default is 3.
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.100 hqx
  * Apply a high-quality magnification filter designed for pixel art. This filter was originally created by Maxim Stepin.
  * 
  * It accepts the following option:
  */
export function videoHqx ( inputs : Stream | Stream[] = [], parameters : VideoHqxParameters = {} as any ) {
    return new VideoHqx( inputs, parameters );
}