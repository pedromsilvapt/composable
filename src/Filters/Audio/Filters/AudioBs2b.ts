import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.51 bs2b
  * Bauer stereo to binaural transformation, which improves headphone listening of stereo audio records.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libbs2b.
  * 
  * It accepts the following parameters:
  */
export class AudioBs2b extends Filter<AudioBs2bParameters> {
    outputs : FilterStreamRef<AudioBs2bParameters, AudioBs2b>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioBs2bParameters = {} as any ) {
        super( inputs, 'bs2b', parameters );
    }
}

export interface AudioBs2bParameters {
    /**
      * Pre-defined crossfeed level.
      * default
      * Default level (fcut=700, feed=50).
      * cmoy
      * Chu Moy circuit (fcut=700, feed=60).
      * jmeier
      * Jan Meier circuit (fcut=650, feed=95).
      */
    profile ?: string | number;
    /** Cut frequency (in Hz). */
    fcut ?: string | number;
    /** Feed level (in Hz). */
    feed ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.51 bs2b
  * Bauer stereo to binaural transformation, which improves headphone listening of stereo audio records.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libbs2b.
  * 
  * It accepts the following parameters:
  */
export function audioBs2b ( inputs : Stream | Stream[] = [], parameters : AudioBs2bParameters = {} as any ) {
    return new AudioBs2b( inputs, parameters );
}