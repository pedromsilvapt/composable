import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.168 reverse
  * Reverse a video clip.
  * 
  * Warning: This filter requires memory to buffer the entire clip, so trimming is suggested.
  */
export class VideoReverse extends Filter<VideoReverseParameters> {
    outputs : FilterStreamRef<VideoReverseParameters, VideoReverse>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoReverseParameters = {} as any ) {
        super( inputs, 'reverse', parameters );
    }
}

export interface VideoReverseParameters {


    [key : string] : string | number;
}

/**
  * 11.168 reverse
  * Reverse a video clip.
  * 
  * Warning: This filter requires memory to buffer the entire clip, so trimming is suggested.
  */
export function videoReverse ( inputs : Stream | Stream[] = [], parameters : VideoReverseParameters = {} as any ) {
    return new VideoReverse( inputs, parameters );
}