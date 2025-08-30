import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.72 join
  * Join multiple input streams into one multi-channel stream.
  * 
  * It accepts the following parameters:
  */
export class AudioJoin extends Filter<AudioJoinParameters> {
    outputs : FilterStreamRef<AudioJoinParameters, AudioJoin>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioJoinParameters = {} as any ) {
        super( inputs, 'join', parameters );
    }
}

export interface AudioJoinParameters {
    /** The number of input streams. It defaults to 2. */
    inputs ?: string | number;
    /** The desired output channel layout. It defaults to stereo. */
    channel_layout ?: string | number;
    /** Map channels from inputs to output. The argument is a ’|’-separated list of mappings, each in the input_idx.in_channel-out_channel form. input_idx is the 0-based index of the input stream. in_channel can be either the name of the input channel (e.g. FL for front left) or its index in the specified input stream. out_channel is the name of the output channel. */
    map ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.72 join
  * Join multiple input streams into one multi-channel stream.
  * 
  * It accepts the following parameters:
  */
export function audioJoin ( inputs : Stream | Stream[] = [], parameters : AudioJoinParameters = {} as any ) {
    return new AudioJoin( inputs, parameters );
}