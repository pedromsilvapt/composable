import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.8 bbox
  * Compute the bounding box for the non-black pixels in the input frame luminance plane.
  * 
  * This filter computes the bounding box containing all the pixels with a luminance value greater than the minimum allowed value. The parameters describing the bounding box are printed on the filter log.
  * 
  * The filter accepts the following option:
  */
export class VideoBBox extends Filter<VideoBBoxParameters> {
    outputs : FilterStreamRef<VideoBBoxParameters, VideoBBox>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoBBoxParameters = {} as any ) {
        super( inputs, 'bbox', parameters );
    }
}

export interface VideoBBoxParameters {
    /** Set the minimal luminance value. Default is 16. */
    min_val ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.8 bbox
  * Compute the bounding box for the non-black pixels in the input frame luminance plane.
  * 
  * This filter computes the bounding box containing all the pixels with a luminance value greater than the minimum allowed value. The parameters describing the bounding box are printed on the filter log.
  * 
  * The filter accepts the following option:
  */
export function videoBBox ( inputs : Stream | Stream[] = [], parameters : VideoBBoxParameters = {} as any ) {
    return new VideoBBox( inputs, parameters );
}