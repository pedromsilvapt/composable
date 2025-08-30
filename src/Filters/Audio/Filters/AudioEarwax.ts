import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.63 earwax
  * Make audio easier to listen to on headphones.
  * 
  * This filter adds ‘cues’ to 44.1kHz stereo (i.e. audio CD format) audio so that when listened to on headphones the stereo image is moved from inside your head (standard for headphones) to outside and in front of the listener (standard for speakers).
  * 
  * Ported from SoX.
  */
export class AudioEarwax extends Filter<AudioEarwaxParameters> {
    outputs : FilterStreamRef<AudioEarwaxParameters, AudioEarwax>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioEarwaxParameters = {} as any ) {
        super( inputs, 'earwax', parameters );
    }
}

export interface AudioEarwaxParameters {


    [key : string] : string | number;
}

/**
  * 8.63 earwax
  * Make audio easier to listen to on headphones.
  * 
  * This filter adds ‘cues’ to 44.1kHz stereo (i.e. audio CD format) audio so that when listened to on headphones the stereo image is moved from inside your head (standard for headphones) to outside and in front of the listener (standard for speakers).
  * 
  * Ported from SoX.
  */
export function audioEarwax ( inputs : Stream | Stream[] = [], parameters : AudioEarwaxParameters = {} as any ) {
    return new AudioEarwax( inputs, parameters );
}