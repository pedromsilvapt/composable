import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.10 adelay
  * Delay one or more audio channels.
  * 
  * Samples in delayed channel are filled with silence.
  * 
  * The filter accepts the following option:
  */
export class AudioDelay extends Filter<AudioDelayParameters> {
    outputs : FilterStreamRef<AudioDelayParameters, AudioDelay>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioDelayParameters = {} as any ) {
        super( inputs, 'adelay', parameters );
    }
}

export interface AudioDelayParameters {
    /** Set list of delays in milliseconds for each channel separated by ’|’. Unused delays will be silently ignored. If number of given delays is smaller than number of channels all remaining channels will not be delayed. If you want to delay exact number of samples, append ’S’ to number. If you want instead to delay in seconds, append ’s’ to number. */
    delays ?: string | number;
    /** Use last set delay for all remaining channels. By default is disabled. This option if enabled changes how option delays is interpreted. */
    all ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.10 adelay
  * Delay one or more audio channels.
  * 
  * Samples in delayed channel are filled with silence.
  * 
  * The filter accepts the following option:
  */
export function audioDelay ( inputs : Stream | Stream[] = [], parameters : AudioDelayParameters = {} as any ) {
    return new AudioDelay( inputs, parameters );
}