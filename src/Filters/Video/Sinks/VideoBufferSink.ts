import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 15.1 buffersink
  * Buffer video frames, and make them available to the end of the filter graph.
  * 
  * This sink is mainly intended for programmatic use, in particular through the interface defined in libavfilter/buffersink.h or the options system.
  * 
  * It accepts a pointer to an AVBufferSinkContext structure, which defines the incoming buffers’ formats, to be passed as the opaque parameter to avfilter_init_filter for initialization.
  */
export class VideoBufferSink extends Filter<VideoBufferSinkParameters> {
    outputs : FilterStreamRef<VideoBufferSinkParameters, VideoBufferSink>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBufferSinkParameters = {} as any ) {
        super( inputs, 'buffersink', parameters );
    }
}

export interface VideoBufferSinkParameters {


    [key : string] : string | number;
}

/**
  * 15.1 buffersink
  * Buffer video frames, and make them available to the end of the filter graph.
  * 
  * This sink is mainly intended for programmatic use, in particular through the interface defined in libavfilter/buffersink.h or the options system.
  * 
  * It accepts a pointer to an AVBufferSinkContext structure, which defines the incoming buffers’ formats, to be passed as the opaque parameter to avfilter_init_filter for initialization.
  */
export function videoBufferSink ( inputs : Stream | Stream[] = [], parameters : VideoBufferSinkParameters = {} as any ) {
    return new VideoBufferSink( inputs, parameters );
}