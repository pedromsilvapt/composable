import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.83 freezeframes
  * Freeze video frames.
  * 
  * This filter freezes video frames using frame from 2nd input.
  * 
  * The filter accepts the following options:
  */
export class VideoFreezeFrames extends Filter<VideoFreezeFramesParameters> {
    outputs : FilterStreamRef<VideoFreezeFramesParameters, VideoFreezeFrames>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFreezeFramesParameters = {} as any ) {
        super( inputs, 'freezeframes', parameters );
    }
}

export interface VideoFreezeFramesParameters {
    /** Set number of first frame from which to start freeze. */
    first ?: string | number;
    /** Set number of last frame from which to end freeze. */
    last ?: string | number;
    /** Set number of frame from 2nd input which will be used instead of replaced frames. */
    replace ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.83 freezeframes
  * Freeze video frames.
  * 
  * This filter freezes video frames using frame from 2nd input.
  * 
  * The filter accepts the following options:
  */
export function videoFreezeFrames ( inputs : Stream | Stream[] = [], parameters : VideoFreezeFramesParameters = {} as any ) {
    return new VideoFreezeFrames( inputs, parameters );
}