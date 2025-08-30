import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.148 perspective
  * Correct perspective of video not recorded perpendicular to the screen.
  * 
  * A description of the accepted parameters follows.
  */
export class VideoPerspective extends Filter<VideoPerspectiveParameters> {
    outputs : FilterStreamRef<VideoPerspectiveParameters, VideoPerspective>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPerspectiveParameters = {} as any ) {
        super( inputs, 'perspective', parameters );
    }
}

export interface VideoPerspectiveParameters {
    /**
      * Set coordinates expression for top left, top right, bottom left and bottom right corners. Default values are 0:0:W:0:0:H:W:H with which perspective will remain unchanged. If the sense option is set to source, then the specified points will be sent to the corners of the destination. If the sense option is set to destination, then the corners of the source will be sent to the specified coordinates.
      * The expressions can use the following variables:
      * W
      * H
      * the width and height of video frame.
      * in
      * Input frame count.
      * on
      * Output frame count.
      */
    x0 ?: string | number;
    /**
      * Set interpolation for perspective correction.
      * It accepts the following values:
      * ‘linear’
      * ‘cubic’
      * Default value is ‘linear’.
      */
    y0 ?: string | number;
    /**
      * Set interpretation of coordinate options.
      * It accepts the following values:
      * ‘0, source’
      * Send point in the source specified by the given coordinates to the corners of the destination.
      * ‘1, destination’
      * Send the corners of the source to the point in the destination specified by the given coordinates.
      * Default value is ‘source’.
      */
    x1 ?: string | number;
    /**
      * Set when the expressions for coordinates x0,y0,...x3,y3 are evaluated.
      * It accepts the following values:
      * ‘init’
      * only evaluate expressions once during the filter initialization or when a command is processed
      * ‘frame’
      * evaluate expressions for each incoming frame
      * Default value is ‘init’.
      */
    y1 ?: string | number;
    x2 ?: string | number;
    y2 ?: string | number;
    x3 ?: string | number;
    y3 ?: string | number;
    interpolation ?: string | number;
    sense ?: string | number;
    'eval' ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.148 perspective
  * Correct perspective of video not recorded perpendicular to the screen.
  * 
  * A description of the accepted parameters follows.
  */
export function videoPerspective ( inputs : Stream | Stream[] = [], parameters : VideoPerspectiveParameters = {} as any ) {
    return new VideoPerspective( inputs, parameters );
}