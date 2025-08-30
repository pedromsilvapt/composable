import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.194 streamselect
  * Select video or audio streams.
  * 
  * The filter accepts the following options:
  */
export class VideoStreamselect extends Filter<VideoStreamselectParameters> {
    outputs : FilterStreamRef<VideoStreamselectParameters, VideoStreamselect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoStreamselectParameters = {} as any ) {
        super( inputs, 'streamselect', parameters );
    }
}

export interface VideoStreamselectParameters {
    /** Set number of inputs. Default is 2. */
    inputs ?: string | number;
    /** Set input indexes to remap to outputs. */
    map ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.194 streamselect
  * Select video or audio streams.
  * 
  * The filter accepts the following options:
  */
export function videoStreamselect ( inputs : Stream | Stream[] = [], parameters : VideoStreamselectParameters = {} as any ) {
    return new VideoStreamselect( inputs, parameters );
}