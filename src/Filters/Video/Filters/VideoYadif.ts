import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.232 yadif
  * Deinterlace the input video ("yadif" means "yet another deinterlacing filter").
  * 
  * It accepts the following parameters:
  */
export class VideoYadif extends Filter<VideoYadifParameters> {
    outputs : FilterStreamRef<VideoYadifParameters, VideoYadif>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoYadifParameters = {} as any ) {
        super( inputs, 'yadif', parameters );
    }
}

export interface VideoYadifParameters {
    /**
      * The interlacing mode to adopt. It accepts one of the following values:
      * 0, send_frame
      * Output one frame for each frame.
      * 1, send_field
      * Output one frame for each field.
      * 2, send_frame_nospatial
      * Like send_frame, but it skips the spatial interlacing check.
      * 3, send_field_nospatial
      * Like send_field, but it skips the spatial interlacing check.
      * The default value is send_frame.
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
  * 11.232 yadif
  * Deinterlace the input video ("yadif" means "yet another deinterlacing filter").
  * 
  * It accepts the following parameters:
  */
export function videoYadif ( inputs : Stream | Stream[] = [], parameters : VideoYadifParameters = {} as any ) {
    return new VideoYadif( inputs, parameters );
}