import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.131 mix
  * Mix several video input streams into one video stream.
  * 
  * A description of the accepted options follows.
  */
export class VideoMix extends Filter<VideoMixParameters> {
    outputs : FilterStreamRef<VideoMixParameters, VideoMix>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMixParameters = {} as any ) {
        super( inputs, 'mix', parameters );
    }
}

export interface VideoMixParameters {
    /** The number of inputs. If unspecified, it defaults to 2. */
    nb_inputs ?: string | number;
    /** Specify weight of each input video stream as sequence. Each weight is separated by space. If number of weights is smaller than number of frames last specified weight will be used for all remaining unset weights. */
    weights ?: string | number;
    /** Specify scale, if it is set it will be multiplied with sum of each weight multiplied with pixel values to give final destination pixel value. By default scale is auto scaled to sum of weights. */
    scale ?: string | number;
    /**
      * Specify how end of stream is determined.
      * ‘longest’
      * The duration of the longest input. (default)
      * ‘shortest’
      * The duration of the shortest input.
      * ‘first’
      * The duration of the first input.
      */
    duration ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.131 mix
  * Mix several video input streams into one video stream.
  * 
  * A description of the accepted options follows.
  */
export function videoMix ( inputs : Stream | Stream[] = [], parameters : VideoMixParameters = {} as any ) {
    return new VideoMix( inputs, parameters );
}