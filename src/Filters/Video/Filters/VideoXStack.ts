import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.231 xstack
  * Stack video inputs into custom layout.
  * 
  * All streams must be of same pixel format.
  * 
  * The filter accepts the following options:
  */
export class VideoXStack extends Filter<VideoXStackParameters> {
    outputs : FilterStreamRef<VideoXStackParameters, VideoXStack>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoXStackParameters = {} as any ) {
        super( inputs, 'xstack', parameters );
    }
}

export interface VideoXStackParameters {
    /** Set number of input streams. Default is 2. */
    inputs ?: string | number;
    /**
      * Specify layout of inputs. This option requires the desired layout configuration to be explicitly set by the user. This sets position of each video input in output. Each input is separated by ’|’. The first number represents the column, and the second number represents the row. Numbers start at 0 and are separated by ’_’. Optionally one can use wX and hX, where X is video input from which to take width or height. Multiple values can be used when separated by ’+’. In such case values are summed together.
      * Note that if inputs are of different sizes gaps may appear, as not all of the output video frame will be filled. Similarly, videos can overlap each other if their position doesn’t leave enough space for the full frame of adjoining videos.
      * For 2 inputs, a default layout of 0_0|w0_0 is set. In all other cases, a layout must be set by the user.
      */
    layout ?: string | number;
    /** If set to 1, force the output to terminate when the shortest input terminates. Default value is 0. */
    shortest ?: string | number;
    /** If set to valid color, all unused pixels will be filled with that color. By default fill is set to none, so it is disabled. */
    fill ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.231 xstack
  * Stack video inputs into custom layout.
  * 
  * All streams must be of same pixel format.
  * 
  * The filter accepts the following options:
  */
export function videoXStack ( inputs : Stream | Stream[] = [], parameters : VideoXStackParameters = {} as any ) {
    return new VideoXStack( inputs, parameters );
}