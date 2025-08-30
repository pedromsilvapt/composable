import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.8 adeclick
  * Remove impulsive noise from input audio.
  * 
  * Samples detected as impulsive noise are replaced by interpolated samples using autoregressive modelling.
  */
export class AudioDeClick extends Filter<AudioDeClickParameters> {
    outputs : FilterStreamRef<AudioDeClickParameters, AudioDeClick>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDeClickParameters = {} as any ) {
        super( inputs, 'adeclick', parameters );
    }
}

export interface AudioDeClickParameters {
    /**
      * Set window size, in milliseconds. Allowed range is from 10 to
      * 100. Default value is 55 milliseconds. This sets size of window which will be processed at once.
      */
    w ?: string | number;
    /**
      * Set window overlap, in percentage of window size. Allowed range is from
      * 50 to 95. Default value is 75 percent. Setting this to a very high value increases impulsive noise removal but makes whole process much slower.
      */
    o ?: string | number;
    /**
      * Set autoregression order, in percentage of window size. Allowed range is from
      * 0 to 25. Default value is 2 percent. This option also controls quality of interpolated samples using neighbour good samples.
      */
    a ?: string | number;
    /** Set threshold value. Allowed range is from 1 to 100. Default value is 2. This controls the strength of impulsive noise which is going to be removed. The lower value, the more samples will be detected as impulsive noise. */
    t ?: string | number;
    /**
      * Set burst fusion, in percentage of window size. Allowed range is 0 to
      * 10. Default value is 2. If any two samples detected as noise are spaced less than this value then any sample between those two samples will be also detected as noise.
      */
    b ?: string | number;
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
  * 8.8 adeclick
  * Remove impulsive noise from input audio.
  * 
  * Samples detected as impulsive noise are replaced by interpolated samples using autoregressive modelling.
  */
export function audioDeClick ( inputs : Stream | Stream[] = [], parameters : AudioDeClickParameters = {} as any ) {
    return new AudioDeClick( inputs, parameters );
}