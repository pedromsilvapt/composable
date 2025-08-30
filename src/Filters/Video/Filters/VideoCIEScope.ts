import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.20 ciescope
  * Display CIE color diagram with pixels overlaid onto it.
  * 
  * The filter accepts the following options:
  */
export class VideoCIEScope extends Filter<VideoCIEScopeParameters> {
    outputs : FilterStreamRef<VideoCIEScopeParameters, VideoCIEScope>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCIEScopeParameters = {} as any ) {
        super( inputs, 'ciescope', parameters );
    }
}

export interface VideoCIEScopeParameters {
    /**
      * Set color system.
      * ‘ntsc, 470m’
      * ‘ebu, 470bg’
      * ‘smpte’
      * ‘240m’
      * ‘apple’
      * ‘widergb’
      * ‘cie1931’
      * ‘rec709, hdtv’
      * ‘uhdtv, rec2020’
      * ‘dcip3’
      */
    system ?: string | number;
    /**
      * Set CIE system.
      * ‘xyy’
      * ‘ucs’
      * ‘luv’
      */
    cie ?: string | number;
    /**
      * Set what gamuts to draw.
      * See system option for available values.
      */
    gamuts ?: string | number;
    /**
      * Set ciescope size, by default set to 512.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set ciescope size, by default set to 512.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set intensity used to map input pixel values to CIE diagram.
      * @aliases i
      */
    intensity ?: string | number;
    /**
      * Set intensity used to map input pixel values to CIE diagram.
      * @aliasof intensity
      */
    i ?: string | number;
    /** Set contrast used to draw tongue colors that are out of active color system gamut. */
    contrast ?: string | number;
    /** Correct gamma displayed on scope, by default enabled. */
    corrgamma ?: string | number;
    /** Show white point on CIE diagram, by default disabled. */
    showwhite ?: string | number;
    /** Set input gamma. Used only with XYZ input color space. */
    gamma ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.20 ciescope
  * Display CIE color diagram with pixels overlaid onto it.
  * 
  * The filter accepts the following options:
  */
export function videoCIEScope ( inputs : Stream | Stream[] = [], parameters : VideoCIEScopeParameters = {} as any ) {
    return new VideoCIEScope( inputs, parameters );
}