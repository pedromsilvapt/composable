import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.204 tinterlace
  * Perform various types of temporal field interlacing.
  * 
  * Frames are counted starting from 1, so the first input frame is considered odd.
  * 
  * The filter accepts the following options:
  */
export class VideoTinterlace extends Filter<VideoTinterlaceParameters> {
    outputs : FilterStreamRef<VideoTinterlaceParameters, VideoTinterlace>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTinterlaceParameters = {} as any ) {
        super( inputs, 'tinterlace', parameters );
    }
}

export interface VideoTinterlaceParameters {
    /**
      * Specify the mode of the interlacing. This option can also be specified as a value alone. See below for a list of values for this option.
      * Available values are:
      * ‘merge, 0’
      * Move odd frames into the upper field, even into the lower field, generating a double height frame at half frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * Output:
      * 11111                           33333
      * 22222                           44444
      * 11111                           33333
      * 22222                           44444
      * 11111                           33333
      * 22222                           44444
      * 11111                           33333
      * 22222                           44444
      * ‘drop_even, 1’
      * Only output odd frames, even frames are dropped, generating a frame with unchanged height at half frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * Output:
      * 11111                           33333
      * 11111                           33333
      * 11111                           33333
      * 11111                           33333
      * ‘drop_odd, 2’
      * Only output even frames, odd frames are dropped, generating a frame with unchanged height at half frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * Output:
      * 22222                           44444
      * 22222                           44444
      * 22222                           44444
      * 22222                           44444
      * ‘pad, 3’
      * Expand each frame to full height, but pad alternate lines with black, generating a frame with double height at the same input frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * Output:
      * 11111           .....           33333           .....
      * .....           22222           .....           44444
      * 11111           .....           33333           .....
      * .....           22222           .....           44444
      * 11111           .....           33333           .....
      * .....           22222           .....           44444
      * 11111           .....           33333           .....
      * .....           22222           .....           44444
      * ‘interleave_top, 4’
      * Interleave the upper field from odd frames with the lower field from even frames, generating a frame with unchanged height at half frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111<-         22222           33333<-         44444
      * 11111           22222<-         33333           44444<-
      * 11111<-         22222           33333<-         44444
      * 11111           22222<-         33333           44444<-
      * Output:
      * 11111                           33333
      * 22222                           44444
      * 11111                           33333
      * 22222                           44444
      * ‘interleave_bottom, 5’
      * Interleave the lower field from odd frames with the upper field from even frames, generating a frame with unchanged height at half frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222<-         33333           44444<-
      * 11111<-         22222           33333<-         44444
      * 11111           22222<-         33333           44444<-
      * 11111<-         22222           33333<-         44444
      * Output:
      * 22222                           44444
      * 11111                           33333
      * 22222                           44444
      * 11111                           33333
      * ‘interlacex2, 6’
      * Double frame rate with unchanged height. Frames are inserted each containing the second temporal field from the previous input frame and the first temporal field from the next input frame. This mode relies on the top_field_first flag. Useful for interlaced video displays with no field synchronisation.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * Output:
      * 11111   22222   22222   33333   33333   44444   44444
      * 11111   11111   22222   22222   33333   33333   44444
      * 11111   22222   22222   33333   33333   44444   44444
      * 11111   11111   22222   22222   33333   33333   44444
      * ‘mergex2, 7’
      * Move odd frames into the upper field, even into the lower field, generating a double height frame at same frame rate.
      * ------> time
      * Input:
      * Frame 1         Frame 2         Frame 3         Frame 4
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * 11111           22222           33333           44444
      * Output:
      * 11111           33333           33333           55555
      * 22222           22222           44444           44444
      * 11111           33333           33333           55555
      * 22222           22222           44444           44444
      * 11111           33333           33333           55555
      * 22222           22222           44444           44444
      * 11111           33333           33333           55555
      * 22222           22222           44444           44444
      * Numeric values are deprecated but are accepted for backward compatibility reasons.
      * Default mode is merge.
      */
    mode ?: string | number;
    /**
      * Specify flags influencing the filter process.
      * Available value for flags is:
      * low_pass_filter, vlpf
      * Enable linear vertical low-pass filtering in the filter. Vertical low-pass filtering is required when creating an interlaced destination from a progressive source which contains high-frequency vertical detail. Filtering will reduce interlace ’twitter’ and Moire patterning.
      * complex_filter, cvlpf
      * Enable complex vertical low-pass filtering. This will slightly less reduce interlace ’twitter’ and Moire patterning but better retain detail and subjective sharpness impression.
      * bypass_il
      * Bypass already interlaced frames, only adjust the frame rate.
      * Vertical low-pass filtering and bypassing already interlaced frames can only be enabled for mode interleave_top and interleave_bottom.
      */
    flags ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.204 tinterlace
  * Perform various types of temporal field interlacing.
  * 
  * Frames are counted starting from 1, so the first input frame is considered odd.
  * 
  * The filter accepts the following options:
  */
export function videoTinterlace ( inputs : Stream | Stream[] = [], parameters : VideoTinterlaceParameters = {} as any ) {
    return new VideoTinterlace( inputs, parameters );
}