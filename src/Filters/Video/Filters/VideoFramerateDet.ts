import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.220 vfrdet
  * Detect variable frame rate video.
  * 
  * This filter tries to detect if the input is variable or constant frame rate.
  * 
  * At end it will output number of frames detected as having variable delta pts, and ones with constant delta pts. If there was frames with variable delta, than it will also show min, max and average delta encountered.
  */
export class VideoFramerateDet extends Filter<VideoFramerateDetParameters> {
    outputs : FilterStreamRef<VideoFramerateDetParameters, VideoFramerateDet>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoFramerateDetParameters = {} as any ) {
        super( inputs, 'vfrdet', parameters );
    }
}

export interface VideoFramerateDetParameters {


    [key : string] : string | number;
}

/**
  * 11.220 vfrdet
  * Detect variable frame rate video.
  * 
  * This filter tries to detect if the input is variable or constant frame rate.
  * 
  * At end it will output number of frames detected as having variable delta pts, and ones with constant delta pts. If there was frames with variable delta, than it will also show min, max and average delta encountered.
  */
export function videoFramerateDet ( inputs : Stream | Stream[] = [], parameters : VideoFramerateDetParameters = {} as any ) {
    return new VideoFramerateDet( inputs, parameters );
}