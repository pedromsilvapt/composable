import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 9.3 anullsrc
  * The null audio source, return unprocessed audio frames. It is mainly useful as a template and to be employed in analysis / debugging tools, or as the source for filters which ignore the input data (for example the sox synth filter).
  * 
  * This source accepts the following options:
  */
export class AudioNullSrc extends Filter<AudioNullSrcParameters> {
    outputs : FilterStreamRef<AudioNullSrcParameters, AudioNullSrc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioNullSrcParameters = {} as any ) {
        super( inputs, 'anullsrc', parameters );
    }
}

export interface AudioNullSrcParameters {
    /**
      * Specifies the channel layout, and can be either an integer or a string representing a channel layout. The default value of channel_layout is "stereo".
      * Check the channel_layout_map definition in
      * libavutil/channel_layout.c for the mapping between strings and channel layout values.
      * @aliases cl
      */
    channel_layout ?: string | number;
    /**
      * Specifies the channel layout, and can be either an integer or a string representing a channel layout. The default value of channel_layout is "stereo".
      * Check the channel_layout_map definition in
      * libavutil/channel_layout.c for the mapping between strings and channel layout values.
      * @aliasof channel_layout
      */
    cl ?: string | number;
    /**
      * Specifies the sample rate, and defaults to 44100.
      * @aliases r
      */
    sample_rate ?: string | number;
    /**
      * Specifies the sample rate, and defaults to 44100.
      * @aliasof sample_rate
      */
    r ?: string | number;
    /**
      * Set the number of samples per requested frames.
      * @aliases n
      */
    nb_samples ?: string | number;
    /**
      * Set the number of samples per requested frames.
      * @aliasof nb_samples
      */
    n ?: string | number;

    [key : string] : string | number;
}

/**
  * 9.3 anullsrc
  * The null audio source, return unprocessed audio frames. It is mainly useful as a template and to be employed in analysis / debugging tools, or as the source for filters which ignore the input data (for example the sox synth filter).
  * 
  * This source accepts the following options:
  */
export function audioNullSrc ( inputs : Stream | Stream[] = [], parameters : AudioNullSrcParameters = {} as any ) {
    return new AudioNullSrc( inputs, parameters );
}