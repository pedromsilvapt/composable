import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.23 colorchannelmixer
  * Adjust video input frames by re-mixing color channels.
  * 
  * This filter modifies a color channel by adding the values associated to the other channels of the same pixels. For example if the value to modify is red, the output value will be:
  * 
  * 
  * red=red*rr + blue*rb + green*rg + alpha*ra
  * 
  * The filter accepts the following options:
  */
export class VideoColorChannelMixer extends Filter<VideoColorChannelMixerParameters> {
    outputs : FilterStreamRef<VideoColorChannelMixerParameters, VideoColorChannelMixer>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorChannelMixerParameters = {} as any ) {
        super( inputs, 'colorchannelmixer', parameters );
    }
}

export interface VideoColorChannelMixerParameters {
    /** Adjust contribution of input red, green, blue and alpha channels for output red channel. Default is 1 for rr, and 0 for rg, rb and ra. */
    rr ?: string | number;
    /** Adjust contribution of input red, green, blue and alpha channels for output green channel. Default is 1 for gg, and 0 for gr, gb and ga. */
    rg ?: string | number;
    /** Adjust contribution of input red, green, blue and alpha channels for output blue channel. Default is 1 for bb, and 0 for br, bg and ba. */
    rb ?: string | number;
    /**
      * Adjust contribution of input red, green, blue and alpha channels for output alpha channel. Default is 1 for aa, and 0 for ar, ag and ab.
      * Allowed ranges for options are [-2.0, 2.0].
      */
    ra ?: string | number;
    gr ?: string | number;
    gg ?: string | number;
    gb ?: string | number;
    ga ?: string | number;
    br ?: string | number;
    bg ?: string | number;
    bb ?: string | number;
    ba ?: string | number;
    ar ?: string | number;
    ag ?: string | number;
    ab ?: string | number;
    aa ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.23 colorchannelmixer
  * Adjust video input frames by re-mixing color channels.
  * 
  * This filter modifies a color channel by adding the values associated to the other channels of the same pixels. For example if the value to modify is red, the output value will be:
  * 
  * 
  * red=red*rr + blue*rb + green*rg + alpha*ra
  * 
  * The filter accepts the following options:
  */
export function videoColorChannelMixer ( inputs : Stream | Stream[] = [], parameters : VideoColorChannelMixerParameters = {} as any ) {
    return new VideoColorChannelMixer( inputs, parameters );
}