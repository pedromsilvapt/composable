import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.16 bwdif
  * Deinterlace the input video ("bwdif" stands for "Bob Weaver Deinterlacing Filter").
  * 
  * Motion adaptive deinterlacing based on yadif with the use of w3fdif and cubic interpolation algorithms. It accepts the following parameters:
  */
export class VideoBwdif extends Filter<VideoBwdifParameters> {
    outputs : FilterStreamRef<VideoBwdifParameters, VideoBwdif>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBwdifParameters = {} as any ) {
        super( inputs, 'bwdif', parameters );
    }
}

export interface VideoBwdifParameters {
    /**
      * The interlacing mode to adopt. It accepts one of the following values:
      * 0, send_frame
      * Output one frame for each frame.
      * 1, send_field
      * Output one frame for each field.
      * The default value is send_field.
      */
    mode ?: string | number;
    /**
      * The picture field parity assumed for the input interlaced video. It accepts one of the following values:
      * 0, tff
      * Assume the top field is first.
      * 1, bff
      * Assume the bottom field is first.
      * -1, auto
      * Enable automatic detection of field parity.
      * The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
      */
    parity ?: string | number;
    /**
      * Specify which frames to deinterlace. Accepts one of the following values:
      * 0, all
      * Deinterlace all frames.
      * 1, interlaced
      * Only deinterlace frames marked as interlaced.
      * The default value is all.
      */
    deint ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.16 bwdif
  * Deinterlace the input video ("bwdif" stands for "Bob Weaver Deinterlacing Filter").
  * 
  * Motion adaptive deinterlacing based on yadif with the use of w3fdif and cubic interpolation algorithms. It accepts the following parameters:
  */
export function videoBwdif ( inputs : Stream | Stream[] = [], parameters : VideoBwdifParameters = {} as any ) {
    return new VideoBwdif( inputs, parameters );
}