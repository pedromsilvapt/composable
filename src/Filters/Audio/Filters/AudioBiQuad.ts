import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.50 biquad
  * Apply a biquad IIR filter with the given coefficients. Where b0, b1, b2 and a0, a1, a2 are the numerator and denominator coefficients respectively. and channels, c specify which channels to filter, by default all available are filtered.
  */
export class AudioBiQuad extends Filter<AudioBiQuadParameters> {
    outputs : FilterStreamRef<AudioBiQuadParameters, AudioBiQuad>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioBiQuadParameters = {} as any ) {
        super( inputs, 'biquad', parameters );
    }
}

export interface AudioBiQuadParameters {


    [key : string] : string | number;
}

/**
  * 8.50 biquad
  * Apply a biquad IIR filter with the given coefficients. Where b0, b1, b2 and a0, a1, a2 are the numerator and denominator coefficients respectively. and channels, c specify which channels to filter, by default all available are filtered.
  */
export function audioBiQuad ( inputs : Stream | Stream[] = [], parameters : AudioBiQuadParameters = {} as any ) {
    return new AudioBiQuad( inputs, parameters );
}