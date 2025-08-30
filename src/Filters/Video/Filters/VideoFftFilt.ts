import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.68 fftfilt
  * Apply arbitrary expressions to samples in frequency domain
  */
export class VideoFftFilt extends Filter<VideoFftFiltParameters> {
    outputs : FilterStreamRef<VideoFftFiltParameters, VideoFftFilt>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFftFiltParameters = {} as any ) {
        super( inputs, 'fftfilt', parameters );
    }
}

export interface VideoFftFiltParameters {
    /** Adjust the dc value (gain) of the luma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0. */
    dc_Y ?: string | number;
    /** Adjust the dc value (gain) of the 1st chroma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0. */
    dc_U ?: string | number;
    /** Adjust the dc value (gain) of the 2nd chroma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0. */
    dc_V ?: string | number;
    /** Set the frequency domain weight expression for the luma plane. */
    weight_Y ?: string | number;
    /** Set the frequency domain weight expression for the 1st chroma plane. */
    weight_U ?: string | number;
    /** Set the frequency domain weight expression for the 2nd chroma plane. */
    weight_V ?: string | number;
    /**
      * Set when the expressions are evaluated.
      * It accepts the following values:
      * ‘init’
      * Only evaluate expressions once during the filter initialization.
      * ‘frame’
      * Evaluate expressions for each incoming frame.
      * Default value is ‘init’.
      * The filter accepts the following variables:
      */
    'eval' ?: string | number;
    /** The coordinates of the current sample. */
    X ?: string | number;
    /** The width and height of the image. */
    Y ?: string | number;
    /** The number of input frame, starting from 0. */
    W ?: string | number;
    H ?: string | number;
    N ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.68 fftfilt
  * Apply arbitrary expressions to samples in frequency domain
  */
export function videoFftFilt ( inputs : Stream | Stream[] = [], parameters : VideoFftFiltParameters = {} as any ) {
    return new VideoFftFilt( inputs, parameters );
}