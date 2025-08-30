import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.48 delogo
  * Suppress a TV station logo by a simple interpolation of the surrounding pixels. Just set a rectangle covering the logo and watch it disappear (and sometimes something even uglier appear - your mileage may vary).
  * 
  * It accepts the following parameters:
  */
export class VideoDelogo extends Filter<VideoDelogoParameters> {
    outputs : FilterStreamRef<VideoDelogoParameters, VideoDelogo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDelogoParameters = {} as any ) {
        super( inputs, 'delogo', parameters );
    }
}

export interface VideoDelogoParameters {
    /** Specify the top left corner coordinates of the logo. They must be specified. */
    x ?: string | number;
    /** Specify the width and height of the logo to clear. They must be specified. */
    y ?: string | number;
    /**
      * Specify the thickness of the fuzzy edge of the rectangle (added to
      * w and h). The default value is 1. This option is deprecated, setting higher values should no longer be necessary and is not recommended.
      */
    w ?: string | number;
    /**
      * When set to 1, a green rectangle is drawn on the screen to simplify finding the right x, y, w, and h parameters. The default value is 0.
      * The rectangle is drawn on the outermost pixels which will be (partly) replaced with interpolated values. The values of the next pixels immediately outside this rectangle in each direction will be used to compute the interpolated pixel values inside the rectangle.
      */
    h ?: string | number;
    /** @aliases t */
    band ?: string | number;
    /** @aliasof band */
    t ?: string | number;
    show ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.48 delogo
  * Suppress a TV station logo by a simple interpolation of the surrounding pixels. Just set a rectangle covering the logo and watch it disappear (and sometimes something even uglier appear - your mileage may vary).
  * 
  * It accepts the following parameters:
  */
export function videoDelogo ( inputs : Stream | Stream[] = [], parameters : VideoDelogoParameters = {} as any ) {
    return new VideoDelogo( inputs, parameters );
}