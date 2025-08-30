import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.15 afade
  * Apply fade-in/out effect to input audio.
  * 
  * A description of the accepted parameters follows.
  */
export class AudioFade extends Filter<AudioFadeParameters> {
    outputs : FilterStreamRef<AudioFadeParameters, AudioFade>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFadeParameters = {} as any ) {
        super( inputs, 'afade', parameters );
    }
}

export interface AudioFadeParameters {
    /**
      * Specify the effect type, can be either in for fade-in, or
      * out for a fade-out effect. Default is in.
      * @aliases t
      */
    type ?: string | number;
    /**
      * Specify the effect type, can be either in for fade-in, or
      * out for a fade-out effect. Default is in.
      * @aliasof type
      */
    t ?: string | number;
    /**
      * Specify the number of the start sample for starting to apply the fade effect. Default is 0.
      * @aliases ss
      */
    start_sample ?: string | number;
    /**
      * Specify the number of the start sample for starting to apply the fade effect. Default is 0.
      * @aliasof start_sample
      */
    ss ?: string | number;
    /**
      * Specify the number of samples for which the fade effect has to last. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. Default is 44100.
      * @aliases ns
      */
    nb_samples ?: string | number;
    /**
      * Specify the number of samples for which the fade effect has to last. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. Default is 44100.
      * @aliasof nb_samples
      */
    ns ?: string | number;
    /**
      * Specify the start time of the fade effect. Default is 0. The value must be specified as a time duration; see
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If set this option is used instead of start_sample.
      * @aliases st
      */
    start_time ?: string | number;
    /**
      * Specify the start time of the fade effect. Default is 0. The value must be specified as a time duration; see
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If set this option is used instead of start_sample.
      * @aliasof start_time
      */
    st ?: string | number;
    /**
      * Specify the duration of the fade effect. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Specify the duration of the fade effect. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Set curve for fade transition.
      * It accepts the following values:
      * tri
      * select triangular, linear slope (default)
      * qsin
      * select quarter of sine wave
      * hsin
      * select half of sine wave
      * esin
      * select exponential sine wave
      * log
      * select logarithmic
      * ipar
      * select inverted parabola
      * qua
      * select quadratic
      * cub
      * select cubic
      * squ
      * select square root
      * cbr
      * select cubic root
      * par
      * select parabola
      * exp
      * select exponential
      * iqsin
      * select inverted quarter of sine wave
      * ihsin
      * select inverted half of sine wave
      * dese
      * select double-exponential seat
      * desi
      * select double-exponential sigmoid
      * losi
      * select logistic sigmoid
      * nofade
      * no fade applied
      */
    curve ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.15 afade
  * Apply fade-in/out effect to input audio.
  * 
  * A description of the accepted parameters follows.
  */
export function audioFade ( inputs : Stream | Stream[] = [], parameters : AudioFadeParameters = {} as any ) {
    return new AudioFade( inputs, parameters );
}