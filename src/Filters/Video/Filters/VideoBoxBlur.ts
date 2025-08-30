import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.15 boxblur
  * Apply a boxblur algorithm to the input video.
  * 
  * It accepts the following parameters:
  */
export class VideoBoxBlur extends Filter<VideoBoxBlurParameters> {
    outputs : FilterStreamRef<VideoBoxBlurParameters, VideoBoxBlur>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBoxBlurParameters = {} as any ) {
        super( inputs, 'boxblur', parameters );
    }
}

export interface VideoBoxBlurParameters {
    /** @aliases lr */
    luma_radius ?: string | number;
    /** @aliasof luma_radius */
    lr ?: string | number;
    /** @aliases lp */
    luma_power ?: string | number;
    /** @aliasof luma_power */
    lp ?: string | number;
    /** @aliases cr */
    chroma_radius ?: string | number;
    /** @aliasof chroma_radius */
    cr ?: string | number;
    /** @aliases cp */
    chroma_power ?: string | number;
    /** @aliasof chroma_power */
    cp ?: string | number;
    /** @aliases ar */
    alpha_radius ?: string | number;
    /** @aliasof alpha_radius */
    ar ?: string | number;
    /** @aliases ap */
    alpha_power ?: string | number;
    /** @aliasof alpha_power */
    ap ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.15 boxblur
  * Apply a boxblur algorithm to the input video.
  * 
  * It accepts the following parameters:
  */
export function videoBoxBlur ( inputs : Stream | Stream[] = [], parameters : VideoBoxBlurParameters = {} as any ) {
    return new VideoBoxBlur( inputs, parameters );
}