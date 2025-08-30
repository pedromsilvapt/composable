import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.164 remap
  * Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream.
  * 
  * Destination pixel at position (X, Y) will be picked from source (x, y) position where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero value for pixel will be used for destination pixel.
  * 
  * Xmap and Ymap input video streams must be of same dimensions. Output video stream will have Xmap/Ymap video stream dimensions. Xmap and Ymap input video streams are 16bit depth, single channel.
  */
export class VideoRemap extends Filter<VideoRemapParameters> {
    outputs : FilterStreamRef<VideoRemapParameters, VideoRemap>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRemapParameters = {} as any ) {
        super( inputs, 'remap', parameters );
    }
}

export interface VideoRemapParameters {
    /** Specify pixel format of output from this filter. Can be color or gray. Default is color. */
    format ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.164 remap
  * Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream.
  * 
  * Destination pixel at position (X, Y) will be picked from source (x, y) position where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero value for pixel will be used for destination pixel.
  * 
  * Xmap and Ymap input video streams must be of same dimensions. Output video stream will have Xmap/Ymap video stream dimensions. Xmap and Ymap input video streams are 16bit depth, single channel.
  */
export function videoRemap ( inputs : Stream | Stream[] = [], parameters : VideoRemapParameters = {} as any ) {
    return new VideoRemap( inputs, parameters );
}