import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.17 chromahold
  * Remove all color information for all colors except for certain one.
  * 
  * The filter accepts the following options:
  */
export class VideoChromaHold extends Filter<VideoChromaHoldParameters> {
    outputs : FilterStreamRef<VideoChromaHoldParameters, VideoChromaHold>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoChromaHoldParameters = {} as any ) {
        super( inputs, 'chromahold', parameters );
    }
}

export interface VideoChromaHoldParameters {
    /** The color which will not be replaced with neutral chroma. */
    color ?: string | number;
    /** Similarity percentage with the above color. 0.01 matches only the exact key color, while 1.0 matches everything. */
    similarity ?: string | number;
    /** Blend percentage. 0.0 makes pixels either fully gray, or not gray at all. Higher values result in more preserved color. */
    blend ?: string | number;
    /**
      * Signals that the color passed is already in YUV instead of RGB.
      * Literal colors like "green" or "red" don’t make sense with this enabled anymore. This can be used to pass exact YUV values as hexadecimal numbers.
      */
    yuv ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.17 chromahold
  * Remove all color information for all colors except for certain one.
  * 
  * The filter accepts the following options:
  */
export function videoChromaHold ( inputs : Stream | Stream[] = [], parameters : VideoChromaHoldParameters = {} as any ) {
    return new VideoChromaHold( inputs, parameters );
}