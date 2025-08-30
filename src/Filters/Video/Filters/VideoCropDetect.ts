import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.35 cropdetect
  * Auto-detect the crop size.
  * 
  * It calculates the necessary cropping parameters and prints the recommended parameters via the logging system. The detected dimensions correspond to the non-black area of the input video.
  * 
  * It accepts the following parameters:
  */
export class VideoCropDetect extends Filter<VideoCropDetectParameters> {
    outputs : FilterStreamRef<VideoCropDetectParameters, VideoCropDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCropDetectParameters = {} as any ) {
        super( inputs, 'cropdetect', parameters );
    }
}

export interface VideoCropDetectParameters {
    /** Set higher black value threshold, which can be optionally specified from nothing (0) to everything (255 for 8-bit based formats). An intensity value greater to the set value is considered non-black. It defaults to 24. You can also specify a value between 0.0 and 1.0 which will be scaled depending on the bitdepth of the pixel format. */
    limit ?: string | number;
    /** The value which the width/height should be divisible by. It defaults to 16. The offset is automatically adjusted to center the video. Use 2 to get only even dimensions (needed for 4:2:2 video). 16 is best when encoding to most video codecs. */
    round ?: string | number;
    /**
      * Set the counter that determines after how many frames cropdetect will reset the previously detected largest video area and start over to detect the current optimal crop area. Default value is 0.
      * This can be useful when channel logos distort the video area. 0 indicates ’never reset’, and returns the largest area encountered during playback.
      * @aliases reset
      */
    reset_count ?: string | number;
    /**
      * Set the counter that determines after how many frames cropdetect will reset the previously detected largest video area and start over to detect the current optimal crop area. Default value is 0.
      * This can be useful when channel logos distort the video area. 0 indicates ’never reset’, and returns the largest area encountered during playback.
      * @aliasof reset_count
      */
    reset ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.35 cropdetect
  * Auto-detect the crop size.
  * 
  * It calculates the necessary cropping parameters and prints the recommended parameters via the logging system. The detected dimensions correspond to the non-black area of the input video.
  * 
  * It accepts the following parameters:
  */
export function videoCropDetect ( inputs : Stream | Stream[] = [], parameters : VideoCropDetectParameters = {} as any ) {
    return new VideoCropDetect( inputs, parameters );
}