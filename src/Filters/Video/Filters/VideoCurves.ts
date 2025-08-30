import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.37 curves
  * Apply color adjustments using curves.
  * 
  * This filter is similar to the Adobe Photoshop and GIMP curves tools. Each component (red, green and blue) has its values defined by N key points tied from each other using a smooth curve. The x-axis represents the pixel values from the input frame, and the y-axis the new pixel values to be set for the output frame.
  * 
  * By default, a component curve is defined by the two points (0;0) and
  * (1;1). This creates a straight line where each original pixel value is "adjusted" to its own value, which means no change to the image.
  * 
  * The filter allows you to redefine these two points and add some more. A new curve (using a natural cubic spline interpolation) will be define to pass smoothly through all these new coordinates. The new defined points needs to be strictly increasing over the x-axis, and their x and y values must be in the [0;1] interval. If the computed curves happened to go outside the vector spaces, the values will be clipped accordingly.
  * 
  * The filter accepts the following options:
  */
export class VideoCurves extends Filter<VideoCurvesParameters> {
    outputs : FilterStreamRef<VideoCurvesParameters, VideoCurves>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCurvesParameters = {} as any ) {
        super( inputs, 'curves', parameters );
    }
}

export interface VideoCurvesParameters {
    /**
      * Select one of the available color presets. This option can be used in addition to the r, g, b parameters; in this case, the later options takes priority on the preset values. Available presets are:
      * ‘none’
      * ‘color_negative’
      * ‘cross_process’
      * ‘darker’
      * ‘increase_contrast’
      * ‘lighter’
      * ‘linear_contrast’
      * ‘medium_contrast’
      * ‘negative’
      * ‘strong_contrast’
      * ‘vintage’
      * Default is none.
      */
    preset ?: string | number;
    /**
      * Set the master key points. These points will define a second pass mapping. It is sometimes called a "luminance" or "value" mapping. It can be used with
      * r, g, b or all since it acts like a post-processing LUT.
      * @aliases m
      */
    master ?: string | number;
    /**
      * Set the master key points. These points will define a second pass mapping. It is sometimes called a "luminance" or "value" mapping. It can be used with
      * r, g, b or all since it acts like a post-processing LUT.
      * @aliasof master
      */
    m ?: string | number;
    /**
      * Set the key points for the red component.
      * @aliases r
      */
    red ?: string | number;
    /**
      * Set the key points for the red component.
      * @aliasof red
      */
    r ?: string | number;
    /**
      * Set the key points for the green component.
      * @aliases g
      */
    green ?: string | number;
    /**
      * Set the key points for the green component.
      * @aliasof green
      */
    g ?: string | number;
    /**
      * Set the key points for the blue component.
      * @aliases b
      */
    blue ?: string | number;
    /**
      * Set the key points for the blue component.
      * @aliasof blue
      */
    b ?: string | number;
    /**
      * Set the key points for all components (not including master). Can be used in addition to the other key points component options. In this case, the unset component(s) will fallback on this
      * all setting.
      */
    all ?: string | number;
    /** Specify a Photoshop curves file (.acv) to import the settings from. */
    psfile ?: string | number;
    /** Save Gnuplot script of the curves in specified file. */
    plot ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.37 curves
  * Apply color adjustments using curves.
  * 
  * This filter is similar to the Adobe Photoshop and GIMP curves tools. Each component (red, green and blue) has its values defined by N key points tied from each other using a smooth curve. The x-axis represents the pixel values from the input frame, and the y-axis the new pixel values to be set for the output frame.
  * 
  * By default, a component curve is defined by the two points (0;0) and
  * (1;1). This creates a straight line where each original pixel value is "adjusted" to its own value, which means no change to the image.
  * 
  * The filter allows you to redefine these two points and add some more. A new curve (using a natural cubic spline interpolation) will be define to pass smoothly through all these new coordinates. The new defined points needs to be strictly increasing over the x-axis, and their x and y values must be in the [0;1] interval. If the computed curves happened to go outside the vector spaces, the values will be clipped accordingly.
  * 
  * The filter accepts the following options:
  */
export function videoCurves ( inputs : Stream | Stream[] = [], parameters : VideoCurvesParameters = {} as any ) {
    return new VideoCurves( inputs, parameters );
}