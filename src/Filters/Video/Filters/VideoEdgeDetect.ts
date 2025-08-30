import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.60 edgedetect
  * Detect and draw edges. The filter uses the Canny Edge Detection algorithm.
  * 
  * The filter accepts the following options:
  */
export class VideoEdgeDetect extends Filter<VideoEdgeDetectParameters> {
    outputs : FilterStreamRef<VideoEdgeDetectParameters, VideoEdgeDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoEdgeDetectParameters = {} as any ) {
        super( inputs, 'edgedetect', parameters );
    }
}

export interface VideoEdgeDetectParameters {
    /**
      * Set low and high threshold values used by the Canny thresholding algorithm.
      * The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold.
      * low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high.
      * Default value for low is 20/255, and default value for high is 50/255.
      */
    low ?: string | number;
    /**
      * Define the drawing mode.
      * ‘wires’
      * Draw white/gray wires on black background.
      * ‘colormix’
      * Mix the colors to create a paint/cartoon effect.
      * ‘canny’
      * Apply Canny edge detector on all selected planes.
      * Default value is wires.
      */
    high ?: string | number;
    /** Select planes for filtering. By default all available planes are filtered. */
    mode ?: string | number;
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.60 edgedetect
  * Detect and draw edges. The filter uses the Canny Edge Detection algorithm.
  * 
  * The filter accepts the following options:
  */
export function videoEdgeDetect ( inputs : Stream | Stream[] = [], parameters : VideoEdgeDetectParameters = {} as any ) {
    return new VideoEdgeDetect( inputs, parameters );
}