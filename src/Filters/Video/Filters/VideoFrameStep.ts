import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.81 framestep
  * Select one frame every N-th frame.
  * 
  * This filter accepts the following option:
  */
export class VideoFrameStep extends Filter<VideoFrameStepParameters> {
    outputs : FilterStreamRef<VideoFrameStepParameters, VideoFrameStep>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFrameStepParameters = {} as any ) {
        super( inputs, 'framestep', parameters );
    }
}

export interface VideoFrameStepParameters {
    /** Select frame after every step frames. Allowed values are positive integers higher than 0. Default value is 1. */
    step ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.81 framestep
  * Select one frame every N-th frame.
  * 
  * This filter accepts the following option:
  */
export function videoFrameStep ( inputs : Stream | Stream[] = [], parameters : VideoFrameStepParameters = {} as any ) {
    return new VideoFrameStep( inputs, parameters );
}