import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.35 aresample
  * Resample the input audio to the specified parameters, using the libswresample library. If none are specified then the filter will automatically convert between its input and output.
  * 
  * This filter is also able to stretch/squeeze the audio data to make it match the timestamps or to inject silence / cut out audio to make it match the timestamps, do a combination of both or do neither.
  * 
  * The filter accepts the syntax [
  * sample_rate:]resampler_options, where sample_rate expresses a sample rate and resampler_options is a list of
  * key=value pairs, separated by ":". See the
  * (ffmpeg-resampler)"Resampler Options" section in the
  * ffmpeg-resampler(1) manual for the complete list of supported options.
  */
export class AudioResample extends Filter<AudioResampleParameters> {
    outputs : FilterStreamRef<AudioResampleParameters, AudioResample>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioResampleParameters = {} as any ) {
        super( inputs, 'aresample', parameters );
    }
}

export interface AudioResampleParameters {


    [key : string] : string | number;
}

/**
  * 8.35 aresample
  * Resample the input audio to the specified parameters, using the libswresample library. If none are specified then the filter will automatically convert between its input and output.
  * 
  * This filter is also able to stretch/squeeze the audio data to make it match the timestamps or to inject silence / cut out audio to make it match the timestamps, do a combination of both or do neither.
  * 
  * The filter accepts the syntax [
  * sample_rate:]resampler_options, where sample_rate expresses a sample rate and resampler_options is a list of
  * key=value pairs, separated by ":". See the
  * (ffmpeg-resampler)"Resampler Options" section in the
  * ffmpeg-resampler(1) manual for the complete list of supported options.
  */
export function audioResample ( inputs : Stream | Stream[] = [], parameters : AudioResampleParameters = {} as any ) {
    return new AudioResample( inputs, parameters );
}