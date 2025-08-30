import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.4 amplify
  * Amplify differences between current pixel and pixels of adjacent frames in same pixel location.
  * 
  * This filter accepts the following options:
  */
export class VideoAmplify extends Filter<VideoAmplifyParameters> {
    outputs : FilterStreamRef<VideoAmplifyParameters, VideoAmplify>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAmplifyParameters = {} as any ) {
        super( inputs, 'amplify', parameters );
    }
}

export interface VideoAmplifyParameters {
    /** Set frame radius. Default is 2. Allowed range is from 1 to 63. For example radius of 3 will instruct filter to calculate average of 7 frames. */
    radius ?: string | number;
    /** Set factor to amplify difference. Default is 2. Allowed range is from 0 to 65535. */
    factor ?: string | number;
    /** Set threshold for difference amplification. Any difference greater or equal to this value will not alter source pixel. Default is 10. Allowed range is from 0 to 65535. */
    threshold ?: string | number;
    /** Set tolerance for difference amplification. Any difference lower to this value will not alter source pixel. Default is 0. Allowed range is from 0 to 65535. */
    tolerance ?: string | number;
    /** Set lower limit for changing source pixel. Default is 65535. Allowed range is from 0 to 65535. This option controls maximum possible value that will decrease source pixel value. */
    low ?: string | number;
    /** Set high limit for changing source pixel. Default is 65535. Allowed range is from 0 to 65535. This option controls maximum possible value that will increase source pixel value. */
    high ?: string | number;
    /** Set which planes to filter. Default is all. Allowed range is from 0 to 15. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.4 amplify
  * Amplify differences between current pixel and pixels of adjacent frames in same pixel location.
  * 
  * This filter accepts the following options:
  */
export function videoAmplify ( inputs : Stream | Stream[] = [], parameters : VideoAmplifyParameters = {} as any ) {
    return new VideoAmplify( inputs, parameters );
}