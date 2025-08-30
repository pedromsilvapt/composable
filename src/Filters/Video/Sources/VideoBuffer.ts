import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.1 buffer
  * Buffer video frames, and make them available to the filter chain.
  * 
  * This source is mainly intended for a programmatic use, in particular through the interface defined in libavfilter/vsrc_buffer.h.
  * 
  * It accepts the following parameters:
  */
export class VideoBuffer extends Filter<VideoBufferParameters> {
    outputs : FilterStreamRef<VideoBufferParameters, VideoBuffer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBufferParameters = {} as any ) {
        super( inputs, 'buffer', parameters );
    }
}

export interface VideoBufferParameters {
    /**
      * Specify the size (width and height) of the buffered video frames. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual.
      */
    video_size ?: string | number;
    /** The input video width. */
    width ?: string | number;
    /** The input video height. */
    height ?: string | number;
    /** A string representing the pixel format of the buffered video frames. It may be a number corresponding to a pixel format, or a pixel format name. */
    pix_fmt ?: string | number;
    /** Specify the timebase assumed by the timestamps of the buffered frames. */
    time_base ?: string | number;
    /** Specify the frame rate expected for the video stream. */
    frame_rate ?: string | number;
    /**
      * The sample (pixel) aspect ratio of the input video.
      * @aliases sar
      */
    pixel_aspect ?: string | number;
    /**
      * The sample (pixel) aspect ratio of the input video.
      * @aliasof pixel_aspect
      */
    sar ?: string | number;
    /** This option is deprecated and ignored. Prepend sws_flags=flags; to the filtergraph description to specify swscale flags for automatically inserted scalers. See Filtergraph syntax. */
    sws_param ?: string | number;
    /** When using a hardware pixel format, this should be a reference to an AVHWFramesContext describing input frames. */
    hw_frames_ctx ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.1 buffer
  * Buffer video frames, and make them available to the filter chain.
  * 
  * This source is mainly intended for a programmatic use, in particular through the interface defined in libavfilter/vsrc_buffer.h.
  * 
  * It accepts the following parameters:
  */
export function videoBuffer ( inputs : Stream | Stream[] = [], parameters : VideoBufferParameters = {} as any ) {
    return new VideoBuffer( inputs, parameters );
}