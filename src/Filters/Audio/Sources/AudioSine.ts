import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.8 sine
  * Generate an audio signal made of a sine wave with amplitude 1/8.
  * 
  * The audio signal is bit-exact.
  * 
  * The filter accepts the following options:
  */
export class AudioSine extends Filter<AudioSineParameters> {
    outputs : FilterStreamRef<AudioSineParameters, AudioSine>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSineParameters = {} as any ) {
        super( inputs, 'sine', parameters );
    }
}

export interface AudioSineParameters {
    /**
      * Set the carrier frequency. Default is 440 Hz.
      * @aliases f
      */
    frequency ?: string | number;
    /**
      * Set the carrier frequency. Default is 440 Hz.
      * @aliasof frequency
      */
    f ?: string | number;
    /**
      * Enable a periodic beep every second with frequency beep_factor times the carrier frequency. Default is 0, meaning the beep is disabled.
      * @aliases b
      */
    beep_factor ?: string | number;
    /**
      * Enable a periodic beep every second with frequency beep_factor times the carrier frequency. Default is 0, meaning the beep is disabled.
      * @aliasof beep_factor
      */
    b ?: string | number;
    /**
      * Specify the sample rate, default is 44100.
      * @aliases r
      */
    sample_rate ?: string | number;
    /**
      * Specify the sample rate, default is 44100.
      * @aliasof sample_rate
      */
    r ?: string | number;
    /**
      * Specify the duration of the generated audio stream.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Specify the duration of the generated audio stream.
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Set the number of samples per output frame.
      * The expression can contain the following constants:
      * n
      * The (sequential) number of the output audio frame, starting from 0.
      * pts
      * The PTS (Presentation TimeStamp) of the output audio frame, expressed in TB units.
      * t
      * The PTS of the output audio frame, expressed in seconds.
      * TB
      * The timebase of the output audio frames.
      * Default is 1024.
      */
    samples_per_frame ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.8 sine
  * Generate an audio signal made of a sine wave with amplitude 1/8.
  * 
  * The audio signal is bit-exact.
  * 
  * The filter accepts the following options:
  */
export function audioSine ( inputs : Stream | Stream[] = [], parameters : AudioSineParameters = {} as any ) {
    return new AudioSine( inputs, parameters );
}