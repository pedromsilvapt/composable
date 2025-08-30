import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.6 atadenoise
  * Apply an Adaptive Temporal Averaging Denoiser to the video input.
  * 
  * The filter accepts the following options:
  */
export class VideoAtaDenoise extends Filter<VideoAtaDenoiseParameters> {
    outputs : FilterStreamRef<VideoAtaDenoiseParameters, VideoAtaDenoise>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAtaDenoiseParameters = {} as any ) {
        super( inputs, 'atadenoise', parameters );
    }
}

export interface VideoAtaDenoiseParameters {
    /** Set threshold A for 1st plane. Default is 0.02. Valid range is 0 to 0.3. */
    '0a' ?: string | number;
    /** Set threshold B for 1st plane. Default is 0.04. Valid range is 0 to 5. */
    '0b' ?: string | number;
    /** Set threshold A for 2nd plane. Default is 0.02. Valid range is 0 to 0.3. */
    '1a' ?: string | number;
    /** Set threshold B for 2nd plane. Default is 0.04. Valid range is 0 to 5. */
    '1b' ?: string | number;
    /** Set threshold A for 3rd plane. Default is 0.02. Valid range is 0 to 0.3. */
    '2a' ?: string | number;
    /**
      * Set threshold B for 3rd plane. Default is 0.04. Valid range is 0 to 5.
      * Threshold A is designed to react on abrupt changes in the input signal and threshold B is designed to react on continuous changes in the input signal.
      */
    '2b' ?: string | number;
    /** Set number of frames filter will use for averaging. Default is 9. Must be odd number in range [5, 129]. */
    s ?: string | number;
    /** Set what planes of frame filter will use for averaging. Default is all. */
    p ?: string | number;
    /**
      * Set what variant of algorithm filter will use for averaging. Default is p parallel. Alternatively can be set to s serial.
      * Parallel can be faster then serial, while other way around is never true. Parallel will abort early on first change being greater then thresholds, while serial will continue processing other side of frames if they are equal or bellow thresholds.
      */
    a ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.6 atadenoise
  * Apply an Adaptive Temporal Averaging Denoiser to the video input.
  * 
  * The filter accepts the following options:
  */
export function videoAtaDenoise ( inputs : Stream | Stream[] = [], parameters : VideoAtaDenoiseParameters = {} as any ) {
    return new VideoAtaDenoise( inputs, parameters );
}