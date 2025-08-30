import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.205 tmix
  * Mix successive video frames.
  * 
  * A description of the accepted options follows.
  */
export class VideoTMix extends Filter<VideoTMixParameters> {
    outputs : FilterStreamRef<VideoTMixParameters, VideoTMix>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTMixParameters = {} as any ) {
        super( inputs, 'tmix', parameters );
    }
}

export interface VideoTMixParameters {
    /** The number of successive frames to mix. If unspecified, it defaults to 3. */
    frames ?: string | number;
    /** Specify weight of each input video frame. Each weight is separated by space. If number of weights is smaller than number of frames last specified weight will be used for all remaining unset weights. */
    weights ?: string | number;
    /** Specify scale, if it is set it will be multiplied with sum of each weight multiplied with pixel values to give final destination pixel value. By default scale is auto scaled to sum of weights. */
    scale ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.205 tmix
  * Mix successive video frames.
  * 
  * A description of the accepted options follows.
  */
export function videoTMix ( inputs : Stream | Stream[] = [], parameters : VideoTMixParameters = {} as any ) {
    return new VideoTMix( inputs, parameters );
}