import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.223 vmafmotion
  * Obtain the average VMAF motion score of a video. It is one of the component metrics of VMAF.
  * 
  * The obtained average motion score is printed through the logging system.
  * 
  * The filter accepts the following options:
  */
export class VideoVmafMotion extends Filter<VideoVmafMotionParameters> {
    outputs : FilterStreamRef<VideoVmafMotionParameters, VideoVmafMotion>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoVmafMotionParameters = {} as any ) {
        super( inputs, 'vmafmotion', parameters );
    }
}

export interface VideoVmafMotionParameters {
    /** If specified, the filter will use the named file to save the motion score of each frame with respect to the previous frame. When filename equals "-" the data is sent to standard output. */
    stats_file ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.223 vmafmotion
  * Obtain the average VMAF motion score of a video. It is one of the component metrics of VMAF.
  * 
  * The obtained average motion score is printed through the logging system.
  * 
  * The filter accepts the following options:
  */
export function videoVmafMotion ( inputs : Stream | Stream[] = [], parameters : VideoVmafMotionParameters = {} as any ) {
    return new VideoVmafMotion( inputs, parameters );
}