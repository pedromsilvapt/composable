import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.52 detelecine
  * Apply an exact inverse of the telecine operation. It requires a predefined pattern specified using the pattern option which must be the same as that passed to the telecine filter.
  * 
  * This filter accepts the following options:
  */
export class VideoDetelecine extends Filter<VideoDetelecineParameters> {
    outputs : FilterStreamRef<VideoDetelecineParameters, VideoDetelecine>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDetelecineParameters = {} as any ) {
        super( inputs, 'detelecine', parameters );
    }
}

export interface VideoDetelecineParameters {
    /**
      * ‘top, t’
      * top field first
      * ‘bottom, b’
      * bottom field first The default value is top.
      */
    first_field ?: string | number;
    /** A string of numbers representing the pulldown pattern you wish to apply. The default value is 23. */
    pattern ?: string | number;
    /** A number representing position of the first frame with respect to the telecine pattern. This is to be used if the stream is cut. The default value is 0. */
    start_frame ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.52 detelecine
  * Apply an exact inverse of the telecine operation. It requires a predefined pattern specified using the pattern option which must be the same as that passed to the telecine filter.
  * 
  * This filter accepts the following options:
  */
export function videoDetelecine ( inputs : Stream | Stream[] = [], parameters : VideoDetelecineParameters = {} as any ) {
    return new VideoDetelecine( inputs, parameters );
}