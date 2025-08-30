import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.12 aecho
  * Apply echoing to the input audio.
  * 
  * Echoes are reflected sound and can occur naturally amongst mountains (and sometimes large buildings) when talking or shouting; digital echo effects emulate this behaviour and are often used to help fill out the sound of a single instrument or vocal. The time difference between the original signal and the reflection is the delay, and the loudness of the reflected signal is the decay. Multiple echoes can have different delays and decays.
  * 
  * A description of the accepted parameters follows.
  */
export class AudioEcho extends Filter<AudioEchoParameters> {
    outputs : FilterStreamRef<AudioEchoParameters, AudioEcho>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioEchoParameters = {} as any ) {
        super( inputs, 'aecho', parameters );
    }
}

export interface AudioEchoParameters {
    /** Set input gain of reflected signal. Default is 0.6. */
    in_gain ?: string | number;
    /** Set output gain of reflected signal. Default is 0.3. */
    out_gain ?: string | number;
    /** Set list of time intervals in milliseconds between original signal and reflections separated by ’|’. Allowed range for each delay is (0 - 90000.0]. Default is 1000. */
    delays ?: string | number;
    /** Set list of loudness of reflected signals separated by ’|’. Allowed range for each decay is (0 - 1.0]. Default is 0.5. */
    decays ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.12 aecho
  * Apply echoing to the input audio.
  * 
  * Echoes are reflected sound and can occur naturally amongst mountains (and sometimes large buildings) when talking or shouting; digital echo effects emulate this behaviour and are often used to help fill out the sound of a single instrument or vocal. The time difference between the original signal and the reflection is the delay, and the loudness of the reflected signal is the decay. Multiple echoes can have different delays and decays.
  * 
  * A description of the accepted parameters follows.
  */
export function audioEcho ( inputs : Stream | Stream[] = [], parameters : AudioEchoParameters = {} as any ) {
    return new AudioEcho( inputs, parameters );
}