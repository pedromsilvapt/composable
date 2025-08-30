import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.5 anoisesrc
  * Generate a noise audio signal.
  * 
  * The filter accepts the following options:
  */
export class AudioNoiseSrc extends Filter<AudioNoiseSrcParameters> {
    outputs : FilterStreamRef<AudioNoiseSrcParameters, AudioNoiseSrc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNoiseSrcParameters = {} as any ) {
        super( inputs, 'anoisesrc', parameters );
    }
}

export interface AudioNoiseSrcParameters {
    /**
      * Specify the sample rate. Default value is 48000 Hz.
      * @aliases r
      */
    sample_rate ?: string | number;
    /**
      * Specify the sample rate. Default value is 48000 Hz.
      * @aliasof sample_rate
      */
    r ?: string | number;
    /**
      * Specify the amplitude (0.0 - 1.0) of the generated audio stream. Default value is 1.0.
      * @aliases a
      */
    amplitude ?: string | number;
    /**
      * Specify the amplitude (0.0 - 1.0) of the generated audio stream. Default value is 1.0.
      * @aliasof amplitude
      */
    a ?: string | number;
    /**
      * Specify the duration of the generated audio stream. Not specifying this option results in noise with an infinite length.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Specify the duration of the generated audio stream. Not specifying this option results in noise with an infinite length.
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Specify the color of noise. Available noise colors are white, pink, brown, blue, violet and velvet. Default color is white.
      * @aliases colour, c
      */
    color ?: string | number;
    /**
      * Specify the color of noise. Available noise colors are white, pink, brown, blue, violet and velvet. Default color is white.
      * @aliasof color
      */
    colour ?: string | number;
    /**
      * Specify the color of noise. Available noise colors are white, pink, brown, blue, violet and velvet. Default color is white.
      * @aliasof color
      */
    c ?: string | number;
    /**
      * Specify a value used to seed the PRNG.
      * @aliases s
      */
    seed ?: string | number;
    /**
      * Specify a value used to seed the PRNG.
      * @aliasof seed
      */
    s ?: string | number;
    /**
      * Set the number of samples per each output frame, default is 1024.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set the number of samples per each output frame, default is 1024.
      * @aliasof nb_samples
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.5 anoisesrc
  * Generate a noise audio signal.
  * 
  * The filter accepts the following options:
  */
export function audioNoiseSrc ( inputs : Stream | Stream[] = [], parameters : AudioNoiseSrcParameters = {} as any ) {
    return new AudioNoiseSrc( inputs, parameters );
}