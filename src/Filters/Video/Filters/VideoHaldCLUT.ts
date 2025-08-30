import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.91 haldclut
  * Apply a Hald CLUT to a video stream.
  * 
  * First input is the video stream to process, and second one is the Hald CLUT. The Hald CLUT input can be a simple picture or a complete video stream.
  * 
  * The filter accepts the following options:
  */
export class VideoHaldCLUT extends Filter<VideoHaldCLUTParameters> {
    outputs : FilterStreamRef<VideoHaldCLUTParameters, VideoHaldCLUT>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHaldCLUTParameters = {} as any ) {
        super( inputs, 'haldclut', parameters );
    }
}

export interface VideoHaldCLUTParameters {
    /** Force termination when the shortest input terminates. Default is 0. */
    shortest ?: string | number;
    /**
      * Continue applying the last CLUT after the end of the stream. A value of
      * 0 disable the filter after the last frame of the CLUT is reached. Default is 1.
      */
    repeatlast ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.91 haldclut
  * Apply a Hald CLUT to a video stream.
  * 
  * First input is the video stream to process, and second one is the Hald CLUT. The Hald CLUT input can be a simple picture or a complete video stream.
  * 
  * The filter accepts the following options:
  */
export function videoHaldCLUT ( inputs : Stream | Stream[] = [], parameters : VideoHaldCLUTParameters = {} as any ) {
    return new VideoHaldCLUT( inputs, parameters );
}