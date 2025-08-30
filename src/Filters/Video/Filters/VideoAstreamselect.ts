import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.194 astreamselect
  * Select video or audio streams.
  * 
  * The filter accepts the following options:
  */
export class VideoAstreamselect extends Filter<VideoAstreamselectParameters> {
    outputs : FilterStreamRef<VideoAstreamselectParameters, VideoAstreamselect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAstreamselectParameters = {} as any ) {
        super( inputs, 'astreamselect', parameters );
    }
}

export interface VideoAstreamselectParameters {
    /** Set number of inputs. Default is 2. */
    inputs ?: string | number;
    /** Set input indexes to remap to outputs. */
    map ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.194 astreamselect
  * Select video or audio streams.
  * 
  * The filter accepts the following options:
  */
export function videoAstreamselect ( inputs : Stream | Stream[] = [], parameters : VideoAstreamselectParameters = {} as any ) {
    return new VideoAstreamselect( inputs, parameters );
}