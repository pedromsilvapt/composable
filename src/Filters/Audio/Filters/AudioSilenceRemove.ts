import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.85 silenceremove
  * Remove silence from the beginning, middle or end of the audio.
  * 
  * The filter accepts the following options:
  */
export class AudioSilenceRemove extends Filter<AudioSilenceRemoveParameters> {
    outputs : FilterStreamRef<AudioSilenceRemoveParameters, AudioSilenceRemove>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSilenceRemoveParameters = {} as any ) {
        super( inputs, 'silenceremove', parameters );
    }
}

export interface AudioSilenceRemoveParameters {
    /** This value is used to indicate if audio should be trimmed at beginning of the audio. A value of zero indicates no silence should be trimmed from the beginning. When specifying a non-zero value, it trims audio up until it finds non-silence. Normally, when trimming silence from beginning of audio the start_periods will be 1 but it can be increased to higher values to trim all audio up to specific count of non-silence periods. Default value is 0. */
    start_periods ?: string | number;
    /** Specify the amount of time that non-silence must be detected before it stops trimming audio. By increasing the duration, bursts of noises can be treated as silence and trimmed off. Default value is 0. */
    start_duration ?: string | number;
    /** This indicates what sample value should be treated as silence. For digital audio, a value of 0 may be fine but for audio recorded from analog, you may wish to increase the value to account for background noise. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default value is 0. */
    start_threshold ?: string | number;
    /** Specify max duration of silence at beginning that will be kept after trimming. Default is 0, which is equal to trimming all samples detected as silence. */
    start_silence ?: string | number;
    /** Specify mode of detection of silence end in start of multi-channel audio. Can be any or all. Default is any. With any, any sample that is detected as non-silence will cause stopped trimming of silence. With all, only if all channels are detected as non-silence will cause stopped trimming of silence. */
    start_mode ?: string | number;
    /**
      * Set the count for trimming silence from the end of audio. To remove silence from the middle of a file, specify a stop_periods that is negative. This value is then treated as a positive value and is used to indicate the effect should restart processing as specified by
      * start_periods, making it suitable for removing periods of silence in the middle of the audio. Default value is 0.
      */
    stop_periods ?: string | number;
    /** Specify a duration of silence that must exist before audio is not copied any more. By specifying a higher duration, silence that is wanted can be left in the audio. Default value is 0. */
    stop_duration ?: string | number;
    /** This is the same as start_threshold but for trimming silence from the end of audio. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default value is 0. */
    stop_threshold ?: string | number;
    /** Specify max duration of silence at end that will be kept after trimming. Default is 0, which is equal to trimming all samples detected as silence. */
    stop_silence ?: string | number;
    /** Specify mode of detection of silence start in end of multi-channel audio. Can be any or all. Default is any. With any, any sample that is detected as non-silence will cause stopped trimming of silence. With all, only if all channels are detected as non-silence will cause stopped trimming of silence. */
    stop_mode ?: string | number;
    /** Set how is silence detected. Can be rms or peak. Second is faster and works better with digital silence which is exactly 0. Default value is rms. */
    detection ?: string | number;
    /** Set duration in number of seconds used to calculate size of window in number of samples for detecting silence. Default value is 0.02. Allowed range is from 0 to 10. */
    window ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.85 silenceremove
  * Remove silence from the beginning, middle or end of the audio.
  * 
  * The filter accepts the following options:
  */
export function audioSilenceRemove ( inputs : Stream | Stream[] = [], parameters : AudioSilenceRemoveParameters = {} as any ) {
    return new AudioSilenceRemove( inputs, parameters );
}