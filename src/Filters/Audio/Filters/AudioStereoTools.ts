import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.87 stereotools
  * This filter has some handy utilities to manage stereo signals, for converting M/S stereo recordings to L/R signal while having control over the parameters or spreading the stereo image of master track.
  * 
  * The filter accepts the following options:
  */
export class AudioStereoTools extends Filter<AudioStereoToolsParameters> {
    outputs : FilterStreamRef<AudioStereoToolsParameters, AudioStereoTools>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioStereoToolsParameters = {} as any ) {
        super( inputs, 'stereotools', parameters );
    }
}

export interface AudioStereoToolsParameters {
    /** Set input level before filtering for both channels. Defaults is 1. Allowed range is from 0.015625 to 64. */
    level_in ?: string | number;
    /** Set output level after filtering for both channels. Defaults is 1. Allowed range is from 0.015625 to 64. */
    level_out ?: string | number;
    /** Set input balance between both channels. Default is 0. Allowed range is from -1 to 1. */
    balance_in ?: string | number;
    /** Set output balance between both channels. Default is 0. Allowed range is from -1 to 1. */
    balance_out ?: string | number;
    /** Enable softclipping. Results in analog distortion instead of harsh digital 0dB clipping. Disabled by default. */
    softclip ?: string | number;
    /** Mute the left channel. Disabled by default. */
    mutel ?: string | number;
    /** Mute the right channel. Disabled by default. */
    muter ?: string | number;
    /** Change the phase of the left channel. Disabled by default. */
    phasel ?: string | number;
    /** Change the phase of the right channel. Disabled by default. */
    phaser ?: string | number;
    /**
      * Set stereo mode. Available values are:
      * ‘lr>lr’
      * Left/Right to Left/Right, this is default.
      * ‘lr>ms’
      * Left/Right to Mid/Side.
      * ‘ms>lr’
      * Mid/Side to Left/Right.
      * ‘lr>ll’
      * Left/Right to Left/Left.
      * ‘lr>rr’
      * Left/Right to Right/Right.
      * ‘lr>l+r’
      * Left/Right to Left + Right.
      * ‘lr>rl’
      * Left/Right to Right/Left.
      * ‘ms>ll’
      * Mid/Side to Left/Left.
      * ‘ms>rr’
      * Mid/Side to Right/Right.
      */
    mode ?: string | number;
    /** Set level of side signal. Default is 1. Allowed range is from 0.015625 to 64. */
    slev ?: string | number;
    /** Set balance of side signal. Default is 0. Allowed range is from -1 to 1. */
    sbal ?: string | number;
    /** Set level of the middle signal. Default is 1. Allowed range is from 0.015625 to 64. */
    mlev ?: string | number;
    /** Set middle signal pan. Default is 0. Allowed range is from -1 to 1. */
    mpan ?: string | number;
    /** Set stereo base between mono and inversed channels. Default is 0. Allowed range is from -1 to 1. */
    base ?: string | number;
    /** Set delay in milliseconds how much to delay left from right channel and vice versa. Default is 0. Allowed range is from -20 to 20. */
    delay ?: string | number;
    /** Set S/C level. Default is 1. Allowed range is from 1 to 100. */
    sclevel ?: string | number;
    /** Set the stereo phase in degrees. Default is 0. Allowed range is from 0 to 360. */
    phase ?: string | number;
    /**
      * Set balance mode for balance_in/balance_out option.
      * Can be one of the following:
      * ‘balance’
      * Classic balance mode. Attenuate one channel at time. Gain is raised up to 1.
      * ‘amplitude’
      * Similar as classic mode above but gain is raised up to 2.
      * ‘power’
      * Equal power distribution, from -6dB to +6dB range.
      * @aliases bmode_out
      */
    bmode_in ?: string | number;
    /**
      * Set balance mode for balance_in/balance_out option.
      * Can be one of the following:
      * ‘balance’
      * Classic balance mode. Attenuate one channel at time. Gain is raised up to 1.
      * ‘amplitude’
      * Similar as classic mode above but gain is raised up to 2.
      * ‘power’
      * Equal power distribution, from -6dB to +6dB range.
      * @aliasof bmode_in
      */
    bmode_out ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.87 stereotools
  * This filter has some handy utilities to manage stereo signals, for converting M/S stereo recordings to L/R signal while having control over the parameters or spreading the stereo image of master track.
  * 
  * The filter accepts the following options:
  */
export function audioStereoTools ( inputs : Stream | Stream[] = [], parameters : AudioStereoToolsParameters = {} as any ) {
    return new AudioStereoTools( inputs, parameters );
}