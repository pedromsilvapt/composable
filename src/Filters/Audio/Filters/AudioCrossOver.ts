import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.5 acrossover
  * Split audio stream into several bands.
  * 
  * This filter splits audio stream into two or more frequency ranges. Summing all streams back will give flat output.
  * 
  * The filter accepts the following options:
  */
export class AudioCrossOver extends Filter<AudioCrossOverParameters> {
    outputs : FilterStreamRef<AudioCrossOverParameters, AudioCrossOver>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCrossOverParameters = {} as any ) {
        super( inputs, 'acrossover', parameters );
    }
}

export interface AudioCrossOverParameters {
    /** Set split frequencies. Those must be positive and increasing. */
    split ?: string | number;
    /** Set filter order, can be 2nd, 4th or 8th. Default is 4th. */
    order ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.5 acrossover
  * Split audio stream into several bands.
  * 
  * This filter splits audio stream into two or more frequency ranges. Summing all streams back will give flat output.
  * 
  * The filter accepts the following options:
  */
export function audioCrossOver ( inputs : Stream | Stream[] = [], parameters : AudioCrossOverParameters = {} as any ) {
    return new AudioCrossOver( inputs, parameters );
}