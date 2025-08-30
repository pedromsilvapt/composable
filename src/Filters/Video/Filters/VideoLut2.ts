import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.119 lut2
  * The lut2 filter takes two input streams and outputs one stream.
  * 
  * The tlut2 (time lut2) filter takes two consecutive frames from one single stream.
  * 
  * This filter accepts the following parameters:
  */
export class VideoLut2 extends Filter<VideoLut2Parameters> {
    outputs : FilterStreamRef<VideoLut2Parameters, VideoLut2>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLut2Parameters = {} as any ) {
        super( inputs, 'lut2', parameters );
    }
}

export interface VideoLut2Parameters {
    /** set first pixel component expression */
    c0 ?: string | number;
    /** set second pixel component expression */
    c1 ?: string | number;
    /** set third pixel component expression */
    c2 ?: string | number;
    /** set fourth pixel component expression, corresponds to the alpha component */
    c3 ?: string | number;
    /** set output bit depth, only available for lut2 filter. By default is 0, which means bit depth is automatically picked from first input format. */
    d ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.119 lut2
  * The lut2 filter takes two input streams and outputs one stream.
  * 
  * The tlut2 (time lut2) filter takes two consecutive frames from one single stream.
  * 
  * This filter accepts the following parameters:
  */
export function videoLut2 ( inputs : Stream | Stream[] = [], parameters : VideoLut2Parameters = {} as any ) {
    return new VideoLut2( inputs, parameters );
}