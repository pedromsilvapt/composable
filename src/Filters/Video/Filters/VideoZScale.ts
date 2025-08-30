import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.236 zscale
  * Scale (resize) the input video, using the z.lib library:
  * https://github.com/sekrit-twc/zimg. To enable compilation of this filter, you need to configure FFmpeg with --enable-libzimg.
  * 
  * The zscale filter forces the output display aspect ratio to be the same as the input, by changing the output sample aspect ratio.
  * 
  * If the input image format is different from the format requested by the next filter, the zscale filter will convert the input to the requested format.
  */
export class VideoZScale extends Filter<VideoZScaleParameters> {
    outputs : FilterStreamRef<VideoZScaleParameters, VideoZScale>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoZScaleParameters = {} as any ) {
        super( inputs, 'zscale', parameters );
    }
}

export interface VideoZScaleParameters {


    [key : string] : string | number;
}

/**
  * 11.236 zscale
  * Scale (resize) the input video, using the z.lib library:
  * https://github.com/sekrit-twc/zimg. To enable compilation of this filter, you need to configure FFmpeg with --enable-libzimg.
  * 
  * The zscale filter forces the output display aspect ratio to be the same as the input, by changing the output sample aspect ratio.
  * 
  * If the input image format is different from the format requested by the next filter, the zscale filter will convert the input to the requested format.
  */
export function videoZScale ( inputs : Stream | Stream[] = [], parameters : VideoZScaleParameters = {} as any ) {
    return new VideoZScale( inputs, parameters );
}