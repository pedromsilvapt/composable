import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.75 find_rect
  * Find a rectangular object
  * 
  * It accepts the following options:
  */
export class VideoFindRect extends Filter<VideoFindRectParameters> {
    outputs : FilterStreamRef<VideoFindRectParameters, VideoFindRect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFindRectParameters = {} as any ) {
        super( inputs, 'find_rect', parameters );
    }
}

export interface VideoFindRectParameters {
    /** Filepath of the object image, needs to be in gray8. */
    object ?: string | number;
    /** Detection threshold, default is 0.5. */
    threshold ?: string | number;
    /** Number of mipmaps, default is 3. */
    mipmaps ?: string | number;
    /**
      * Specifies the rectangle in which to search.
      * @aliases ymin, xmax, ymax
      */
    xmin ?: string | number;
    /**
      * Specifies the rectangle in which to search.
      * @aliasof xmin
      */
    ymin ?: string | number;
    /**
      * Specifies the rectangle in which to search.
      * @aliasof xmin
      */
    xmax ?: string | number;
    /**
      * Specifies the rectangle in which to search.
      * @aliasof xmin
      */
    ymax ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.75 find_rect
  * Find a rectangular object
  * 
  * It accepts the following options:
  */
export function videoFindRect ( inputs : Stream | Stream[] = [], parameters : VideoFindRectParameters = {} as any ) {
    return new VideoFindRect( inputs, parameters );
}