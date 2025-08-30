import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.118 lutrgb
  * Compute a look-up table for binding each pixel component input value to an output value, and apply it to the input video.
  * 
  * lutyuv applies a lookup table to a YUV input video, lutrgb to an RGB input video.
  * 
  * These filters accept the following parameters:
  */
export class VideoLutrgb extends Filter<VideoLutrgbParameters> {
    outputs : FilterStreamRef<VideoLutrgbParameters, VideoLutrgb>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLutrgbParameters = {} as any ) {
        super( inputs, 'lutrgb', parameters );
    }
}

export interface VideoLutrgbParameters {
    /** set first pixel component expression */
    c0 ?: string | number;
    /** set second pixel component expression */
    c1 ?: string | number;
    /** set third pixel component expression */
    c2 ?: string | number;
    /** set fourth pixel component expression, corresponds to the alpha component */
    c3 ?: string | number;
    /** set red component expression */
    r ?: string | number;
    /** set green component expression */
    g ?: string | number;
    /** set blue component expression */
    b ?: string | number;
    /** alpha component expression */
    a ?: string | number;
    /** set Y/luminance component expression */
    y ?: string | number;
    /** set U/Cb component expression */
    u ?: string | number;
    /** set V/Cr component expression */
    v ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.118 lutrgb
  * Compute a look-up table for binding each pixel component input value to an output value, and apply it to the input video.
  * 
  * lutyuv applies a lookup table to a YUV input video, lutrgb to an RGB input video.
  * 
  * These filters accept the following parameters:
  */
export function videoLutrgb ( inputs : Stream | Stream[] = [], parameters : VideoLutrgbParameters = {} as any ) {
    return new VideoLutrgb( inputs, parameters );
}