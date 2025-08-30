import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.76 lv2
  * Load a LV2 (LADSPA Version 2) plugin.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-lv2.
  */
export class AudioLv2 extends Filter<AudioLv2Parameters> {
    outputs : FilterStreamRef<AudioLv2Parameters, AudioLv2>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLv2Parameters = {} as any ) {
        super( inputs, 'lv2', parameters );
    }
}

export interface AudioLv2Parameters {
    /**
      * Specifies the plugin URI. You may need to escape ’:’.
      * @aliases p
      */
    plugin ?: string | number;
    /**
      * Specifies the plugin URI. You may need to escape ’:’.
      * @aliasof plugin
      */
    p ?: string | number;
    /**
      * Set the ’|’ separated list of controls which are zero or more floating point values that determine the behavior of the loaded plugin (for example delay, threshold or gain). If controls is set to help, all available controls and their valid ranges are printed.
      * @aliases c
      */
    controls ?: string | number;
    /**
      * Set the ’|’ separated list of controls which are zero or more floating point values that determine the behavior of the loaded plugin (for example delay, threshold or gain). If controls is set to help, all available controls and their valid ranges are printed.
      * @aliasof controls
      */
    c ?: string | number;
    /**
      * Specify the sample rate, default to 44100. Only used if plugin have zero inputs.
      * @aliases s
      */
    sample_rate ?: string | number;
    /**
      * Specify the sample rate, default to 44100. Only used if plugin have zero inputs.
      * @aliasof sample_rate
      */
    s ?: string | number;
    /**
      * Set the number of samples per channel per each output frame, default is 1024. Only used if plugin have zero inputs.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set the number of samples per channel per each output frame, default is 1024. Only used if plugin have zero inputs.
      * @aliasof nb_samples
      */
    n ?: string | number;
    /**
      * Set the minimum duration of the sourced audio. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever. Only used if plugin have zero inputs.
      * @aliases d
      */
    duration ?: string | number;
    /**
      * Set the minimum duration of the sourced audio. See
      * (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever. Only used if plugin have zero inputs.
      * @aliasof duration
      */
    d ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.76 lv2
  * Load a LV2 (LADSPA Version 2) plugin.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-lv2.
  */
export function audioLv2 ( inputs : Stream | Stream[] = [], parameters : AudioLv2Parameters = {} as any ) {
    return new AudioLv2( inputs, parameters );
}