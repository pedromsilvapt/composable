import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.115 lut1d
  * Apply a 1D LUT to an input video.
  * 
  * The filter accepts the following options:
  */
export class VideoLut1D extends Filter<VideoLut1DParameters> {
    outputs : FilterStreamRef<VideoLut1DParameters, VideoLut1D>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLut1DParameters = {} as any ) {
        super( inputs, 'lut1d', parameters );
    }
}

export interface VideoLut1DParameters {
    /**
      * Set the 1D LUT file name.
      * Currently supported formats:
      * ‘cube’
      * Iridas
      * ‘csp’
      * cineSpace
      */
    file ?: string | number;
    /**
      * Select interpolation mode.
      * Available values are:
      * ‘nearest’
      * Use values from the nearest defined point.
      * ‘linear’
      * Interpolate values using the linear interpolation.
      * ‘cosine’
      * Interpolate values using the cosine interpolation.
      * ‘cubic’
      * Interpolate values using the cubic interpolation.
      * ‘spline’
      * Interpolate values using the spline interpolation.
      */
    interp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.115 lut1d
  * Apply a 1D LUT to an input video.
  * 
  * The filter accepts the following options:
  */
export function videoLut1D ( inputs : Stream | Stream[] = [], parameters : VideoLut1DParameters = {} as any ) {
    return new VideoLut1D( inputs, parameters );
}