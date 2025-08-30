import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.9 adeclip
  * Remove clipped samples from input audio.
  * 
  * Samples detected as clipped are replaced by interpolated samples using autoregressive modelling.
  */
export class AudioDeClip extends Filter<AudioDeClipParameters> {
    outputs : FilterStreamRef<AudioDeClipParameters, AudioDeClip>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDeClipParameters = {} as any ) {
        super( inputs, 'adeclip', parameters );
    }
}

export interface AudioDeClipParameters {
    /** Set window size, in milliseconds. Allowed range is from 10 to 100. Default value is 55 milliseconds. This sets size of window which will be processed at once. */
    w ?: string | number;
    /** Set window overlap, in percentage of window size. Allowed range is from 50 to 95. Default value is 75 percent. */
    o ?: string | number;
    /**
      * Set autoregression order, in percentage of window size. Allowed range is from
      * 0 to 25. Default value is 8 percent. This option also controls quality of interpolated samples using neighbour good samples.
      */
    a ?: string | number;
    /** Set threshold value. Allowed range is from 1 to 100. Default value is 10. Higher values make clip detection less aggressive. */
    t ?: string | number;
    /** Set size of histogram used to detect clips. Allowed range is from 100 to 9999. Default value is 1000. Higher values make clip detection less aggressive. */
    n ?: string | number;
    /**
      * Set overlap method.
      * It accepts the following values:
      * a
      * Select overlap-add method. Even not interpolated samples are slightly changed with this method.
      * s
      * Select overlap-save method. Not interpolated samples remain unchanged.
      * Default value is a.
      */
    m ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.9 adeclip
  * Remove clipped samples from input audio.
  * 
  * Samples detected as clipped are replaced by interpolated samples using autoregressive modelling.
  */
export function audioDeClip ( inputs : Stream | Stream[] = [], parameters : AudioDeClipParameters = {} as any ) {
    return new AudioDeClip( inputs, parameters );
}