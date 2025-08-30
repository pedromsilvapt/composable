import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.199 telecine
  * Apply telecine process to the video.
  * 
  * This filter accepts the following options:
  */
export class VideoTelecine extends Filter<VideoTelecineParameters> {
    outputs : FilterStreamRef<VideoTelecineParameters, VideoTelecine>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTelecineParameters = {} as any ) {
        super( inputs, 'telecine', parameters );
    }
}

export interface VideoTelecineParameters {
    /**
      * ‘top, t’
      * top field first
      * ‘bottom, b’
      * bottom field first The default value is top.
      */
    first_field ?: string | number;
    /** A string of numbers representing the pulldown pattern you wish to apply. The default value is 23. */
    pattern ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.199 telecine
  * Apply telecine process to the video.
  * 
  * This filter accepts the following options:
  */
export function videoTelecine ( inputs : Stream | Stream[] = [], parameters : VideoTelecineParameters = {} as any ) {
    return new VideoTelecine( inputs, parameters );
}