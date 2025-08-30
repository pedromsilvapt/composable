import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.92 hflip
  * Flip the input video horizontally.
  * 
  * For example, to horizontally flip the input video with ffmpeg:
  * 
  * 
  * ffmpeg -i in.avi -vf "hflip" out.avi
  */
export class VideoHFlip extends Filter<VideoHFlipParameters> {
    outputs : FilterStreamRef<VideoHFlipParameters, VideoHFlip>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHFlipParameters = {} as any ) {
        super( inputs, 'hflip', parameters );
    }
}

export interface VideoHFlipParameters {


    [key : string] : string | number;
}

/**
  * 11.92 hflip
  * Flip the input video horizontally.
  * 
  * For example, to horizontally flip the input video with ffmpeg:
  * 
  * 
  * ffmpeg -i in.avi -vf "hflip" out.avi
  */
export function videoHFlip ( inputs : Stream | Stream[] = [], parameters : VideoHFlipParameters = {} as any ) {
    return new VideoHFlip( inputs, parameters );
}