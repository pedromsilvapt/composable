import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.151 pixdesctest
  * Pixel format descriptor test filter, mainly useful for internal testing. The output video should be equal to the input video.
  * 
  * For example:
  * 
  * 
  * format=monow, pixdesctest
  * 
  * can be used to test the monowhite pixel format descriptor definition.
  */
export class VideoPixDescTest extends Filter<VideoPixDescTestParameters> {
    outputs : FilterStreamRef<VideoPixDescTestParameters, VideoPixDescTest>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPixDescTestParameters = {} as any ) {
        super( inputs, 'pixdesctest', parameters );
    }
}

export interface VideoPixDescTestParameters {


    [key : string] : string | number;
}

/**
  * 11.151 pixdesctest
  * Pixel format descriptor test filter, mainly useful for internal testing. The output video should be equal to the input video.
  * 
  * For example:
  * 
  * 
  * format=monow, pixdesctest
  * 
  * can be used to test the monowhite pixel format descriptor definition.
  */
export function videoPixDescTest ( inputs : Stream | Stream[] = [], parameters : VideoPixDescTestParameters = {} as any ) {
    return new VideoPixDescTest( inputs, parameters );
}