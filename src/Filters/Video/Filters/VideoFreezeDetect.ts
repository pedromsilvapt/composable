import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.82 freezedetect
  * Detect frozen video.
  * 
  * This filter logs a message and sets frame metadata when it detects that the input video has no significant change in content during a specified duration. Video freeze detection calculates the mean average absolute difference of all the components of video frames and compares it to a noise floor.
  * 
  * The printed times and duration are expressed in seconds. The
  * lavfi.freezedetect.freeze_start metadata key is set on the first frame whose timestamp equals or exceeds the detection duration and it contains the timestamp of the first frame of the freeze. The
  * lavfi.freezedetect.freeze_duration and
  * lavfi.freezedetect.freeze_end metadata keys are set on the first frame after the freeze.
  * 
  * The filter accepts the following options:
  */
export class VideoFreezeDetect extends Filter<VideoFreezeDetectParameters> {
    outputs : FilterStreamRef<VideoFreezeDetectParameters, VideoFreezeDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFreezeDetectParameters = {} as any ) {
        super( inputs, 'freezedetect', parameters );
    }
}

export interface VideoFreezeDetectParameters {
    /**
      * Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or as a difference ratio between 0 and 1. Default is -60dB, or 0.001.
      * @aliases n
      */
    noise ?: string | number;
    /**
      * Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or as a difference ratio between 0 and 1. Default is -60dB, or 0.001.
      * @aliasof noise
      */
    n ?: string | number;
    /**
      * Set freeze duration until notification (default is 2 seconds).
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Set freeze duration until notification (default is 2 seconds).
      * @aliasof duration
      */
    d ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.82 freezedetect
  * Detect frozen video.
  * 
  * This filter logs a message and sets frame metadata when it detects that the input video has no significant change in content during a specified duration. Video freeze detection calculates the mean average absolute difference of all the components of video frames and compares it to a noise floor.
  * 
  * The printed times and duration are expressed in seconds. The
  * lavfi.freezedetect.freeze_start metadata key is set on the first frame whose timestamp equals or exceeds the detection duration and it contains the timestamp of the first frame of the freeze. The
  * lavfi.freezedetect.freeze_duration and
  * lavfi.freezedetect.freeze_end metadata keys are set on the first frame after the freeze.
  * 
  * The filter accepts the following options:
  */
export function videoFreezeDetect ( inputs : Stream | Stream[] = [], parameters : VideoFreezeDetectParameters = {} as any ) {
    return new VideoFreezeDetect( inputs, parameters );
}