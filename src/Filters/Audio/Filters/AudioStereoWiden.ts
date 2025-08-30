import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.88 stereowiden
  * This filter enhance the stereo effect by suppressing signal common to both channels and by delaying the signal of left into right and vice versa, thereby widening the stereo effect.
  * 
  * The filter accepts the following options:
  */
export class AudioStereoWiden extends Filter<AudioStereoWidenParameters> {
    outputs : FilterStreamRef<AudioStereoWidenParameters, AudioStereoWiden>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioStereoWidenParameters = {} as any ) {
        super( inputs, 'stereowiden', parameters );
    }
}

export interface AudioStereoWidenParameters {
    /** Time in milliseconds of the delay of left signal into right and vice versa. Default is 20 milliseconds. */
    delay ?: string | number;
    /** Amount of gain in delayed signal into right and vice versa. Gives a delay effect of left signal in right output and vice versa which gives widening effect. Default is 0.3. */
    feedback ?: string | number;
    /** Cross feed of left into right with inverted phase. This helps in suppressing the mono. If the value is 1 it will cancel all the signal common to both channels. Default is 0.3. */
    crossfeed ?: string | number;
    /** Set level of input signal of original channel. Default is 0.8. */
    drymix ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.88 stereowiden
  * This filter enhance the stereo effect by suppressing signal common to both channels and by delaying the signal of left into right and vice versa, thereby widening the stereo effect.
  * 
  * The filter accepts the following options:
  */
export function audioStereoWiden ( inputs : Stream | Stream[] = [], parameters : AudioStereoWidenParameters = {} as any ) {
    return new AudioStereoWiden( inputs, parameters );
}