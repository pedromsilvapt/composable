import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.39 asetrate
  * Set the sample rate without altering the PCM data. This will result in a change of speed and pitch.
  * 
  * The filter accepts the following options:
  */
export class AudioSetRate extends Filter<AudioSetRateParameters> {
    outputs : FilterStreamRef<AudioSetRateParameters, AudioSetRate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSetRateParameters = {} as any ) {
        super( inputs, 'asetrate', parameters );
    }
}

export interface AudioSetRateParameters {
    /**
      * Set the output sample rate. Default is 44100 Hz.
      * @aliases r
      */
    sample_rate ?: string | number;
    /**
      * Set the output sample rate. Default is 44100 Hz.
      * @aliasof sample_rate
      */
    r ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.39 asetrate
  * Set the sample rate without altering the PCM data. This will result in a change of speed and pitch.
  * 
  * The filter accepts the following options:
  */
export function audioSetRate ( inputs : Stream | Stream[] = [], parameters : AudioSetRateParameters = {} as any ) {
    return new AudioSetRate( inputs, parameters );
}