import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.33 aphaser
  * Add a phasing effect to the input audio.
  * 
  * A phaser filter creates series of peaks and troughs in the frequency spectrum. The position of the peaks and troughs are modulated so that they vary over time, creating a sweeping effect.
  * 
  * A description of the accepted parameters follows.
  */
export class AudioPhaser extends Filter<AudioPhaserParameters> {
    outputs : FilterStreamRef<AudioPhaserParameters, AudioPhaser>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioPhaserParameters = {} as any ) {
        super( inputs, 'aphaser', parameters );
    }
}

export interface AudioPhaserParameters {
    /** Set input gain. Default is 0.4. */
    in_gain ?: string | number;
    /** Set output gain. Default is 0.74 */
    out_gain ?: string | number;
    /** Set delay in milliseconds. Default is 3.0. */
    delay ?: string | number;
    /** Set decay. Default is 0.4. */
    decay ?: string | number;
    /** Set modulation speed in Hz. Default is 0.5. */
    speed ?: string | number;
    /**
      * Set modulation type. Default is triangular.
      * It accepts the following values:
      * ‘triangular, t’
      * ‘sinusoidal, s’
      */
    type ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.33 aphaser
  * Add a phasing effect to the input audio.
  * 
  * A phaser filter creates series of peaks and troughs in the frequency spectrum. The position of the peaks and troughs are modulated so that they vary over time, creating a sweeping effect.
  * 
  * A description of the accepted parameters follows.
  */
export function audioPhaser ( inputs : Stream | Stream[] = [], parameters : AudioPhaserParameters = {} as any ) {
    return new AudioPhaser( inputs, parameters );
}