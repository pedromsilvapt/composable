import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.141 ocv
  * Apply a video transform using libopencv.
  * 
  * To enable this filter, install the libopencv library and headers and configure FFmpeg with --enable-libopencv.
  * 
  * It accepts the following parameters:
  */
export class VideoOcv extends Filter<VideoOcvParameters> {
    outputs : FilterStreamRef<VideoOcvParameters, VideoOcv>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoOcvParameters = {} as any ) {
        super( inputs, 'ocv', parameters );
    }
}

export interface VideoOcvParameters {
    /** The name of the libopencv filter to apply. */
    filter_name ?: string | number;
    /** The parameters to pass to the libopencv filter. If not specified, the default values are assumed. */
    filter_params ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.141 ocv
  * Apply a video transform using libopencv.
  * 
  * To enable this filter, install the libopencv library and headers and configure FFmpeg with --enable-libopencv.
  * 
  * It accepts the following parameters:
  */
export function videoOcv ( inputs : Stream | Stream[] = [], parameters : VideoOcvParameters = {} as any ) {
    return new VideoOcv( inputs, parameters );
}