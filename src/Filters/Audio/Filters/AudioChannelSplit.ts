import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.53 channelsplit
  * Split each channel from an input audio stream into a separate output stream.
  * 
  * It accepts the following parameters:
  */
export class AudioChannelSplit extends Filter<AudioChannelSplitParameters> {
    outputs : FilterStreamRef<AudioChannelSplitParameters, AudioChannelSplit>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioChannelSplitParameters = {} as any ) {
        super( inputs, 'channelsplit', parameters );
    }
}

export interface AudioChannelSplitParameters {
    /** The channel layout of the input stream. The default is "stereo". */
    channel_layout ?: string | number;
    /**
      * A channel layout describing the channels to be extracted as separate output streams or "all" to extract each input channel as a separate stream. The default is "all".
      * Choosing channels not present in channel layout in the input will result in an error.
      */
    channels ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.53 channelsplit
  * Split each channel from an input audio stream into a separate output stream.
  * 
  * It accepts the following parameters:
  */
export function audioChannelSplit ( inputs : Stream | Stream[] = [], parameters : AudioChannelSplitParameters = {} as any ) {
    return new AudioChannelSplit( inputs, parameters );
}