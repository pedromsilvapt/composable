import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.43 astats
  * Display time domain statistical information about the audio channels. Statistics are calculated and displayed for each audio channel and, where applicable, an overall figure is also given.
  * 
  * It accepts the following option:
  */
export class AudioStats extends Filter<AudioStatsParameters> {
    outputs : FilterStreamRef<AudioStatsParameters, AudioStats>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioStatsParameters = {} as any ) {
        super( inputs, 'astats', parameters );
    }
}

export interface AudioStatsParameters {
    /** Short window length in seconds, used for peak and trough RMS measurement. Default is 0.05 (50 milliseconds). Allowed range is [0.01 - 10]. */
    length ?: string | number;
    /**
      * Set metadata injection. All the metadata keys are prefixed with lavfi.astats.X, where X is channel number starting from 1 or string Overall. Default is disabled.
      * Available keys for each channel are: DC_offset Min_level Max_level Min_difference Max_difference Mean_difference RMS_difference Peak_level RMS_peak RMS_trough Crest_factor Flat_factor Peak_count Bit_depth Dynamic_range Zero_crossings Zero_crossings_rate Number_of_NaNs Number_of_Infs Number_of_denormals
      * and for Overall: DC_offset Min_level Max_level Min_difference Max_difference Mean_difference RMS_difference Peak_level RMS_level RMS_peak RMS_trough Flat_factor Peak_count Bit_depth Number_of_samples Number_of_NaNs Number_of_Infs Number_of_denormals
      * For example full key look like this lavfi.astats.1.DC_offset or this lavfi.astats.Overall.Peak_count.
      * For description what each key means read below.
      */
    metadata ?: string | number;
    /** Set number of frame after which stats are going to be recalculated. Default is disabled. */
    reset ?: string | number;
    /**
      * Select the entries which need to be measured per channel. The metadata keys can be used as flags, default is all which measures everything.
      * none disables all per channel measurement.
      */
    measure_perchannel ?: string | number;
    /**
      * Select the entries which need to be measured overall. The metadata keys can be used as flags, default is all which measures everything.
      * none disables all overall measurement.
      */
    measure_overall ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.43 astats
  * Display time domain statistical information about the audio channels. Statistics are calculated and displayed for each audio channel and, where applicable, an overall figure is also given.
  * 
  * It accepts the following option:
  */
export function audioStats ( inputs : Stream | Stream[] = [], parameters : AudioStatsParameters = {} as any ) {
    return new AudioStats( inputs, parameters );
}