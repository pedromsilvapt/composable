import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.17 afftfilt
  * Apply arbitrary expressions to samples in frequency domain.
  */
export class AudioFftFilt extends Filter<AudioFftFiltParameters> {
    outputs : FilterStreamRef<AudioFftFiltParameters, AudioFftFilt>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFftFiltParameters = {} as any ) {
        super( inputs, 'afftfilt', parameters );
    }
}

export interface AudioFftFiltParameters {
    /** Set frequency domain real expression for each separate channel separated by ’|’. Default is "re". If the number of input channels is greater than the number of expressions, the last specified expression is used for the remaining output channels. */
    real ?: string | number;
    /**
      * Set frequency domain imaginary expression for each separate channel separated by ’|’. Default is "im".
      * Each expression in real and imag can contain the following constants and functions:
      * sr
      * sample rate
      * b
      * current frequency bin number
      * nb
      * number of available bins
      * ch
      * channel number of the current expression
      * chs
      * number of channels
      * pts
      * current frame pts
      * re
      * current real part of frequency bin of current channel
      * im
      * current imaginary part of frequency bin of current channel
      * real(b, ch)
      * Return the value of real part of frequency bin at location (bin,channel)
      * imag(b, ch)
      * Return the value of imaginary part of frequency bin at location (bin,channel)
      */
    imag ?: string | number;
    /** Set window size. Allowed range is from 16 to 131072. Default is 4096 */
    win_size ?: string | number;
    /** Set window function. Default is hann. */
    win_func ?: string | number;
    /** Set window overlap. If set to 1, the recommended overlap for selected window function will be picked. Default is 0.75. */
    overlap ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.17 afftfilt
  * Apply arbitrary expressions to samples in frequency domain.
  */
export function audioFftFilt ( inputs : Stream | Stream[] = [], parameters : AudioFftFiltParameters = {} as any ) {
    return new AudioFftFilt( inputs, parameters );
}