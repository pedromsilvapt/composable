import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.66 fade
  * Apply a fade-in/out effect to the input video.
  * 
  * It accepts the following parameters:
  */
export class VideoFade extends Filter<VideoFadeParameters> {
    outputs : FilterStreamRef<VideoFadeParameters, VideoFade>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFadeParameters = {} as any ) {
        super( inputs, 'fade', parameters );
    }
}

export interface VideoFadeParameters {
    /**
      * The effect type can be either "in" for a fade-in, or "out" for a fade-out effect. Default is in.
      * @aliases t
      */
    type ?: string | number;
    /**
      * The effect type can be either "in" for a fade-in, or "out" for a fade-out effect. Default is in.
      * @aliasof type
      */
    t ?: string | number;
    /**
      * Specify the number of the frame to start applying the fade effect at. Default is 0.
      * @aliases s
      */
    start_frame ?: string | number;
    /**
      * Specify the number of the frame to start applying the fade effect at. Default is 0.
      * @aliasof start_frame
      */
    s ?: string | number;
    /**
      * The number of frames that the fade effect lasts. At the end of the fade-in effect, the output video will have the same intensity as the input video. At the end of the fade-out transition, the output video will be filled with the selected color. Default is 25.
      * @aliases n
      */
    nb_frames ?: string | number;
    /**
      * The number of frames that the fade effect lasts. At the end of the fade-in effect, the output video will have the same intensity as the input video. At the end of the fade-out transition, the output video will be filled with the selected color. Default is 25.
      * @aliasof nb_frames
      */
    n ?: string | number;
    /** If set to 1, fade only alpha channel, if one exists on the input. Default value is 0. */
    alpha ?: string | number;
    /**
      * Specify the timestamp (in seconds) of the frame to start to apply the fade effect. If both start_frame and start_time are specified, the fade will start at whichever comes last. Default is 0.
      * @aliases st
      */
    start_time ?: string | number;
    /**
      * Specify the timestamp (in seconds) of the frame to start to apply the fade effect. If both start_frame and start_time are specified, the fade will start at whichever comes last. Default is 0.
      * @aliasof start_time
      */
    st ?: string | number;
    /**
      * The number of seconds for which the fade effect has to last. At the end of the fade-in effect the output video will have the same intensity as the input video, at the end of the fade-out transition the output video will be filled with the selected color. If both duration and nb_frames are specified, duration is used. Default is 0 (nb_frames is used by default).
      * @aliases d
      */
    duration ?: string | number;
    /**
      * The number of seconds for which the fade effect has to last. At the end of the fade-in effect the output video will have the same intensity as the input video, at the end of the fade-out transition the output video will be filled with the selected color. If both duration and nb_frames are specified, duration is used. Default is 0 (nb_frames is used by default).
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Specify the color of the fade. Default is "black".
      * @aliases c
      */
    color ?: string | number;
    /**
      * Specify the color of the fade. Default is "black".
      * @aliasof color
      */
    c ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.66 fade
  * Apply a fade-in/out effect to the input video.
  * 
  * It accepts the following parameters:
  */
export function videoFade ( inputs : Stream | Stream[] = [], parameters : VideoFadeParameters = {} as any ) {
    return new VideoFade( inputs, parameters );
}