import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.145 pad
  * Add paddings to the input image, and place the original input at the provided x, y coordinates.
  * 
  * It accepts the following parameters:
  */
export class VideoPad extends Filter<VideoPadParameters> {
    outputs : FilterStreamRef<VideoPadParameters, VideoPad>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPadParameters = {} as any ) {
        super( inputs, 'pad', parameters );
    }
}

export interface VideoPadParameters {
    /**
      * Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output.
      * The width expression can reference the value set by the
      * height expression, and vice versa.
      * The default value of width and height is 0.
      * @aliases w
      */
    width ?: string | number;
    /**
      * Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output.
      * The width expression can reference the value set by the
      * height expression, and vice versa.
      * The default value of width and height is 0.
      * @aliasof width
      */
    w ?: string | number;
    /**
      * Specify the offsets to place the input image at within the padded area, with respect to the top/left border of the output image.
      * The x expression can reference the value set by the y expression, and vice versa.
      * The default value of x and y is 0.
      * If x or y evaluate to a negative number, they’ll be changed so the input image is centered on the padded area.
      * @aliases h
      */
    height ?: string | number;
    /**
      * Specify the offsets to place the input image at within the padded area, with respect to the top/left border of the output image.
      * The x expression can reference the value set by the y expression, and vice versa.
      * The default value of x and y is 0.
      * If x or y evaluate to a negative number, they’ll be changed so the input image is centered on the padded area.
      * @aliasof height
      */
    h ?: string | number;
    /**
      * Specify the color of the padded area. For the syntax of this option, check the (ffmpeg-utils)"Color" section in the ffmpeg-utils
      * manual.
      * The default value of color is "black".
      */
    x ?: string | number;
    /**
      * Specify when to evaluate width, height, x and y expression.
      * It accepts the following values:
      * ‘init’
      * Only evaluate expressions once during the filter initialization or when a command is processed.
      * ‘frame’
      * Evaluate expressions for each incoming frame.
      * Default value is ‘init’.
      */
    y ?: string | number;
    /** Pad to aspect instead to a resolution. */
    color ?: string | number;
    'eval' ?: string | number;
    aspect ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.145 pad
  * Add paddings to the input image, and place the original input at the provided x, y coordinates.
  * 
  * It accepts the following parameters:
  */
export function videoPad ( inputs : Stream | Stream[] = [], parameters : VideoPadParameters = {} as any ) {
    return new VideoPad( inputs, parameters );
}