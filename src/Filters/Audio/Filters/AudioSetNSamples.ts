import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.38 asetnsamples
  * Set the number of samples per each output audio frame.
  * 
  * The last output packet may contain a different number of samples, as the filter will flush all the remaining samples when the input audio signals its end.
  * 
  * The filter accepts the following options:
  */
export class AudioSetNSamples extends Filter<AudioSetNSamplesParameters> {
    outputs : FilterStreamRef<AudioSetNSamplesParameters, AudioSetNSamples>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioSetNSamplesParameters = {} as any ) {
        super( inputs, 'asetnsamples', parameters );
    }
}

export interface AudioSetNSamplesParameters {
    /**
      * Set the number of frames per each output audio frame. The number is intended as the number of samples per each channel. Default value is 1024.
      * @aliases n
      */
    nb_out_samples ?: string | number;
    /**
      * Set the number of frames per each output audio frame. The number is intended as the number of samples per each channel. Default value is 1024.
      * @aliasof nb_out_samples
      */
    n ?: string | number;
    /**
      * If set to 1, the filter will pad the last audio frame with zeroes, so that the last frame will contain the same number of samples as the previous ones. Default value is 1.
      * @aliases p
      */
    pad ?: string | number;
    /**
      * If set to 1, the filter will pad the last audio frame with zeroes, so that the last frame will contain the same number of samples as the previous ones. Default value is 1.
      * @aliasof pad
      */
    p ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.38 asetnsamples
  * Set the number of samples per each output audio frame.
  * 
  * The last output packet may contain a different number of samples, as the filter will flush all the remaining samples when the input audio signals its end.
  * 
  * The filter accepts the following options:
  */
export function audioSetNSamples ( inputs : Stream | Stream[] = [], parameters : AudioSetNSamplesParameters = {} as any ) {
    return new AudioSetNSamples( inputs, parameters );
}