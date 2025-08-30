import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.4 acrossfade
  * Apply cross fade from one input audio stream to another input audio stream. The cross fade is applied for specified duration near the end of first stream.
  * 
  * The filter accepts the following options:
  */
export class AudioCrossFade extends Filter<AudioCrossFadeParameters> {
    outputs : FilterStreamRef<AudioCrossFadeParameters, AudioCrossFade>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCrossFadeParameters = {} as any ) {
        super( inputs, 'acrossfade', parameters );
    }
}

export interface AudioCrossFadeParameters {
    /**
      * Specify the number of samples for which the cross fade effect has to last. At the end of the cross fade effect the first input audio will be completely silent. Default is 44100.
      * @aliases ns
      */
    nb_samples ?: string | number;
    /**
      * Specify the number of samples for which the cross fade effect has to last. At the end of the cross fade effect the first input audio will be completely silent. Default is 44100.
      * @aliasof nb_samples
      */
    ns ?: string | number;
    /**
      * Specify the duration of the cross fade effect. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Specify the duration of the cross fade effect. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Should first stream end overlap with second stream start. Default is enabled.
      * @aliases o
      */
    overlap ?: string | number;
    /**
      * Should first stream end overlap with second stream start. Default is enabled.
      * @aliasof overlap
      */
    o ?: string | number;
    /** Set curve for cross fade transition for first stream. */
    curve1 ?: string | number;
    /**
      * Set curve for cross fade transition for second stream.
      * For description of available curve types see afade filter description.
      */
    curve2 ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.4 acrossfade
  * Apply cross fade from one input audio stream to another input audio stream. The cross fade is applied for specified duration near the end of first stream.
  * 
  * The filter accepts the following options:
  */
export function audioCrossFade ( inputs : Stream | Stream[] = [], parameters : AudioCrossFadeParameters = {} as any ) {
    return new AudioCrossFade( inputs, parameters );
}