import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.46 axcorrelate
  * Calculate normalized cross-correlation between two input audio streams.
  * 
  * Resulted samples are always between -1 and 1 inclusive. If result is 1 it means two input samples are highly correlated in that selected segment. Result 0 means they are not correlated at all. If result is -1 it means two input samples are out of phase, which means they cancel each other.
  * 
  * The filter accepts the following options:
  */
export class AudioXCorrelate extends Filter<AudioXCorrelateParameters> {
    outputs : FilterStreamRef<AudioXCorrelateParameters, AudioXCorrelate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioXCorrelateParameters = {} as any ) {
        super( inputs, 'axcorrelate', parameters );
    }
}

export interface AudioXCorrelateParameters {
    /** Set size of segment over which cross-correlation is calculated. Default is 256. Allowed range is from 2 to 131072. */
    size ?: string | number;
    /** Set algorithm for cross-correlation. Can be slow or fast. Default is slow. Fast algorithm assumes mean values over any given segment are always zero and thus need much less calculations to make. This is generally not true, but is valid for typical audio streams. */
    algo ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.46 axcorrelate
  * Calculate normalized cross-correlation between two input audio streams.
  * 
  * Resulted samples are always between -1 and 1 inclusive. If result is 1 it means two input samples are highly correlated in that selected segment. Result 0 means they are not correlated at all. If result is -1 it means two input samples are out of phase, which means they cancel each other.
  * 
  * The filter accepts the following options:
  */
export function audioXCorrelate ( inputs : Stream | Stream[] = [], parameters : AudioXCorrelateParameters = {} as any ) {
    return new AudioXCorrelate( inputs, parameters );
}