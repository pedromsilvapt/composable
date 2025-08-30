import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.146 palettegen
  * Generate one palette for a whole video stream.
  * 
  * It accepts the following options:
  */
export class VideoPaletteGen extends Filter<VideoPaletteGenParameters> {
    outputs : FilterStreamRef<VideoPaletteGenParameters, VideoPaletteGen>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPaletteGenParameters = {} as any ) {
        super( inputs, 'palettegen', parameters );
    }
}

export interface VideoPaletteGenParameters {
    /** Set the maximum number of colors to quantize in the palette. Note: the palette will still contain 256 colors; the unused palette entries will be black. */
    max_colors ?: string | number;
    /** Create a palette of 255 colors maximum and reserve the last one for transparency. Reserving the transparency color is useful for GIF optimization. If not set, the maximum of colors in the palette will be 256. You probably want to disable this option for a standalone image. Set by default. */
    reserve_transparent ?: string | number;
    /** Set the color that will be used as background for transparency. */
    transparency_color ?: string | number;
    /**
      * Set statistics mode.
      * It accepts the following values:
      * ‘full’
      * Compute full frame histograms.
      * ‘diff’
      * Compute histograms only for the part that differs from previous frame. This might be relevant to give more importance to the moving part of your input if the background is static.
      * ‘single’
      * Compute new histogram for each frame.
      * Default value is full.
      */
    stats_mode ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.146 palettegen
  * Generate one palette for a whole video stream.
  * 
  * It accepts the following options:
  */
export function videoPaletteGen ( inputs : Stream | Stream[] = [], parameters : VideoPaletteGenParameters = {} as any ) {
    return new VideoPaletteGen( inputs, parameters );
}