import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.179 setdar
  * The setdar filter sets the Display Aspect Ratio for the filter output video.
  * 
  * This is done by changing the specified Sample (aka Pixel) Aspect Ratio, according to the following equation:
  * 
  * 
  * DAR = HORIZONTAL_RESOLUTION / VERTICAL_RESOLUTION * SAR
  * 
  * Keep in mind that the setdar filter does not modify the pixel dimensions of the video frame. Also, the display aspect ratio set by this filter may be changed by later filters in the filterchain, e.g. in case of scaling or if another "setdar" or a "setsar" filter is applied.
  * 
  * The setsar filter sets the Sample (aka Pixel) Aspect Ratio for the filter output video.
  * 
  * Note that as a consequence of the application of this filter, the output display aspect ratio will change according to the equation above.
  * 
  * Keep in mind that the sample aspect ratio set by the setsar filter may be changed by later filters in the filterchain, e.g. if another "setsar" or a "setdar" filter is applied.
  * 
  * It accepts the following parameters:
  */
export class VideoSetdar extends Filter<VideoSetdarParameters> {
    outputs : FilterStreamRef<VideoSetdarParameters, VideoSetdar>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSetdarParameters = {} as any ) {
        super( inputs, 'setdar', parameters );
    }
}

export interface VideoSetdarParameters {
    /**
      * Set the aspect ratio used by the filter.
      * The parameter can be a floating point number string, an expression, or a string of the form num:den, where num and
      * den are the numerator and denominator of the aspect ratio. If the parameter is not specified, it is assumed the value "0". In case the form "num:den" is used, the : character should be escaped.
      * @aliases ratio, dar (setdar only), sar (setsar only)
      */
    r ?: string | number;
    /**
      * Set the aspect ratio used by the filter.
      * The parameter can be a floating point number string, an expression, or a string of the form num:den, where num and
      * den are the numerator and denominator of the aspect ratio. If the parameter is not specified, it is assumed the value "0". In case the form "num:den" is used, the : character should be escaped.
      * @aliasof r
      */
    ratio ?: string | number;
    /**
      * Set the aspect ratio used by the filter.
      * The parameter can be a floating point number string, an expression, or a string of the form num:den, where num and
      * den are the numerator and denominator of the aspect ratio. If the parameter is not specified, it is assumed the value "0". In case the form "num:den" is used, the : character should be escaped.
      * @aliasof r
      */
    'dar (setdar only)' ?: string | number;
    /**
      * Set the aspect ratio used by the filter.
      * The parameter can be a floating point number string, an expression, or a string of the form num:den, where num and
      * den are the numerator and denominator of the aspect ratio. If the parameter is not specified, it is assumed the value "0". In case the form "num:den" is used, the : character should be escaped.
      * @aliasof r
      */
    'sar (setsar only)' ?: string | number;
    /** Set the maximum integer value to use for expressing numerator and denominator when reducing the expressed aspect ratio to a rational. Default value is 100. */
    max ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.179 setdar
  * The setdar filter sets the Display Aspect Ratio for the filter output video.
  * 
  * This is done by changing the specified Sample (aka Pixel) Aspect Ratio, according to the following equation:
  * 
  * 
  * DAR = HORIZONTAL_RESOLUTION / VERTICAL_RESOLUTION * SAR
  * 
  * Keep in mind that the setdar filter does not modify the pixel dimensions of the video frame. Also, the display aspect ratio set by this filter may be changed by later filters in the filterchain, e.g. in case of scaling or if another "setdar" or a "setsar" filter is applied.
  * 
  * The setsar filter sets the Sample (aka Pixel) Aspect Ratio for the filter output video.
  * 
  * Note that as a consequence of the application of this filter, the output display aspect ratio will change according to the equation above.
  * 
  * Keep in mind that the sample aspect ratio set by the setsar filter may be changed by later filters in the filterchain, e.g. if another "setsar" or a "setdar" filter is applied.
  * 
  * It accepts the following parameters:
  */
export function videoSetdar ( inputs : Stream | Stream[] = [], parameters : VideoSetdarParameters = {} as any ) {
    return new VideoSetdar( inputs, parameters );
}