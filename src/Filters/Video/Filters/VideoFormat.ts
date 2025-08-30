import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.77 format
  * Convert the input video to one of the specified pixel formats. Libavfilter will try to pick one that is suitable as input to the next filter.
  * 
  * It accepts the following parameters:
  */
export class VideoFormat extends Filter<VideoFormatParameters> {
    outputs : FilterStreamRef<VideoFormatParameters, VideoFormat>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFormatParameters = {} as any ) {
        super( inputs, 'format', parameters );
    }
}

export interface VideoFormatParameters {
    /** A ’|’-separated list of pixel format names, such as "pix_fmts=yuv420p|monow|rgb24". */
    pix_fmts ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.77 format
  * Convert the input video to one of the specified pixel formats. Libavfilter will try to pick one that is suitable as input to the next filter.
  * 
  * It accepts the following parameters:
  */
export function videoFormat ( inputs : Stream | Stream[] = [], parameters : VideoFormatParameters = {} as any ) {
    return new VideoFormat( inputs, parameters );
}