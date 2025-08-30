import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.84 frei0r
  * Apply a frei0r effect to the input video.
  * 
  * To enable the compilation of this filter, you need to install the frei0r header and configure FFmpeg with --enable-frei0r.
  * 
  * It accepts the following parameters:
  */
export class VideoFrei0r extends Filter<VideoFrei0rParameters> {
    outputs : FilterStreamRef<VideoFrei0rParameters, VideoFrei0r>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFrei0rParameters = {} as any ) {
        super( inputs, 'frei0r', parameters );
    }
}

export interface VideoFrei0rParameters {
    /**
      * The name of the frei0r effect to load. If the environment variable
      * FREI0R_PATH is defined, the frei0r effect is searched for in each of the directories specified by the colon-separated list in FREI0R_PATH. Otherwise, the standard frei0r paths are searched, in this order:
      * HOME/.frei0r-1/lib/, /usr/local/lib/frei0r-1/,
      * /usr/lib/frei0r-1/.
      */
    filter_name ?: string | number;
    /** A ’|’-separated list of parameters to pass to the frei0r effect. */
    filter_params ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.84 frei0r
  * Apply a frei0r effect to the input video.
  * 
  * To enable the compilation of this filter, you need to install the frei0r header and configure FFmpeg with --enable-frei0r.
  * 
  * It accepts the following parameters:
  */
export function videoFrei0r ( inputs : Stream | Stream[] = [], parameters : VideoFrei0rParameters = {} as any ) {
    return new VideoFrei0r( inputs, parameters );
}