import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.4 flite
  * Synthesize a voice utterance using the libflite library.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libflite.
  * 
  * Note that versions of the flite library prior to 2.0 are not thread-safe.
  * 
  * The filter accepts the following options:
  */
export class AudioFlite extends Filter<AudioFliteParameters> {
    outputs : FilterStreamRef<AudioFliteParameters, AudioFlite>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFliteParameters = {} as any ) {
        super( inputs, 'flite', parameters );
    }
}

export interface AudioFliteParameters {
    /** If set to 1, list the names of the available voices and exit immediately. Default value is 0. */
    list_voices ?: string | number;
    /**
      * Set the maximum number of samples per frame. Default value is 512.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set the maximum number of samples per frame. Default value is 512.
      * @aliasof nb_samples
      */
    n ?: string | number;
    /** Set the filename containing the text to speak. */
    textfile ?: string | number;
    /** Set the text to speak. */
    text ?: string | number;
    /**
      * Set the voice to use for the speech synthesis. Default value is
      * kal. See also the list_voices option.
      * @aliases v
      */
    voice ?: string | number;
    /**
      * Set the voice to use for the speech synthesis. Default value is
      * kal. See also the list_voices option.
      * @aliasof voice
      */
    v ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.4 flite
  * Synthesize a voice utterance using the libflite library.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libflite.
  * 
  * Note that versions of the flite library prior to 2.0 are not thread-safe.
  * 
  * The filter accepts the following options:
  */
export function audioFlite ( inputs : Stream | Stream[] = [], parameters : AudioFliteParameters = {} as any ) {
    return new AudioFlite( inputs, parameters );
}