import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.139 null
  * Pass the video source unchanged to the output.
  */
export class VideoNull extends Filter<VideoNullParameters> {
    outputs : FilterStreamRef<VideoNullParameters, VideoNull>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNullParameters = {} as any ) {
        super( inputs, 'null', parameters );
    }
}

export interface VideoNullParameters {


    [key : string] : string | number;
}

/**
  * 11.139 null
  * Pass the video source unchanged to the output.
  */
export function videoNull ( inputs : Stream | Stream[] = [], parameters : VideoNullParameters = {} as any ) {
    return new VideoNull( inputs, parameters );
}