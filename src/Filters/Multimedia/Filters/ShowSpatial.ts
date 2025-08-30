import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.21 showspatial
  * Convert stereo input audio to a video output, representing the spatial relationship between two channels.
  * 
  * The filter accepts the following options:
  */
export class ShowSpatial extends Filter<ShowSpatialParameters> {
    outputs : FilterStreamRef<ShowSpatialParameters, ShowSpatial>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowSpatialParameters = {} as any ) {
        super( inputs, 'showspatial', parameters );
    }
}

export interface ShowSpatialParameters {
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 512x512.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 512x512.
      * @aliasof size
      */
    s ?: string | number;
    /** Set window size. Allowed range is from 1024 to 65536. Default size is 4096. */
    win_size ?: string | number;
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
    /** Set ratio of overlap window. Default value is 0.5. When value is 1 overlap is set to recommended size for specific window function currently used. */
    overlap ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.21 showspatial
  * Convert stereo input audio to a video output, representing the spatial relationship between two channels.
  * 
  * The filter accepts the following options:
  */
export function showSpatial ( inputs : Stream | Stream[] = [], parameters : ShowSpatialParameters = {} as any ) {
    return new ShowSpatial( inputs, parameters );
}