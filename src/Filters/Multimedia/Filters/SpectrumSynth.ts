import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.28 spectrumsynth
  * Synthesize audio from 2 input video spectrums, first input stream represents magnitude across time and second represents phase across time. The filter will transform from frequency domain as displayed in videos back to time domain as presented in audio output.
  * 
  * This filter is primarily created for reversing processed showspectrum filter outputs, but can synthesize sound from other spectrograms too. But in such case results are going to be poor if the phase data is not available, because in such cases phase data need to be recreated, usually it’s just recreated from random noise. For best results use gray only output (channel color mode in
  * showspectrum filter) and log scale for magnitude video and
  * lin scale for phase video. To produce phase, for 2nd video, use
  * data option. Inputs videos should generally use fullframe slide mode as that saves resources needed for decoding video.
  * 
  * The filter accepts the following options:
  */
export class SpectrumSynth extends Filter<SpectrumSynthParameters> {
    outputs : FilterStreamRef<SpectrumSynthParameters, SpectrumSynth>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : SpectrumSynthParameters = {} as any ) {
        super( inputs, 'spectrumsynth', parameters );
    }
}

export interface SpectrumSynthParameters {
    /** Specify sample rate of output audio, the sample rate of audio from which spectrum was generated may differ. */
    sample_rate ?: string | number;
    /** Set number of channels represented in input video spectrums. */
    channels ?: string | number;
    /** Set scale which was used when generating magnitude input spectrum. Can be lin or log. Default is log. */
    scale ?: string | number;
    /** Set slide which was used when generating inputs spectrums. Can be replace, scroll, fullframe or rscroll. Default is fullframe. */
    slide ?: string | number;
    /** Set window function used for resynthesis. */
    win_func ?: string | number;
    /** Set window overlap. In range [0, 1]. Default is 1, which means optimal overlap for selected window function will be picked. */
    overlap ?: string | number;
    /** Set orientation of input videos. Can be vertical or horizontal. Default is vertical. */
    orientation ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.28 spectrumsynth
  * Synthesize audio from 2 input video spectrums, first input stream represents magnitude across time and second represents phase across time. The filter will transform from frequency domain as displayed in videos back to time domain as presented in audio output.
  * 
  * This filter is primarily created for reversing processed showspectrum filter outputs, but can synthesize sound from other spectrograms too. But in such case results are going to be poor if the phase data is not available, because in such cases phase data need to be recreated, usually it’s just recreated from random noise. For best results use gray only output (channel color mode in
  * showspectrum filter) and log scale for magnitude video and
  * lin scale for phase video. To produce phase, for 2nd video, use
  * data option. Inputs videos should generally use fullframe slide mode as that saves resources needed for decoding video.
  * 
  * The filter accepts the following options:
  */
export function spectrumSynth ( inputs : Stream | Stream[] = [], parameters : SpectrumSynthParameters = {} as any ) {
    return new SpectrumSynth( inputs, parameters );
}