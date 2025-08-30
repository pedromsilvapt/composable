import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.98 hwupload
  * Upload system memory frames to hardware surfaces.
  * 
  * The device to upload to must be supplied when the filter is initialised. If using ffmpeg, select the appropriate device with the -filter_hw_device option.
  */
export class VideoHwUpload extends Filter<VideoHwUploadParameters> {
    outputs : FilterStreamRef<VideoHwUploadParameters, VideoHwUpload>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHwUploadParameters = {} as any ) {
        super( inputs, 'hwupload', parameters );
    }
}

export interface VideoHwUploadParameters {


    [key : string] : string | number;
}

/**
  * 11.98 hwupload
  * Upload system memory frames to hardware surfaces.
  * 
  * The device to upload to must be supplied when the filter is initialised. If using ffmpeg, select the appropriate device with the -filter_hw_device option.
  */
export function videoHwUpload ( inputs : Stream | Stream[] = [], parameters : VideoHwUploadParameters = {} as any ) {
    return new VideoHwUpload( inputs, parameters );
}