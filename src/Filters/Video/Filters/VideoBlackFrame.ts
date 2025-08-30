import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.12 blackframe
  * Detect frames that are (almost) completely black. Can be useful to detect chapter transitions or commercials. Output lines consist of the frame number of the detected frame, the percentage of blackness, the position in the file if known or -1 and the timestamp in seconds.
  * 
  * In order to display the output lines, you need to set the loglevel at least to the AV_LOG_INFO value.
  * 
  * This filter exports frame metadata lavfi.blackframe.pblack. The value represents the percentage of pixels in the picture that are below the threshold value.
  * 
  * It accepts the following parameters:
  */
export class VideoBlackFrame extends Filter<VideoBlackFrameParameters> {
    outputs : FilterStreamRef<VideoBlackFrameParameters, VideoBlackFrame>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBlackFrameParameters = {} as any ) {
        super( inputs, 'blackframe', parameters );
    }
}

export interface VideoBlackFrameParameters {
    /**
      * The percentage of the pixels that have to be below the threshold; it defaults to
      * 98.
      */
    amount ?: string | number;
    /**
      * The threshold below which a pixel value is considered black; it defaults to
      * 32.
      * @aliases thresh
      */
    threshold ?: string | number;
    /**
      * The threshold below which a pixel value is considered black; it defaults to
      * 32.
      * @aliasof threshold
      */
    thresh ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.12 blackframe
  * Detect frames that are (almost) completely black. Can be useful to detect chapter transitions or commercials. Output lines consist of the frame number of the detected frame, the percentage of blackness, the position in the file if known or -1 and the timestamp in seconds.
  * 
  * In order to display the output lines, you need to set the loglevel at least to the AV_LOG_INFO value.
  * 
  * This filter exports frame metadata lavfi.blackframe.pblack. The value represents the percentage of pixels in the picture that are below the threshold value.
  * 
  * It accepts the following parameters:
  */
export function videoBlackFrame ( inputs : Stream | Stream[] = [], parameters : VideoBlackFrameParameters = {} as any ) {
    return new VideoBlackFrame( inputs, parameters );
}