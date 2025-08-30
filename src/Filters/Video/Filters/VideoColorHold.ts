import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.25 colorhold
  * Remove all color information for all RGB colors except for certain one.
  * 
  * The filter accepts the following options:
  */
export class VideoColorHold extends Filter<VideoColorHoldParameters> {
    outputs : FilterStreamRef<VideoColorHoldParameters, VideoColorHold>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorHoldParameters = {} as any ) {
        super( inputs, 'colorhold', parameters );
    }
}

export interface VideoColorHoldParameters {
    /** The color which will not be replaced with neutral gray. */
    color ?: string | number;
    /** Similarity percentage with the above color. 0.01 matches only the exact key color, while 1.0 matches everything. */
    similarity ?: string | number;
    /** Blend percentage. 0.0 makes pixels fully gray. Higher values result in more preserved color. */
    blend ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.25 colorhold
  * Remove all color information for all RGB colors except for certain one.
  * 
  * The filter accepts the following options:
  */
export function videoColorHold ( inputs : Stream | Stream[] = [], parameters : VideoColorHoldParameters = {} as any ) {
    return new VideoColorHold( inputs, parameters );
}