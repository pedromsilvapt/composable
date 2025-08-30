import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.22 showspectrum
  * Convert input audio to a video output, representing the audio frequency spectrum.
  * 
  * The filter accepts the following options:
  */
export class ShowSpectrum extends Filter<ShowSpectrumParameters> {
    outputs : FilterStreamRef<ShowSpectrumParameters, ShowSpectrum>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowSpectrumParameters = {} as any ) {
        super( inputs, 'showspectrum', parameters );
    }
}

export interface ShowSpectrumParameters {
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 640x512.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 640x512.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Specify how the spectrum should slide along the window.
      * It accepts the following values:
      * ‘replace’
      * the samples start again on the left when they reach the right
      * ‘scroll’
      * the samples scroll from right to left
      * ‘fullframe’
      * frames are only produced when the samples reach the right
      * ‘rscroll’
      * the samples scroll from left to right
      * Default value is replace.
      */
    slide ?: string | number;
    /**
      * Specify display mode.
      * It accepts the following values:
      * ‘combined’
      * all channels are displayed in the same row
      * ‘separate’
      * all channels are displayed in separate rows
      * Default value is ‘combined’.
      */
    mode ?: string | number;
    /**
      * Specify display color mode.
      * It accepts the following values:
      * ‘channel’
      * each channel is displayed in a separate color
      * ‘intensity’
      * each channel is displayed using the same color scheme
      * ‘rainbow’
      * each channel is displayed using the rainbow color scheme
      * ‘moreland’
      * each channel is displayed using the moreland color scheme
      * ‘nebulae’
      * each channel is displayed using the nebulae color scheme
      * ‘fire’
      * each channel is displayed using the fire color scheme
      * ‘fiery’
      * each channel is displayed using the fiery color scheme
      * ‘fruit’
      * each channel is displayed using the fruit color scheme
      * ‘cool’
      * each channel is displayed using the cool color scheme
      * ‘magma’
      * each channel is displayed using the magma color scheme
      * ‘green’
      * each channel is displayed using the green color scheme
      * ‘viridis’
      * each channel is displayed using the viridis color scheme
      * ‘plasma’
      * each channel is displayed using the plasma color scheme
      * ‘cividis’
      * each channel is displayed using the cividis color scheme
      * ‘terrain’
      * each channel is displayed using the terrain color scheme
      * Default value is ‘channel’.
      */
    color ?: string | number;
    /**
      * Specify scale used for calculating intensity color values.
      * It accepts the following values:
      * ‘lin’
      * linear
      * ‘sqrt’
      * square root, default
      * ‘cbrt’
      * cubic root
      * ‘log’
      * logarithmic
      * ‘4thrt’
      * 4th root
      * ‘5thrt’
      * 5th root
      * Default value is ‘sqrt’.
      */
    scale ?: string | number;
    /**
      * Specify frequency scale.
      * It accepts the following values:
      * ‘lin’
      * linear
      * ‘log’
      * logarithmic
      * Default value is ‘lin’.
      */
    fscale ?: string | number;
    /** Set saturation modifier for displayed colors. Negative values provide alternative color scheme. 0 is no saturation at all. Saturation must be in [-10.0, 10.0] range. Default value is 1. */
    saturation ?: string | number;
    /**
      * Set window function.
      * It accepts the following values:
      * ‘rect’
      * ‘bartlett’
      * ‘hann’
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
      * Default value is hann.
      */
    win_func ?: string | number;
    /**
      * Set orientation of time vs frequency axis. Can be vertical or
      * horizontal. Default is vertical.
      */
    orientation ?: string | number;
    /** Set ratio of overlap window. Default value is 0. When value is 1 overlap is set to recommended size for specific window function currently used. */
    overlap ?: string | number;
    /** Set scale gain for calculating intensity color values. Default value is 1. */
    gain ?: string | number;
    /** Set which data to display. Can be magnitude, default or phase. */
    data ?: string | number;
    /** Set color rotation, must be in [-1.0, 1.0] range. Default value is 0. */
    rotation ?: string | number;
    /** Set start frequency from which to display spectrogram. Default is 0. */
    start ?: string | number;
    /** Set stop frequency to which to display spectrogram. Default is 0. */
    stop ?: string | number;
    /** Set upper frame rate limit. Default is auto, unlimited. */
    fps ?: string | number;
    /** Draw time and frequency axes and legends. Default is disabled. */
    legend ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.22 showspectrum
  * Convert input audio to a video output, representing the audio frequency spectrum.
  * 
  * The filter accepts the following options:
  */
export function showSpectrum ( inputs : Stream | Stream[] = [], parameters : ShowSpectrumParameters = {} as any ) {
    return new ShowSpectrum( inputs, parameters );
}