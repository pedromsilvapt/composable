import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.198 swapuv
  * Swap U & V plane.
  */
export class VideoSwapUV extends Filter<VideoSwapUVParameters> {
    outputs : FilterStreamRef<VideoSwapUVParameters, VideoSwapUV>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSwapUVParameters = {} as any ) {
        super( inputs, 'swapuv', parameters );
    }
}

export interface VideoSwapUVParameters {


    [key : string] : string | number;
}

/**
  * 11.198 swapuv
  * Swap U & V plane.
  */
export function videoSwapUV ( inputs : Stream | Stream[] = [], parameters : VideoSwapUVParameters = {} as any ) {
    return new VideoSwapUV( inputs, parameters );
}