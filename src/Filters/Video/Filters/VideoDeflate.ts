import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.45 deflate
  * Apply deflate effect to the video.
  * 
  * This filter replaces the pixel by the local(3x3) average by taking into account only values lower than the pixel.
  * 
  * It accepts the following options:
  */
export class VideoDeflate extends Filter<VideoDeflateParameters> {
    outputs : FilterStreamRef<VideoDeflateParameters, VideoDeflate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDeflateParameters = {} as any ) {
        super( inputs, 'deflate', parameters );
    }
}

export interface VideoDeflateParameters {
    /** Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged. */
    threshold0 ?: string | number;
    threshold1 ?: string | number;
    threshold2 ?: string | number;
    threshold3 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.45 deflate
  * Apply deflate effect to the video.
  * 
  * This filter replaces the pixel by the local(3x3) average by taking into account only values lower than the pixel.
  * 
  * It accepts the following options:
  */
export function videoDeflate ( inputs : Stream | Stream[] = [], parameters : VideoDeflateParameters = {} as any ) {
    return new VideoDeflate( inputs, parameters );
}