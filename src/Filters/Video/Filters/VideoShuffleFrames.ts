import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.184 shuffleframes
  * Reorder and/or duplicate and/or drop video frames.
  * 
  * It accepts the following parameters:
  */
export class VideoShuffleFrames extends Filter<VideoShuffleFramesParameters> {
    outputs : FilterStreamRef<VideoShuffleFramesParameters, VideoShuffleFrames>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoShuffleFramesParameters = {} as any ) {
        super( inputs, 'shuffleframes', parameters );
    }
}

export interface VideoShuffleFramesParameters {
    /** Set the destination indexes of input frames. This is space or ’|’ separated list of indexes that maps input frames to output frames. Number of indexes also sets maximal value that each index may have. ’-1’ index have special meaning and that is to drop frame. */
    mapping ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.184 shuffleframes
  * Reorder and/or duplicate and/or drop video frames.
  * 
  * It accepts the following parameters:
  */
export function videoShuffleFrames ( inputs : Stream | Stream[] = [], parameters : VideoShuffleFramesParameters = {} as any ) {
    return new VideoShuffleFrames( inputs, parameters );
}