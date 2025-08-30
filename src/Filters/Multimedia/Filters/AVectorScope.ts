import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.6 avectorscope
  * Convert input audio to a video output, representing the audio vector scope.
  * 
  * The filter is used to measure the difference between channels of stereo audio stream. A monaural signal, consisting of identical left and right signal, results in straight vertical line. Any stereo separation is visible as a deviation from this line, creating a Lissajous figure. If the straight (or deviation from it) but horizontal line appears this indicates that the left and right channels are out of phase.
  * 
  * The filter accepts the following options:
  */
export class AVectorScope extends Filter<AVectorScopeParameters> {
    outputs : FilterStreamRef<AVectorScopeParameters, AVectorScope>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AVectorScopeParameters = {} as any ) {
        super( inputs, 'avectorscope', parameters );
    }
}

export interface AVectorScopeParameters {
    /**
      * Set the vectorscope mode.
      * Available values are:
      * ‘lissajous’
      * Lissajous rotated by 45 degrees.
      * ‘lissajous_xy’
      * Same as above but not rotated.
      * ‘polar’
      * Shape resembling half of circle.
      * Default value is ‘lissajous’.
      * @aliases m
      */
    mode ?: string | number;
    /**
      * Set the vectorscope mode.
      * Available values are:
      * ‘lissajous’
      * Lissajous rotated by 45 degrees.
      * ‘lissajous_xy’
      * Same as above but not rotated.
      * ‘polar’
      * Shape resembling half of circle.
      * Default value is ‘lissajous’.
      * @aliasof mode
      */
    m ?: string | number;
    /**
      * Set the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 400x400.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is 400x400.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set the output frame rate. Default value is 25.
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Specify the red, green, blue and alpha contrast. Default values are 40,
      * 160, 80 and 255. Allowed range is [0, 255].
      */
    rc ?: string | number;
    /**
      * Specify the red, green, blue and alpha fade. Default values are 15,
      * 10, 5 and 5. Allowed range is [0, 255].
      */
    gc ?: string | number;
    /** Set the zoom factor. Default value is 1. Allowed range is [0, 10]. Values lower than 1 will auto adjust zoom factor to maximal possible value. */
    bc ?: string | number;
    /**
      * Set the vectorscope drawing mode.
      * Available values are:
      * ‘dot’
      * Draw dot for each sample.
      * ‘line’
      * Draw line between previous and current sample.
      * Default value is ‘dot’.
      */
    ac ?: string | number;
    /**
      * Specify amplitude scale of audio samples.
      * Available values are:
      * ‘lin’
      * Linear.
      * ‘sqrt’
      * Square root.
      * ‘cbrt’
      * Cubic root.
      * ‘log’
      * Logarithmic.
      */
    rf ?: string | number;
    /** Swap left channel axis with right channel axis. */
    gf ?: string | number;
    /**
      * Mirror axis.
      * ‘none’
      * No mirror.
      * ‘x’
      * Mirror only x axis.
      * ‘y’
      * Mirror only y axis.
      * ‘xy’
      * Mirror both axis.
      */
    bf ?: string | number;
    af ?: string | number;
    zoom ?: string | number;
    draw ?: string | number;
    scale ?: string | number;
    swap ?: string | number;
    mirror ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.6 avectorscope
  * Convert input audio to a video output, representing the audio vector scope.
  * 
  * The filter is used to measure the difference between channels of stereo audio stream. A monaural signal, consisting of identical left and right signal, results in straight vertical line. Any stereo separation is visible as a deviation from this line, creating a Lissajous figure. If the straight (or deviation from it) but horizontal line appears this indicates that the left and right channels are out of phase.
  * 
  * The filter accepts the following options:
  */
export function aVectorScope ( inputs : Stream | Stream[] = [], parameters : AVectorScopeParameters = {} as any ) {
    return new AVectorScope( inputs, parameters );
}