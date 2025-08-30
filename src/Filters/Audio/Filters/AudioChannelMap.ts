import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.52 channelmap
  * Remap input channels to new locations.
  * 
  * It accepts the following parameters:
  */
export class AudioChannelMap extends Filter<AudioChannelMapParameters> {
    outputs : FilterStreamRef<AudioChannelMapParameters, AudioChannelMap>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioChannelMapParameters = {} as any ) {
        super( inputs, 'channelmap', parameters );
    }
}

export interface AudioChannelMapParameters {
    /**
      * Map channels from input to output. The argument is a ’|’-separated list of mappings, each in the in_channel-out_channel or
      * in_channel form. in_channel can be either the name of the input channel (e.g. FL for front left) or its index in the input channel layout.
      * out_channel is the name of the output channel or its index in the output channel layout. If out_channel is not given then it is implicitly an index, starting with zero and increasing by one for each mapping.
      */
    map ?: string | number;
    /** The channel layout of the output stream. */
    channel_layout ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.52 channelmap
  * Remap input channels to new locations.
  * 
  * It accepts the following parameters:
  */
export function audioChannelMap ( inputs : Stream | Stream[] = [], parameters : AudioChannelMapParameters = {} as any ) {
    return new AudioChannelMap( inputs, parameters );
}