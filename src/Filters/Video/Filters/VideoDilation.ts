import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.53 dilation
  * Apply dilation effect to the video.
  * 
  * This filter replaces the pixel by the local(3x3) maximum.
  * 
  * It accepts the following options:
  */
export class VideoDilation extends Filter<VideoDilationParameters> {
    outputs : FilterStreamRef<VideoDilationParameters, VideoDilation>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDilationParameters = {} as any ) {
        super( inputs, 'dilation', parameters );
    }
}

export interface VideoDilationParameters {
    /** Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged. */
    threshold0 ?: string | number;
    /**
      * Flag which specifies the pixel to refer to. Default is 255 i.e. all eight pixels are used.
      * Flags to local 3x3 coordinates maps like this:
      * 1 2 3 4 5 6 7 8
      */
    threshold1 ?: string | number;
    threshold2 ?: string | number;
    threshold3 ?: string | number;
    coordinates ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.53 dilation
  * Apply dilation effect to the video.
  * 
  * This filter replaces the pixel by the local(3x3) maximum.
  * 
  * It accepts the following options:
  */
export function videoDilation ( inputs : Stream | Stream[] = [], parameters : VideoDilationParameters = {} as any ) {
    return new VideoDilation( inputs, parameters );
}