import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.16 afftdn
  * Denoise audio samples with FFT.
  * 
  * A description of the accepted parameters follows.
  */
export class AudioFftDn extends Filter<AudioFftDnParameters> {
    outputs : FilterStreamRef<AudioFftDnParameters, AudioFftDn>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFftDnParameters = {} as any ) {
        super( inputs, 'afftdn', parameters );
    }
}

export interface AudioFftDnParameters {
    /** Set the noise reduction in dB, allowed range is 0.01 to 97. Default value is 12 dB. */
    nr ?: string | number;
    /** Set the noise floor in dB, allowed range is -80 to -20. Default value is -50 dB. */
    nf ?: string | number;
    /**
      * Set the noise type.
      * It accepts the following values:
      * w
      * Select white noise.
      * v
      * Select vinyl noise.
      * s
      * Select shellac noise.
      * c
      * Select custom noise, defined in bn option.
      * Default value is white noise.
      */
    nt ?: string | number;
    /** Set custom band noise for every one of 15 bands. Bands are separated by ’ ’ or ’|’. */
    bn ?: string | number;
    /** Set the residual floor in dB, allowed range is -80 to -20. Default value is -38 dB. */
    rf ?: string | number;
    /** Enable noise tracking. By default is disabled. With this enabled, noise floor is automatically adjusted. */
    tn ?: string | number;
    /** Enable residual tracking. By default is disabled. */
    tr ?: string | number;
    /**
      * Set the output mode.
      * It accepts the following values:
      * i
      * Pass input unchanged.
      * o
      * Pass noise filtered out.
      * n
      * Pass only noise.
      * Default value is o.
      */
    om ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.16 afftdn
  * Denoise audio samples with FFT.
  * 
  * A description of the accepted parameters follows.
  */
export function audioFftDn ( inputs : Stream | Stream[] = [], parameters : AudioFftDnParameters = {} as any ) {
    return new AudioFftDn( inputs, parameters );
}