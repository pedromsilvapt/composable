import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.1 abuffer
  * Buffer audio frames, and make them available to the filter chain.
  * 
  * This source is mainly intended for a programmatic use, in particular through the interface defined in libavfilter/asrc_abuffer.h.
  * 
  * It accepts the following parameters:
  */
export class AudioBuffer extends Filter<AudioBufferParameters> {
    outputs : FilterStreamRef<AudioBufferParameters, AudioBuffer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioBufferParameters = {} as any ) {
        super( inputs, 'abuffer', parameters );
    }
}

export interface AudioBufferParameters {
    /** The timebase which will be used for timestamps of submitted frames. It must be either a floating-point number or in numerator/denominator form. */
    time_base ?: string | number;
    /** The sample rate of the incoming audio buffers. */
    sample_rate ?: string | number;
    /** The sample format of the incoming audio buffers. Either a sample format name or its corresponding integer representation from the enum AVSampleFormat in libavutil/samplefmt.h */
    sample_fmt ?: string | number;
    /**
      * The channel layout of the incoming audio buffers. Either a channel layout name from channel_layout_map in
      * libavutil/channel_layout.c or its corresponding integer representation from the AV_CH_LAYOUT_* macros in libavutil/channel_layout.h
      */
    channel_layout ?: string | number;
    /** The number of channels of the incoming audio buffers. If both channels and channel_layout are specified, then they must be consistent. */
    channels ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.1 abuffer
  * Buffer audio frames, and make them available to the filter chain.
  * 
  * This source is mainly intended for a programmatic use, in particular through the interface defined in libavfilter/asrc_abuffer.h.
  * 
  * It accepts the following parameters:
  */
export function audioBuffer ( inputs : Stream | Stream[] = [], parameters : AudioBufferParameters = {} as any ) {
    return new AudioBuffer( inputs, parameters );
}