import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.11 blackdetect
  * Detect video intervals that are (almost) completely black. Can be useful to detect chapter transitions, commercials, or invalid recordings. Output lines contains the time for the start, end and duration of the detected black interval expressed in seconds.
  * 
  * In order to display the output lines, you need to set the loglevel at least to the AV_LOG_INFO value.
  * 
  * The filter accepts the following options:
  */
export class VideoBlackDetect extends Filter<VideoBlackDetectParameters> {
    outputs : FilterStreamRef<VideoBlackDetectParameters, VideoBlackDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBlackDetectParameters = {} as any ) {
        super( inputs, 'blackdetect', parameters );
    }
}

export interface VideoBlackDetectParameters {
    /**
      * Set the minimum detected black duration expressed in seconds. It must be a non-negative floating point number.
      * Default value is 2.0.
      * @aliases d
      */
    black_min_duration ?: string | number;
    /**
      * Set the minimum detected black duration expressed in seconds. It must be a non-negative floating point number.
      * Default value is 2.0.
      * @aliasof black_min_duration
      */
    d ?: string | number;
    /**
      * Set the threshold for considering a picture "black". Express the minimum value for the ratio:
      * nb_black_pixels / nb_pixels
      * for which a picture is considered black. Default value is 0.98.
      * @aliases pic_th
      */
    picture_black_ratio_th ?: string | number;
    /**
      * Set the threshold for considering a picture "black". Express the minimum value for the ratio:
      * nb_black_pixels / nb_pixels
      * for which a picture is considered black. Default value is 0.98.
      * @aliasof picture_black_ratio_th
      */
    pic_th ?: string | number;
    /**
      * Set the threshold for considering a pixel "black".
      * The threshold expresses the maximum pixel luminance value for which a pixel is considered "black". The provided value is scaled according to the following equation:
      * absolute_threshold = luminance_minimum_value + pixel_black_th * luminance_range_size
      * luminance_range_size and luminance_minimum_value depend on the input video format, the range is [0-255] for YUV full-range formats and [16-235] for YUV non full-range formats.
      * Default value is 0.10.
      * @aliases pix_th
      */
    pixel_black_th ?: string | number;
    /**
      * Set the threshold for considering a pixel "black".
      * The threshold expresses the maximum pixel luminance value for which a pixel is considered "black". The provided value is scaled according to the following equation:
      * absolute_threshold = luminance_minimum_value + pixel_black_th * luminance_range_size
      * luminance_range_size and luminance_minimum_value depend on the input video format, the range is [0-255] for YUV full-range formats and [16-235] for YUV non full-range formats.
      * Default value is 0.10.
      * @aliasof pixel_black_th
      */
    pix_th ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.11 blackdetect
  * Detect video intervals that are (almost) completely black. Can be useful to detect chapter transitions, commercials, or invalid recordings. Output lines contains the time for the start, end and duration of the detected black interval expressed in seconds.
  * 
  * In order to display the output lines, you need to set the loglevel at least to the AV_LOG_INFO value.
  * 
  * The filter accepts the following options:
  */
export function videoBlackDetect ( inputs : Stream | Stream[] = [], parameters : VideoBlackDetectParameters = {} as any ) {
    return new VideoBlackDetect( inputs, parameters );
}