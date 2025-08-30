import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.119 tlut2
  * The lut2 filter takes two input streams and outputs one stream.
  * 
  * The tlut2 (time lut2) filter takes two consecutive frames from one single stream.
  * 
  * This filter accepts the following parameters:
  */
export class VideoTlut2 extends Filter<VideoTlut2Parameters> {
    outputs : FilterStreamRef<VideoTlut2Parameters, VideoTlut2>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTlut2Parameters = {} as any ) {
        super( inputs, 'tlut2', parameters );
    }
}

export interface VideoTlut2Parameters {
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
  * 11.119 tlut2
  * The lut2 filter takes two input streams and outputs one stream.
  * 
  * The tlut2 (time lut2) filter takes two consecutive frames from one single stream.
  * 
  * This filter accepts the following parameters:
  */
export function videoTlut2 ( inputs : Stream | Stream[] = [], parameters : VideoTlut2Parameters = {} as any ) {
    return new VideoTlut2( inputs, parameters );
}