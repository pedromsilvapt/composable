import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.42 asr
  * Automatic Speech Recognition
  * 
  * This filter uses PocketSphinx for speech recognition. To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-pocketsphinx.
  * 
  * It accepts the following options:
  */
export class AudioSr extends Filter<AudioSrParameters> {
    outputs : FilterStreamRef<AudioSrParameters, AudioSr>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSrParameters = {} as any ) {
        super( inputs, 'asr', parameters );
    }
}

export interface AudioSrParameters {
    /** Set sampling rate of input audio. Defaults is 16000. This need to match speech models, otherwise one will get poor results. */
    rate ?: string | number;
    /** Set dictionary containing acoustic model files. */
    hmm ?: string | number;
    /** Set pronunciation dictionary. */
    dict ?: string | number;
    /** Set language model file. */
    lm ?: string | number;
    /** Set language model set. */
    lmctl ?: string | number;
    /** Set which language model to use. */
    lmname ?: string | number;
    /** Set output for log messages. */
    logfn ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.42 asr
  * Automatic Speech Recognition
  * 
  * This filter uses PocketSphinx for speech recognition. To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-pocketsphinx.
  * 
  * It accepts the following options:
  */
export function audioSr ( inputs : Stream | Stream[] = [], parameters : AudioSrParameters = {} as any ) {
    return new AudioSr( inputs, parameters );
}