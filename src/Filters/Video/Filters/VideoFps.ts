import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.78 fps
  * Convert the video to specified constant frame rate by duplicating or dropping frames as necessary.
  * 
  * It accepts the following parameters:
  */
export class VideoFps extends Filter<VideoFpsParameters> {
    outputs : FilterStreamRef<VideoFpsParameters, VideoFps>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFpsParameters = {} as any ) {
        super( inputs, 'fps', parameters );
    }
}

export interface VideoFpsParameters {
    /** The desired output frame rate. The default is 25. */
    fps ?: string | number;
    /** Assume the first PTS should be the given value, in seconds. This allows for padding/trimming at the start of stream. By default, no assumption is made about the first frame’s expected PTS, so no padding or trimming is done. For example, this could be set to 0 to pad the beginning with duplicates of the first frame if a video stream starts after the audio stream or to trim any frames with a negative PTS. */
    start_time ?: string | number;
    /**
      * Timestamp (PTS) rounding method.
      * Possible values are:
      * zero
      * round towards 0
      * inf
      * round away from 0
      * down
      * round towards -infinity
      * up
      * round towards +infinity
      * near
      * round to nearest
      * The default is near.
      */
    round ?: string | number;
    /**
      * Action performed when reading the last frame.
      * Possible values are:
      * round
      * Use same timestamp rounding method as used for other frames.
      * pass
      * Pass through last frame if input duration has not been reached yet.
      * The default is round.
      */
    eof_action ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.78 fps
  * Convert the video to specified constant frame rate by duplicating or dropping frames as necessary.
  * 
  * It accepts the following parameters:
  */
export function videoFps ( inputs : Stream | Stream[] = [], parameters : VideoFpsParameters = {} as any ) {
    return new VideoFps( inputs, parameters );
}