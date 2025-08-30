import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.183 showpalette
  * Displays the 256 colors palette of each frame. This filter is only relevant for
  * pal8 pixel format frames.
  * 
  * It accepts the following option:
  */
export class VideoShowPalette extends Filter<VideoShowPaletteParameters> {
    outputs : FilterStreamRef<VideoShowPaletteParameters, VideoShowPalette>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoShowPaletteParameters = {} as any ) {
        super( inputs, 'showpalette', parameters );
    }
}

export interface VideoShowPaletteParameters {
    /**
      * Set the size of the box used to represent one palette color entry. Default is
      * 30 (for a 30x30 pixel box).
      */
    s ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.183 showpalette
  * Displays the 256 colors palette of each frame. This filter is only relevant for
  * pal8 pixel format frames.
  * 
  * It accepts the following option:
  */
export function videoShowPalette ( inputs : Stream | Stream[] = [], parameters : VideoShowPaletteParameters = {} as any ) {
    return new VideoShowPalette( inputs, parameters );
}