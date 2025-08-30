import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.102 hue
  * Modify the hue and/or the saturation of the input.
  * 
  * It accepts the following parameters:
  */
export class VideoHue extends Filter<VideoHueParameters> {
    outputs : FilterStreamRef<VideoHueParameters, VideoHue>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHueParameters = {} as any ) {
        super( inputs, 'hue', parameters );
    }
}

export interface VideoHueParameters {
    /** Specify the hue angle as a number of degrees. It accepts an expression, and defaults to "0". */
    h ?: string | number;
    /** Specify the saturation in the [-10,10] range. It accepts an expression and defaults to "1". */
    s ?: string | number;
    /** Specify the hue angle as a number of radians. It accepts an expression, and defaults to "0". */
    H ?: string | number;
    /** Specify the brightness in the [-10,10] range. It accepts an expression and defaults to "0". */
    b ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.102 hue
  * Modify the hue and/or the saturation of the input.
  * 
  * It accepts the following parameters:
  */
export function videoHue ( inputs : Stream | Stream[] = [], parameters : VideoHueParameters = {} as any ) {
    return new VideoHue( inputs, parameters );
}