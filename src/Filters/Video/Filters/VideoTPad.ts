import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.207 tpad
  * Temporarily pad video frames.
  * 
  * The filter accepts the following options:
  */
export class VideoTPad extends Filter<VideoTPadParameters> {
    outputs : FilterStreamRef<VideoTPadParameters, VideoTPad>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTPadParameters = {} as any ) {
        super( inputs, 'tpad', parameters );
    }
}

export interface VideoTPadParameters {
    /** Specify number of delay frames before input video stream. */
    start ?: string | number;
    /** Specify number of padding frames after input video stream. Set to -1 to pad indefinitely. */
    stop ?: string | number;
    /** Set kind of frames added to beginning of stream. Can be either add or clone. With add frames of solid-color are added. With clone frames are clones of first frame. */
    start_mode ?: string | number;
    /** Set kind of frames added to end of stream. Can be either add or clone. With add frames of solid-color are added. With clone frames are clones of last frame. */
    stop_mode ?: string | number;
    /**
      * Specify the duration of the start/stop delay. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. These options override start and stop.
      * @aliases stop_duration
      */
    start_duration ?: string | number;
    /**
      * Specify the duration of the start/stop delay. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. These options override start and stop.
      * @aliasof start_duration
      */
    stop_duration ?: string | number;
    /**
      * Specify the color of the padded area. For the syntax of this option, check the (ffmpeg-utils)"Color" section in the ffmpeg-utils
      * manual.
      * The default value of color is "black".
      */
    color ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.207 tpad
  * Temporarily pad video frames.
  * 
  * The filter accepts the following options:
  */
export function videoTPad ( inputs : Stream | Stream[] = [], parameters : VideoTPadParameters = {} as any ) {
    return new VideoTPad( inputs, parameters );
}