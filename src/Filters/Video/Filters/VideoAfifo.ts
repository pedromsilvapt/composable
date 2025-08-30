import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.73 afifo
  * Buffer input images and send them when they are requested.
  * 
  * It is mainly useful when auto-inserted by the libavfilter framework.
  * 
  * It does not take parameters.
  */
export class VideoAfifo extends Filter<VideoAfifoParameters> {
    outputs : FilterStreamRef<VideoAfifoParameters, VideoAfifo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAfifoParameters = {} as any ) {
        super( inputs, 'afifo', parameters );
    }
}

export interface VideoAfifoParameters {


    [key : string] : string | number;
}

/**
  * 11.73 afifo
  * Buffer input images and send them when they are requested.
  * 
  * It is mainly useful when auto-inserted by the libavfilter framework.
  * 
  * It does not take parameters.
  */
export function videoAfifo ( inputs : Stream | Stream[] = [], parameters : VideoAfifoParameters = {} as any ) {
    return new VideoAfifo( inputs, parameters );
}