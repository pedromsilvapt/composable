import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.90 greyedge
  * A color constancy variation filter which estimates scene illumination via grey edge algorithm and corrects the scene colors accordingly.
  * 
  * See: https://staff.science.uva.nl/th.gevers/pub/GeversTIP07.pdf
  * 
  * The filter accepts the following options:
  */
export class VideoGreyEdge extends Filter<VideoGreyEdgeParameters> {
    outputs : FilterStreamRef<VideoGreyEdgeParameters, VideoGreyEdge>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoGreyEdgeParameters = {} as any ) {
        super( inputs, 'greyedge', parameters );
    }
}

export interface VideoGreyEdgeParameters {
    /** The order of differentiation to be applied on the scene. Must be chosen in the range [0,2] and default value is 1. */
    difford ?: string | number;
    /** The Minkowski parameter to be used for calculating the Minkowski distance. Must be chosen in the range [0,20] and default value is 1. Set to 0 for getting max value instead of calculating Minkowski distance. */
    minknorm ?: string | number;
    /** The standard deviation of Gaussian blur to be applied on the scene. Must be chosen in the range [0,1024.0] and default value = 1. floor( sigma * break_off_sigma(3) ) can’t be equal to 0 if difford is greater than 0. */
    sigma ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.90 greyedge
  * A color constancy variation filter which estimates scene illumination via grey edge algorithm and corrects the scene colors accordingly.
  * 
  * See: https://staff.science.uva.nl/th.gevers/pub/GeversTIP07.pdf
  * 
  * The filter accepts the following options:
  */
export function videoGreyEdge ( inputs : Stream | Stream[] = [], parameters : VideoGreyEdgeParameters = {} as any ) {
    return new VideoGreyEdge( inputs, parameters );
}