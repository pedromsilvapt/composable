import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.65 extractplanes
  * Extract color channel components from input video stream into separate grayscale video streams.
  * 
  * The filter accepts the following option:
  */
export class VideoExtractPlanes extends Filter<VideoExtractPlanesParameters> {
    outputs : FilterStreamRef<VideoExtractPlanesParameters, VideoExtractPlanes>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoExtractPlanesParameters = {} as any ) {
        super( inputs, 'extractplanes', parameters );
    }
}

export interface VideoExtractPlanesParameters {
    /**
      * Set plane(s) to extract.
      * Available values for planes are:
      * ‘y’
      * ‘u’
      * ‘v’
      * ‘a’
      * ‘r’
      * ‘g’
      * ‘b’
      * Choosing planes not available in the input will result in an error. That means you cannot select r, g, b planes with y, u, v planes at same time.
      */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.65 extractplanes
  * Extract color channel components from input video stream into separate grayscale video streams.
  * 
  * The filter accepts the following option:
  */
export function videoExtractPlanes ( inputs : Stream | Stream[] = [], parameters : VideoExtractPlanesParameters = {} as any ) {
    return new VideoExtractPlanes( inputs, parameters );
}