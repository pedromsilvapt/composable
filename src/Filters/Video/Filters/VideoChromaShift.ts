import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.19 chromashift
  * Shift chroma pixels horizontally and/or vertically.
  * 
  * The filter accepts the following options:
  */
export class VideoChromaShift extends Filter<VideoChromaShiftParameters> {
    outputs : FilterStreamRef<VideoChromaShiftParameters, VideoChromaShift>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoChromaShiftParameters = {} as any ) {
        super( inputs, 'chromashift', parameters );
    }
}

export interface VideoChromaShiftParameters {
    /** Set amount to shift chroma-blue horizontally. */
    cbh ?: string | number;
    /** Set amount to shift chroma-blue vertically. */
    cbv ?: string | number;
    /** Set amount to shift chroma-red horizontally. */
    crh ?: string | number;
    /** Set amount to shift chroma-red vertically. */
    crv ?: string | number;
    /** Set edge mode, can be smear, default, or warp. */
    edge ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.19 chromashift
  * Shift chroma pixels horizontally and/or vertically.
  * 
  * The filter accepts the following options:
  */
export function videoChromaShift ( inputs : Stream | Stream[] = [], parameters : VideoChromaShiftParameters = {} as any ) {
    return new VideoChromaShift( inputs, parameters );
}