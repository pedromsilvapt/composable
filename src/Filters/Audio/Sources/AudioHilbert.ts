import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.6 hilbert
  * Generate odd-tap Hilbert transform FIR coefficients.
  * 
  * The resulting stream can be used with afir filter for phase-shifting the signal by 90 degrees.
  * 
  * This is used in many matrix coding schemes and for analytic signal generation. The process is often written as a multiplication by i (or j), the imaginary unit.
  * 
  * The filter accepts the following options:
  */
export class AudioHilbert extends Filter<AudioHilbertParameters> {
    outputs : FilterStreamRef<AudioHilbertParameters, AudioHilbert>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioHilbertParameters = {} as any ) {
        super( inputs, 'hilbert', parameters );
    }
}

export interface AudioHilbertParameters {
    /**
      * Set sample rate, default is 44100.
      * @aliases s
      */
    sample_rate ?: string | number;
    /**
      * Set sample rate, default is 44100.
      * @aliasof sample_rate
      */
    s ?: string | number;
    /**
      * Set length of FIR filter, default is 22051.
      * @aliases t
      */
    taps ?: string | number;
    /**
      * Set length of FIR filter, default is 22051.
      * @aliasof taps
      */
    t ?: string | number;
    /**
      * Set number of samples per each frame.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set number of samples per each frame.
      * @aliasof nb_samples
      */
    n ?: string | number;
    /**
      * Set window function to be used when generating FIR coefficients.
      * @aliases w
      */
    win_func ?: string | number;
    /**
      * Set window function to be used when generating FIR coefficients.
      * @aliasof win_func
      */
    w ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.6 hilbert
  * Generate odd-tap Hilbert transform FIR coefficients.
  * 
  * The resulting stream can be used with afir filter for phase-shifting the signal by 90 degrees.
  * 
  * This is used in many matrix coding schemes and for analytic signal generation. The process is often written as a multiplication by i (or j), the imaginary unit.
  * 
  * The filter accepts the following options:
  */
export function audioHilbert ( inputs : Stream | Stream[] = [], parameters : AudioHilbertParameters = {} as any ) {
    return new AudioHilbert( inputs, parameters );
}