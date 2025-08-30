import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.79 framepack
  * Pack two different video streams into a stereoscopic video, setting proper metadata on supported codecs. The two views should have the same size and framerate and processing will stop when the shorter video ends. Please note that you may conveniently adjust view properties with the scale and
  * fps filters.
  * 
  * It accepts the following parameters:
  */
export class VideoFramePack extends Filter<VideoFramePackParameters> {
    outputs : FilterStreamRef<VideoFramePackParameters, VideoFramePack>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFramePackParameters = {} as any ) {
        super( inputs, 'framepack', parameters );
    }
}

export interface VideoFramePackParameters {
    /**
      * The desired packing format. Supported values are:
      * sbs
      * The views are next to each other (default).
      * tab
      * The views are on top of each other.
      * lines
      * The views are packed by line.
      * columns
      * The views are packed by column.
      * frameseq
      * The views are temporally interleaved.
      */
    format ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.79 framepack
  * Pack two different video streams into a stereoscopic video, setting proper metadata on supported codecs. The two views should have the same size and framerate and processing will stop when the shorter video ends. Please note that you may conveniently adjust view properties with the scale and
  * fps filters.
  * 
  * It accepts the following parameters:
  */
export function videoFramePack ( inputs : Stream | Stream[] = [], parameters : VideoFramePackParameters = {} as any ) {
    return new VideoFramePack( inputs, parameters );
}