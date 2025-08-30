import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.32 apad
  * Pad the end of an audio stream with silence.
  * 
  * This can be used together with ffmpeg -shortest to extend audio streams to the same length as the video stream.
  * 
  * A description of the accepted options follows.
  */
export class AudioPad extends Filter<AudioPadParameters> {
    outputs : FilterStreamRef<AudioPadParameters, AudioPad>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioPadParameters = {} as any ) {
        super( inputs, 'apad', parameters );
    }
}

export interface AudioPadParameters {
    /** Set silence packet size. Default value is 4096. */
    packet_size ?: string | number;
    /** Set the number of samples of silence to add to the end. After the value is reached, the stream is terminated. This option is mutually exclusive with whole_len. */
    pad_len ?: string | number;
    /** Set the minimum total number of samples in the output audio stream. If the value is longer than the input audio length, silence is added to the end, until the value is reached. This option is mutually exclusive with pad_len. */
    whole_len ?: string | number;
    /**
      * Specify the duration of samples of silence to add. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Used only if set to non-zero value.
      */
    pad_dur ?: string | number;
    /**
      * Specify the minimum total duration in the output audio stream. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Used only if set to non-zero value. If the value is longer than the input audio length, silence is added to the end, until the value is reached. This option is mutually exclusive with pad_dur
      */
    whole_dur ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.32 apad
  * Pad the end of an audio stream with silence.
  * 
  * This can be used together with ffmpeg -shortest to extend audio streams to the same length as the video stream.
  * 
  * A description of the accepted options follows.
  */
export function audioPad ( inputs : Stream | Stream[] = [], parameters : AudioPadParameters = {} as any ) {
    return new AudioPad( inputs, parameters );
}