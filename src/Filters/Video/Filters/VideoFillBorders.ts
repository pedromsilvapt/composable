import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.74 fillborders
  * Fill borders of the input video, without changing video stream dimensions. Sometimes video can have garbage at the four edges and you may not want to crop video input to keep size multiple of some number.
  * 
  * This filter accepts the following options:
  */
export class VideoFillBorders extends Filter<VideoFillBordersParameters> {
    outputs : FilterStreamRef<VideoFillBordersParameters, VideoFillBorders>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFillBordersParameters = {} as any ) {
        super( inputs, 'fillborders', parameters );
    }
}

export interface VideoFillBordersParameters {
    /** Number of pixels to fill from left border. */
    left ?: string | number;
    /** Number of pixels to fill from right border. */
    right ?: string | number;
    /** Number of pixels to fill from top border. */
    top ?: string | number;
    /** Number of pixels to fill from bottom border. */
    bottom ?: string | number;
    /**
      * Set fill mode.
      * It accepts the following values:
      * ‘smear’
      * fill pixels using outermost pixels
      * ‘mirror’
      * fill pixels using mirroring
      * ‘fixed’
      * fill pixels with constant value
      * Default is smear.
      */
    mode ?: string | number;
    /** Set color for pixels in fixed mode. Default is black. */
    color ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.74 fillborders
  * Fill borders of the input video, without changing video stream dimensions. Sometimes video can have garbage at the four edges and you may not want to crop video input to keep size multiple of some number.
  * 
  * This filter accepts the following options:
  */
export function videoFillBorders ( inputs : Stream | Stream[] = [], parameters : VideoFillBordersParameters = {} as any ) {
    return new VideoFillBorders( inputs, parameters );
}