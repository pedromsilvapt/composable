import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.23 showspectrumpic
  * Convert input audio to a single video frame, representing the audio frequency spectrum.
  * 
  * The filter accepts the following options:
  */
export class ShowSpectrumPic extends Filter<ShowSpectrumPicParameters> {
    outputs : FilterStreamRef<ShowSpectrumPicParameters, ShowSpectrumPic>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowSpectrumPicParameters = {} as any ) {
        super( inputs, 'showspectrumpic', parameters );
    }
}

export interface ShowSpectrumPicParameters {
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 4096x2048.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 4096x2048.
      * @aliasof size
      */
    s ?: string | number;
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
      * Default value is ‘intensity’.
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
      * Default value is ‘log’.
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
    /** Set scale gain for calculating intensity color values. Default value is 1. */
    gain ?: string | number;
    /** Draw time and frequency axes and legends. Default is enabled. */
    legend ?: string | number;
    /** Set color rotation, must be in [-1.0, 1.0] range. Default value is 0. */
    rotation ?: string | number;
    /** Set start frequency from which to display spectrogram. Default is 0. */
    start ?: string | number;
    /** Set stop frequency to which to display spectrogram. Default is 0. */
    stop ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.23 showspectrumpic
  * Convert input audio to a single video frame, representing the audio frequency spectrum.
  * 
  * The filter accepts the following options:
  */
export function showSpectrumPic ( inputs : Stream | Stream[] = [], parameters : ShowSpectrumPicParameters = {} as any ) {
    return new ShowSpectrumPic( inputs, parameters );
}