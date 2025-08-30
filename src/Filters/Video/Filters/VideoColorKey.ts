import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.24 colorkey
  * RGB colorspace color keying.
  * 
  * The filter accepts the following options:
  */
export class VideoColorKey extends Filter<VideoColorKeyParameters> {
    outputs : FilterStreamRef<VideoColorKeyParameters, VideoColorKey>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorKeyParameters = {} as any ) {
        super( inputs, 'colorkey', parameters );
    }
}

export interface VideoColorKeyParameters {
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

    [key : string] : string | number;
}

/**
  * 11.24 colorkey
  * RGB colorspace color keying.
  * 
  * The filter accepts the following options:
  */
export function videoColorKey ( inputs : Stream | Stream[] = [], parameters : VideoColorKeyParameters = {} as any ) {
    return new VideoColorKey( inputs, parameters );
}