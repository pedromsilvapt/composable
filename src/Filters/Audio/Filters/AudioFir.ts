import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.18 afir
  * Apply an arbitrary Finite Impulse Response filter.
  * 
  * This filter is designed for applying long FIR filters, up to 60 seconds long.
  * 
  * It can be used as component for digital crossover filters, room equalization, cross talk cancellation, wavefield synthesis, auralization, ambiophonics, ambisonics and spatialization.
  * 
  * This filter uses the streams higher than first one as FIR coefficients. If the non-first stream holds a single channel, it will be used for all input channels in the first stream, otherwise the number of channels in the non-first stream must be same as the number of channels in the first stream.
  * 
  * It accepts the following parameters:
  */
export class AudioFir extends Filter<AudioFirParameters> {
    outputs : FilterStreamRef<AudioFirParameters, AudioFir>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFirParameters = {} as any ) {
        super( inputs, 'afir', parameters );
    }
}

export interface AudioFirParameters {
    /** Set dry gain. This sets input gain. */
    dry ?: string | number;
    /** Set wet gain. This sets final output gain. */
    wet ?: string | number;
    /** Set Impulse Response filter length. Default is 1, which means whole IR is processed. */
    length ?: string | number;
    /**
      * Enable applying gain measured from power of IR.
      * Set which approach to use for auto gain measurement.
      * none
      * Do not apply any gain.
      * peak
      * select peak gain, very conservative approach. This is default value.
      * dc
      * select DC gain, limited application.
      * gn
      * select gain to noise approach, this is most popular one.
      */
    gtype ?: string | number;
    /** Set gain to be applied to IR coefficients before filtering. Allowed range is 0 to 1. This gain is applied after any gain applied with gtype option. */
    irgain ?: string | number;
    /** Set format of IR stream. Can be mono or input. Default is input. */
    irfmt ?: string | number;
    /** Set max allowed Impulse Response filter duration in seconds. Default is 30 seconds. Allowed range is 0.1 to 60 seconds. */
    maxir ?: string | number;
    /** Show IR frequency response, magnitude(magenta), phase(green) and group delay(yellow) in additional video stream. By default it is disabled. */
    response ?: string | number;
    /** Set for which IR channel to display frequency response. By default is first channel displayed. This option is used only when response is enabled. */
    channel ?: string | number;
    /** Set video stream size. This option is used only when response is enabled. */
    size ?: string | number;
    /** Set video stream frame rate. This option is used only when response is enabled. */
    rate ?: string | number;
    /** Set minimal partition size used for convolution. Default is 8192. Allowed range is from 1 to 32768. Lower values decreases latency at cost of higher CPU usage. */
    minp ?: string | number;
    /** Set maximal partition size used for convolution. Default is 8192. Allowed range is from 8 to 32768. Lower values may increase CPU usage. */
    maxp ?: string | number;
    /** Set number of input impulse responses streams which will be switchable at runtime. Allowed range is from 1 to 32. Default is 1. */
    nbirs ?: string | number;
    /** Set IR stream which will be used for convolution, starting from 0, should always be lower than supplied value by nbirs option. Default is 0. This option can be changed at runtime via commands. */
    ir ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.18 afir
  * Apply an arbitrary Finite Impulse Response filter.
  * 
  * This filter is designed for applying long FIR filters, up to 60 seconds long.
  * 
  * It can be used as component for digital crossover filters, room equalization, cross talk cancellation, wavefield synthesis, auralization, ambiophonics, ambisonics and spatialization.
  * 
  * This filter uses the streams higher than first one as FIR coefficients. If the non-first stream holds a single channel, it will be used for all input channels in the first stream, otherwise the number of channels in the non-first stream must be same as the number of channels in the first stream.
  * 
  * It accepts the following parameters:
  */
export function audioFir ( inputs : Stream | Stream[] = [], parameters : AudioFirParameters = {} as any ) {
    return new AudioFir( inputs, parameters );
}