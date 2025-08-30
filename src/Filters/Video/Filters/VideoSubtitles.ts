import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.195 subtitles
  * Draw subtitles on top of input video using the libass library.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libass. This filter also requires a build with libavcodec and libavformat to convert the passed subtitles file to ASS (Advanced Substation Alpha) subtitles format.
  * 
  * The filter accepts the following options:
  */
export class VideoSubtitles extends Filter<VideoSubtitlesParameters> {
    outputs : FilterStreamRef<VideoSubtitlesParameters, VideoSubtitles>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSubtitlesParameters = {} as any ) {
        super( inputs, 'subtitles', parameters );
    }
}

export interface VideoSubtitlesParameters {
    /**
      * Set the filename of the subtitle file to read. It must be specified.
      * @aliases f
      */
    filename ?: string | number;
    /**
      * Set the filename of the subtitle file to read. It must be specified.
      * @aliasof filename
      */
    f ?: string | number;
    /**
      * Specify the size of the original video, the video for which the ASS file was composed. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Due to a misdesign in ASS aspect ratio arithmetic, this is necessary to correctly scale the fonts if the aspect ratio has been changed.
      */
    original_size ?: string | number;
    /** Set a directory path containing fonts that can be used by the filter. These fonts will be used in addition to whatever the font provider uses. */
    fontsdir ?: string | number;
    /** Process alpha channel, by default alpha channel is untouched. */
    alpha ?: string | number;
    /** Set subtitles input character encoding. subtitles filter only. Only useful if not UTF-8. */
    charenc ?: string | number;
    /**
      * Set subtitles stream index. subtitles filter only.
      * @aliases si
      */
    stream_index ?: string | number;
    /**
      * Set subtitles stream index. subtitles filter only.
      * @aliasof stream_index
      */
    si ?: string | number;
    /** Override default style or script info parameters of the subtitles. It accepts a string containing ASS style format KEY=VALUE couples separated by ",". */
    force_style ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.195 subtitles
  * Draw subtitles on top of input video using the libass library.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libass. This filter also requires a build with libavcodec and libavformat to convert the passed subtitles file to ASS (Advanced Substation Alpha) subtitles format.
  * 
  * The filter accepts the following options:
  */
export function videoSubtitles ( inputs : Stream | Stream[] = [], parameters : VideoSubtitlesParameters = {} as any ) {
    return new VideoSubtitles( inputs, parameters );
}