import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 15.2 nullsink
  * Null video sink: do absolutely nothing with the input video. It is mainly useful as a template and for use in analysis / debugging tools.
  * 
  * 
  * 16 Multimedia Filters
  * Below is a description of the currently available multimedia filters.
  */
export class VideoNullSink extends Filter<VideoNullSinkParameters> {
    outputs : FilterStreamRef<VideoNullSinkParameters, VideoNullSink>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNullSinkParameters = {} as any ) {
        super( inputs, 'nullsink', parameters );
    }
}

export interface VideoNullSinkParameters {


    [key : string] : string | number;
}

/**
  * 15.2 nullsink
  * Null video sink: do absolutely nothing with the input video. It is mainly useful as a template and for use in analysis / debugging tools.
  * 
  * 
  * 16 Multimedia Filters
  * Below is a description of the currently available multimedia filters.
  */
export function videoNullSink ( inputs : Stream | Stream[] = [], parameters : VideoNullSinkParameters = {} as any ) {
    return new VideoNullSink( inputs, parameters );
}