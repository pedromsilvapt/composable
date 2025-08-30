import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.54 chorus
  * Add a chorus effect to the audio.
  * 
  * Can make a single vocal sound like a chorus, but can also be applied to instrumentation.
  * 
  * Chorus resembles an echo effect with a short delay, but whereas with echo the delay is constant, with chorus, it is varied using using sinusoidal or triangular modulation. The modulation depth defines the range the modulated delay is played before or after the delay. Hence the delayed sound will sound slower or faster, that is the delayed sound tuned around the original one, like in a chorus where some vocals are slightly off key.
  * 
  * It accepts the following parameters:
  */
export class AudioChorus extends Filter<AudioChorusParameters> {
    outputs : FilterStreamRef<AudioChorusParameters, AudioChorus>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioChorusParameters = {} as any ) {
        super( inputs, 'chorus', parameters );
    }
}

export interface AudioChorusParameters {
    /** Set input gain. Default is 0.4. */
    in_gain ?: string | number;
    /** Set output gain. Default is 0.4. */
    out_gain ?: string | number;
    /** Set delays. A typical delay is around 40ms to 60ms. */
    delays ?: string | number;
    /** Set decays. */
    decays ?: string | number;
    /** Set speeds. */
    speeds ?: string | number;
    /** Set depths. */
    depths ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.54 chorus
  * Add a chorus effect to the audio.
  * 
  * Can make a single vocal sound like a chorus, but can also be applied to instrumentation.
  * 
  * Chorus resembles an echo effect with a short delay, but whereas with echo the delay is constant, with chorus, it is varied using using sinusoidal or triangular modulation. The modulation depth defines the range the modulated delay is played before or after the delay. Hence the delayed sound will sound slower or faster, that is the delayed sound tuned around the original one, like in a chorus where some vocals are slightly off key.
  * 
  * It accepts the following parameters:
  */
export function audioChorus ( inputs : Stream | Stream[] = [], parameters : AudioChorusParameters = {} as any ) {
    return new AudioChorus( inputs, parameters );
}