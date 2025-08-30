import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.66 firequalizer
  * Apply FIR Equalization using arbitrary frequency response.
  * 
  * The filter accepts the following option:
  */
export class AudioFirEqualizer extends Filter<AudioFirEqualizerParameters> {
    outputs : FilterStreamRef<AudioFirEqualizerParameters, AudioFirEqualizer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFirEqualizerParameters = {} as any ) {
        super( inputs, 'firequalizer', parameters );
    }
}

export interface AudioFirEqualizerParameters {
    /**
      * Set gain curve equation (in dB). The expression can contain variables:
      * f
      * the evaluated frequency
      * sr
      * sample rate
      * ch
      * channel number, set to 0 when multichannels evaluation is disabled
      * chid
      * channel id, see libavutil/channel_layout.h, set to the first channel id when multichannels evaluation is disabled
      * chs
      * number of channels
      * chlayout
      * channel_layout, see libavutil/channel_layout.h
      * and functions:
      * gain_interpolate(f)
      * interpolate gain on frequency f based on gain_entry
      * cubic_interpolate(f)
      * same as gain_interpolate, but smoother
      * This option is also available as command. Default is gain_interpolate(f).
      */
    gain ?: string | number;
    /**
      * Set gain entry for gain_interpolate function. The expression can contain functions:
      * entry(f, g)
      * store gain entry at frequency f with value g
      * This option is also available as command.
      */
    gain_entry ?: string | number;
    /** Set filter delay in seconds. Higher value means more accurate. Default is 0.01. */
    delay ?: string | number;
    /** Set filter accuracy in Hz. Lower value means more accurate. Default is 5. */
    accuracy ?: string | number;
    /**
      * Set window function. Acceptable values are:
      * rectangular
      * rectangular window, useful when gain curve is already smooth
      * hann
      * hann window (default)
      * hamming
      * hamming window
      * blackman
      * blackman window
      * nuttall3
      * 3-terms continuous 1st derivative nuttall window
      * mnuttall3
      * minimum 3-terms discontinuous nuttall window
      * nuttall
      * 4-terms continuous 1st derivative nuttall window
      * bnuttall
      * minimum 4-terms discontinuous nuttall (blackman-nuttall) window
      * bharris
      * blackman-harris window
      * tukey
      * tukey window
      */
    wfunc ?: string | number;
    /** If enabled, use fixed number of audio samples. This improves speed when filtering with large delay. Default is disabled. */
    fixed ?: string | number;
    /** Enable multichannels evaluation on gain. Default is disabled. */
    multi ?: string | number;
    /** Enable zero phase mode by subtracting timestamp to compensate delay. Default is disabled. */
    zero_phase ?: string | number;
    /**
      * Set scale used by gain. Acceptable values are:
      * linlin
      * linear frequency, linear gain
      * linlog
      * linear frequency, logarithmic (in dB) gain (default)
      * loglin
      * logarithmic (in octave scale where 20 Hz is 0) frequency, linear gain
      * loglog
      * logarithmic frequency, logarithmic gain
      */
    scale ?: string | number;
    /** Set file for dumping, suitable for gnuplot. */
    dumpfile ?: string | number;
    /** Set scale for dumpfile. Acceptable values are same with scale option. Default is linlog. */
    dumpscale ?: string | number;
    /** Enable 2-channel convolution using complex FFT. This improves speed significantly. Default is disabled. */
    fft2 ?: string | number;
    /** Enable minimum phase impulse response. Default is disabled. */
    min_phase ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.66 firequalizer
  * Apply FIR Equalization using arbitrary frequency response.
  * 
  * The filter accepts the following option:
  */
export function audioFirEqualizer ( inputs : Stream | Stream[] = [], parameters : AudioFirEqualizerParameters = {} as any ) {
    return new AudioFirEqualizer( inputs, parameters );
}