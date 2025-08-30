import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.224 vstack
  * Stack input videos vertically.
  * 
  * All streams must be of same pixel format and of same width.
  * 
  * Note that this filter is faster than using overlay and pad filter to create same output.
  * 
  * The filter accepts the following options:
  */
export class VideoStack extends Filter<VideoStackParameters> {
    outputs : FilterStreamRef<VideoStackParameters, VideoStack>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoStackParameters = {} as any ) {
        super( inputs, 'vstack', parameters );
    }
}

export interface VideoStackParameters {
    /** Set number of input streams. Default is 2. */
    inputs ?: string | number;
    /** If set to 1, force the output to terminate when the shortest input terminates. Default value is 0. */
    shortest ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.224 vstack
  * Stack input videos vertically.
  * 
  * All streams must be of same pixel format and of same width.
  * 
  * Note that this filter is faster than using overlay and pad filter to create same output.
  * 
  * The filter accepts the following options:
  */
export function videoStack ( inputs : Stream | Stream[] = [], parameters : VideoStackParameters = {} as any ) {
    return new VideoStack( inputs, parameters );
}