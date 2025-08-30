import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.45 atrim
  * Trim the input so that the output contains one continuous subpart of the input.
  * 
  * It accepts the following parameters:
  */
export class AudioTrim extends Filter<AudioTrimParameters> {
    outputs : FilterStreamRef<AudioTrimParameters, AudioTrim>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioTrimParameters = {} as any ) {
        super( inputs, 'atrim', parameters );
    }
}

export interface AudioTrimParameters {
    /** Timestamp (in seconds) of the start of the section to keep. I.e. the audio sample with the timestamp start will be the first sample in the output. */
    start ?: string | number;
    /** Specify time of the first audio sample that will be dropped, i.e. the audio sample immediately preceding the one with the timestamp end will be the last sample in the output. */
    end ?: string | number;
    /** Same as start, except this option sets the start timestamp in samples instead of seconds. */
    start_pts ?: string | number;
    /** Same as end, except this option sets the end timestamp in samples instead of seconds. */
    end_pts ?: string | number;
    /** The maximum duration of the output in seconds. */
    duration ?: string | number;
    /** The number of the first sample that should be output. */
    start_sample ?: string | number;
    /** The number of the first sample that should be dropped. */
    end_sample ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.45 atrim
  * Trim the input so that the output contains one continuous subpart of the input.
  * 
  * It accepts the following parameters:
  */
export function audioTrim ( inputs : Stream | Stream[] = [], parameters : AudioTrimParameters = {} as any ) {
    return new AudioTrim( inputs, parameters );
}