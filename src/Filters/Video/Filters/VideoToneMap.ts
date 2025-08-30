import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.206 tonemap
  * Tone map colors from different dynamic ranges.
  * 
  * This filter expects data in single precision floating point, as it needs to operate on (and can output) out-of-range values. Another filter, such as
  * zscale, is needed to convert the resulting frame to a usable format.
  * 
  * The tonemapping algorithms implemented only work on linear light, so input data should be linearized beforehand (and possibly correctly tagged).
  * 
  * 
  * ffmpeg -i INPUT -vf zscale=transfer=linear,tonemap=clip,zscale=transfer=bt709,format=yuv420p OUTPUT
  */
export class VideoToneMap extends Filter<VideoToneMapParameters> {
    outputs : FilterStreamRef<VideoToneMapParameters, VideoToneMap>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoToneMapParameters = {} as any ) {
        super( inputs, 'tonemap', parameters );
    }
}

export interface VideoToneMapParameters {


    [key : string] : string | number;
}

/**
  * 11.206 tonemap
  * Tone map colors from different dynamic ranges.
  * 
  * This filter expects data in single precision floating point, as it needs to operate on (and can output) out-of-range values. Another filter, such as
  * zscale, is needed to convert the resulting frame to a usable format.
  * 
  * The tonemapping algorithms implemented only work on linear light, so input data should be linearized beforehand (and possibly correctly tagged).
  * 
  * 
  * ffmpeg -i INPUT -vf zscale=transfer=linear,tonemap=clip,zscale=transfer=bt709,format=yuv420p OUTPUT
  */
export function videoToneMap ( inputs : Stream | Stream[] = [], parameters : VideoToneMapParameters = {} as any ) {
    return new VideoToneMap( inputs, parameters );
}