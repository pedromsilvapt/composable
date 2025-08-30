import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.120 maskedclamp
  * Clamp the first input stream with the second input and third input stream.
  * 
  * Returns the value of first stream to be between second input stream - undershoot and third input stream + overshoot.
  * 
  * This filter accepts the following options:
  */
export class VideoMaskedClamp extends Filter<VideoMaskedClampParameters> {
    outputs : FilterStreamRef<VideoMaskedClampParameters, VideoMaskedClamp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMaskedClampParameters = {} as any ) {
        super( inputs, 'maskedclamp', parameters );
    }
}

export interface VideoMaskedClampParameters {
    /** Default value is 0. */
    undershoot ?: string | number;
    /** Default value is 0. */
    overshoot ?: string | number;
    /** Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.120 maskedclamp
  * Clamp the first input stream with the second input and third input stream.
  * 
  * Returns the value of first stream to be between second input stream - undershoot and third input stream + overshoot.
  * 
  * This filter accepts the following options:
  */
export function videoMaskedClamp ( inputs : Stream | Stream[] = [], parameters : VideoMaskedClampParameters = {} as any ) {
    return new VideoMaskedClamp( inputs, parameters );
}