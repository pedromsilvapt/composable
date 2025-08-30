import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.105 il
  * Deinterleave or interleave fields.
  * 
  * This filter allows one to process interlaced images fields without deinterlacing them. Deinterleaving splits the input frame into 2 fields (so called half pictures). Odd lines are moved to the top half of the output image, even lines to the bottom half. You can process (filter) them independently and then re-interleave them.
  * 
  * The filter accepts the following options:
  */
export class VideoIl extends Filter<VideoIlParameters> {
    outputs : FilterStreamRef<VideoIlParameters, VideoIl>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoIlParameters = {} as any ) {
        super( inputs, 'il', parameters );
    }
}

export interface VideoIlParameters {
    /**
      * Available values for luma_mode, chroma_mode and
      * alpha_mode are:
      * ‘none’
      * Do nothing.
      * ‘deinterleave, d’
      * Deinterleave fields, placing one above the other.
      * ‘interleave, i’
      * Interleave fields. Reverse the effect of deinterleaving.
      * Default value is none.
      * @aliases l
      */
    luma_mode ?: string | number;
    /**
      * Available values for luma_mode, chroma_mode and
      * alpha_mode are:
      * ‘none’
      * Do nothing.
      * ‘deinterleave, d’
      * Deinterleave fields, placing one above the other.
      * ‘interleave, i’
      * Interleave fields. Reverse the effect of deinterleaving.
      * Default value is none.
      * @aliasof luma_mode
      */
    l ?: string | number;
    /**
      * Swap luma/chroma/alpha fields. Exchange even & odd lines. Default value is 0.
      * @aliases c
      */
    chroma_mode ?: string | number;
    /**
      * Swap luma/chroma/alpha fields. Exchange even & odd lines. Default value is 0.
      * @aliasof chroma_mode
      */
    c ?: string | number;
    /** @aliases a */
    alpha_mode ?: string | number;
    /** @aliasof alpha_mode */
    a ?: string | number;
    /** @aliases ls */
    luma_swap ?: string | number;
    /** @aliasof luma_swap */
    ls ?: string | number;
    /** @aliases cs */
    chroma_swap ?: string | number;
    /** @aliasof chroma_swap */
    cs ?: string | number;
    /** @aliases as */
    alpha_swap ?: string | number;
    /** @aliasof alpha_swap */
    as ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.105 il
  * Deinterleave or interleave fields.
  * 
  * This filter allows one to process interlaced images fields without deinterlacing them. Deinterleaving splits the input frame into 2 fields (so called half pictures). Odd lines are moved to the top half of the output image, even lines to the bottom half. You can process (filter) them independently and then re-interleave them.
  * 
  * The filter accepts the following options:
  */
export function videoIl ( inputs : Stream | Stream[] = [], parameters : VideoIlParameters = {} as any ) {
    return new VideoIl( inputs, parameters );
}