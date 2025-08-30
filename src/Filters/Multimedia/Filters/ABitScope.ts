import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.1 abitscope
  * Convert input audio to a video output, displaying the audio bit scope.
  * 
  * The filter accepts the following options:
  */
export class ABitScope extends Filter<ABitScopeParameters> {
    outputs : FilterStreamRef<ABitScopeParameters, ABitScope>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ABitScopeParameters = {} as any ) {
        super( inputs, 'abitscope', parameters );
    }
}

export interface ABitScopeParameters {
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 1024x256.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 1024x256.
      * @aliasof size
      */
    s ?: string | number;
    /** Specify list of colors separated by space or by ’|’ which will be used to draw channels. Unrecognized or missing colors will be replaced by white color. */
    colors ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.1 abitscope
  * Convert input audio to a video output, displaying the audio bit scope.
  * 
  * The filter accepts the following options:
  */
export function aBitScope ( inputs : Stream | Stream[] = [], parameters : ABitScopeParameters = {} as any ) {
    return new ABitScope( inputs, parameters );
}