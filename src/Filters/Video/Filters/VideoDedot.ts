import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.44 dedot
  * Reduce cross-luminance (dot-crawl) and cross-color (rainbows) from video.
  * 
  * It accepts the following options:
  */
export class VideoDedot extends Filter<VideoDedotParameters> {
    outputs : FilterStreamRef<VideoDedotParameters, VideoDedot>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDedotParameters = {} as any ) {
        super( inputs, 'dedot', parameters );
    }
}

export interface VideoDedotParameters {
    /**
      * Set mode of operation. Can be combination of dotcrawl for cross-luminance reduction and/or
      * rainbows for cross-color reduction.
      */
    m ?: string | number;
    /** Set spatial luma threshold. Lower values increases reduction of cross-luminance. */
    lt ?: string | number;
    /** Set tolerance for temporal luma. Higher values increases reduction of cross-luminance. */
    tl ?: string | number;
    /** Set tolerance for chroma temporal variation. Higher values increases reduction of cross-color. */
    tc ?: string | number;
    /** Set temporal chroma threshold. Lower values increases reduction of cross-color. */
    ct ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.44 dedot
  * Reduce cross-luminance (dot-crawl) and cross-color (rainbows) from video.
  * 
  * It accepts the following options:
  */
export function videoDedot ( inputs : Stream | Stream[] = [], parameters : VideoDedotParameters = {} as any ) {
    return new VideoDedot( inputs, parameters );
}