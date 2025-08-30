import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.103 hysteresis
  * Grow first stream into second stream by connecting components. This makes it possible to build more robust edge masks.
  * 
  * This filter accepts the following options:
  */
export class VideoHysteresis extends Filter<VideoHysteresisParameters> {
    outputs : FilterStreamRef<VideoHysteresisParameters, VideoHysteresis>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHysteresisParameters = {} as any ) {
        super( inputs, 'hysteresis', parameters );
    }
}

export interface VideoHysteresisParameters {
    /** Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed. */
    planes ?: string | number;
    /** Set threshold which is used in filtering. If pixel component value is higher than this value filter algorithm for connecting components is activated. By default value is 0. */
    threshold ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.103 hysteresis
  * Grow first stream into second stream by connecting components. This makes it possible to build more robust edge masks.
  * 
  * This filter accepts the following options:
  */
export function videoHysteresis ( inputs : Stream | Stream[] = [], parameters : VideoHysteresisParameters = {} as any ) {
    return new VideoHysteresis( inputs, parameters );
}