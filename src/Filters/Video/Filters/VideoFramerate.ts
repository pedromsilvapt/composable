import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.80 framerate
  * Change the frame rate by interpolating new video output frames from the source frames.
  * 
  * This filter is not designed to function correctly with interlaced media. If you wish to change the frame rate of interlaced media then you are required to deinterlace before this filter and re-interlace after this filter.
  * 
  * A description of the accepted options follows.
  */
export class VideoFramerate extends Filter<VideoFramerateParameters> {
    outputs : FilterStreamRef<VideoFramerateParameters, VideoFramerate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFramerateParameters = {} as any ) {
        super( inputs, 'framerate', parameters );
    }
}

export interface VideoFramerateParameters {
    /** Specify the output frames per second. This option can also be specified as a value alone. The default is 50. */
    fps ?: string | number;
    /** Specify the start of a range where the output frame will be created as a linear interpolation of two frames. The range is [0-255], the default is 15. */
    interp_start ?: string | number;
    /** Specify the end of a range where the output frame will be created as a linear interpolation of two frames. The range is [0-255], the default is 240. */
    interp_end ?: string | number;
    /** Specify the level at which a scene change is detected as a value between 0 and 100 to indicate a new scene; a low value reflects a low probability for the current frame to introduce a new scene, while a higher value means the current frame is more likely to be one. The default is 8.2. */
    scene ?: string | number;
    /**
      * Specify flags influencing the filter process.
      * Available value for flags is:
      * scene_change_detect, scd
      * Enable scene change detection using the value of the option scene. This flag is enabled by default.
      */
    flags ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.80 framerate
  * Change the frame rate by interpolating new video output frames from the source frames.
  * 
  * This filter is not designed to function correctly with interlaced media. If you wish to change the frame rate of interlaced media then you are required to deinterlace before this filter and re-interlace after this filter.
  * 
  * A description of the accepted options follows.
  */
export function videoFramerate ( inputs : Stream | Stream[] = [], parameters : VideoFramerateParameters = {} as any ) {
    return new VideoFramerate( inputs, parameters );
}