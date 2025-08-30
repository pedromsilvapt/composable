import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.87 geq
  * Apply generic equation to each pixel.
  * 
  * The filter accepts the following options:
  */
export class VideoGeq extends Filter<VideoGeqParameters> {
    outputs : FilterStreamRef<VideoGeqParameters, VideoGeq>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoGeqParameters = {} as any ) {
        super( inputs, 'geq', parameters );
    }
}

export interface VideoGeqParameters {
    /**
      * Set the luminance expression.
      * @aliases lum
      */
    lum_expr ?: string | number;
    /**
      * Set the luminance expression.
      * @aliasof lum_expr
      */
    lum ?: string | number;
    /**
      * Set the chrominance blue expression.
      * @aliases cb
      */
    cb_expr ?: string | number;
    /**
      * Set the chrominance blue expression.
      * @aliasof cb_expr
      */
    cb ?: string | number;
    /**
      * Set the chrominance red expression.
      * @aliases cr
      */
    cr_expr ?: string | number;
    /**
      * Set the chrominance red expression.
      * @aliasof cr_expr
      */
    cr ?: string | number;
    /**
      * Set the alpha expression.
      * @aliases a
      */
    alpha_expr ?: string | number;
    /**
      * Set the alpha expression.
      * @aliasof alpha_expr
      */
    a ?: string | number;
    /**
      * Set the red expression.
      * @aliases r
      */
    red_expr ?: string | number;
    /**
      * Set the red expression.
      * @aliasof red_expr
      */
    r ?: string | number;
    /**
      * Set the green expression.
      * @aliases g
      */
    green_expr ?: string | number;
    /**
      * Set the green expression.
      * @aliasof green_expr
      */
    g ?: string | number;
    /**
      * Set the blue expression.
      * @aliases b
      */
    blue_expr ?: string | number;
    /**
      * Set the blue expression.
      * @aliasof blue_expr
      */
    b ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.87 geq
  * Apply generic equation to each pixel.
  * 
  * The filter accepts the following options:
  */
export function videoGeq ( inputs : Stream | Stream[] = [], parameters : VideoGeqParameters = {} as any ) {
    return new VideoGeq( inputs, parameters );
}