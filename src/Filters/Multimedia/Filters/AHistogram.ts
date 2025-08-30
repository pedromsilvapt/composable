import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.4 ahistogram
  * Convert input audio to a video output, displaying the volume histogram.
  * 
  * The filter accepts the following options:
  */
export class AHistogram extends Filter<AHistogramParameters> {
    outputs : FilterStreamRef<AHistogramParameters, AHistogram>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AHistogramParameters = {} as any ) {
        super( inputs, 'ahistogram', parameters );
    }
}

export interface AHistogramParameters {
    /**
      * Specify how histogram is calculated.
      * It accepts the following values:
      * ‘single’
      * Use single histogram for all channels.
      * ‘separate’
      * Use separate histogram for each channel.
      * Default is single.
      */
    dmode ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is hd720.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Specify the video size for the output. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual. Default value is hd720.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set display scale.
      * It accepts the following values:
      * ‘log’
      * logarithmic
      * ‘sqrt’
      * square root
      * ‘cbrt’
      * cubic root
      * ‘lin’
      * linear
      * ‘rlog’
      * reverse logarithmic
      * Default is log.
      */
    scale ?: string | number;
    /**
      * Set amplitude scale.
      * It accepts the following values:
      * ‘log’
      * logarithmic
      * ‘lin’
      * linear
      * Default is log.
      */
    ascale ?: string | number;
    /** Set how much frames to accumulate in histogram. Default is 1. Setting this to -1 accumulates all frames. */
    acount ?: string | number;
    /** Set histogram ratio of window height. */
    rheight ?: string | number;
    /**
      * Set sonogram sliding.
      * It accepts the following values:
      * ‘replace’
      * replace old rows with new ones.
      * ‘scroll’
      * scroll from top to bottom.
      * Default is replace.
      */
    slide ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.4 ahistogram
  * Convert input audio to a video output, displaying the volume histogram.
  * 
  * The filter accepts the following options:
  */
export function aHistogram ( inputs : Stream | Stream[] = [], parameters : AHistogramParameters = {} as any ) {
    return new AHistogram( inputs, parameters );
}