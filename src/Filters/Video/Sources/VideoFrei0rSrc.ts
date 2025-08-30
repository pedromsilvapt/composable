import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.6 frei0r_src
  * Provide a frei0r source.
  * 
  * To enable compilation of this filter you need to install the frei0r header and configure FFmpeg with --enable-frei0r.
  * 
  * This source accepts the following parameters:
  */
export class VideoFrei0rSrc extends Filter<VideoFrei0rSrcParameters> {
    outputs : FilterStreamRef<VideoFrei0rSrcParameters, VideoFrei0rSrc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFrei0rSrcParameters = {} as any ) {
        super( inputs, 'frei0r_src', parameters );
    }
}

export interface VideoFrei0rSrcParameters {
    /**
      * The size of the video to generate. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual.
      */
    size ?: string | number;
    /**
      * The framerate of the generated video. It may be a string of the form
      * num/den or a frame rate abbreviation.
      */
    framerate ?: string | number;
    /** The name to the frei0r source to load. For more information regarding frei0r and how to set the parameters, read the frei0r section in the video filters documentation. */
    filter_name ?: string | number;
    /** A ’|’-separated list of parameters to pass to the frei0r source. */
    filter_params ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.6 frei0r_src
  * Provide a frei0r source.
  * 
  * To enable compilation of this filter you need to install the frei0r header and configure FFmpeg with --enable-frei0r.
  * 
  * This source accepts the following parameters:
  */
export function videoFrei0rSrc ( inputs : Stream | Stream[] = [], parameters : VideoFrei0rSrcParameters = {} as any ) {
    return new VideoFrei0rSrc( inputs, parameters );
}