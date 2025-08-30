import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.38 datascope
  * Video data analysis filter.
  * 
  * This filter shows hexadecimal pixel values of part of video.
  * 
  * The filter accepts the following options:
  */
export class VideoDataScope extends Filter<VideoDataScopeParameters> {
    outputs : FilterStreamRef<VideoDataScopeParameters, VideoDataScope>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDataScopeParameters = {} as any ) {
        super( inputs, 'datascope', parameters );
    }
}

export interface VideoDataScopeParameters {
    /**
      * Set output video size.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set output video size.
      * @aliasof size
      */
    s ?: string | number;
    /** Set x offset from where to pick pixels. */
    x ?: string | number;
    /** Set y offset from where to pick pixels. */
    y ?: string | number;
    /**
      * Set scope mode, can be one of the following:
      * ‘mono’
      * Draw hexadecimal pixel values with white color on black background.
      * ‘color’
      * Draw hexadecimal pixel values with input video pixel color on black background.
      * ‘color2’
      * Draw hexadecimal pixel values on color background picked from input video, the text color is picked in such way so its always visible.
      */
    mode ?: string | number;
    /** Draw rows and columns numbers on left and top of video. */
    axis ?: string | number;
    /** Set background opacity. */
    opacity ?: string | number;
    /** Set display number format. Can be hex, or dec. Default is hex. */
    format ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.38 datascope
  * Video data analysis filter.
  * 
  * This filter shows hexadecimal pixel values of part of video.
  * 
  * The filter accepts the following options:
  */
export function videoDataScope ( inputs : Stream | Stream[] = [], parameters : VideoDataScopeParameters = {} as any ) {
    return new VideoDataScope( inputs, parameters );
}