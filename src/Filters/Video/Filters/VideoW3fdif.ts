import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.225 w3fdif
  * Deinterlace the input video ("w3fdif" stands for "Weston 3 Field Deinterlacing Filter").
  * 
  * Based on the process described by Martin Weston for BBC R&D, and implemented based on the de-interlace algorithm written by Jim Easterbrook for BBC R&D, the Weston 3 field deinterlacing filter uses filter coefficients calculated by BBC R&D.
  * 
  * This filter uses field-dominance information in frame to decide which of each pair of fields to place first in the output. If it gets it wrong use setfield filter before w3fdif filter.
  * 
  * There are two sets of filter coefficients, so called "simple" and "complex". Which set of filter coefficients is used can be set by passing an optional parameter:
  */
export class VideoW3fdif extends Filter<VideoW3fdifParameters> {
    outputs : FilterStreamRef<VideoW3fdifParameters, VideoW3fdif>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoW3fdifParameters = {} as any ) {
        super( inputs, 'w3fdif', parameters );
    }
}

export interface VideoW3fdifParameters {
    /**
      * Set the interlacing filter coefficients. Accepts one of the following values:
      * ‘simple’
      * Simple filter coefficient set.
      * ‘complex’
      * More-complex filter coefficient set.
      * Default value is ‘complex’.
      */
    filter ?: string | number;
    /**
      * Specify which frames to deinterlace. Accepts one of the following values:
      * ‘all’
      * Deinterlace all frames,
      * ‘interlaced’
      * Only deinterlace frames marked as interlaced.
      * Default value is ‘all’.
      */
    deint ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.225 w3fdif
  * Deinterlace the input video ("w3fdif" stands for "Weston 3 Field Deinterlacing Filter").
  * 
  * Based on the process described by Martin Weston for BBC R&D, and implemented based on the de-interlace algorithm written by Jim Easterbrook for BBC R&D, the Weston 3 field deinterlacing filter uses filter coefficients calculated by BBC R&D.
  * 
  * This filter uses field-dominance information in frame to decide which of each pair of fields to place first in the output. If it gets it wrong use setfield filter before w3fdif filter.
  * 
  * There are two sets of filter coefficients, so called "simple" and "complex". Which set of filter coefficients is used can be set by passing an optional parameter:
  */
export function videoW3fdif ( inputs : Stream | Stream[] = [], parameters : VideoW3fdifParameters = {} as any ) {
    return new VideoW3fdif( inputs, parameters );
}