import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.94 histogram
  * Compute and draw a color distribution histogram for the input video.
  * 
  * The computed histogram is a representation of the color component distribution in an image.
  * 
  * Standard histogram displays the color components distribution in an image. Displays color graph for each color component. Shows distribution of the Y, U, V, A or R, G, B components, depending on input format, in the current frame. Below each graph a color component scale meter is shown.
  * 
  * The filter accepts the following options:
  */
export class VideoHistogram extends Filter<VideoHistogramParameters> {
    outputs : FilterStreamRef<VideoHistogramParameters, VideoHistogram>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHistogramParameters = {} as any ) {
        super( inputs, 'histogram', parameters );
    }
}

export interface VideoHistogramParameters {
    /** Set height of level. Default value is 200. Allowed range is [50, 2048]. */
    level_height ?: string | number;
    /** Set height of color scale. Default value is 12. Allowed range is [0, 40]. */
    scale_height ?: string | number;
    /**
      * Set display mode. It accepts the following values:
      * ‘stack’
      * Per color component graphs are placed below each other.
      * ‘parade’
      * Per color component graphs are placed side by side.
      * ‘overlay’
      * Presents information identical to that in the parade, except that the graphs representing color components are superimposed directly over one another.
      * Default is stack.
      */
    display_mode ?: string | number;
    /** Set mode. Can be either linear, or logarithmic. Default is linear. */
    levels_mode ?: string | number;
    /** Set what color components to display. Default is 7. */
    components ?: string | number;
    /** Set foreground opacity. Default is 0.7. */
    fgopacity ?: string | number;
    /** Set background opacity. Default is 0.5. */
    bgopacity ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.94 histogram
  * Compute and draw a color distribution histogram for the input video.
  * 
  * The computed histogram is a representation of the color component distribution in an image.
  * 
  * Standard histogram displays the color components distribution in an image. Displays color graph for each color component. Shows distribution of the Y, U, V, A or R, G, B components, depending on input format, in the current frame. Below each graph a color component scale meter is shown.
  * 
  * The filter accepts the following options:
  */
export function videoHistogram ( inputs : Stream | Stream[] = [], parameters : VideoHistogramParameters = {} as any ) {
    return new VideoHistogram( inputs, parameters );
}