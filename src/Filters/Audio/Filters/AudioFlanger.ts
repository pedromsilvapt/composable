import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.67 flanger
  * Apply a flanging effect to the audio.
  * 
  * The filter accepts the following options:
  */
export class AudioFlanger extends Filter<AudioFlangerParameters> {
    outputs : FilterStreamRef<AudioFlangerParameters, AudioFlanger>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFlangerParameters = {} as any ) {
        super( inputs, 'flanger', parameters );
    }
}

export interface AudioFlangerParameters {
    /** Set base delay in milliseconds. Range from 0 to 30. Default value is 0. */
    delay ?: string | number;
    /** Set added sweep delay in milliseconds. Range from 0 to 10. Default value is 2. */
    depth ?: string | number;
    /** Set percentage regeneration (delayed signal feedback). Range from -95 to 95. Default value is 0. */
    regen ?: string | number;
    /** Set percentage of delayed signal mixed with original. Range from 0 to 100. Default value is 71. */
    width ?: string | number;
    /** Set sweeps per second (Hz). Range from 0.1 to 10. Default value is 0.5. */
    speed ?: string | number;
    /** Set swept wave shape, can be triangular or sinusoidal. Default value is sinusoidal. */
    shape ?: string | number;
    /** Set swept wave percentage-shift for multi channel. Range from 0 to 100. Default value is 25. */
    phase ?: string | number;
    /** Set delay-line interpolation, linear or quadratic. Default is linear. */
    interp ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.67 flanger
  * Apply a flanging effect to the audio.
  * 
  * The filter accepts the following options:
  */
export function audioFlanger ( inputs : Stream | Stream[] = [], parameters : AudioFlangerParameters = {} as any ) {
    return new AudioFlanger( inputs, parameters );
}