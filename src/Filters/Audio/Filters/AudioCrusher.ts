import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.6 acrusher
  * Reduce audio bit resolution.
  * 
  * This filter is bit crusher with enhanced functionality. A bit crusher is used to audibly reduce number of bits an audio signal is sampled with. This doesn’t change the bit depth at all, it just produces the effect. Material reduced in bit depth sounds more harsh and "digital". This filter is able to even round to continuous values instead of discrete bit depths. Additionally it has a D/C offset which results in different crushing of the lower and the upper half of the signal. An Anti-Aliasing setting is able to produce "softer" crushing sounds.
  * 
  * Another feature of this filter is the logarithmic mode. This setting switches from linear distances between bits to logarithmic ones. The result is a much more "natural" sounding crusher which doesn’t gate low signals for example. The human ear has a logarithmic perception, so this kind of crushing is much more pleasant. Logarithmic crushing is also able to get anti-aliased.
  * 
  * The filter accepts the following options:
  */
export class AudioCrusher extends Filter<AudioCrusherParameters> {
    outputs : FilterStreamRef<AudioCrusherParameters, AudioCrusher>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCrusherParameters = {} as any ) {
        super( inputs, 'acrusher', parameters );
    }
}

export interface AudioCrusherParameters {
    /** Set level in. */
    level_in ?: string | number;
    /** Set level out. */
    level_out ?: string | number;
    /** Set bit reduction. */
    bits ?: string | number;
    /** Set mixing amount. */
    mix ?: string | number;
    /** Can be linear: lin or logarithmic: log. */
    mode ?: string | number;
    /** Set DC. */
    dc ?: string | number;
    /** Set anti-aliasing. */
    aa ?: string | number;
    /** Set sample reduction. */
    samples ?: string | number;
    /** Enable LFO. By default disabled. */
    lfo ?: string | number;
    /** Set LFO range. */
    lforange ?: string | number;
    /** Set LFO rate. */
    lforate ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.6 acrusher
  * Reduce audio bit resolution.
  * 
  * This filter is bit crusher with enhanced functionality. A bit crusher is used to audibly reduce number of bits an audio signal is sampled with. This doesn’t change the bit depth at all, it just produces the effect. Material reduced in bit depth sounds more harsh and "digital". This filter is able to even round to continuous values instead of discrete bit depths. Additionally it has a D/C offset which results in different crushing of the lower and the upper half of the signal. An Anti-Aliasing setting is able to produce "softer" crushing sounds.
  * 
  * Another feature of this filter is the logarithmic mode. This setting switches from linear distances between bits to logarithmic ones. The result is a much more "natural" sounding crusher which doesn’t gate low signals for example. The human ear has a logarithmic perception, so this kind of crushing is much more pleasant. Logarithmic crushing is also able to get anti-aliased.
  * 
  * The filter accepts the following options:
  */
export function audioCrusher ( inputs : Stream | Stream[] = [], parameters : AudioCrusherParameters = {} as any ) {
    return new AudioCrusher( inputs, parameters );
}