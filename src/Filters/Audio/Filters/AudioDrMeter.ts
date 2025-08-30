import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.61 drmeter
  * Measure audio dynamic range.
  * 
  * DR values of 14 and higher is found in very dynamic material. DR of 8 to 13 is found in transition material. And anything less that 8 have very poor dynamics and is very compressed.
  * 
  * The filter accepts the following options:
  */
export class AudioDrMeter extends Filter<AudioDrMeterParameters> {
    outputs : FilterStreamRef<AudioDrMeterParameters, AudioDrMeter>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDrMeterParameters = {} as any ) {
        super( inputs, 'drmeter', parameters );
    }
}

export interface AudioDrMeterParameters {
    /** Set window length in seconds used to split audio into segments of equal length. Default is 3 seconds. */
    length ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.61 drmeter
  * Measure audio dynamic range.
  * 
  * DR values of 14 and higher is found in very dynamic material. DR of 8 to 13 is found in transition material. And anything less that 8 have very poor dynamics and is very compressed.
  * 
  * The filter accepts the following options:
  */
export function audioDrMeter ( inputs : Stream | Stream[] = [], parameters : AudioDrMeterParameters = {} as any ) {
    return new AudioDrMeter( inputs, parameters );
}