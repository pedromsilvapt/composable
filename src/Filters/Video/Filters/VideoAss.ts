import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.5 ass
  * Same as the subtitles filter, except that it doesn’t require libavcodec and libavformat to work. On the other hand, it is limited to ASS (Advanced Substation Alpha) subtitles files.
  * 
  * This filter accepts the following option in addition to the common options from the subtitles filter:
  */
export class VideoAss extends Filter<VideoAssParameters> {
    outputs : FilterStreamRef<VideoAssParameters, VideoAss>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAssParameters = {} as any ) {
        super( inputs, 'ass', parameters );
    }
}

export interface VideoAssParameters {
    /**
      * Set the shaping engine
      * Available values are:
      * ‘auto’
      * The default libass shaping engine, which is the best available.
      * ‘simple’
      * Fast, font-agnostic shaper that can do only substitutions
      * ‘complex’
      * Slower shaper using OpenType for substitutions and positioning
      * The default is auto.
      */
    shaping ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.5 ass
  * Same as the subtitles filter, except that it doesn’t require libavcodec and libavformat to work. On the other hand, it is limited to ASS (Advanced Substation Alpha) subtitles files.
  * 
  * This filter accepts the following option in addition to the common options from the subtitles filter:
  */
export function videoAss ( inputs : Stream | Stream[] = [], parameters : VideoAssParameters = {} as any ) {
    return new VideoAss( inputs, parameters );
}