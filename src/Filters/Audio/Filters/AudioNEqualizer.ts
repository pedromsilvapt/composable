import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.28 anequalizer
  * High-order parametric multiband equalizer for each channel.
  * 
  * It accepts the following parameters:
  */
export class AudioNEqualizer extends Filter<AudioNEqualizerParameters> {
    outputs : FilterStreamRef<AudioNEqualizerParameters, AudioNEqualizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNEqualizerParameters = {} as any ) {
        super( inputs, 'anequalizer', parameters );
    }
}

export interface AudioNEqualizerParameters {
    /**
      * This option string is in format: "c
      * chn f=cf w=w g=g t=f | ..." Each equalizer band is separated by ’|’.
      * chn
      * Set channel number to which equalization will be applied. If input doesn’t have that channel the entry is ignored.
      * f
      * Set central frequency for band. If input doesn’t have that frequency the entry is ignored.
      * w
      * Set band width in hertz.
      * g
      * Set band gain in dB.
      * t
      * Set filter type for band, optional, can be:
      * ‘0’
      * Butterworth, this is default.
      * ‘1’
      * Chebyshev type 1.
      * ‘2’
      * Chebyshev type 2.
      */
    params ?: string | number;
    /** With this option activated frequency response of anequalizer is displayed in video stream. */
    curves ?: string | number;
    /** Set video stream size. Only useful if curves option is activated. */
    size ?: string | number;
    /** Set max gain that will be displayed. Only useful if curves option is activated. Setting this to a reasonable value makes it possible to display gain which is derived from neighbour bands which are too close to each other and thus produce higher gain when both are activated. */
    mgain ?: string | number;
    /** Set frequency scale used to draw frequency response in video output. Can be linear or logarithmic. Default is logarithmic. */
    fscale ?: string | number;
    /** Set color for each channel curve which is going to be displayed in video stream. This is list of color names separated by space or by ’|’. Unrecognised or missing colors will be replaced by white color. */
    colors ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.28 anequalizer
  * High-order parametric multiband equalizer for each channel.
  * 
  * It accepts the following parameters:
  */
export function audioNEqualizer ( inputs : Stream | Stream[] = [], parameters : AudioNEqualizerParameters = {} as any ) {
    return new AudioNEqualizer( inputs, parameters );
}