import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.123 maskedmin
  * Merge the second and third input stream into output stream using absolute differences between second input stream and first input stream and absolute difference between third input stream and first input stream. The picked value will be from second input stream if second absolute difference is less than first one or from third input stream otherwise.
  * 
  * This filter accepts the following options:
  */
export class VideoMaskedMin extends Filter<VideoMaskedMinParameters> {
    outputs : FilterStreamRef<VideoMaskedMinParameters, VideoMaskedMin>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMaskedMinParameters = {} as any ) {
        super( inputs, 'maskedmin', parameters );
    }
}

export interface VideoMaskedMinParameters {
    /** Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.123 maskedmin
  * Merge the second and third input stream into output stream using absolute differences between second input stream and first input stream and absolute difference between third input stream and first input stream. The picked value will be from second input stream if second absolute difference is less than first one or from third input stream otherwise.
  * 
  * This filter accepts the following options:
  */
export function videoMaskedMin ( inputs : Stream | Stream[] = [], parameters : VideoMaskedMinParameters = {} as any ) {
    return new VideoMaskedMin( inputs, parameters );
}