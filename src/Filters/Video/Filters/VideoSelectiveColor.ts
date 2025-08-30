import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.177 selectivecolor
  * Adjust cyan, magenta, yellow and black (CMYK) to certain ranges of colors (such as "reds", "yellows", "greens", "cyans", ...). The adjustment range is defined by the "purity" of the color (that is, how saturated it already is).
  * 
  * This filter is similar to the Adobe Photoshop Selective Color tool.
  * 
  * The filter accepts the following options:
  */
export class VideoSelectiveColor extends Filter<VideoSelectiveColorParameters> {
    outputs : FilterStreamRef<VideoSelectiveColorParameters, VideoSelectiveColor>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSelectiveColorParameters = {} as any ) {
        super( inputs, 'selectivecolor', parameters );
    }
}

export interface VideoSelectiveColorParameters {
    /**
      * Select color correction method.
      * Available values are:
      * ‘absolute’
      * Specified adjustments are applied "as-is" (added/subtracted to original pixel component value).
      * ‘relative’
      * Specified adjustments are relative to the original component value.
      * Default is absolute.
      */
    correction_method ?: string | number;
    /** Adjustments for red pixels (pixels where the red component is the maximum) */
    reds ?: string | number;
    /** Adjustments for yellow pixels (pixels where the blue component is the minimum) */
    yellows ?: string | number;
    /** Adjustments for green pixels (pixels where the green component is the maximum) */
    greens ?: string | number;
    /** Adjustments for cyan pixels (pixels where the red component is the minimum) */
    cyans ?: string | number;
    /** Adjustments for blue pixels (pixels where the blue component is the maximum) */
    blues ?: string | number;
    /** Adjustments for magenta pixels (pixels where the green component is the minimum) */
    magentas ?: string | number;
    /** Adjustments for white pixels (pixels where all components are greater than 128) */
    whites ?: string | number;
    /** Adjustments for all pixels except pure black and pure white */
    neutrals ?: string | number;
    /** Adjustments for black pixels (pixels where all components are lesser than 128) */
    blacks ?: string | number;
    /** Specify a Photoshop selective color file (.asv) to import the settings from. */
    psfile ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.177 selectivecolor
  * Adjust cyan, magenta, yellow and black (CMYK) to certain ranges of colors (such as "reds", "yellows", "greens", "cyans", ...). The adjustment range is defined by the "purity" of the color (that is, how saturated it already is).
  * 
  * This filter is similar to the Adobe Photoshop Selective Color tool.
  * 
  * The filter accepts the following options:
  */
export function videoSelectiveColor ( inputs : Stream | Stream[] = [], parameters : VideoSelectiveColorParameters = {} as any ) {
    return new VideoSelectiveColor( inputs, parameters );
}