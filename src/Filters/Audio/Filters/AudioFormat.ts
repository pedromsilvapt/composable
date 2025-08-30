import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.19 aformat
  * Set output format constraints for the input audio. The framework will negotiate the most appropriate format to minimize conversions.
  * 
  * It accepts the following parameters:
  */
export class AudioFormat extends Filter<AudioFormatParameters> {
    outputs : FilterStreamRef<AudioFormatParameters, AudioFormat>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioFormatParameters = {} as any ) {
        super( inputs, 'aformat', parameters );
    }
}

export interface AudioFormatParameters {
    /**
      * A ’|’-separated list of requested sample formats.
      * @aliases f
      */
    sample_fmts ?: string | number;
    /**
      * A ’|’-separated list of requested sample formats.
      * @aliasof sample_fmts
      */
    f ?: string | number;
    /**
      * A ’|’-separated list of requested sample rates.
      * @aliases r
      */
    sample_rates ?: string | number;
    /**
      * A ’|’-separated list of requested sample rates.
      * @aliasof sample_rates
      */
    r ?: string | number;
    /**
      * A ’|’-separated list of requested channel layouts.
      * See (ffmpeg-utils)the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
      * @aliases cl
      */
    channel_layouts ?: string | number;
    /**
      * A ’|’-separated list of requested channel layouts.
      * See (ffmpeg-utils)the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
      * @aliasof channel_layouts
      */
    cl ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.19 aformat
  * Set output format constraints for the input audio. The framework will negotiate the most appropriate format to minimize conversions.
  * 
  * It accepts the following parameters:
  */
export function audioFormat ( inputs : Stream | Stream[] = [], parameters : AudioFormatParameters = {} as any ) {
    return new AudioFormat( inputs, parameters );
}