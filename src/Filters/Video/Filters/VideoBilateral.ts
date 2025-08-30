import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.9 bilateral
  * Apply bilateral filter, spatial smoothing while preserving edges.
  * 
  * The filter accepts the following options:
  */
export class VideoBilateral extends Filter<VideoBilateralParameters> {
    outputs : FilterStreamRef<VideoBilateralParameters, VideoBilateral>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBilateralParameters = {} as any ) {
        super( inputs, 'bilateral', parameters );
    }
}

export interface VideoBilateralParameters {
    /** Set sigma of gaussian function to calculate spatial weight. Allowed range is 0 to 10. Default is 0.1. */
    sigmaS ?: string | number;
    /** Set sigma of gaussian function to calculate range weight. Allowed range is 0 to 1. Default is 0.1. */
    sigmaR ?: string | number;
    /** Set planes to filter. Default is first only. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.9 bilateral
  * Apply bilateral filter, spatial smoothing while preserving edges.
  * 
  * The filter accepts the following options:
  */
export function videoBilateral ( inputs : Stream | Stream[] = [], parameters : VideoBilateralParameters = {} as any ) {
    return new VideoBilateral( inputs, parameters );
}