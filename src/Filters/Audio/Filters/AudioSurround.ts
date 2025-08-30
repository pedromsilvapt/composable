import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.90 surround
  * Apply audio surround upmix filter.
  * 
  * This filter allows to produce multichannel output from audio stream.
  * 
  * The filter accepts the following options:
  */
export class AudioSurround extends Filter<AudioSurroundParameters> {
    outputs : FilterStreamRef<AudioSurroundParameters, AudioSurround>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSurroundParameters = {} as any ) {
        super( inputs, 'surround', parameters );
    }
}

export interface AudioSurroundParameters {
    /**
      * Set output channel layout. By default, this is 5.1.
      * See (ffmpeg-utils)the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
      */
    chl_out ?: string | number;
    /**
      * Set input channel layout. By default, this is stereo.
      * See (ffmpeg-utils)the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
      */
    chl_in ?: string | number;
    /** Set input volume level. By default, this is 1. */
    level_in ?: string | number;
    /** Set output volume level. By default, this is 1. */
    level_out ?: string | number;
    /** Enable LFE channel output if output channel layout has it. By default, this is enabled. */
    lfe ?: string | number;
    /** Set LFE low cut off frequency. By default, this is 128 Hz. */
    lfe_low ?: string | number;
    /** Set LFE high cut off frequency. By default, this is 256 Hz. */
    lfe_high ?: string | number;
    /** Set LFE mode, can be add or sub. Default is add. In add mode, LFE channel is created from input audio and added to output. In sub mode, LFE channel is created from input audio and added to output but also all non-LFE output channels are subtracted with output LFE channel. */
    lfe_mode ?: string | number;
    /** Set angle of stereo surround transform, Allowed range is from 0 to 360. Default is 90. */
    angle ?: string | number;
    /** Set front center input volume. By default, this is 1. */
    fc_in ?: string | number;
    /** Set front center output volume. By default, this is 1. */
    fc_out ?: string | number;
    /** Set front left input volume. By default, this is 1. */
    fl_in ?: string | number;
    /** Set front left output volume. By default, this is 1. */
    fl_out ?: string | number;
    /** Set front right input volume. By default, this is 1. */
    fr_in ?: string | number;
    /** Set front right output volume. By default, this is 1. */
    fr_out ?: string | number;
    /** Set side left input volume. By default, this is 1. */
    sl_in ?: string | number;
    /** Set side left output volume. By default, this is 1. */
    sl_out ?: string | number;
    /** Set side right input volume. By default, this is 1. */
    sr_in ?: string | number;
    /** Set side right output volume. By default, this is 1. */
    sr_out ?: string | number;
    /** Set back left input volume. By default, this is 1. */
    bl_in ?: string | number;
    /** Set back left output volume. By default, this is 1. */
    bl_out ?: string | number;
    /** Set back right input volume. By default, this is 1. */
    br_in ?: string | number;
    /** Set back right output volume. By default, this is 1. */
    br_out ?: string | number;
    /** Set back center input volume. By default, this is 1. */
    bc_in ?: string | number;
    /** Set back center output volume. By default, this is 1. */
    bc_out ?: string | number;
    /** Set LFE input volume. By default, this is 1. */
    lfe_in ?: string | number;
    /** Set LFE output volume. By default, this is 1. */
    lfe_out ?: string | number;
    /** Set spread usage of stereo image across X axis for all channels. */
    allx ?: string | number;
    /** Set spread usage of stereo image across Y axis for all channels. */
    ally ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliases flx, frx, blx, brx, slx, srx, bcx
      */
    fcx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    flx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    frx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    blx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    brx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    slx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    srx ?: string | number;
    /**
      * Set spread usage of stereo image across X axis for each channel.
      * @aliasof fcx
      */
    bcx ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliases fly, fry, bly, bry, sly, sry, bcy
      */
    fcy ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    fly ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    fry ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    bly ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    bry ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    sly ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    sry ?: string | number;
    /**
      * Set spread usage of stereo image across Y axis for each channel.
      * @aliasof fcy
      */
    bcy ?: string | number;
    /** Set window size. Allowed range is from 1024 to 65536. Default size is 4096. */
    win_size ?: string | number;
    /**
      * Set window function.
      * It accepts the following values:
      * ‘rect’
      * ‘bartlett’
      * ‘hann, hanning’
      * ‘hamming’
      * ‘blackman’
      * ‘welch’
      * ‘flattop’
      * ‘bharris’
      * ‘bnuttall’
      * ‘bhann’
      * ‘sine’
      * ‘nuttall’
      * ‘lanczos’
      * ‘gauss’
      * ‘tukey’
      * ‘dolph’
      * ‘cauchy’
      * ‘parzen’
      * ‘poisson’
      * ‘bohman’
      * Default is hann.
      */
    win_func ?: string | number;
    /** Set window overlap. If set to 1, the recommended overlap for selected window function will be picked. Default is 0.5. */
    overlap ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.90 surround
  * Apply audio surround upmix filter.
  * 
  * This filter allows to produce multichannel output from audio stream.
  * 
  * The filter accepts the following options:
  */
export function audioSurround ( inputs : Stream | Stream[] = [], parameters : AudioSurroundParameters = {} as any ) {
    return new AudioSurround( inputs, parameters );
}