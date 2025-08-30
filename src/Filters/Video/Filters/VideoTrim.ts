import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.210 trim
  * Trim the input so that the output contains one continuous subpart of the input.
  * 
  * It accepts the following parameters:
  */
export class VideoTrim extends Filter<VideoTrimParameters> {
    outputs : FilterStreamRef<VideoTrimParameters, VideoTrim>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTrimParameters = {} as any ) {
        super( inputs, 'trim', parameters );
    }
}

export interface VideoTrimParameters {
    /** Specify the time of the start of the kept section, i.e. the frame with the timestamp start will be the first frame in the output. */
    start ?: string | number;
    /** Specify the time of the first frame that will be dropped, i.e. the frame immediately preceding the one with the timestamp end will be the last frame in the output. */
    end ?: string | number;
    /** This is the same as start, except this option sets the start timestamp in timebase units instead of seconds. */
    start_pts ?: string | number;
    /** This is the same as end, except this option sets the end timestamp in timebase units instead of seconds. */
    end_pts ?: string | number;
    /** The maximum duration of the output in seconds. */
    duration ?: string | number;
    /** The number of the first frame that should be passed to the output. */
    start_frame ?: string | number;
    /** The number of the first frame that should be dropped. */
    end_frame ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.210 trim
  * Trim the input so that the output contains one continuous subpart of the input.
  * 
  * It accepts the following parameters:
  */
export function videoTrim ( inputs : Stream | Stream[] = [], parameters : VideoTrimParameters = {} as any ) {
    return new VideoTrim( inputs, parameters );
}