import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.86 gblur
  * Apply Gaussian blur filter.
  * 
  * The filter accepts the following options:
  */
export class VideoGBlur extends Filter<VideoGBlurParameters> {
    outputs : FilterStreamRef<VideoGBlurParameters, VideoGBlur>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoGBlurParameters = {} as any ) {
        super( inputs, 'gblur', parameters );
    }
}

export interface VideoGBlurParameters {
    /** Set horizontal sigma, standard deviation of Gaussian blur. Default is 0.5. */
    sigma ?: string | number;
    /** Set number of steps for Gaussian approximation. Default is 1. */
    steps ?: string | number;
    /** Set which planes to filter. By default all planes are filtered. */
    planes ?: string | number;
    /** Set vertical sigma, if negative it will be same as sigma. Default is -1. */
    sigmaV ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.86 gblur
  * Apply Gaussian blur filter.
  * 
  * The filter accepts the following options:
  */
export function videoGBlur ( inputs : Stream | Stream[] = [], parameters : VideoGBlurParameters = {} as any ) {
    return new VideoGBlur( inputs, parameters );
}