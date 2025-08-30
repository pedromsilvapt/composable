import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 10.2 anullsink
  * Null audio sink; do absolutely nothing with the input audio. It is mainly useful as a template and for use in analysis / debugging tools.
  * 
  * 
  * 11 Video Filters
  * When you configure your FFmpeg build, you can disable any of the existing filters using --disable-filters. The configure output will show the video filters included in your build.
  * 
  * Below is a description of the currently available video filters.
  */
export class AudioNullSink extends Filter<AudioNullSinkParameters> {
    outputs : FilterStreamRef<AudioNullSinkParameters, AudioNullSink>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNullSinkParameters = {} as any ) {
        super( inputs, 'anullsink', parameters );
    }
}

export interface AudioNullSinkParameters {


    [key : string] : string | number;
}

/**
  * 10.2 anullsink
  * Null audio sink; do absolutely nothing with the input audio. It is mainly useful as a template and for use in analysis / debugging tools.
  * 
  * 
  * 11 Video Filters
  * When you configure your FFmpeg build, you can disable any of the existing filters using --disable-filters. The configure output will show the video filters included in your build.
  * 
  * Below is a description of the currently available video filters.
  */
export function audioNullSink ( inputs : Stream | Stream[] = [], parameters : AudioNullSinkParameters = {} as any ) {
    return new AudioNullSink( inputs, parameters );
}