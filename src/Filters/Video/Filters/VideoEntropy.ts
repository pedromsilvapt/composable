import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.62 entropy
  * Measure graylevel entropy in histogram of color channels of video frames.
  * 
  * It accepts the following parameters:
  */
export class VideoEntropy extends Filter<VideoEntropyParameters> {
    outputs : FilterStreamRef<VideoEntropyParameters, VideoEntropy>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoEntropyParameters = {} as any ) {
        super( inputs, 'entropy', parameters );
    }
}

export interface VideoEntropyParameters {
    /**
      * Can be either normal or diff. Default is normal.
      * diff mode measures entropy of histogram delta values, absolute differences between neighbour histogram values.
      */
    mode ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.62 entropy
  * Measure graylevel entropy in histogram of color channels of video frames.
  * 
  * It accepts the following parameters:
  */
export function videoEntropy ( inputs : Stream | Stream[] = [], parameters : VideoEntropyParameters = {} as any ) {
    return new VideoEntropy( inputs, parameters );
}