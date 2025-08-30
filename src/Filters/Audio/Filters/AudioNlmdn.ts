import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.29 anlmdn
  * Reduce broadband noise in audio samples using Non-Local Means algorithm.
  * 
  * Each sample is adjusted by looking for other samples with similar contexts. This context similarity is defined by comparing their surrounding patches of size
  * p. Patches are searched in an area of r around the sample.
  * 
  * The filter accepts the following options:
  */
export class AudioNlmdn extends Filter<AudioNlmdnParameters> {
    outputs : FilterStreamRef<AudioNlmdnParameters, AudioNlmdn>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNlmdnParameters = {} as any ) {
        super( inputs, 'anlmdn', parameters );
    }
}

export interface AudioNlmdnParameters {
    /** Set denoising strength. Allowed range is from 0.00001 to 10. Default value is 0.00001. */
    s ?: string | number;
    /** Set patch radius duration. Allowed range is from 1 to 100 milliseconds. Default value is 2 milliseconds. */
    p ?: string | number;
    /** Set research radius duration. Allowed range is from 2 to 300 milliseconds. Default value is 6 milliseconds. */
    r ?: string | number;
    /**
      * Set the output mode.
      * It accepts the following values:
      * i
      * Pass input unchanged.
      * o
      * Pass noise filtered out.
      * n
      * Pass only noise.
      * Default value is o.
      */
    o ?: string | number;
    /** Set smooth factor. Default value is 11. Allowed range is from 1 to 15. */
    m ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.29 anlmdn
  * Reduce broadband noise in audio samples using Non-Local Means algorithm.
  * 
  * Each sample is adjusted by looking for other samples with similar contexts. This context similarity is defined by comparing their surrounding patches of size
  * p. Patches are searched in an area of r around the sample.
  * 
  * The filter accepts the following options:
  */
export function audioNlmdn ( inputs : Stream | Stream[] = [], parameters : AudioNlmdnParameters = {} as any ) {
    return new AudioNlmdn( inputs, parameters );
}