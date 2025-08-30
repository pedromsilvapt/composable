import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.219 vflip
  * Flip the input video vertically.
  * 
  * For example, to vertically flip a video with ffmpeg:
  * 
  * 
  * ffmpeg -i in.avi -vf "vflip" out.avi
  */
export class VideoFlip extends Filter<VideoFlipParameters> {
    outputs : FilterStreamRef<VideoFlipParameters, VideoFlip>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFlipParameters = {} as any ) {
        super( inputs, 'vflip', parameters );
    }
}

export interface VideoFlipParameters {


    [key : string] : string | number;
}

/**
  * 11.219 vflip
  * Flip the input video vertically.
  * 
  * For example, to vertically flip a video with ffmpeg:
  * 
  * 
  * ffmpeg -i in.avi -vf "vflip" out.avi
  */
export function videoFlip ( inputs : Stream | Stream[] = [], parameters : VideoFlipParameters = {} as any ) {
    return new VideoFlip( inputs, parameters );
}