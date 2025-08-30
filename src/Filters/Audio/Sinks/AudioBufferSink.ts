import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 10.1 abuffersink
  * Buffer audio frames, and make them available to the end of filter chain.
  * 
  * This sink is mainly intended for programmatic use, in particular through the interface defined in libavfilter/buffersink.h or the options system.
  * 
  * It accepts a pointer to an AVABufferSinkContext structure, which defines the incoming buffers’ formats, to be passed as the opaque parameter to avfilter_init_filter for initialization.
  */
export class AudioBufferSink extends Filter<AudioBufferSinkParameters> {
    outputs : FilterStreamRef<AudioBufferSinkParameters, AudioBufferSink>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioBufferSinkParameters = {} as any ) {
        super( inputs, 'abuffersink', parameters );
    }
}

export interface AudioBufferSinkParameters {


    [key : string] : string | number;
}

/**
  * 10.1 abuffersink
  * Buffer audio frames, and make them available to the end of filter chain.
  * 
  * This sink is mainly intended for programmatic use, in particular through the interface defined in libavfilter/buffersink.h or the options system.
  * 
  * It accepts a pointer to an AVABufferSinkContext structure, which defines the incoming buffers’ formats, to be passed as the opaque parameter to avfilter_init_filter for initialization.
  */
export function audioBufferSink ( inputs : Stream | Stream[] = [], parameters : AudioBufferSinkParameters = {} as any ) {
    return new AudioBufferSink( inputs, parameters );
}