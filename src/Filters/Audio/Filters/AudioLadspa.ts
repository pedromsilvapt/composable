import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.73 ladspa
  * Load a LADSPA (Linux Audio Developer’s Simple Plugin API) plugin.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-ladspa.
  */
export class AudioLadspa extends Filter<AudioLadspaParameters> {
    outputs : FilterStreamRef<AudioLadspaParameters, AudioLadspa>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioLadspaParameters = {} as any ) {
        super( inputs, 'ladspa', parameters );
    }
}

export interface AudioLadspaParameters {
    /**
      * Specifies the name of LADSPA plugin library to load. If the environment variable LADSPA_PATH is defined, the LADSPA plugin is searched in each one of the directories specified by the colon separated list in
      * LADSPA_PATH, otherwise in the standard LADSPA paths, which are in this order: HOME/.ladspa/lib/, /usr/local/lib/ladspa/,
      * /usr/lib/ladspa/.
      * @aliases f
      */
    file ?: string | number;
    /**
      * Specifies the name of LADSPA plugin library to load. If the environment variable LADSPA_PATH is defined, the LADSPA plugin is searched in each one of the directories specified by the colon separated list in
      * LADSPA_PATH, otherwise in the standard LADSPA paths, which are in this order: HOME/.ladspa/lib/, /usr/local/lib/ladspa/,
      * /usr/lib/ladspa/.
      * @aliasof file
      */
    f ?: string | number;
    /**
      * Specifies the plugin within the library. Some libraries contain only one plugin, but others contain many of them. If this is not set filter will list all available plugins within the specified library.
      * @aliases p
      */
    plugin ?: string | number;
    /**
      * Specifies the plugin within the library. Some libraries contain only one plugin, but others contain many of them. If this is not set filter will list all available plugins within the specified library.
      * @aliasof plugin
      */
    p ?: string | number;
    /**
      * Set the ’|’ separated list of controls which are zero or more floating point values that determine the behavior of the loaded plugin (for example delay, threshold or gain). Controls need to be defined using the following syntax: c0=
      * value0|c1=value1|c2=value2|..., where
      * valuei is the value set on the i-th control. Alternatively they can be also defined using the following syntax:
      * value0|value1|value2|..., where
      * valuei is the value set on the i-th control. If controls is set to help, all available controls and their valid ranges are printed.
      * @aliases c
      */
    controls ?: string | number;
    /**
      * Set the ’|’ separated list of controls which are zero or more floating point values that determine the behavior of the loaded plugin (for example delay, threshold or gain). Controls need to be defined using the following syntax: c0=
      * value0|c1=value1|c2=value2|..., where
      * valuei is the value set on the i-th control. Alternatively they can be also defined using the following syntax:
      * value0|value1|value2|..., where
      * valuei is the value set on the i-th control. If controls is set to help, all available controls and their valid ranges are printed.
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
  * 8.73 ladspa
  * Load a LADSPA (Linux Audio Developer’s Simple Plugin API) plugin.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-ladspa.
  */
export function audioLadspa ( inputs : Stream | Stream[] = [], parameters : AudioLadspaParameters = {} as any ) {
    return new AudioLadspa( inputs, parameters );
}