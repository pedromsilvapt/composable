import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.106 inflate
  * Apply inflate effect to the video.
  * 
  * This filter replaces the pixel by the local(3x3) average by taking into account only values higher than the pixel.
  * 
  * It accepts the following options:
  */
export class VideoInflate extends Filter<VideoInflateParameters> {
    outputs : FilterStreamRef<VideoInflateParameters, VideoInflate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoInflateParameters = {} as any ) {
        super( inputs, 'inflate', parameters );
    }
}

export interface VideoInflateParameters {
    /** Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged. */
    threshold0 ?: string | number;
    threshold1 ?: string | number;
    threshold2 ?: string | number;
    threshold3 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.106 inflate
  * Apply inflate effect to the video.
  * 
  * This filter replaces the pixel by the local(3x3) average by taking into account only values higher than the pixel.
  * 
  * It accepts the following options:
  */
export function videoInflate ( inputs : Stream | Stream[] = [], parameters : VideoInflateParameters = {} as any ) {
    return new VideoInflate( inputs, parameters );
}