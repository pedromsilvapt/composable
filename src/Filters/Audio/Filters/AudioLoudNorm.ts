import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.74 loudnorm
  * EBU R128 loudness normalization. Includes both dynamic and linear normalization modes. Support for both single pass (livestreams, files) and double pass (files) modes. This algorithm can target IL, LRA, and maximum true peak. In dynamic mode, to accurately detect true peaks, the audio stream will be upsampled to 192 kHz. Use the -ar option or aresample filter to explicitly set an output sample rate.
  * 
  * The filter accepts the following options:
  */
export class AudioLoudNorm extends Filter<AudioLoudNormParameters> {
    outputs : FilterStreamRef<AudioLoudNormParameters, AudioLoudNorm>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLoudNormParameters = {} as any ) {
        super( inputs, 'loudnorm', parameters );
    }
}

export interface AudioLoudNormParameters {
    /**
      * Set integrated loudness target. Range is -70.0 - -5.0. Default value is -24.0.
      * @aliases i
      */
    I ?: string | number;
    /**
      * Set integrated loudness target. Range is -70.0 - -5.0. Default value is -24.0.
      * @aliasof I
      */
    i ?: string | number;
    /**
      * Set loudness range target. Range is 1.0 - 20.0. Default value is 7.0.
      * @aliases lra
      */
    LRA ?: string | number;
    /**
      * Set loudness range target. Range is 1.0 - 20.0. Default value is 7.0.
      * @aliasof LRA
      */
    lra ?: string | number;
    /**
      * Set maximum true peak. Range is -9.0 - +0.0. Default value is -2.0.
      * @aliases tp
      */
    TP ?: string | number;
    /**
      * Set maximum true peak. Range is -9.0 - +0.0. Default value is -2.0.
      * @aliasof TP
      */
    tp ?: string | number;
    /**
      * Measured IL of input file. Range is -99.0 - +0.0.
      * @aliases measured_i
      */
    measured_I ?: string | number;
    /**
      * Measured IL of input file. Range is -99.0 - +0.0.
      * @aliasof measured_I
      */
    measured_i ?: string | number;
    /**
      * Measured LRA of input file. Range is 0.0 - 99.0.
      * @aliases measured_lra
      */
    measured_LRA ?: string | number;
    /**
      * Measured LRA of input file. Range is 0.0 - 99.0.
      * @aliasof measured_LRA
      */
    measured_lra ?: string | number;
    /**
      * Measured true peak of input file. Range is -99.0 - +99.0.
      * @aliases measured_tp
      */
    measured_TP ?: string | number;
    /**
      * Measured true peak of input file. Range is -99.0 - +99.0.
      * @aliasof measured_TP
      */
    measured_tp ?: string | number;
    /** Measured threshold of input file. Range is -99.0 - +0.0. */
    measured_thresh ?: string | number;
    /** Set offset gain. Gain is applied before the true-peak limiter. Range is -99.0 - +99.0. Default is +0.0. */
    offset ?: string | number;
    /**
      * Normalize by linearly scaling the source audio.
      * measured_I, measured_LRA, measured_TP, and measured_thresh must all be specified. Target LRA shouldn’t be lower than source LRA and the change in integrated loudness shouldn’t result in a true peak which exceeds the target TP. If any of these conditions aren’t met, normalization mode will revert to dynamic. Options are true or false. Default is true.
      */
    linear ?: string | number;
    /** Treat mono input files as "dual-mono". If a mono file is intended for playback on a stereo system, its EBU R128 measurement will be perceptually incorrect. If set to true, this option will compensate for this effect. Multi-channel input files are not affected by this option. Options are true or false. Default is false. */
    dual_mono ?: string | number;
    /** Set print format for stats. Options are summary, json, or none. Default value is none. */
    print_format ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.74 loudnorm
  * EBU R128 loudness normalization. Includes both dynamic and linear normalization modes. Support for both single pass (livestreams, files) and double pass (files) modes. This algorithm can target IL, LRA, and maximum true peak. In dynamic mode, to accurately detect true peaks, the audio stream will be upsampled to 192 kHz. Use the -ar option or aresample filter to explicitly set an output sample rate.
  * 
  * The filter accepts the following options:
  */
export function audioLoudNorm ( inputs : Stream | Stream[] = [], parameters : AudioLoudNormParameters = {} as any ) {
    return new AudioLoudNorm( inputs, parameters );
}