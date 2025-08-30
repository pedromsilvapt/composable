import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.200 thistogram
  * Compute and draw a color distribution histogram for the input video across time.
  * 
  * Unlike histogram video filter which only shows histogram of single input frame at certain time, this filter shows also past histograms of number of frames defined by width option.
  * 
  * The computed histogram is a representation of the color component distribution in an image.
  * 
  * The filter accepts the following options:
  */
export class VideoThistogram extends Filter<VideoThistogramParameters> {
    outputs : FilterStreamRef<VideoThistogramParameters, VideoThistogram>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoThistogramParameters = {} as any ) {
        super( inputs, 'thistogram', parameters );
    }
}

export interface VideoThistogramParameters {
    /**
      * Set width of single color component output. Default value is 0. Value of 0 means width will be picked from input video. This also set number of passed histograms to keep. Allowed range is [0, 8192].
      * @aliases w
      */
    width ?: string | number;
    /**
      * Set width of single color component output. Default value is 0. Value of 0 means width will be picked from input video. This also set number of passed histograms to keep. Allowed range is [0, 8192].
      * @aliasof width
      */
    w ?: string | number;
    /**
      * Set display mode. It accepts the following values:
      * ‘stack’
      * Per color component graphs are placed below each other.
      * ‘parade’
      * Per color component graphs are placed side by side.
      * ‘overlay’
      * Presents information identical to that in the parade, except that the graphs representing color components are superimposed directly over one another.
      * Default is stack.
      * @aliases d
      */
    display_mode ?: string | number;
    /**
      * Set display mode. It accepts the following values:
      * ‘stack’
      * Per color component graphs are placed below each other.
      * ‘parade’
      * Per color component graphs are placed side by side.
      * ‘overlay’
      * Presents information identical to that in the parade, except that the graphs representing color components are superimposed directly over one another.
      * Default is stack.
      * @aliasof display_mode
      */
    d ?: string | number;
    /**
      * Set mode. Can be either linear, or logarithmic. Default is linear.
      * @aliases m
      */
    levels_mode ?: string | number;
    /**
      * Set mode. Can be either linear, or logarithmic. Default is linear.
      * @aliasof levels_mode
      */
    m ?: string | number;
    /**
      * Set what color components to display. Default is 7.
      * @aliases c
      */
    components ?: string | number;
    /**
      * Set what color components to display. Default is 7.
      * @aliasof components
      */
    c ?: string | number;
    /**
      * Set background opacity. Default is 0.9.
      * @aliases b
      */
    bgopacity ?: string | number;
    /**
      * Set background opacity. Default is 0.9.
      * @aliasof bgopacity
      */
    b ?: string | number;
    /**
      * Show envelope. Default is disabled.
      * @aliases e
      */
    envelope ?: string | number;
    /**
      * Show envelope. Default is disabled.
      * @aliasof envelope
      */
    e ?: string | number;
    /**
      * Set envelope color. Default is gold.
      * @aliases ec
      */
    ecolor ?: string | number;
    /**
      * Set envelope color. Default is gold.
      * @aliasof ecolor
      */
    ec ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.200 thistogram
  * Compute and draw a color distribution histogram for the input video across time.
  * 
  * Unlike histogram video filter which only shows histogram of single input frame at certain time, this filter shows also past histograms of number of frames defined by width option.
  * 
  * The computed histogram is a representation of the color component distribution in an image.
  * 
  * The filter accepts the following options:
  */
export function videoThistogram ( inputs : Stream | Stream[] = [], parameters : VideoThistogramParameters = {} as any ) {
    return new VideoThistogram( inputs, parameters );
}