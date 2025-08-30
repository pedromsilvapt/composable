import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.29 convolution
  * Apply convolution of 3x3, 5x5, 7x7 or horizontal/vertical up to 49 elements.
  * 
  * The filter accepts the following options:
  */
export class VideoConvolution extends Filter<VideoConvolutionParameters> {
    outputs : FilterStreamRef<VideoConvolutionParameters, VideoConvolution>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoConvolutionParameters = {} as any ) {
        super( inputs, 'convolution', parameters );
    }
}

export interface VideoConvolutionParameters {
    /** Set matrix for each plane. Matrix is sequence of 9, 25 or 49 signed integers in square mode, and from 1 to 49 odd number of signed integers in row mode. */
    '0m' ?: string | number;
    /** Set multiplier for calculated value for each plane. If unset or 0, it will be sum of all matrix elements. */
    '1m' ?: string | number;
    /** Set bias for each plane. This value is added to the result of the multiplication. Useful for making the overall image brighter or darker. Default is 0.0. */
    '2m' ?: string | number;
    /** Set matrix mode for each plane. Can be square, row or column. Default is square. */
    '3m' ?: string | number;
    '0rdiv' ?: string | number;
    '1rdiv' ?: string | number;
    '2rdiv' ?: string | number;
    '3rdiv' ?: string | number;
    '0bias' ?: string | number;
    '1bias' ?: string | number;
    '2bias' ?: string | number;
    '3bias' ?: string | number;
    '0mode' ?: string | number;
    '1mode' ?: string | number;
    '2mode' ?: string | number;
    '3mode' ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.29 convolution
  * Apply convolution of 3x3, 5x5, 7x7 or horizontal/vertical up to 49 elements.
  * 
  * The filter accepts the following options:
  */
export function videoConvolution ( inputs : Stream | Stream[] = [], parameters : VideoConvolutionParameters = {} as any ) {
    return new VideoConvolution( inputs, parameters );
}