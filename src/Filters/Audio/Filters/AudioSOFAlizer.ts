import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.86 sofalizer
  * SOFAlizer uses head-related transfer functions (HRTFs) to create virtual loudspeakers around the user for binaural listening via headphones (audio formats up to 9 channels supported). The HRTFs are stored in SOFA files (see http://www.sofacoustics.org/ for a database). SOFAlizer is developed at the Acoustics Research Institute (ARI) of the Austrian Academy of Sciences.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libmysofa.
  * 
  * The filter accepts the following options:
  */
export class AudioSOFAlizer extends Filter<AudioSOFAlizerParameters> {
    outputs : FilterStreamRef<AudioSOFAlizerParameters, AudioSOFAlizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSOFAlizerParameters = {} as any ) {
        super( inputs, 'sofalizer', parameters );
    }
}

export interface AudioSOFAlizerParameters {
    /** Set the SOFA file used for rendering. */
    sofa ?: string | number;
    /** Set gain applied to audio. Value is in dB. Default is 0. */
    gain ?: string | number;
    /** Set rotation of virtual loudspeakers in deg. Default is 0. */
    rotation ?: string | number;
    /** Set elevation of virtual speakers in deg. Default is 0. */
    elevation ?: string | number;
    /** Set distance in meters between loudspeakers and the listener with near-field HRTFs. Default is 1. */
    radius ?: string | number;
    /**
      * Set processing type. Can be time or freq. time is processing audio in time domain which is slow.
      * freq is processing audio in frequency domain which is fast. Default is freq.
      */
    type ?: string | number;
    /** Set custom positions of virtual loudspeakers. Syntax for this option is: <CH> <AZIM> <ELEV>[|<CH> <AZIM> <ELEV>|...]. Each virtual loudspeaker is described with short channel name following with azimuth and elevation in degrees. Each virtual loudspeaker description is separated by ’|’. For example to override front left and front right channel positions use: ’speakers=FL 45 15|FR 345 15’. Descriptions with unrecognised channel names are ignored. */
    speakers ?: string | number;
    /** Set custom gain for LFE channels. Value is in dB. Default is 0. */
    lfegain ?: string | number;
    /** Set custom frame size in number of samples. Default is 1024. Allowed range is from 1024 to 96000. Only used if option ‘type’ is set to freq. */
    framesize ?: string | number;
    /** Should all IRs be normalized upon importing SOFA file. By default is enabled. */
    normalize ?: string | number;
    /** Should nearest IRs be interpolated with neighbor IRs if exact position does not match. By default is disabled. */
    interpolate ?: string | number;
    /** Minphase all IRs upon loading of SOFA file. By default is disabled. */
    minphase ?: string | number;
    /** Set neighbor search angle step. Only used if option interpolate is enabled. */
    anglestep ?: string | number;
    /** Set neighbor search radius step. Only used if option interpolate is enabled. */
    radstep ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.86 sofalizer
  * SOFAlizer uses head-related transfer functions (HRTFs) to create virtual loudspeakers around the user for binaural listening via headphones (audio formats up to 9 channels supported). The HRTFs are stored in SOFA files (see http://www.sofacoustics.org/ for a database). SOFAlizer is developed at the Acoustics Research Institute (ARI) of the Austrian Academy of Sciences.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libmysofa.
  * 
  * The filter accepts the following options:
  */
export function audioSOFAlizer ( inputs : Stream | Stream[] = [], parameters : AudioSOFAlizerParameters = {} as any ) {
    return new AudioSOFAlizer( inputs, parameters );
}