import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.196 super2xsai
  * Scale the input by 2x and smooth using the Super2xSaI (Scale and Interpolate) pixel art scaling algorithm.
  * 
  * Useful for enlarging pixel art images without reducing sharpness.
  */
export class VideoSuper2xSaI extends Filter<VideoSuper2xSaIParameters> {
    outputs : FilterStreamRef<VideoSuper2xSaIParameters, VideoSuper2xSaI>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSuper2xSaIParameters = {} as any ) {
        super( inputs, 'super2xsai', parameters );
    }
}

export interface VideoSuper2xSaIParameters {


    [key : string] : string | number;
}

/**
  * 11.196 super2xsai
  * Scale the input by 2x and smooth using the Super2xSaI (Scale and Interpolate) pixel art scaling algorithm.
  * 
  * Useful for enlarging pixel art images without reducing sharpness.
  */
export function videoSuper2xSaI ( inputs : Stream | Stream[] = [], parameters : VideoSuper2xSaIParameters = {} as any ) {
    return new VideoSuper2xSaI( inputs, parameters );
}