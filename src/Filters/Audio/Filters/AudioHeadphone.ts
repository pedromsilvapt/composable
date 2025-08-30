import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.70 headphone
  * Apply head-related transfer functions (HRTFs) to create virtual loudspeakers around the user for binaural listening via headphones. The HRIRs are provided via additional streams, for each channel one stereo input stream is needed.
  * 
  * The filter accepts the following options:
  */
export class AudioHeadphone extends Filter<AudioHeadphoneParameters> {
    outputs : FilterStreamRef<AudioHeadphoneParameters, AudioHeadphone>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioHeadphoneParameters = {} as any ) {
        super( inputs, 'headphone', parameters );
    }
}

export interface AudioHeadphoneParameters {
    /** Set mapping of input streams for convolution. The argument is a ’|’-separated list of channel names in order as they are given as additional stream inputs for filter. This also specify number of input streams. Number of input streams must be not less than number of channels in first stream plus one. */
    map ?: string | number;
    /** Set gain applied to audio. Value is in dB. Default is 0. */
    gain ?: string | number;
    /**
      * Set processing type. Can be time or freq. time is processing audio in time domain which is slow.
      * freq is processing audio in frequency domain which is fast. Default is freq.
      */
    type ?: string | number;
    /** Set custom gain for LFE channels. Value is in dB. Default is 0. */
    lfe ?: string | number;
    /** Set size of frame in number of samples which will be processed at once. Default value is 1024. Allowed range is from 1024 to 96000. */
    size ?: string | number;
    /** Set format of hrir stream. Default value is stereo. Alternative value is multich. If value is set to stereo, number of additional streams should be greater or equal to number of input channels in first input stream. Also each additional stream should have stereo number of channels. If value is set to multich, number of additional streams should be exactly one. Also number of input channels of additional stream should be equal or greater than twice number of channels of first input stream. */
    hrir ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.70 headphone
  * Apply head-related transfer functions (HRTFs) to create virtual loudspeakers around the user for binaural listening via headphones. The HRIRs are provided via additional streams, for each channel one stereo input stream is needed.
  * 
  * The filter accepts the following options:
  */
export function audioHeadphone ( inputs : Stream | Stream[] = [], parameters : AudioHeadphoneParameters = {} as any ) {
    return new AudioHeadphone( inputs, parameters );
}