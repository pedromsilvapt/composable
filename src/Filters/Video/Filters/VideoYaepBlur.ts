import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.234 yaepblur
  * Apply blur filter while preserving edges ("yaepblur" means "yet another edge preserving blur filter"). The algorithm is described in "J. S. Lee, Digital image enhancement and noise filtering by use of local statistics, IEEE Trans. Pattern Anal. Mach. Intell. PAMI-2, 1980."
  * 
  * It accepts the following parameters:
  */
export class VideoYaepBlur extends Filter<VideoYaepBlurParameters> {
    outputs : FilterStreamRef<VideoYaepBlurParameters, VideoYaepBlur>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoYaepBlurParameters = {} as any ) {
        super( inputs, 'yaepblur', parameters );
    }
}

export interface VideoYaepBlurParameters {
    /**
      * Set the window radius. Default value is 3.
      * @aliases r
      */
    radius ?: string | number;
    /**
      * Set the window radius. Default value is 3.
      * @aliasof radius
      */
    r ?: string | number;
    /**
      * Set which planes to filter. Default is only the first plane.
      * @aliases p
      */
    planes ?: string | number;
    /**
      * Set which planes to filter. Default is only the first plane.
      * @aliasof planes
      */
    p ?: string | number;
    /**
      * Set blur strength. Default value is 128.
      * @aliases s
      */
    sigma ?: string | number;
    /**
      * Set blur strength. Default value is 128.
      * @aliasof sigma
      */
    s ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.234 yaepblur
  * Apply blur filter while preserving edges ("yaepblur" means "yet another edge preserving blur filter"). The algorithm is described in "J. S. Lee, Digital image enhancement and noise filtering by use of local statistics, IEEE Trans. Pattern Anal. Mach. Intell. PAMI-2, 1980."
  * 
  * It accepts the following parameters:
  */
export function videoYaepBlur ( inputs : Stream | Stream[] = [], parameters : VideoYaepBlurParameters = {} as any ) {
    return new VideoYaepBlur( inputs, parameters );
}