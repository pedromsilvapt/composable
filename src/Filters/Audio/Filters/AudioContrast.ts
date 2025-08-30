import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.2 acontrast
  * Simple audio dynamic range compression/expansion filter.
  * 
  * The filter accepts the following options:
  */
export class AudioContrast extends Filter<AudioContrastParameters> {
    outputs : FilterStreamRef<AudioContrastParameters, AudioContrast>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioContrastParameters = {} as any ) {
        super( inputs, 'acontrast', parameters );
    }
}

export interface AudioContrastParameters {
    /** Set contrast. Default is 33. Allowed range is between 0 and 100. */
    contrast ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.2 acontrast
  * Simple audio dynamic range compression/expansion filter.
  * 
  * The filter accepts the following options:
  */
export function audioContrast ( inputs : Stream | Stream[] = [], parameters : AudioContrastParameters = {} as any ) {
    return new AudioContrast( inputs, parameters );
}