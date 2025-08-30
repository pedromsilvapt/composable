import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.81 rubberband
  * Apply time-stretching and pitch-shifting with librubberband.
  * 
  * To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-librubberband.
  * 
  * The filter accepts the following options:
  */
export class AudioRubberband extends Filter<AudioRubberbandParameters> {
    outputs : FilterStreamRef<AudioRubberbandParameters, AudioRubberband>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioRubberbandParameters = {} as any ) {
        super( inputs, 'rubberband', parameters );
    }
}

export interface AudioRubberbandParameters {
    /** Set tempo scale factor. */
    tempo ?: string | number;
    /** Set pitch scale factor. */
    pitch ?: string | number;
    /**
      * Set transients detector. Possible values are:
      * crisp
      * mixed
      * smooth
      */
    transients ?: string | number;
    /**
      * Set detector. Possible values are:
      * compound
      * percussive
      * soft
      */
    detector ?: string | number;
    /**
      * Set phase. Possible values are:
      * laminar
      * independent
      */
    phase ?: string | number;
    /**
      * Set processing window size. Possible values are:
      * standard
      * short
      * long
      */
    window ?: string | number;
    /**
      * Set smoothing. Possible values are:
      * off
      * on
      */
    smoothing ?: string | number;
    /**
      * Enable formant preservation when shift pitching. Possible values are:
      * shifted
      * preserved
      */
    formant ?: string | number;
    /**
      * Set pitch quality. Possible values are:
      * quality
      * speed
      * consistency
      */
    pitchq ?: string | number;
    /**
      * Set channels. Possible values are:
      * apart
      * together
      */
    channels ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.81 rubberband
  * Apply time-stretching and pitch-shifting with librubberband.
  * 
  * To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-librubberband.
  * 
  * The filter accepts the following options:
  */
export function audioRubberband ( inputs : Stream | Stream[] = [], parameters : AudioRubberbandParameters = {} as any ) {
    return new AudioRubberband( inputs, parameters );
}