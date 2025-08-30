import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.26 amix
  * Mixes multiple audio inputs into a single output.
  * 
  * Note that this filter only supports float samples (the amerge and pan audio filters support many formats). If the amix input has integer samples then aresample will be automatically inserted to perform the conversion to float samples.
  * 
  * For example
  * 
  * 
  * ffmpeg -i INPUT1 -i INPUT2 -i INPUT3 -filter_complex amix=inputs=3:duration=first:dropout_transition=3 OUTPUT
  * 
  * will mix 3 input audio streams to a single output with the same duration as the first input and a dropout transition time of 3 seconds.
  * 
  * It accepts the following parameters:
  */
export class AudioMix extends Filter<AudioMixParameters> {
    outputs : FilterStreamRef<AudioMixParameters, AudioMix>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioMixParameters = {} as any ) {
        super( inputs, 'amix', parameters );
    }
}

export interface AudioMixParameters {
    /** The number of inputs. If unspecified, it defaults to 2. */
    inputs ?: string | number;
    /**
      * How to determine the end-of-stream.
      * longest
      * The duration of the longest input. (default)
      * shortest
      * The duration of the shortest input.
      * first
      * The duration of the first input.
      */
    duration ?: string | number;
    /** The transition time, in seconds, for volume renormalization when an input stream ends. The default value is 2 seconds. */
    dropout_transition ?: string | number;
    /** Specify weight of each input audio stream as sequence. Each weight is separated by space. By default all inputs have same weight. */
    weights ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.26 amix
  * Mixes multiple audio inputs into a single output.
  * 
  * Note that this filter only supports float samples (the amerge and pan audio filters support many formats). If the amix input has integer samples then aresample will be automatically inserted to perform the conversion to float samples.
  * 
  * For example
  * 
  * 
  * ffmpeg -i INPUT1 -i INPUT2 -i INPUT3 -filter_complex amix=inputs=3:duration=first:dropout_transition=3 OUTPUT
  * 
  * will mix 3 input audio streams to a single output with the same duration as the first input and a dropout transition time of 3 seconds.
  * 
  * It accepts the following parameters:
  */
export function audioMix ( inputs : Stream | Stream[] = [], parameters : AudioMixParameters = {} as any ) {
    return new AudioMix( inputs, parameters );
}