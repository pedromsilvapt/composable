import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.78 pan
  * Mix channels with specific gain levels. The filter accepts the output channel layout followed by a set of channels definitions.
  * 
  * This filter is also designed to efficiently remap the channels of an audio stream.
  * 
  * The filter accepts parameters of the form: "
  * l|outdef|outdef|..."
  */
export class AudioPan extends Filter<AudioPanParameters> {
    outputs : FilterStreamRef<AudioPanParameters, AudioPan>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioPanParameters = {} as any ) {
        super( inputs, 'pan', parameters );
    }
}

export interface AudioPanParameters {
    /** output channel layout or number of channels */
    l ?: string | number;
    /**
      * output channel specification, of the form: "
      * out_name=[gain*]in_name[(+-)[gain*]in_name...]"
      */
    outdef ?: string | number;
    /** output channel to define, either a channel name (FL, FR, etc.) or a channel number (c0, c1, etc.) */
    out_name ?: string | number;
    /** multiplicative coefficient for the channel, 1 leaving the volume unchanged */
    gain ?: string | number;
    /** input channel to use, see out_name for details; it is not possible to mix named and numbered input channels */
    in_name ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.78 pan
  * Mix channels with specific gain levels. The filter accepts the output channel layout followed by a set of channels definitions.
  * 
  * This filter is also designed to efficiently remap the channels of an audio stream.
  * 
  * The filter accepts parameters of the form: "
  * l|outdef|outdef|..."
  */
export function audioPan ( inputs : Stream | Stream[] = [], parameters : AudioPanParameters = {} as any ) {
    return new AudioPan( inputs, parameters );
}