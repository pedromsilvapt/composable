import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.147 paletteuse
  * Use a palette to downsample an input video stream.
  * 
  * The filter takes two inputs: one video stream and a palette. The palette must be a 256 pixels image.
  * 
  * It accepts the following options:
  */
export class VideoPaletteUse extends Filter<VideoPaletteUseParameters> {
    outputs : FilterStreamRef<VideoPaletteUseParameters, VideoPaletteUse>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPaletteUseParameters = {} as any ) {
        super( inputs, 'paletteuse', parameters );
    }
}

export interface VideoPaletteUseParameters {
    /**
      * Select dithering mode. Available algorithms are:
      * ‘bayer’
      * Ordered 8x8 bayer dithering (deterministic)
      * ‘heckbert’
      * Dithering as defined by Paul Heckbert in 1982 (simple error diffusion). Note: this dithering is sometimes considered "wrong" and is included as a reference.
      * ‘floyd_steinberg’
      * Floyd and Steingberg dithering (error diffusion)
      * ‘sierra2’
      * Frankie Sierra dithering v2 (error diffusion)
      * ‘sierra2_4a’
      * Frankie Sierra dithering v2 "Lite" (error diffusion)
      * Default is sierra2_4a.
      */
    dither ?: string | number;
    /**
      * When bayer dithering is selected, this option defines the scale of the pattern (how much the crosshatch pattern is visible). A low value means more visible pattern for less banding, and higher value means less visible pattern at the cost of more banding.
      * The option must be an integer value in the range [0,5]. Default is 2.
      */
    bayer_scale ?: string | number;
    /**
      * If set, define the zone to process
      * ‘rectangle’
      * Only the changing rectangle will be reprocessed. This is similar to GIF cropping/offsetting compression mechanism. This option can be useful for speed if only a part of the image is changing, and has use cases such as limiting the scope of the error diffusal dither to the rectangle that bounds the moving scene (it leads to more deterministic output if the scene doesn’t change much, and as a result less moving noise and better GIF compression).
      * Default is none.
      */
    diff_mode ?: string | number;
    /** Take new palette for each output frame. */
    'new' ?: string | number;
    /**
      * Sets the alpha threshold for transparency. Alpha values above this threshold will be treated as completely opaque, and values below this threshold will be treated as completely transparent.
      * The option must be an integer value in the range [0,255]. Default is 128.
      */
    alpha_threshold ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.147 paletteuse
  * Use a palette to downsample an input video stream.
  * 
  * The filter takes two inputs: one video stream and a palette. The palette must be a 256 pixels image.
  * 
  * It accepts the following options:
  */
export function videoPaletteUse ( inputs : Stream | Stream[] = [], parameters : VideoPaletteUseParameters = {} as any ) {
    return new VideoPaletteUse( inputs, parameters );
}