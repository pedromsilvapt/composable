import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.2 aevalsrc
  * Generate an audio signal specified by an expression.
  * 
  * This source accepts in input one or more expressions (one for each channel), which are evaluated and used to generate a corresponding audio signal.
  * 
  * This source accepts the following options:
  */
export class AudioEvalSrc extends Filter<AudioEvalSrcParameters> {
    outputs : FilterStreamRef<AudioEvalSrcParameters, AudioEvalSrc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioEvalSrcParameters = {} as any ) {
        super( inputs, 'aevalsrc', parameters );
    }
}

export interface AudioEvalSrcParameters {
    /**
      * Set the ’|’-separated expressions list for each separate channel. In case the
      * channel_layout option is not specified, the selected channel layout depends on the number of provided expressions. Otherwise the last specified expression is applied to the remaining output channels.
      */
    exprs ?: string | number;
    /**
      * Set the channel layout. The number of channels in the specified layout must be equal to the number of specified expressions.
      * @aliases c
      */
    channel_layout ?: string | number;
    /**
      * Set the channel layout. The number of channels in the specified layout must be equal to the number of specified expressions.
      * @aliasof channel_layout
      */
    c ?: string | number;
    /**
      * Set the minimum duration of the sourced audio. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame.
      * If not specified, or the expressed duration is negative, the audio is supposed to be generated forever.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Set the minimum duration of the sourced audio. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame.
      * If not specified, or the expressed duration is negative, the audio is supposed to be generated forever.
      * @aliasof duration
      */
    d ?: string | number;
    /**
      * Set the number of samples per channel per each output frame, default to 1024.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set the number of samples per channel per each output frame, default to 1024.
      * @aliasof nb_samples
      */
    n ?: string | number;
    /**
      * Specify the sample rate, default to 44100.
      * @aliases s
      */
    sample_rate ?: string | number;
    /**
      * Specify the sample rate, default to 44100.
      * @aliasof sample_rate
      */
    s ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.2 aevalsrc
  * Generate an audio signal specified by an expression.
  * 
  * This source accepts in input one or more expressions (one for each channel), which are evaluated and used to generate a corresponding audio signal.
  * 
  * This source accepts the following options:
  */
export function audioEvalSrc ( inputs : Stream | Stream[] = [], parameters : AudioEvalSrcParameters = {} as any ) {
    return new AudioEvalSrc( inputs, parameters );
}