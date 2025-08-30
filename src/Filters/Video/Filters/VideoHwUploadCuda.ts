import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.99 hwupload_cuda
  * Upload system memory frames to a CUDA device.
  * 
  * It accepts the following optional parameters:
  */
export class VideoHwUploadCuda extends Filter<VideoHwUploadCudaParameters> {
    outputs : FilterStreamRef<VideoHwUploadCudaParameters, VideoHwUploadCuda>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHwUploadCudaParameters = {} as any ) {
        super( inputs, 'hwupload_cuda', parameters );
    }
}

export interface VideoHwUploadCudaParameters {
    /** The number of the CUDA device to use */
    device ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.99 hwupload_cuda
  * Upload system memory frames to a CUDA device.
  * 
  * It accepts the following optional parameters:
  */
export function videoHwUploadCuda ( inputs : Stream | Stream[] = [], parameters : VideoHwUploadCudaParameters = {} as any ) {
    return new VideoHwUploadCuda( inputs, parameters );
}