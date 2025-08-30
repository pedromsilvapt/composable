import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.136 noformat
  * Force libavfilter not to use any of the specified pixel formats for the input to the next filter.
  * 
  * It accepts the following parameters:
  */
export class VideoNoFormat extends Filter<VideoNoFormatParameters> {
    outputs : FilterStreamRef<VideoNoFormatParameters, VideoNoFormat>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNoFormatParameters = {} as any ) {
        super( inputs, 'noformat', parameters );
    }
}

export interface VideoNoFormatParameters {
    /** A ’|’-separated list of pixel format names, such as pix_fmts=yuv420p|monow|rgb24". */
    pix_fmts ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.136 noformat
  * Force libavfilter not to use any of the specified pixel formats for the input to the next filter.
  * 
  * It accepts the following parameters:
  */
export function videoNoFormat ( inputs : Stream | Stream[] = [], parameters : VideoNoFormatParameters = {} as any ) {
    return new VideoNoFormat( inputs, parameters );
}