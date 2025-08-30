import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.24 showvolume
  * Convert input audio volume to a video output.
  * 
  * The filter accepts the following options:
  */
export class ShowVolume extends Filter<ShowVolumeParameters> {
    outputs : FilterStreamRef<ShowVolumeParameters, ShowVolume>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ShowVolumeParameters = {} as any ) {
        super( inputs, 'showvolume', parameters );
    }
}

export interface ShowVolumeParameters {
    /**
      * Set video rate.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set video rate.
      * @aliasof rate
      */
    r ?: string | number;
    /** Set border width, allowed range is [0, 5]. Default is 1. */
    b ?: string | number;
    /** Set channel width, allowed range is [80, 8192]. Default is 400. */
    w ?: string | number;
    /** Set channel height, allowed range is [1, 900]. Default is 20. */
    h ?: string | number;
    /** Set fade, allowed range is [0, 1]. Default is 0.95. */
    f ?: string | number;
    /**
      * Set volume color expression.
      * The expression can use the following variables:
      * VOLUME
      * Current max volume of channel in dB.
      * PEAK
      * Current peak.
      * CHANNEL
      * Current channel number, starting from 0.
      */
    c ?: string | number;
    /** If set, displays channel names. Default is enabled. */
    t ?: string | number;
    /** If set, displays volume values. Default is enabled. */
    v ?: string | number;
    /** Set orientation, can be horizontal: h or vertical: v, default is h. */
    o ?: string | number;
    /** Set step size, allowed range is [0, 5]. Default is 0, which means step is disabled. */
    s ?: string | number;
    /** Set background opacity, allowed range is [0, 1]. Default is 0. */
    p ?: string | number;
    /** Set metering mode, can be peak: p or rms: r, default is p. */
    m ?: string | number;
    /** Set display scale, can be linear: lin or log: log, default is lin. */
    ds ?: string | number;
    /** In second. If set to > 0., display a line for the max level in the previous seconds. default is disabled: 0. */
    dm ?: string | number;
    /** The color of the max line. Use when dm option is set to > 0. default is: orange */
    dmc ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.24 showvolume
  * Convert input audio volume to a video output.
  * 
  * The filter accepts the following options:
  */
export function showVolume ( inputs : Stream | Stream[] = [], parameters : ShowVolumeParameters = {} as any ) {
    return new ShowVolume( inputs, parameters );
}