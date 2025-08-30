import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.73 fifo
  * Buffer input images and send them when they are requested.
  * 
  * It is mainly useful when auto-inserted by the libavfilter framework.
  * 
  * It does not take parameters.
  */
export class VideoFifo extends Filter<VideoFifoParameters> {
    outputs : FilterStreamRef<VideoFifoParameters, VideoFifo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFifoParameters = {} as any ) {
        super( inputs, 'fifo', parameters );
    }
}

export interface VideoFifoParameters {


    [key : string] : string | number;
}

/**
  * 11.73 fifo
  * Buffer input images and send them when they are requested.
  * 
  * It is mainly useful when auto-inserted by the libavfilter framework.
  * 
  * It does not take parameters.
  */
export function videoFifo ( inputs : Stream | Stream[] = [], parameters : VideoFifoParameters = {} as any ) {
    return new VideoFifo( inputs, parameters );
}