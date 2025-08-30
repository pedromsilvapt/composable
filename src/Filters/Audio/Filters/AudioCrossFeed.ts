import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.57 crossfeed
  * Apply headphone crossfeed filter.
  * 
  * Crossfeed is the process of blending the left and right channels of stereo audio recording. It is mainly used to reduce extreme stereo separation of low frequencies.
  * 
  * The intent is to produce more speaker like sound to the listener.
  * 
  * The filter accepts the following options:
  */
export class AudioCrossFeed extends Filter<AudioCrossFeedParameters> {
    outputs : FilterStreamRef<AudioCrossFeedParameters, AudioCrossFeed>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCrossFeedParameters = {} as any ) {
        super( inputs, 'crossfeed', parameters );
    }
}

export interface AudioCrossFeedParameters {
    /** Set strength of crossfeed. Default is 0.2. Allowed range is from 0 to 1. This sets gain of low shelf filter for side part of stereo image. Default is -6dB. Max allowed is -30db when strength is set to 1. */
    strength ?: string | number;
    /** Set soundstage wideness. Default is 0.5. Allowed range is from 0 to 1. This sets cut off frequency of low shelf filter. Default is cut off near 1550 Hz. With range set to 1 cut off frequency is set to 2100 Hz. */
    range ?: string | number;
    /** Set input gain. Default is 0.9. */
    level_in ?: string | number;
    /** Set output gain. Default is 1. */
    level_out ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.57 crossfeed
  * Apply headphone crossfeed filter.
  * 
  * Crossfeed is the process of blending the left and right channels of stereo audio recording. It is mainly used to reduce extreme stereo separation of low frequencies.
  * 
  * The intent is to produce more speaker like sound to the listener.
  * 
  * The filter accepts the following options:
  */
export function audioCrossFeed ( inputs : Stream | Stream[] = [], parameters : AudioCrossFeedParameters = {} as any ) {
    return new AudioCrossFeed( inputs, parameters );
}