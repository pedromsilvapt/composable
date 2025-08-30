import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.30 anlms
  * Apply Normalized Least-Mean-Squares algorithm to the first audio stream using the second audio stream.
  * 
  * This adaptive filter is used to mimic a desired filter by finding the filter coefficients that relate to producing the least mean square of the error signal (difference between the desired, 2nd input audio stream and the actual signal, the 1st input audio stream).
  * 
  * A description of the accepted options follows.
  */
export class AudioNlms extends Filter<AudioNlmsParameters> {
    outputs : FilterStreamRef<AudioNlmsParameters, AudioNlms>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNlmsParameters = {} as any ) {
        super( inputs, 'anlms', parameters );
    }
}

export interface AudioNlmsParameters {
    /** Set filter order. */
    order ?: string | number;
    /** Set filter mu. */
    mu ?: string | number;
    /** Set the filter eps. */
    eps ?: string | number;
    /** Set the filter leakage. */
    leakage ?: string | number;
    /**
      * It accepts the following values:
      * i
      * Pass the 1st input.
      * d
      * Pass the 2nd input.
      * o
      * Pass filtered samples.
      * n
      * Pass difference between desired and filtered samples.
      * Default value is o.
      */
    out_mode ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.30 anlms
  * Apply Normalized Least-Mean-Squares algorithm to the first audio stream using the second audio stream.
  * 
  * This adaptive filter is used to mimic a desired filter by finding the filter coefficients that relate to producing the least mean square of the error signal (difference between the desired, 2nd input audio stream and the actual signal, the 1st input audio stream).
  * 
  * A description of the accepted options follows.
  */
export function audioNlms ( inputs : Stream | Stream[] = [], parameters : AudioNlmsParameters = {} as any ) {
    return new AudioNlms( inputs, parameters );
}