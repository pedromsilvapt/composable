import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.157 pseudocolor
  * Alter frame colors in video with pseudocolors.
  * 
  * This filter accepts the following options:
  */
export class VideoPseudoColor extends Filter<VideoPseudoColorParameters> {
    outputs : FilterStreamRef<VideoPseudoColorParameters, VideoPseudoColor>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPseudoColorParameters = {} as any ) {
        super( inputs, 'pseudocolor', parameters );
    }
}

export interface VideoPseudoColorParameters {
    /** set pixel first component expression */
    c0 ?: string | number;
    /** set pixel second component expression */
    c1 ?: string | number;
    /** set pixel third component expression */
    c2 ?: string | number;
    /** set pixel fourth component expression, corresponds to the alpha component */
    c3 ?: string | number;
    /** set component to use as base for altering colors */
    i ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.157 pseudocolor
  * Alter frame colors in video with pseudocolors.
  * 
  * This filter accepts the following options:
  */
export function videoPseudoColor ( inputs : Stream | Stream[] = [], parameters : VideoPseudoColorParameters = {} as any ) {
    return new VideoPseudoColor( inputs, parameters );
}