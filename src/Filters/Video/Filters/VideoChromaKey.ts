import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.18 chromakey
  * YUV colorspace color/chroma keying.
  * 
  * The filter accepts the following options:
  */
export class VideoChromaKey extends Filter<VideoChromaKeyParameters> {
    outputs : FilterStreamRef<VideoChromaKeyParameters, VideoChromaKey>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoChromaKeyParameters = {} as any ) {
        super( inputs, 'chromakey', parameters );
    }
}

export interface VideoChromaKeyParameters {
    /** The color which will be replaced with transparency. */
    color ?: string | number;
    /**
      * Similarity percentage with the key color.
      * 0.01 matches only the exact key color, while 1.0 matches everything.
      */
    similarity ?: string | number;
    /**
      * Blend percentage.
      * 0.0 makes pixels either fully transparent, or not transparent at all.
      * Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
      */
    blend ?: string | number;
    /**
      * Signals that the color passed is already in YUV instead of RGB.
      * Literal colors like "green" or "red" don’t make sense with this enabled anymore. This can be used to pass exact YUV values as hexadecimal numbers.
      */
    yuv ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.18 chromakey
  * YUV colorspace color/chroma keying.
  * 
  * The filter accepts the following options:
  */
export function videoChromaKey ( inputs : Stream | Stream[] = [], parameters : VideoChromaKeyParameters = {} as any ) {
    return new VideoChromaKey( inputs, parameters );
}