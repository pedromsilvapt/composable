import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.175 scale2ref
  * Scale (resize) the input video, based on a reference video.
  * 
  * See the scale filter for available options, scale2ref supports the same but uses the reference video instead of the main input as basis. scale2ref also supports the following additional constants for the w and
  * h options:
  */
export class VideoScale2Ref extends Filter<VideoScale2RefParameters> {
    outputs : FilterStreamRef<VideoScale2RefParameters, VideoScale2Ref>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoScale2RefParameters = {} as any ) {
        super( inputs, 'scale2ref', parameters );
    }
}

export interface VideoScale2RefParameters {
    /** The main input video’s width and height */
    main_w ?: string | number;
    /** The same as main_w / main_h */
    main_h ?: string | number;
    /** The main input video’s sample aspect ratio */
    main_a ?: string | number;
    /**
      * The main input video’s display aspect ratio. Calculated from
      * (main_w / main_h) * main_sar.
      */
    main_sar ?: string | number;
    /**
      * The main input video’s horizontal and vertical chroma subsample values. For example for the pixel format "yuv422p" hsub is 2 and vsub is 1.
      * @aliases mdar
      */
    main_dar ?: string | number;
    /**
      * The main input video’s horizontal and vertical chroma subsample values. For example for the pixel format "yuv422p" hsub is 2 and vsub is 1.
      * @aliasof main_dar
      */
    mdar ?: string | number;
    /** The (sequential) number of the main input frame, starting from 0. Only available with eval=frame. */
    main_hsub ?: string | number;
    /** The presentation timestamp of the main input frame, expressed as a number of seconds. Only available with eval=frame. */
    main_vsub ?: string | number;
    /** The position (byte offset) of the frame in the main input stream, or NaN if this information is unavailable and/or meaningless (for example in case of synthetic video). Only available with eval=frame. */
    main_n ?: string | number;
    main_t ?: string | number;
    main_pos ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.175 scale2ref
  * Scale (resize) the input video, based on a reference video.
  * 
  * See the scale filter for available options, scale2ref supports the same but uses the reference video instead of the main input as basis. scale2ref also supports the following additional constants for the w and
  * h options:
  */
export function videoScale2Ref ( inputs : Stream | Stream[] = [], parameters : VideoScale2RefParameters = {} as any ) {
    return new VideoScale2Ref( inputs, parameters );
}