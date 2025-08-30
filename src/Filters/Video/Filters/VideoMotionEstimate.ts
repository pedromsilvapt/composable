import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.128 mestimate
  * Estimate and export motion vectors using block matching algorithms. Motion vectors are stored in frame side data to be used by other filters.
  * 
  * This filter accepts the following options:
  */
export class VideoMotionEstimate extends Filter<VideoMotionEstimateParameters> {
    outputs : FilterStreamRef<VideoMotionEstimateParameters, VideoMotionEstimate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMotionEstimateParameters = {} as any ) {
        super( inputs, 'mestimate', parameters );
    }
}

export interface VideoMotionEstimateParameters {
    /**
      * Specify the motion estimation method. Accepts one of the following values:
      * ‘esa’
      * Exhaustive search algorithm.
      * ‘tss’
      * Three step search algorithm.
      * ‘tdls’
      * Two dimensional logarithmic search algorithm.
      * ‘ntss’
      * New three step search algorithm.
      * ‘fss’
      * Four step search algorithm.
      * ‘ds’
      * Diamond search algorithm.
      * ‘hexbs’
      * Hexagon-based search algorithm.
      * ‘epzs’
      * Enhanced predictive zonal search algorithm.
      * ‘umh’
      * Uneven multi-hexagon search algorithm.
      * Default value is ‘esa’.
      */
    method ?: string | number;
    /** Macroblock size. Default 16. */
    mb_size ?: string | number;
    /** Search parameter. Default 7. */
    search_param ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.128 mestimate
  * Estimate and export motion vectors using block matching algorithms. Motion vectors are stored in frame side data to be used by other filters.
  * 
  * This filter accepts the following options:
  */
export function videoMotionEstimate ( inputs : Stream | Stream[] = [], parameters : VideoMotionEstimateParameters = {} as any ) {
    return new VideoMotionEstimate( inputs, parameters );
}