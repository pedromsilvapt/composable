import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.101 hstack
  * Stack input videos horizontally.
  * 
  * All streams must be of same pixel format and of same height.
  * 
  * Note that this filter is faster than using overlay and pad filter to create same output.
  * 
  * The filter accepts the following option:
  */
export class VideoHStack extends Filter<VideoHStackParameters> {
    outputs : FilterStreamRef<VideoHStackParameters, VideoHStack>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHStackParameters = {} as any ) {
        super( inputs, 'hstack', parameters );
    }
}

export interface VideoHStackParameters {
    /** Set number of input streams. Default is 2. */
    inputs ?: string | number;
    /** If set to 1, force the output to terminate when the shortest input terminates. Default value is 0. */
    shortest ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.101 hstack
  * Stack input videos horizontally.
  * 
  * All streams must be of same pixel format and of same height.
  * 
  * Note that this filter is faster than using overlay and pad filter to create same output.
  * 
  * The filter accepts the following option:
  */
export function videoHStack ( inputs : Stream | Stream[] = [], parameters : VideoHStackParameters = {} as any ) {
    return new VideoHStack( inputs, parameters );
}