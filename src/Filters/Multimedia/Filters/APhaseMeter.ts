import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.5 aphasemeter
  * Measures phase of input audio, which is exported as metadata lavfi.aphasemeter.phase, representing mean phase of current audio frame. A video output can also be produced and is enabled by default. The audio is passed through as first output.
  * 
  * Audio will be rematrixed to stereo if it has a different channel layout. Phase value is in range [-1, 1] where -1 means left and right channels are completely out of phase and 1 means channels are in phase.
  * 
  * The filter accepts the following options, all related to its video output:
  */
export class APhaseMeter extends Filter<APhaseMeterParameters> {
    outputs : FilterStreamRef<APhaseMeterParameters, APhaseMeter>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : APhaseMeterParameters = {} as any ) {
        super( inputs, 'aphasemeter', parameters );
    }
}

export interface APhaseMeterParameters {
    /**
      * Set the output frame rate. Default value is 25.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Set the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 800x400.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 800x400.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Specify the red, green, blue contrast. Default values are 2,
      * 7 and 1. Allowed range is [0, 255].
      */
    rc ?: string | number;
    /**
      * Set color which will be used for drawing median phase. If color is
      * none which is default, no median phase value will be drawn.
      */
    gc ?: string | number;
    /** Enable video output. Default is enabled. */
    bc ?: string | number;
    mpc ?: string | number;
    video ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.5 aphasemeter
  * Measures phase of input audio, which is exported as metadata lavfi.aphasemeter.phase, representing mean phase of current audio frame. A video output can also be produced and is enabled by default. The audio is passed through as first output.
  * 
  * Audio will be rematrixed to stereo if it has a different channel layout. Phase value is in range [-1, 1] where -1 means left and right channels are completely out of phase and 1 means channels are in phase.
  * 
  * The filter accepts the following options, all related to its video output:
  */
export function aPhaseMeter ( inputs : Stream | Stream[] = [], parameters : APhaseMeterParameters = {} as any ) {
    return new APhaseMeter( inputs, parameters );
}