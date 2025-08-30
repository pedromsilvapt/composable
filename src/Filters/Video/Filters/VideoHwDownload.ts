import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.96 hwdownload
  * Download hardware frames to system memory.
  * 
  * The input must be in hardware frames, and the output a non-hardware format. Not all formats will be supported on the output - it may be necessary to insert an additional format filter immediately following in the graph to get the output in a supported format.
  */
export class VideoHwDownload extends Filter<VideoHwDownloadParameters> {
    outputs : FilterStreamRef<VideoHwDownloadParameters, VideoHwDownload>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHwDownloadParameters = {} as any ) {
        super( inputs, 'hwdownload', parameters );
    }
}

export interface VideoHwDownloadParameters {


    [key : string] : string | number;
}

/**
  * 11.96 hwdownload
  * Download hardware frames to system memory.
  * 
  * The input must be in hardware frames, and the output a non-hardware format. Not all formats will be supported on the output - it may be necessary to insert an additional format filter immediately following in the graph to get the output in a supported format.
  */
export function videoHwDownload ( inputs : Stream | Stream[] = [], parameters : VideoHwDownloadParameters = {} as any ) {
    return new VideoHwDownload( inputs, parameters );
}