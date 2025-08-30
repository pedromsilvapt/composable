import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.41 asoftclip
  * Apply audio soft clipping.
  * 
  * Soft clipping is a type of distortion effect where the amplitude of a signal is saturated along a smooth curve, rather than the abrupt shape of hard-clipping.
  * 
  * This filter accepts the following options:
  */
export class AudioSoftClip extends Filter<AudioSoftClipParameters> {
    outputs : FilterStreamRef<AudioSoftClipParameters, AudioSoftClip>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSoftClipParameters = {} as any ) {
        super( inputs, 'asoftclip', parameters );
    }
}

export interface AudioSoftClipParameters {
    /**
      * Set type of soft-clipping.
      * It accepts the following values:
      * tanh
      * atan
      * cubic
      * exp
      * alg
      * quintic
      * sin
      */
    type ?: string | number;
    /** Set additional parameter which controls sigmoid function. */
    param ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.41 asoftclip
  * Apply audio soft clipping.
  * 
  * Soft clipping is a type of distortion effect where the amplitude of a signal is saturated along a smooth curve, rather than the abrupt shape of hard-clipping.
  * 
  * This filter accepts the following options:
  */
export function audioSoftClip ( inputs : Stream | Stream[] = [], parameters : AudioSoftClipParameters = {} as any ) {
    return new AudioSoftClip( inputs, parameters );
}