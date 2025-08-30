import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 17.2 movie
  * Read audio and/or video stream(s) from a movie container.
  * 
  * It accepts the following parameters:
  */
export class Movie extends Filter<MovieParameters> {
    outputs : FilterStreamRef<MovieParameters, Movie>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : MovieParameters = {} as any ) {
        super( inputs, 'movie', parameters );
    }
}

export interface MovieParameters {
    /** The name of the resource to read (not necessarily a file; it can also be a device or a stream accessed through some protocol). */
    filename ?: string | number;
    /**
      * Specifies the format assumed for the movie to read, and can be either the name of a container or an input device. If not specified, the format is guessed from movie_name or by probing.
      * @aliases f
      */
    format_name ?: string | number;
    /**
      * Specifies the format assumed for the movie to read, and can be either the name of a container or an input device. If not specified, the format is guessed from movie_name or by probing.
      * @aliasof format_name
      */
    f ?: string | number;
    /**
      * Specifies the seek point in seconds. The frames will be output starting from this seek point. The parameter is evaluated with
      * av_strtod, so the numerical value may be suffixed by an IS postfix. The default value is "0".
      * @aliases sp
      */
    seek_point ?: string | number;
    /**
      * Specifies the seek point in seconds. The frames will be output starting from this seek point. The parameter is evaluated with
      * av_strtod, so the numerical value may be suffixed by an IS postfix. The default value is "0".
      * @aliasof seek_point
      */
    sp ?: string | number;
    /**
      * Specifies the streams to read. Several streams can be specified, separated by "+". The source will then have as many outputs, in the same order. The syntax is explained in the (ffmpeg)"Stream specifiers"
      * section in the ffmpeg manual. Two special names, "dv" and "da" specify respectively the default (best suited) video and audio stream. Default is "dv", or "da" if the filter is called as "amovie".
      * @aliases s
      */
    streams ?: string | number;
    /**
      * Specifies the streams to read. Several streams can be specified, separated by "+". The source will then have as many outputs, in the same order. The syntax is explained in the (ffmpeg)"Stream specifiers"
      * section in the ffmpeg manual. Two special names, "dv" and "da" specify respectively the default (best suited) video and audio stream. Default is "dv", or "da" if the filter is called as "amovie".
      * @aliasof streams
      */
    s ?: string | number;
    /**
      * Specifies the index of the video stream to read. If the value is -1, the most suitable video stream will be automatically selected. The default value is "-1". Deprecated. If the filter is called "amovie", it will select audio instead of video.
      * @aliases si
      */
    stream_index ?: string | number;
    /**
      * Specifies the index of the video stream to read. If the value is -1, the most suitable video stream will be automatically selected. The default value is "-1". Deprecated. If the filter is called "amovie", it will select audio instead of video.
      * @aliasof stream_index
      */
    si ?: string | number;
    /**
      * Specifies how many times to read the stream in sequence. If the value is 0, the stream will be looped infinitely. Default value is "1".
      * Note that when the movie is looped the source timestamps are not changed, so it will generate non monotonically increasing timestamps.
      */
    loop ?: string | number;
    /** Specifies the time difference between frames above which the point is considered a timestamp discontinuity which is removed by adjusting the later timestamps. */
    discontinuity ?: string | number;

    [key : string] : string | number;
}

/**
  * 17.2 movie
  * Read audio and/or video stream(s) from a movie container.
  * 
  * It accepts the following parameters:
  */
export function movie ( inputs : Stream | Stream[] = [], parameters : MovieParameters = {} as any ) {
    return new Movie( inputs, parameters );
}