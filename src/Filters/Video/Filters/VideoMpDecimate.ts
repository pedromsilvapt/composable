import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.132 mpdecimate
  * Drop frames that do not differ greatly from the previous frame in order to reduce frame rate.
  * 
  * The main use of this filter is for very-low-bitrate encoding (e.g. streaming over dialup modem), but it could in theory be used for fixing movies that were inverse-telecined incorrectly.
  * 
  * A description of the accepted options follows.
  */
export class VideoMpDecimate extends Filter<VideoMpDecimateParameters> {
    outputs : FilterStreamRef<VideoMpDecimateParameters, VideoMpDecimate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMpDecimateParameters = {} as any ) {
        super( inputs, 'mpdecimate', parameters );
    }
}

export interface VideoMpDecimateParameters {
    /**
      * Set the maximum number of consecutive frames which can be dropped (if positive), or the minimum interval between dropped frames (if negative). If the value is 0, the frame is dropped disregarding the number of previous sequentially dropped frames.
      * Default value is 0.
      */
    max ?: string | number;
    /**
      * Set the dropping threshold values.
      * Values for hi and lo are for 8x8 pixel blocks and represent actual pixel value differences, so a threshold of 64 corresponds to 1 unit of difference for each pixel, or the same spread out differently over the block.
      * A frame is a candidate for dropping if no 8x8 blocks differ by more than a threshold of hi, and if no more than frac blocks (1 meaning the whole image) differ by more than a threshold of lo.
      * Default value for hi is 64*12, default value for lo is 64*5, and default value for frac is 0.33.
      */
    hi ?: string | number;
    lo ?: string | number;
    frac ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.132 mpdecimate
  * Drop frames that do not differ greatly from the previous frame in order to reduce frame rate.
  * 
  * The main use of this filter is for very-low-bitrate encoding (e.g. streaming over dialup modem), but it could in theory be used for fixing movies that were inverse-telecined incorrectly.
  * 
  * A description of the accepted options follows.
  */
export function videoMpDecimate ( inputs : Stream | Stream[] = [], parameters : VideoMpDecimateParameters = {} as any ) {
    return new VideoMpDecimate( inputs, parameters );
}