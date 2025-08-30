import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.84 silencedetect
  * Detect silence in an audio stream.
  * 
  * This filter logs a message when it detects that the input audio volume is less or equal to a noise tolerance value for a duration greater or equal to the minimum detected noise duration.
  * 
  * The printed times and duration are expressed in seconds. The
  * lavfi.silence_start or lavfi.silence_start.X metadata key is set on the first frame whose timestamp equals or exceeds the detection duration and it contains the timestamp of the first frame of the silence.
  * 
  * The lavfi.silence_duration or lavfi.silence_duration.X and lavfi.silence_end or lavfi.silence_end.X metadata keys are set on the first frame after the silence. If mono is enabled, and each channel is evaluated separately, the .X suffixed keys are used, and X corresponds to the channel number.
  * 
  * The filter accepts the following options:
  */
export class AudioSilenceDetect extends Filter<AudioSilenceDetectParameters> {
    outputs : FilterStreamRef<AudioSilenceDetectParameters, AudioSilenceDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSilenceDetectParameters = {} as any ) {
        super( inputs, 'silencedetect', parameters );
    }
}

export interface AudioSilenceDetectParameters {
    /**
      * Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default is -60dB, or 0.001.
      * @aliases n
      */
    noise ?: string | number;
    /**
      * Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default is -60dB, or 0.001.
      * @aliasof noise
      */
    n ?: string | number;
    /**
      * Set silence duration until notification (default is 2 seconds). See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Set silence duration until notification (default is 2 seconds). See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Process each channel separately, instead of combined. By default is disabled.
      * @aliases m
      */
    mono ?: string | number;
    /**
      * Process each channel separately, instead of combined. By default is disabled.
      * @aliasof mono
      */
    m ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.84 silencedetect
  * Detect silence in an audio stream.
  * 
  * This filter logs a message when it detects that the input audio volume is less or equal to a noise tolerance value for a duration greater or equal to the minimum detected noise duration.
  * 
  * The printed times and duration are expressed in seconds. The
  * lavfi.silence_start or lavfi.silence_start.X metadata key is set on the first frame whose timestamp equals or exceeds the detection duration and it contains the timestamp of the first frame of the silence.
  * 
  * The lavfi.silence_duration or lavfi.silence_duration.X and lavfi.silence_end or lavfi.silence_end.X metadata keys are set on the first frame after the silence. If mono is enabled, and each channel is evaluated separately, the .X suffixed keys are used, and X corresponds to the channel number.
  * 
  * The filter accepts the following options:
  */
export function audioSilenceDetect ( inputs : Stream | Stream[] = [], parameters : AudioSilenceDetectParameters = {} as any ) {
    return new AudioSilenceDetect( inputs, parameters );
}