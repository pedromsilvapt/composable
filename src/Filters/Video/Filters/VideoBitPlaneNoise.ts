import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.10 bitplanenoise
  * Show and measure bit plane noise.
  * 
  * The filter accepts the following options:
  */
export class VideoBitPlaneNoise extends Filter<VideoBitPlaneNoiseParameters> {
    outputs : FilterStreamRef<VideoBitPlaneNoiseParameters, VideoBitPlaneNoise>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBitPlaneNoiseParameters = {} as any ) {
        super( inputs, 'bitplanenoise', parameters );
    }
}

export interface VideoBitPlaneNoiseParameters {
    /** Set which plane to analyze. Default is 1. */
    bitplane ?: string | number;
    /** Filter out noisy pixels from bitplane set above. Default is disabled. */
    filter ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.10 bitplanenoise
  * Show and measure bit plane noise.
  * 
  * The filter accepts the following options:
  */
export function videoBitPlaneNoise ( inputs : Stream | Stream[] = [], parameters : VideoBitPlaneNoiseParameters = {} as any ) {
    return new VideoBitPlaneNoise( inputs, parameters );
}