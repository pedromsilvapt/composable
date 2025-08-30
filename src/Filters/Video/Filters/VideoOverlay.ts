import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.143 overlay
  * Overlay one video on top of another.
  * 
  * It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid.
  * 
  * It accepts the following parameters:
  * 
  * A description of the accepted options follows.
  */
export class VideoOverlay extends Filter<VideoOverlayParameters> {
    outputs : FilterStreamRef<VideoOverlayParameters, VideoOverlay>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoOverlayParameters = {} as any ) {
        super( inputs, 'overlay', parameters );
    }
}

export interface VideoOverlayParameters {
    /** Set the expression for the x and y coordinates of the overlaid video on the main video. Default value is "0" for both expressions. In case the expression is invalid, it is set to a huge value (meaning that the overlay will not be displayed within the output visible area). */
    x ?: string | number;
    /** See framesync. */
    y ?: string | number;
    /**
      * Set when the expressions for x, and y are evaluated.
      * It accepts the following values:
      * ‘init’
      * only evaluate expressions once during the filter initialization or when a command is processed
      * ‘frame’
      * evaluate expressions for each incoming frame
      * Default value is ‘frame’.
      */
    eof_action ?: string | number;
    /** See framesync. */
    'eval' ?: string | number;
    /**
      * Set the format for the output video.
      * It accepts the following values:
      * ‘yuv420’
      * force YUV420 output
      * ‘yuv422’
      * force YUV422 output
      * ‘yuv444’
      * force YUV444 output
      * ‘rgb’
      * force packed RGB output
      * ‘gbrp’
      * force planar RGB output
      * ‘auto’
      * automatically pick format
      * Default value is ‘yuv420’.
      */
    shortest ?: string | number;
    /** See framesync. */
    format ?: string | number;
    /**
      * Set format of alpha of the overlaid video, it can be straight or
      * premultiplied. Default is straight.
      */
    repeatlast ?: string | number;
    alpha ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.143 overlay
  * Overlay one video on top of another.
  * 
  * It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid.
  * 
  * It accepts the following parameters:
  * 
  * A description of the accepted options follows.
  */
export function videoOverlay ( inputs : Stream | Stream[] = [], parameters : VideoOverlayParameters = {} as any ) {
    return new VideoOverlay( inputs, parameters );
}