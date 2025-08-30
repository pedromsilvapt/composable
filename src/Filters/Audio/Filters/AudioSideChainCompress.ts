import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.82 sidechaincompress
  * This filter acts like normal compressor but has the ability to compress detected signal using second input signal. It needs two input streams and returns one output stream. First input stream will be processed depending on second stream signal. The filtered signal then can be filtered with other filters in later stages of processing. See pan and amerge filter.
  * 
  * The filter accepts the following options:
  */
export class AudioSideChainCompress extends Filter<AudioSideChainCompressParameters> {
    outputs : FilterStreamRef<AudioSideChainCompressParameters, AudioSideChainCompress>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSideChainCompressParameters = {} as any ) {
        super( inputs, 'sidechaincompress', parameters );
    }
}

export interface AudioSideChainCompressParameters {
    /** Set input gain. Default is 1. Range is between 0.015625 and 64. */
    level_in ?: string | number;
    /** Set mode of compressor operation. Can be upward or downward. Default is downward. */
    mode ?: string | number;
    /** If a signal of second stream raises above this level it will affect the gain reduction of first stream. By default is 0.125. Range is between 0.00097563 and 1. */
    threshold ?: string | number;
    /** Set a ratio about which the signal is reduced. 1:2 means that if the level raised 4dB above the threshold, it will be only 2dB above after the reduction. Default is 2. Range is between 1 and 20. */
    ratio ?: string | number;
    /** Amount of milliseconds the signal has to rise above the threshold before gain reduction starts. Default is 20. Range is between 0.01 and 2000. */
    attack ?: string | number;
    /** Amount of milliseconds the signal has to fall below the threshold before reduction is decreased again. Default is 250. Range is between 0.01 and 9000. */
    release ?: string | number;
    /** Set the amount by how much signal will be amplified after processing. Default is 1. Range is from 1 to 64. */
    makeup ?: string | number;
    /** Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.82843. Range is between 1 and 8. */
    knee ?: string | number;
    /** Choose if the average level between all channels of side-chain stream or the louder(maximum) channel of side-chain stream affects the reduction. Default is average. */
    link ?: string | number;
    /** Should the exact signal be taken in case of peak or an RMS one in case of rms. Default is rms which is mainly smoother. */
    detection ?: string | number;
    /** Set sidechain gain. Default is 1. Range is between 0.015625 and 64. */
    level_sc ?: string | number;
    /** How much to use compressed signal in output. Default is 1. Range is between 0 and 1. */
    mix ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.82 sidechaincompress
  * This filter acts like normal compressor but has the ability to compress detected signal using second input signal. It needs two input streams and returns one output stream. First input stream will be processed depending on second stream signal. The filtered signal then can be filtered with other filters in later stages of processing. See pan and amerge filter.
  * 
  * The filter accepts the following options:
  */
export function audioSideChainCompress ( inputs : Stream | Stream[] = [], parameters : AudioSideChainCompressParameters = {} as any ) {
    return new AudioSideChainCompress( inputs, parameters );
}