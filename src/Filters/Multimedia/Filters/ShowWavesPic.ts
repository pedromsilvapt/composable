import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.26 showwavespic
  * Convert input audio to a single video frame, representing the samples waves.
  * 
  * The filter accepts the following options:
  */
export class ShowWavesPic extends Filter<ShowWavesPicParameters> {
    outputs : FilterStreamRef<ShowWavesPicParameters, ShowWavesPic>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowWavesPicParameters = {} as any ) {
        super( inputs, 'showwavespic', parameters );
    }
}

export interface ShowWavesPicParameters {
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 600x240.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 600x240.
      * @aliasof size
      */
    s ?: string | number;
    /** Set if channels should be drawn separately or overlap. Default value is 0. */
    split_channels ?: string | number;
    /** Set colors separated by ’|’ which are going to be used for drawing of each channel. */
    colors ?: string | number;
    /**
      * Set amplitude scale.
      * Available values are:
      * ‘lin’
      * Linear.
      * ‘log’
      * Logarithmic.
      * ‘sqrt’
      * Square root.
      * ‘cbrt’
      * Cubic root.
      * Default is linear.
      */
    scale ?: string | number;
    /**
      * Set the draw mode.
      * Available values are:
      * ‘scale’
      * Scale pixel values for each drawn sample.
      * ‘full’
      * Draw every sample directly.
      * Default value is scale.
      */
    draw ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.26 showwavespic
  * Convert input audio to a single video frame, representing the samples waves.
  * 
  * The filter accepts the following options:
  */
export function showWavesPic ( inputs : Stream | Stream[] = [], parameters : ShowWavesPicParameters = {} as any ) {
    return new ShowWavesPic( inputs, parameters );
}