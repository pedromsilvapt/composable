import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.187 signature
  * Calculates the MPEG-7 Video Signature. The filter can handle more than one input. In this case the matching between the inputs can be calculated additionally. The filter always passes through the first input. The signature of each stream can be written into a file.
  * 
  * It accepts the following options:
  */
export class VideoSignature extends Filter<VideoSignatureParameters> {
    outputs : FilterStreamRef<VideoSignatureParameters, VideoSignature>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSignatureParameters = {} as any ) {
        super( inputs, 'signature', parameters );
    }
}

export interface VideoSignatureParameters {
    /**
      * Enable or disable the matching process.
      * Available values are:
      * ‘off’
      * Disable the calculation of a matching (default).
      * ‘full’
      * Calculate the matching for the whole video and output whether the whole video matches or only parts.
      * ‘fast’
      * Calculate only until a matching is found or the video ends. Should be faster in some cases.
      */
    detectmode ?: string | number;
    /** Set the number of inputs. The option value must be a non negative integer. Default value is 1. */
    nb_inputs ?: string | number;
    /** Set the path to which the output is written. If there is more than one input, the path must be a prototype, i.e. must contain %d or %0nd (where n is a positive integer), that will be replaced with the input number. If no filename is specified, no output will be written. This is the default. */
    filename ?: string | number;
    /**
      * Choose the output format.
      * Available values are:
      * ‘binary’
      * Use the specified binary representation (default).
      * ‘xml’
      * Use the specified xml representation.
      */
    format ?: string | number;
    /** Set threshold to detect one word as similar. The option value must be an integer greater than zero. The default value is 9000. */
    th_d ?: string | number;
    /** Set threshold to detect all words as similar. The option value must be an integer greater than zero. The default value is 60000. */
    th_dc ?: string | number;
    /** Set threshold to detect frames as similar. The option value must be an integer greater than zero. The default value is 116. */
    th_xh ?: string | number;
    /** Set the minimum length of a sequence in frames to recognize it as matching sequence. The option value must be a non negative integer value. The default value is 0. */
    th_di ?: string | number;
    /** Set the minimum relation, that matching frames to all frames must have. The option value must be a double value between 0 and 1. The default value is 0.5. */
    th_it ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.187 signature
  * Calculates the MPEG-7 Video Signature. The filter can handle more than one input. In this case the matching between the inputs can be calculated additionally. The filter always passes through the first input. The signature of each stream can be written into a file.
  * 
  * It accepts the following options:
  */
export function videoSignature ( inputs : Stream | Stream[] = [], parameters : VideoSignatureParameters = {} as any ) {
    return new VideoSignature( inputs, parameters );
}