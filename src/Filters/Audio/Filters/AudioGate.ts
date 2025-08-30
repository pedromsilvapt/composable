import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.20 agate
  * A gate is mainly used to reduce lower parts of a signal. This kind of signal processing reduces disturbing noise between useful signals.
  * 
  * Gating is done by detecting the volume below a chosen level threshold and dividing it by the factor set with ratio. The bottom of the noise floor is set via range. Because an exact manipulation of the signal would cause distortion of the waveform the reduction can be levelled over time. This is done by setting attack and release.
  * 
  * attack determines how long the signal has to fall below the threshold before any reduction will occur and release sets the time the signal has to rise above the threshold to reduce the reduction again. Shorter signals than the chosen attack time will be left untouched.
  */
export class AudioGate extends Filter<AudioGateParameters> {
    outputs : FilterStreamRef<AudioGateParameters, AudioGate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioGateParameters = {} as any ) {
        super( inputs, 'agate', parameters );
    }
}

export interface AudioGateParameters {
    /** Set input level before filtering. Default is 1. Allowed range is from 0.015625 to 64. */
    level_in ?: string | number;
    /** Set the mode of operation. Can be upward or downward. Default is downward. If set to upward mode, higher parts of signal will be amplified, expanding dynamic range in upward direction. Otherwise, in case of downward lower parts of signal will be reduced. */
    mode ?: string | number;
    /** Set the level of gain reduction when the signal is below the threshold. Default is 0.06125. Allowed range is from 0 to 1. Setting this to 0 disables reduction and then filter behaves like expander. */
    range ?: string | number;
    /** If a signal rises above this level the gain reduction is released. Default is 0.125. Allowed range is from 0 to 1. */
    threshold ?: string | number;
    /** Set a ratio by which the signal is reduced. Default is 2. Allowed range is from 1 to 9000. */
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

    [key : string] : string | number;
}

/**
  * 8.20 agate
  * A gate is mainly used to reduce lower parts of a signal. This kind of signal processing reduces disturbing noise between useful signals.
  * 
  * Gating is done by detecting the volume below a chosen level threshold and dividing it by the factor set with ratio. The bottom of the noise floor is set via range. Because an exact manipulation of the signal would cause distortion of the waveform the reduction can be levelled over time. This is done by setting attack and release.
  * 
  * attack determines how long the signal has to fall below the threshold before any reduction will occur and release sets the time the signal has to rise above the threshold to reduce the reduction again. Shorter signals than the chosen attack time will be left untouched.
  */
export function audioGate ( inputs : Stream | Stream[] = [], parameters : AudioGateParameters = {} as any ) {
    return new AudioGate( inputs, parameters );
}