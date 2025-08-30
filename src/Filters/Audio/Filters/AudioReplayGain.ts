import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.79 replaygain
  * ReplayGain scanner filter. This filter takes an audio stream as an input and outputs it unchanged. At end of filtering it displays track_gain and track_peak.
  */
export class AudioReplayGain extends Filter<AudioReplayGainParameters> {
    outputs : FilterStreamRef<AudioReplayGainParameters, AudioReplayGain>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioReplayGainParameters = {} as any ) {
        super( inputs, 'replaygain', parameters );
    }
}

export interface AudioReplayGainParameters {


    [key : string] : string | number;
}

/**
  * 8.79 replaygain
  * ReplayGain scanner filter. This filter takes an audio stream as an input and outputs it unchanged. At end of filtering it displays track_gain and track_peak.
  */
export function audioReplayGain ( inputs : Stream | Stream[] = [], parameters : AudioReplayGainParameters = {} as any ) {
    return new AudioReplayGain( inputs, parameters );
}