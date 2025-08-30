import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.116 lut3d
  * Apply a 3D LUT to an input video.
  * 
  * The filter accepts the following options:
  */
export class VideoLut3D extends Filter<VideoLut3DParameters> {
    outputs : FilterStreamRef<VideoLut3DParameters, VideoLut3D>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLut3DParameters = {} as any ) {
        super( inputs, 'lut3d', parameters );
    }
}

export interface VideoLut3DParameters {
    /**
      * Set the 3D LUT file name.
      * Currently supported formats:
      * ‘3dl’
      * AfterEffects
      * ‘cube’
      * Iridas
      * ‘dat’
      * DaVinci
      * ‘m3d’
      * Pandora
      * ‘csp’
      * cineSpace
      */
    file ?: string | number;
    /**
      * Select interpolation mode.
      * Available values are:
      * ‘nearest’
      * Use values from the nearest defined point.
      * ‘trilinear’
      * Interpolate values using the 8 points defining a cube.
      * ‘tetrahedral’
      * Interpolate values using a tetrahedron.
      */
    interp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.116 lut3d
  * Apply a 3D LUT to an input video.
  * 
  * The filter accepts the following options:
  */
export function videoLut3D ( inputs : Stream | Stream[] = [], parameters : VideoLut3DParameters = {} as any ) {
    return new VideoLut3D( inputs, parameters );
}