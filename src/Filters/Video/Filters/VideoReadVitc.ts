import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.163 readvitc
  * Read vertical interval timecode (VITC) information from the top lines of a video frame.
  * 
  * The filter adds frame metadata key lavfi.readvitc.tc_str with the timecode value, if a valid timecode has been detected. Further metadata key
  * lavfi.readvitc.found is set to 0/1 depending on whether timecode data has been found or not.
  * 
  * This filter accepts the following options:
  */
export class VideoReadVitc extends Filter<VideoReadVitcParameters> {
    outputs : FilterStreamRef<VideoReadVitcParameters, VideoReadVitc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoReadVitcParameters = {} as any ) {
        super( inputs, 'readvitc', parameters );
    }
}

export interface VideoReadVitcParameters {
    /**
      * Set the maximum number of lines to scan for VITC data. If the value is set to
      * -1 the full video frame is scanned. Default is 45.
      */
    scan_max ?: string | number;
    /** Set the luma threshold for black. Accepts float numbers in the range [0.0,1.0], default value is 0.2. The value must be equal or less than thr_w. */
    thr_b ?: string | number;
    /** Set the luma threshold for white. Accepts float numbers in the range [0.0,1.0], default value is 0.6. The value must be equal or greater than thr_b. */
    thr_w ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.163 readvitc
  * Read vertical interval timecode (VITC) information from the top lines of a video frame.
  * 
  * The filter adds frame metadata key lavfi.readvitc.tc_str with the timecode value, if a valid timecode has been detected. Further metadata key
  * lavfi.readvitc.found is set to 0/1 depending on whether timecode data has been found or not.
  * 
  * This filter accepts the following options:
  */
export function videoReadVitc ( inputs : Stream | Stream[] = [], parameters : VideoReadVitcParameters = {} as any ) {
    return new VideoReadVitc( inputs, parameters );
}