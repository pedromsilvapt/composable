import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.182 showinfo
  * Show a line containing various information for each input video frame. The input video is not modified.
  * 
  * This filter supports the following options:
  */
export class VideoShowInfo extends Filter<VideoShowInfoParameters> {
    outputs : FilterStreamRef<VideoShowInfoParameters, VideoShowInfo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoShowInfoParameters = {} as any ) {
        super( inputs, 'showinfo', parameters );
    }
}

export interface VideoShowInfoParameters {
    /** Calculate checksums of each plane. By default enabled. */
    checksum ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.182 showinfo
  * Show a line containing various information for each input video frame. The input video is not modified.
  * 
  * This filter supports the following options:
  */
export function videoShowInfo ( inputs : Stream | Stream[] = [], parameters : VideoShowInfoParameters = {} as any ) {
    return new VideoShowInfo( inputs, parameters );
}