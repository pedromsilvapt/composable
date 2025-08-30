import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.192 ssim
  * Obtain the SSIM (Structural SImilarity Metric) between two input videos.
  * 
  * This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the SSIM.
  * 
  * Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one.
  * 
  * The filter stores the calculated SSIM of each frame.
  * 
  * The description of the accepted parameters follows.
  */
export class VideoSsim extends Filter<VideoSsimParameters> {
    outputs : FilterStreamRef<VideoSsimParameters, VideoSsim>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSsimParameters = {} as any ) {
        super( inputs, 'ssim', parameters );
    }
}

export interface VideoSsimParameters {
    /**
      * If specified the filter will use the named file to save the SSIM of each individual frame. When filename equals "-" the data is sent to standard output.
      * @aliases f
      */
    stats_file ?: string | number;
    /**
      * If specified the filter will use the named file to save the SSIM of each individual frame. When filename equals "-" the data is sent to standard output.
      * @aliasof stats_file
      */
    f ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.192 ssim
  * Obtain the SSIM (Structural SImilarity Metric) between two input videos.
  * 
  * This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the SSIM.
  * 
  * Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one.
  * 
  * The filter stores the calculated SSIM of each frame.
  * 
  * The description of the accepted parameters follows.
  */
export function videoSsim ( inputs : Stream | Stream[] = [], parameters : VideoSsimParameters = {} as any ) {
    return new VideoSsim( inputs, parameters );
}