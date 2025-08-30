import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.202 thumbnail
  * Select the most representative frame in a given sequence of consecutive frames.
  * 
  * The filter accepts the following options:
  */
export class VideoThumbnail extends Filter<VideoThumbnailParameters> {
    outputs : FilterStreamRef<VideoThumbnailParameters, VideoThumbnail>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoThumbnailParameters = {} as any ) {
        super( inputs, 'thumbnail', parameters );
    }
}

export interface VideoThumbnailParameters {
    /** Set the frames batch size to analyze; in a set of n frames, the filter will pick one of them, and then handle the next batch of n frames until the end. Default is 100. */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.202 thumbnail
  * Select the most representative frame in a given sequence of consecutive frames.
  * 
  * The filter accepts the following options:
  */
export function videoThumbnail ( inputs : Stream | Stream[] = [], parameters : VideoThumbnailParameters = {} as any ) {
    return new VideoThumbnail( inputs, parameters );
}