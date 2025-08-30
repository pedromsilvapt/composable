import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.19 showcqt
  * Convert input audio to a video output representing frequency spectrum logarithmically using Brown-Puckette constant Q transform algorithm with direct frequency domain coefficient calculation (but the transform itself is not really constant Q, instead the Q factor is actually variable/clamped), with musical tone scale, from E0 to D#10.
  * 
  * The filter accepts the following options:
  */
export class ShowCqt extends Filter<ShowCqtParameters> {
    outputs : FilterStreamRef<ShowCqtParameters, ShowCqt>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowCqtParameters = {} as any ) {
        super( inputs, 'showcqt', parameters );
    }
}

export interface ShowCqtParameters {
    /**
      * Specify the video size for the output. It must be even. For the syntax of this option, check the (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 1920x1080.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. It must be even. For the syntax of this option, check the (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 1920x1080.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * @aliases rate, r
      */
    fps ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * @aliasof fps
      */
    rate ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * @aliasof fps
      */
    r ?: string | number;
    /** Set the bargraph height. It must be even. Default value is -1 which computes the bargraph height automatically. */
    bar_h ?: string | number;
    /** Set the axis height. It must be even. Default value is -1 which computes the axis height automatically. */
    axis_h ?: string | number;
    /** Set the sonogram height. It must be even. Default value is -1 which computes the sonogram height automatically. */
    sono_h ?: string | number;
    /** Set the fullhd resolution. This option is deprecated, use size, s instead. Default value is 1. */
    fullhd ?: string | number;
    /**
      * Specify the sonogram volume expression. It can contain variables:
      * bar_v
      * the bar_v evaluated expression
      * frequency, freq, f
      * the frequency where it is evaluated
      * timeclamp, tc
      * the value of timeclamp option
      * and functions:
      * a_weighting(f)
      * A-weighting of equal loudness
      * b_weighting(f)
      * B-weighting of equal loudness
      * c_weighting(f)
      * C-weighting of equal loudness.
      * Default value is 16.
      * @aliases volume
      */
    sono_v ?: string | number;
    /**
      * Specify the sonogram volume expression. It can contain variables:
      * bar_v
      * the bar_v evaluated expression
      * frequency, freq, f
      * the frequency where it is evaluated
      * timeclamp, tc
      * the value of timeclamp option
      * and functions:
      * a_weighting(f)
      * A-weighting of equal loudness
      * b_weighting(f)
      * B-weighting of equal loudness
      * c_weighting(f)
      * C-weighting of equal loudness.
      * Default value is 16.
      * @aliasof sono_v
      */
    volume ?: string | number;
    /**
      * Specify the bargraph volume expression. It can contain variables:
      * sono_v
      * the sono_v evaluated expression
      * frequency, freq, f
      * the frequency where it is evaluated
      * timeclamp, tc
      * the value of timeclamp option
      * and functions:
      * a_weighting(f)
      * A-weighting of equal loudness
      * b_weighting(f)
      * B-weighting of equal loudness
      * c_weighting(f)
      * C-weighting of equal loudness.
      * Default value is sono_v.
      * @aliases volume2
      */
    bar_v ?: string | number;
    /**
      * Specify the bargraph volume expression. It can contain variables:
      * sono_v
      * the sono_v evaluated expression
      * frequency, freq, f
      * the frequency where it is evaluated
      * timeclamp, tc
      * the value of timeclamp option
      * and functions:
      * a_weighting(f)
      * A-weighting of equal loudness
      * b_weighting(f)
      * B-weighting of equal loudness
      * c_weighting(f)
      * C-weighting of equal loudness.
      * Default value is sono_v.
      * @aliasof bar_v
      */
    volume2 ?: string | number;
    /**
      * Specify the sonogram gamma. Lower gamma makes the spectrum more contrast, higher gamma makes the spectrum having more range. Default value is 3. Acceptable range is [1, 7].
      * @aliases gamma
      */
    sono_g ?: string | number;
    /**
      * Specify the sonogram gamma. Lower gamma makes the spectrum more contrast, higher gamma makes the spectrum having more range. Default value is 3. Acceptable range is [1, 7].
      * @aliasof sono_g
      */
    gamma ?: string | number;
    /**
      * Specify the bargraph gamma. Default value is 1. Acceptable range is
      * [1, 7].
      * @aliases gamma2
      */
    bar_g ?: string | number;
    /**
      * Specify the bargraph gamma. Default value is 1. Acceptable range is
      * [1, 7].
      * @aliasof bar_g
      */
    gamma2 ?: string | number;
    /** Specify the bargraph transparency level. Lower value makes the bargraph sharper. Default value is 1. Acceptable range is [0, 1]. */
    bar_t ?: string | number;
    /**
      * Specify the transform timeclamp. At low frequency, there is trade-off between accuracy in time domain and frequency domain. If timeclamp is lower, event in time domain is represented more accurately (such as fast bass drum), otherwise event in frequency domain is represented more accurately (such as bass guitar). Acceptable range is [0.002, 1]. Default value is 0.17.
      * @aliases tc
      */
    timeclamp ?: string | number;
    /**
      * Specify the transform timeclamp. At low frequency, there is trade-off between accuracy in time domain and frequency domain. If timeclamp is lower, event in time domain is represented more accurately (such as fast bass drum), otherwise event in frequency domain is represented more accurately (such as bass guitar). Acceptable range is [0.002, 1]. Default value is 0.17.
      * @aliasof timeclamp
      */
    tc ?: string | number;
    /** Set attack time in seconds. The default is 0 (disabled). Otherwise, it limits future samples by applying asymmetric windowing in time domain, useful when low latency is required. Accepted range is [0, 1]. */
    attack ?: string | number;
    /** Specify the transform base frequency. Default value is 20.01523126408007475, which is frequency 50 cents below E0. Acceptable range is [10, 100000]. */
    basefreq ?: string | number;
    /** Specify the transform end frequency. Default value is 20495.59681441799654, which is frequency 50 cents above D#10. Acceptable range is [10, 100000]. */
    endfreq ?: string | number;
    /** This option is deprecated and ignored. */
    coeffclamp ?: string | number;
    /**
      * Specify the transform length in time domain. Use this option to control accuracy trade-off between time domain and frequency domain at every frequency sample. It can contain variables:
      * frequency, freq, f
      * the frequency where it is evaluated
      * timeclamp, tc
      * the value of timeclamp option.
      * Default value is 384*tc/(384+tc*f).
      */
    tlength ?: string | number;
    /** Specify the transform count for every video frame. Default value is 6. Acceptable range is [1, 30]. */
    count ?: string | number;
    /** Specify the transform count for every single pixel. Default value is 0, which makes it computed automatically. Acceptable range is [0, 10]. */
    fcount ?: string | number;
    /** Specify font file for use with freetype to draw the axis. If not specified, use embedded font. Note that drawing with font file or embedded font is not implemented with custom basefreq and endfreq, use axisfile option instead. */
    fontfile ?: string | number;
    /**
      * Specify fontconfig pattern. This has lower priority than fontfile. The
      * : in the pattern may be replaced by | to avoid unnecessary escaping.
      */
    font ?: string | number;
    /**
      * Specify font color expression. This is arithmetic expression that should return integer value 0xRRGGBB. It can contain variables:
      * frequency, freq, f
      * the frequency where it is evaluated
      * timeclamp, tc
      * the value of timeclamp option
      * and functions:
      * midi(f)
      * midi number of frequency f, some midi numbers: E0(16), C1(24), C2(36), A4(69)
      * r(x), g(x), b(x)
      * red, green, and blue value of intensity x.
      * Default value is st(0, (midi(f)-59.5)/12);
      * st(1, if(between(ld(0),0,1), 0.5-0.5*cos(2*PI*ld(0)), 0));
      * r(1-ld(1)) + b(ld(1)).
      */
    fontcolor ?: string | number;
    /**
      * Specify image file to draw the axis. This option override fontfile and
      * fontcolor option.
      */
    axisfile ?: string | number;
    /**
      * Enable/disable drawing text to the axis. If it is set to 0, drawing to the axis is disabled, ignoring fontfile and axisfile option. Default value is 1.
      * @aliases text
      */
    axis ?: string | number;
    /**
      * Enable/disable drawing text to the axis. If it is set to 0, drawing to the axis is disabled, ignoring fontfile and axisfile option. Default value is 1.
      * @aliasof axis
      */
    text ?: string | number;
    /**
      * Set colorspace. The accepted values are:
      * ‘unspecified’
      * Unspecified (default)
      * ‘bt709’
      * BT.709
      * ‘fcc’
      * FCC
      * ‘bt470bg’
      * BT.470BG or BT.601-6 625
      * ‘smpte170m’
      * SMPTE-170M or BT.601-6 525
      * ‘smpte240m’
      * SMPTE-240M
      * ‘bt2020ncl’
      * BT.2020 with non-constant luminance
      */
    csp ?: string | number;
    /**
      * Set spectrogram color scheme. This is list of floating point values with format
      * left_r|left_g|left_b|right_r|right_g|right_b. The default is 1|0.5|0|0|0.5|1.
      */
    cscheme ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.19 showcqt
  * Convert input audio to a video output representing frequency spectrum logarithmically using Brown-Puckette constant Q transform algorithm with direct frequency domain coefficient calculation (but the transform itself is not really constant Q, instead the Q factor is actually variable/clamped), with musical tone scale, from E0 to D#10.
  * 
  * The filter accepts the following options:
  */
export function showCqt ( inputs : Stream | Stream[] = [], parameters : ShowCqtParameters = {} as any ) {
    return new ShowCqt( inputs, parameters );
}