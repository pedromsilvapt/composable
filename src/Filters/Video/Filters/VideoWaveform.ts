import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.226 waveform
  * Video waveform monitor.
  * 
  * The waveform monitor plots color component intensity. By default luminance only. Each column of the waveform corresponds to a column of pixels in the source video.
  * 
  * It accepts the following options:
  */
export class VideoWaveform extends Filter<VideoWaveformParameters> {
    outputs : FilterStreamRef<VideoWaveformParameters, VideoWaveform>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoWaveformParameters = {} as any ) {
        super( inputs, 'waveform', parameters );
    }
}

export interface VideoWaveformParameters {
    /**
      * Can be either row, or column. Default is column. In row mode, the graph on the left side represents color component value 0 and the right side represents value = 255. In column mode, the top side represents color component value = 0 and bottom side represents value = 255.
      * @aliases m
      */
    mode ?: string | number;
    /**
      * Can be either row, or column. Default is column. In row mode, the graph on the left side represents color component value 0 and the right side represents value = 255. In column mode, the top side represents color component value = 0 and bottom side represents value = 255.
      * @aliasof mode
      */
    m ?: string | number;
    /**
      * Set intensity. Smaller values are useful to find out how many values of the same luminance are distributed across input rows/columns. Default value is 0.04. Allowed range is [0, 1].
      * @aliases i
      */
    intensity ?: string | number;
    /**
      * Set intensity. Smaller values are useful to find out how many values of the same luminance are distributed across input rows/columns. Default value is 0.04. Allowed range is [0, 1].
      * @aliasof intensity
      */
    i ?: string | number;
    /**
      * Set mirroring mode. 0 means unmirrored, 1 means mirrored. In mirrored mode, higher values will be represented on the left side for row mode and at the top for column mode. Default is
      * 1 (mirrored).
      * @aliases r
      */
    mirror ?: string | number;
    /**
      * Set mirroring mode. 0 means unmirrored, 1 means mirrored. In mirrored mode, higher values will be represented on the left side for row mode and at the top for column mode. Default is
      * 1 (mirrored).
      * @aliasof mirror
      */
    r ?: string | number;
    /**
      * Set display mode. It accepts the following values:
      * ‘overlay’
      * Presents information identical to that in the parade, except that the graphs representing color components are superimposed directly over one another.
      * This display mode makes it easier to spot relative differences or similarities in overlapping areas of the color components that are supposed to be identical, such as neutral whites, grays, or blacks.
      * ‘stack’
      * Display separate graph for the color components side by side in
      * row mode or one below the other in column mode.
      * ‘parade’
      * Display separate graph for the color components side by side in
      * column mode or one below the other in row mode.
      * Using this display mode makes it easy to spot color casts in the highlights and shadows of an image, by comparing the contours of the top and the bottom graphs of each waveform. Since whites, grays, and blacks are characterized by exactly equal amounts of red, green, and blue, neutral areas of the picture should display three waveforms of roughly equal width/height. If not, the correction is easy to perform by making level adjustments the three waveforms.
      * Default is stack.
      * @aliases d
      */
    display ?: string | number;
    /**
      * Set display mode. It accepts the following values:
      * ‘overlay’
      * Presents information identical to that in the parade, except that the graphs representing color components are superimposed directly over one another.
      * This display mode makes it easier to spot relative differences or similarities in overlapping areas of the color components that are supposed to be identical, such as neutral whites, grays, or blacks.
      * ‘stack’
      * Display separate graph for the color components side by side in
      * row mode or one below the other in column mode.
      * ‘parade’
      * Display separate graph for the color components side by side in
      * column mode or one below the other in row mode.
      * Using this display mode makes it easy to spot color casts in the highlights and shadows of an image, by comparing the contours of the top and the bottom graphs of each waveform. Since whites, grays, and blacks are characterized by exactly equal amounts of red, green, and blue, neutral areas of the picture should display three waveforms of roughly equal width/height. If not, the correction is easy to perform by making level adjustments the three waveforms.
      * Default is stack.
      * @aliasof display
      */
    d ?: string | number;
    /**
      * Set which color components to display. Default is 1, which means only luminance or red color component if input is in RGB colorspace. If is set for example to 7 it will display all 3 (if) available color components.
      * @aliases c
      */
    components ?: string | number;
    /**
      * Set which color components to display. Default is 1, which means only luminance or red color component if input is in RGB colorspace. If is set for example to 7 it will display all 3 (if) available color components.
      * @aliasof components
      */
    c ?: string | number;
    /**
      * ‘none’
      * No envelope, this is default.
      * ‘instant’
      * Instant envelope, minimum and maximum values presented in graph will be easily visible even with small step value.
      * ‘peak’
      * Hold minimum and maximum values presented in graph across time. This way you can still spot out of range values without constantly looking at waveforms.
      * ‘peak+instant’
      * Peak and instant envelope combined together.
      * @aliases e
      */
    envelope ?: string | number;
    /**
      * ‘none’
      * No envelope, this is default.
      * ‘instant’
      * Instant envelope, minimum and maximum values presented in graph will be easily visible even with small step value.
      * ‘peak’
      * Hold minimum and maximum values presented in graph across time. This way you can still spot out of range values without constantly looking at waveforms.
      * ‘peak+instant’
      * Peak and instant envelope combined together.
      * @aliasof envelope
      */
    e ?: string | number;
    /**
      * ‘lowpass’
      * No filtering, this is default.
      * ‘flat’
      * Luma and chroma combined together.
      * ‘aflat’
      * Similar as above, but shows difference between blue and red chroma.
      * ‘xflat’
      * Similar as above, but use different colors.
      * ‘yflat’
      * Similar as above, but again with different colors.
      * ‘chroma’
      * Displays only chroma.
      * ‘color’
      * Displays actual color value on waveform.
      * ‘acolor’
      * Similar as above, but with luma showing frequency of chroma values.
      * @aliases f
      */
    filter ?: string | number;
    /**
      * ‘lowpass’
      * No filtering, this is default.
      * ‘flat’
      * Luma and chroma combined together.
      * ‘aflat’
      * Similar as above, but shows difference between blue and red chroma.
      * ‘xflat’
      * Similar as above, but use different colors.
      * ‘yflat’
      * Similar as above, but again with different colors.
      * ‘chroma’
      * Displays only chroma.
      * ‘color’
      * Displays actual color value on waveform.
      * ‘acolor’
      * Similar as above, but with luma showing frequency of chroma values.
      * @aliasof filter
      */
    f ?: string | number;
    /**
      * Set which graticule to display.
      * ‘none’
      * Do not display graticule.
      * ‘green’
      * Display green graticule showing legal broadcast ranges.
      * ‘orange’
      * Display orange graticule showing legal broadcast ranges.
      * ‘invert’
      * Display invert graticule showing legal broadcast ranges.
      * @aliases g
      */
    graticule ?: string | number;
    /**
      * Set which graticule to display.
      * ‘none’
      * Do not display graticule.
      * ‘green’
      * Display green graticule showing legal broadcast ranges.
      * ‘orange’
      * Display orange graticule showing legal broadcast ranges.
      * ‘invert’
      * Display invert graticule showing legal broadcast ranges.
      * @aliasof graticule
      */
    g ?: string | number;
    /**
      * Set graticule opacity.
      * @aliases o
      */
    opacity ?: string | number;
    /**
      * Set graticule opacity.
      * @aliasof opacity
      */
    o ?: string | number;
    /**
      * Set graticule flags.
      * ‘numbers’
      * Draw numbers above lines. By default enabled.
      * ‘dots’
      * Draw dots instead of lines.
      * @aliases fl
      */
    flags ?: string | number;
    /**
      * Set graticule flags.
      * ‘numbers’
      * Draw numbers above lines. By default enabled.
      * ‘dots’
      * Draw dots instead of lines.
      * @aliasof flags
      */
    fl ?: string | number;
    /**
      * Set scale used for displaying graticule.
      * ‘digital’
      * ‘millivolts’
      * ‘ire’
      * Default is digital.
      * @aliases s
      */
    scale ?: string | number;
    /**
      * Set scale used for displaying graticule.
      * ‘digital’
      * ‘millivolts’
      * ‘ire’
      * Default is digital.
      * @aliasof scale
      */
    s ?: string | number;
    /**
      * Set background opacity.
      * @aliases b
      */
    bgopacity ?: string | number;
    /**
      * Set background opacity.
      * @aliasof bgopacity
      */
    b ?: string | number;
    /**
      * Set tint for output. Only used with lowpass filter and when display is not overlay and input pixel formats are not RGB.
      * @aliases t0
      */
    tint0 ?: string | number;
    /**
      * Set tint for output. Only used with lowpass filter and when display is not overlay and input pixel formats are not RGB.
      * @aliasof tint0
      */
    t0 ?: string | number;
    /** @aliases t1 */
    tint1 ?: string | number;
    /** @aliasof tint1 */
    t1 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.226 waveform
  * Video waveform monitor.
  * 
  * The waveform monitor plots color component intensity. By default luminance only. Each column of the waveform corresponds to a column of pixels in the source video.
  * 
  * It accepts the following options:
  */
export function videoWaveform ( inputs : Stream | Stream[] = [], parameters : VideoWaveformParameters = {} as any ) {
    return new VideoWaveform( inputs, parameters );
}