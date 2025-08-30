import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.33 cover_rect
  * Cover a rectangular object
  * 
  * It accepts the following options:
  */
export class VideoCoverRect extends Filter<VideoCoverRectParameters> {
    outputs : FilterStreamRef<VideoCoverRectParameters, VideoCoverRect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCoverRectParameters = {} as any ) {
        super( inputs, 'cover_rect', parameters );
    }
}

export interface VideoCoverRectParameters {
    /** Filepath of the optional cover image, needs to be in yuv420. */
    cover ?: string | number;
    /**
      * Set covering mode.
      * It accepts the following values:
      * ‘cover’
      * cover it by the supplied image
      * ‘blur’
      * cover it by interpolating the surrounding pixels
      * Default value is blur.
      */
    mode ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.33 cover_rect
  * Cover a rectangular object
  * 
  * It accepts the following options:
  */
export function videoCoverRect ( inputs : Stream | Stream[] = [], parameters : VideoCoverRectParameters = {} as any ) {
    return new VideoCoverRect( inputs, parameters );
}