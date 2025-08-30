import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.42 decimate
  * Drop duplicated frames at regular intervals.
  * 
  * The filter accepts the following options:
  */
export class VideoDecimate extends Filter<VideoDecimateParameters> {
    outputs : FilterStreamRef<VideoDecimateParameters, VideoDecimate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDecimateParameters = {} as any ) {
        super( inputs, 'decimate', parameters );
    }
}

export interface VideoDecimateParameters {
    /**
      * Set the number of frames from which one will be dropped. Setting this to
      * N means one frame in every batch of N frames will be dropped. Default is 5.
      */
    cycle ?: string | number;
    /** Set the threshold for duplicate detection. If the difference metric for a frame is less than or equal to this value, then it is declared as duplicate. Default is 1.1 */
    dupthresh ?: string | number;
    /** Set scene change threshold. Default is 15. */
    scthresh ?: string | number;
    /** Set the size of the x and y-axis blocks used during metric calculations. Larger blocks give better noise suppression, but also give worse detection of small movements. Must be a power of two. Default is 32. */
    blockx ?: string | number;
    /**
      * Mark main input as a pre-processed input and activate clean source input stream. This allows the input to be pre-processed with various filters to help the metrics calculation while keeping the frame selection lossless. When set to
      * 1, the first stream is for the pre-processed input, and the second stream is the clean source from where the kept frames are chosen. Default is
      * 0.
      */
    blocky ?: string | number;
    /**
      * Set whether or not chroma is considered in the metric calculations. Default is
      * 1.
      */
    ppsrc ?: string | number;
    chroma ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.42 decimate
  * Drop duplicated frames at regular intervals.
  * 
  * The filter accepts the following options:
  */
export function videoDecimate ( inputs : Stream | Stream[] = [], parameters : VideoDecimateParameters = {} as any ) {
    return new VideoDecimate( inputs, parameters );
}