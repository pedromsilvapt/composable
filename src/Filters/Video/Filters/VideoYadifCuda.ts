import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.233 yadif_cuda
  * Deinterlace the input video using the yadif algorithm, but implemented in CUDA so that it can work as part of a GPU accelerated pipeline with nvdec and/or nvenc.
  * 
  * It accepts the following parameters:
  */
export class VideoYadifCuda extends Filter<VideoYadifCudaParameters> {
    outputs : FilterStreamRef<VideoYadifCudaParameters, VideoYadifCuda>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoYadifCudaParameters = {} as any ) {
        super( inputs, 'yadif_cuda', parameters );
    }
}

export interface VideoYadifCudaParameters {
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
  * 11.233 yadif_cuda
  * Deinterlace the input video using the yadif algorithm, but implemented in CUDA so that it can work as part of a GPU accelerated pipeline with nvdec and/or nvenc.
  * 
  * It accepts the following parameters:
  */
export function videoYadifCuda ( inputs : Stream | Stream[] = [], parameters : VideoYadifCudaParameters = {} as any ) {
    return new VideoYadifCuda( inputs, parameters );
}