import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.20 showfreqs
  * Convert input audio to video output representing the audio power spectrum. Audio amplitude is on Y-axis while frequency is on X-axis.
  * 
  * The filter accepts the following options:
  */
export class ShowFreqs extends Filter<ShowFreqsParameters> {
    outputs : FilterStreamRef<ShowFreqsParameters, ShowFreqs>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowFreqsParameters = {} as any ) {
        super( inputs, 'showfreqs', parameters );
    }
}

export interface ShowFreqsParameters {
    /**
      * Specify size of video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default is 1024x512.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify size of video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default is 1024x512.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set display mode. This set how each frequency bin will be represented.
      * It accepts the following values:
      * ‘line’
      * ‘bar’
      * ‘dot’
      * Default is bar.
      */
    mode ?: string | number;
    /**
      * Set amplitude scale.
      * It accepts the following values:
      * ‘lin’
      * Linear scale.
      * ‘sqrt’
      * Square root scale.
      * ‘cbrt’
      * Cubic root scale.
      * ‘log’
      * Logarithmic scale.
      * Default is log.
      */
    ascale ?: string | number;
    /**
      * Set frequency scale.
      * It accepts the following values:
      * ‘lin’
      * Linear scale.
      * ‘log’
      * Logarithmic scale.
      * ‘rlog’
      * Reverse logarithmic scale.
      * Default is lin.
      */
    fscale ?: string | number;
    /**
      * Set window size. Allowed range is from 16 to 65536.
      * Default is 2048
      */
    win_size ?: string | number;
    /**
      * Set windowing function.
      * It accepts the following values:
      * ‘rect’
      * ‘bartlett’
      * ‘hanning’
      * ‘hamming’
      * ‘blackman’
      * ‘welch’
      * ‘flattop’
      * ‘bharris’
      * ‘bnuttall’
      * ‘bhann’
      * ‘sine’
      * ‘nuttall’
      * ‘lanczos’
      * ‘gauss’
      * ‘tukey’
      * ‘dolph’
      * ‘cauchy’
      * ‘parzen’
      * ‘poisson’
      * ‘bohman’
      * Default is hanning.
      */
    win_func ?: string | number;
    /** Set window overlap. In range [0, 1]. Default is 1, which means optimal overlap for selected window function will be picked. */
    overlap ?: string | number;
    /** Set time averaging. Setting this to 0 will display current maximal peaks. Default is 1, which means time averaging is disabled. */
    averaging ?: string | number;
    /** Specify list of colors separated by space or by ’|’ which will be used to draw channel frequencies. Unrecognized or missing colors will be replaced by white color. */
    colors ?: string | number;
    /**
      * Set channel display mode.
      * It accepts the following values:
      * ‘combined’
      * ‘separate’
      * Default is combined.
      */
    cmode ?: string | number;
    /** Set minimum amplitude used in log amplitude scaler. */
    minamp ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.20 showfreqs
  * Convert input audio to video output representing the audio power spectrum. Audio amplitude is on Y-axis while frequency is on X-axis.
  * 
  * The filter accepts the following options:
  */
export function showFreqs ( inputs : Stream | Stream[] = [], parameters : ShowFreqsParameters = {} as any ) {
    return new ShowFreqs( inputs, parameters );
}