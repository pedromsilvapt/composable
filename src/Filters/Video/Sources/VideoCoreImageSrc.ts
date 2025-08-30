import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.3 coreimagesrc
  * Video source generated on GPU using Apple’s CoreImage API on OSX.
  * 
  * This video source is a specialized version of the coreimage video filter. Use a core image generator at the beginning of the applied filterchain to generate the content.
  * 
  * The coreimagesrc video source accepts the following options:
  */
export class VideoCoreImageSrc extends Filter<VideoCoreImageSrcParameters> {
    outputs : FilterStreamRef<VideoCoreImageSrcParameters, VideoCoreImageSrc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCoreImageSrcParameters = {} as any ) {
        super( inputs, 'coreimagesrc', parameters );
    }
}

export interface VideoCoreImageSrcParameters {
    /**
      * List all available generators along with all their respective options as well as possible minimum and maximum values along with the default values.
      * list_generators=true
      */
    list_generators ?: string | number;
    /**
      * Specify the size of the sourced video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. The default value is 320x240.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the size of the sourced video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. The default value is 320x240.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format
      * frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format
      * frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
    /** Set the sample aspect ratio of the sourced video. */
    sar ?: string | number;
    /**
      * Set the duration of the sourced video. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
      * If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Set the duration of the sourced video. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
      * If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
      * @aliasof duration
      */
    d ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.3 coreimagesrc
  * Video source generated on GPU using Apple’s CoreImage API on OSX.
  * 
  * This video source is a specialized version of the coreimage video filter. Use a core image generator at the beginning of the applied filterchain to generate the content.
  * 
  * The coreimagesrc video source accepts the following options:
  */
export function videoCoreImageSrc ( inputs : Stream | Stream[] = [], parameters : VideoCoreImageSrcParameters = {} as any ) {
    return new VideoCoreImageSrc( inputs, parameters );
}