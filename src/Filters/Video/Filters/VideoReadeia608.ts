import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.162 readeia608
  * Read closed captioning (EIA-608) information from the top lines of a video frame.
  * 
  * This filter adds frame metadata for lavfi.readeia608.X.cc and
  * lavfi.readeia608.X.line, where X is the number of the identified line with EIA-608 data (starting from 0). A description of each metadata value follows:
  */
export class VideoReadeia608 extends Filter<VideoReadeia608Parameters> {
    outputs : FilterStreamRef<VideoReadeia608Parameters, VideoReadeia608>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoReadeia608Parameters = {} as any ) {
        super( inputs, 'readeia608', parameters );
    }
}

export interface VideoReadeia608Parameters {
    /** The two bytes stored as EIA-608 data (printed in hexadecimal). */
    'lavfi.readeia608.X.cc' ?: string | number;
    /** The number of the line on which the EIA-608 data was identified and read. */
    'lavfi.readeia608.X.line' ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.162 readeia608
  * Read closed captioning (EIA-608) information from the top lines of a video frame.
  * 
  * This filter adds frame metadata for lavfi.readeia608.X.cc and
  * lavfi.readeia608.X.line, where X is the number of the identified line with EIA-608 data (starting from 0). A description of each metadata value follows:
  */
export function videoReadeia608 ( inputs : Stream | Stream[] = [], parameters : VideoReadeia608Parameters = {} as any ) {
    return new VideoReadeia608( inputs, parameters );
}