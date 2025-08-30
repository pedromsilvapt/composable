import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.160 qp
  * Change video quantization parameters (QP).
  * 
  * The filter accepts the following option:
  */
export class VideoQp extends Filter<VideoQpParameters> {
    outputs : FilterStreamRef<VideoQpParameters, VideoQp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoQpParameters = {} as any ) {
        super( inputs, 'qp', parameters );
    }
}

export interface VideoQpParameters {
    /** Set expression for quantization parameter. */
    qp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.160 qp
  * Change video quantization parameters (QP).
  * 
  * The filter accepts the following option:
  */
export function videoQp ( inputs : Stream | Stream[] = [], parameters : VideoQpParameters = {} as any ) {
    return new VideoQp( inputs, parameters );
}