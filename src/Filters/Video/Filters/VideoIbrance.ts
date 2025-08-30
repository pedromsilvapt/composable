import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.221 vibrance
  * Boost or alter saturation.
  * 
  * The filter accepts the following options:
  */
export class VideoIbrance extends Filter<VideoIbranceParameters> {
    outputs : FilterStreamRef<VideoIbranceParameters, VideoIbrance>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoIbranceParameters = {} as any ) {
        super( inputs, 'vibrance', parameters );
    }
}

export interface VideoIbranceParameters {
    /** Set strength of boost if positive value or strength of alter if negative value. Default is 0. Allowed range is from -2 to 2. */
    intensity ?: string | number;
    /** Set the red balance. Default is 1. Allowed range is from -10 to 10. */
    rbal ?: string | number;
    /** Set the green balance. Default is 1. Allowed range is from -10 to 10. */
    gbal ?: string | number;
    /** Set the blue balance. Default is 1. Allowed range is from -10 to 10. */
    bbal ?: string | number;
    /** Set the red luma coefficient. */
    rlum ?: string | number;
    /** Set the green luma coefficient. */
    glum ?: string | number;
    /** Set the blue luma coefficient. */
    blum ?: string | number;
    /** If intensity is negative and this is set to 1, colors will change, otherwise colors will be less saturated, more towards gray. */
    alternate ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.221 vibrance
  * Boost or alter saturation.
  * 
  * The filter accepts the following options:
  */
export function videoIbrance ( inputs : Stream | Stream[] = [], parameters : VideoIbranceParameters = {} as any ) {
    return new VideoIbrance( inputs, parameters );
}