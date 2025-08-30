import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.83 sidechaingate
  * A sidechain gate acts like a normal (wideband) gate but has the ability to filter the detected signal before sending it to the gain reduction stage. Normally a gate uses the full range signal to detect a level above the threshold. For example: If you cut all lower frequencies from your sidechain signal the gate will decrease the volume of your track only if not enough highs appear. With this technique you are able to reduce the resonation of a natural drum or remove "rumbling" of muted strokes from a heavily distorted guitar. It needs two input streams and returns one output stream. First input stream will be processed depending on second stream signal.
  * 
  * The filter accepts the following options:
  */
export class AudioSideChainGate extends Filter<AudioSideChainGateParameters> {
    outputs : FilterStreamRef<AudioSideChainGateParameters, AudioSideChainGate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSideChainGateParameters = {} as any ) {
        super( inputs, 'sidechaingate', parameters );
    }
}

export interface AudioSideChainGateParameters {
    /** Set input level before filtering. Default is 1. Allowed range is from 0.015625 to 64. */
    level_in ?: string | number;
    /** Set the mode of operation. Can be upward or downward. Default is downward. If set to upward mode, higher parts of signal will be amplified, expanding dynamic range in upward direction. Otherwise, in case of downward lower parts of signal will be reduced. */
    mode ?: string | number;
    /** Set the level of gain reduction when the signal is below the threshold. Default is 0.06125. Allowed range is from 0 to 1. Setting this to 0 disables reduction and then filter behaves like expander. */
    range ?: string | number;
    /** If a signal rises above this level the gain reduction is released. Default is 0.125. Allowed range is from 0 to 1. */
    threshold ?: string | number;
    /** Set a ratio about which the signal is reduced. Default is 2. Allowed range is from 1 to 9000. */
    ratio ?: string | number;
    /** Amount of milliseconds the signal has to rise above the threshold before gain reduction stops. Default is 20 milliseconds. Allowed range is from 0.01 to 9000. */
    attack ?: string | number;
    /** Amount of milliseconds the signal has to fall below the threshold before the reduction is increased again. Default is 250 milliseconds. Allowed range is from 0.01 to 9000. */
    release ?: string | number;
    /** Set amount of amplification of signal after processing. Default is 1. Allowed range is from 1 to 64. */
    makeup ?: string | number;
    /** Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.828427125. Allowed range is from 1 to 8. */
    knee ?: string | number;
    /** Choose if exact signal should be taken for detection or an RMS like one. Default is rms. Can be peak or rms. */
    detection ?: string | number;
    /** Choose if the average level between all channels or the louder channel affects the reduction. Default is average. Can be average or maximum. */
    link ?: string | number;
    /** Set sidechain gain. Default is 1. Range is from 0.015625 to 64. */
    level_sc ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.83 sidechaingate
  * A sidechain gate acts like a normal (wideband) gate but has the ability to filter the detected signal before sending it to the gain reduction stage. Normally a gate uses the full range signal to detect a level above the threshold. For example: If you cut all lower frequencies from your sidechain signal the gate will decrease the volume of your track only if not enough highs appear. With this technique you are able to reduce the resonation of a natural drum or remove "rumbling" of muted strokes from a heavily distorted guitar. It needs two input streams and returns one output stream. First input stream will be processed depending on second stream signal.
  * 
  * The filter accepts the following options:
  */
export function audioSideChainGate ( inputs : Stream | Stream[] = [], parameters : AudioSideChainGateParameters = {} as any ) {
    return new AudioSideChainGate( inputs, parameters );
}