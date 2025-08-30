import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.50 deshake
  * Attempt to fix small changes in horizontal and/or vertical shift. This filter helps remove camera shake from hand-holding a camera, bumping a tripod, moving on a vehicle, etc.
  * 
  * The filter accepts the following options:
  */
export class VideoDeshake extends Filter<VideoDeshakeParameters> {
    outputs : FilterStreamRef<VideoDeshakeParameters, VideoDeshake>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDeshakeParameters = {} as any ) {
        super( inputs, 'deshake', parameters );
    }
}

export interface VideoDeshakeParameters {
    /**
      * Specify a rectangular area where to limit the search for motion vectors. If desired the search for motion vectors can be limited to a rectangular area of the frame defined by its top left corner, width and height. These parameters have the same meaning as the drawbox filter which can be used to visualise the position of the bounding box.
      * This is useful when simultaneous movement of subjects within the frame might be confused for camera motion by the motion vector search.
      * If any or all of x, y, w and h are set to -1 then the full frame is used. This allows later options to be set without specifying the bounding box for the motion vector search.
      * Default - search the whole frame.
      */
    x ?: string | number;
    /** Specify the maximum extent of movement in x and y directions in the range 0-64 pixels. Default 16. */
    y ?: string | number;
    /**
      * Specify how to generate pixels to fill blanks at the edge of the frame. Available values are:
      * ‘blank, 0’
      * Fill zeroes at blank locations
      * ‘original, 1’
      * Original image at blank locations
      * ‘clamp, 2’
      * Extruded edge value at blank locations
      * ‘mirror, 3’
      * Mirrored edge at blank locations
      * Default value is ‘mirror’.
      */
    w ?: string | number;
    /** Specify the blocksize to use for motion search. Range 4-128 pixels, default 8. */
    h ?: string | number;
    /** Specify the contrast threshold for blocks. Only blocks with more than the specified contrast (difference between darkest and lightest pixels) will be considered. Range 1-255, default 125. */
    rx ?: string | number;
    /**
      * Specify the search strategy. Available values are:
      * ‘exhaustive, 0’
      * Set exhaustive search
      * ‘less, 1’
      * Set less exhaustive search.
      * Default value is ‘exhaustive’.
      */
    ry ?: string | number;
    /** If set then a detailed log of the motion search is written to the specified file. */
    edge ?: string | number;
    blocksize ?: string | number;
    contrast ?: string | number;
    search ?: string | number;
    filename ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.50 deshake
  * Attempt to fix small changes in horizontal and/or vertical shift. This filter helps remove camera shake from hand-holding a camera, bumping a tripod, moving on a vehicle, etc.
  * 
  * The filter accepts the following options:
  */
export function videoDeshake ( inputs : Stream | Stream[] = [], parameters : VideoDeshakeParameters = {} as any ) {
    return new VideoDeshake( inputs, parameters );
}