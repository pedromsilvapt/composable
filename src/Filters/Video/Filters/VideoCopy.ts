import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.31 copy
  * Copy the input video source unchanged to the output. This is mainly useful for testing purposes.
  */
export class VideoCopy extends Filter<VideoCopyParameters> {
    outputs : FilterStreamRef<VideoCopyParameters, VideoCopy>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCopyParameters = {} as any ) {
        super( inputs, 'copy', parameters );
    }
}

export interface VideoCopyParameters {


    [key : string] : string | number;
}

/**
  * 11.31 copy
  * Copy the input video source unchanged to the output. This is mainly useful for testing purposes.
  */
export function videoCopy ( inputs : Stream | Stream[] = [], parameters : VideoCopyParameters = {} as any ) {
    return new VideoCopy( inputs, parameters );
}