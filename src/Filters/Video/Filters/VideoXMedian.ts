import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.230 xmedian
  * Pick median pixels from several input videos.
  * 
  * The filter accepts the following options:
  */
export class VideoXMedian extends Filter<VideoXMedianParameters> {
    outputs : FilterStreamRef<VideoXMedianParameters, VideoXMedian>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoXMedianParameters = {} as any ) {
        super( inputs, 'xmedian', parameters );
    }
}

export interface VideoXMedianParameters {
    /** Set number of inputs. Default is 3. Allowed range is from 3 to 255. If number of inputs is even number, than result will be mean value between two median values. */
    inputs ?: string | number;
    /** Set which planes to filter. Default value is 15, by which all planes are processed. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.230 xmedian
  * Pick median pixels from several input videos.
  * 
  * The filter accepts the following options:
  */
export function videoXMedian ( inputs : Stream | Stream[] = [], parameters : VideoXMedianParameters = {} as any ) {
    return new VideoXMedian( inputs, parameters );
}