import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.173 scale
  * Scale (resize) the input video, using the libswscale library.
  * 
  * The scale filter forces the output display aspect ratio to be the same of the input, by changing the output sample aspect ratio.
  * 
  * If the input image format is different from the format requested by the next filter, the scale filter will convert the input to the requested format.
  */
export class VideoScale extends Filter<VideoScaleParameters> {
    outputs : FilterStreamRef<VideoScaleParameters, VideoScale>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoScaleParameters = {} as any ) {
        super( inputs, 'scale', parameters );
    }
}

export interface VideoScaleParameters {


    [key : string] : string | number;
}

/**
  * 11.173 scale
  * Scale (resize) the input video, using the libswscale library.
  * 
  * The scale filter forces the output display aspect ratio to be the same of the input, by changing the output sample aspect ratio.
  * 
  * If the input image format is different from the format requested by the next filter, the scale filter will convert the input to the requested format.
  */
export function videoScale ( inputs : Stream | Stream[] = [], parameters : VideoScaleParameters = {} as any ) {
    return new VideoScale( inputs, parameters );
}