import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.25 showwaves
  * Convert input audio to a video output, representing the samples waves.
  * 
  * The filter accepts the following options:
  */
export class ShowWaves extends Filter<ShowWavesParameters> {
    outputs : FilterStreamRef<ShowWavesParameters, ShowWaves>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowWavesParameters = {} as any ) {
        super( inputs, 'showwaves', parameters );
    }
}

export interface ShowWavesParameters {
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
    /**
      * Set display mode.
      * Available values are:
      * ‘point’
      * Draw a point for each sample.
      * ‘line’
      * Draw a vertical line for each sample.
      * ‘p2p’
      * Draw a point for each sample and a line between them.
      * ‘cline’
      * Draw a centered vertical line for each sample.
      * Default value is point.
      */
    mode ?: string | number;
    /** Set the number of samples which are printed on the same column. A larger value will decrease the frame rate. Must be a positive integer. This option can be set only if the value for rate is not explicitly specified. */
    n ?: string | number;
    /**
      * Set the (approximate) output frame rate. This is done by setting the option n. Default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set the (approximate) output frame rate. This is done by setting the option n. Default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
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
      * Set the draw mode. This is mostly useful to set for high n.
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
  * 16.25 showwaves
  * Convert input audio to a video output, representing the samples waves.
  * 
  * The filter accepts the following options:
  */
export function showWaves ( inputs : Stream | Stream[] = [], parameters : ShowWavesParameters = {} as any ) {
    return new ShowWaves( inputs, parameters );
}