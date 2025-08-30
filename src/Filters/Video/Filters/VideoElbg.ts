import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.61 elbg
  * Apply a posterize effect using the ELBG (Enhanced LBG) algorithm.
  * 
  * For each input image, the filter will compute the optimal mapping from the input to the output given the codebook length, that is the number of distinct output colors.
  * 
  * This filter accepts the following options.
  */
export class VideoElbg extends Filter<VideoElbgParameters> {
    outputs : FilterStreamRef<VideoElbgParameters, VideoElbg>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoElbgParameters = {} as any ) {
        super( inputs, 'elbg', parameters );
    }
}

export interface VideoElbgParameters {
    /**
      * Set codebook length. The value must be a positive integer, and represents the number of distinct output colors. Default value is 256.
      * @aliases l
      */
    codebook_length ?: string | number;
    /**
      * Set codebook length. The value must be a positive integer, and represents the number of distinct output colors. Default value is 256.
      * @aliasof codebook_length
      */
    l ?: string | number;
    /**
      * Set the maximum number of iterations to apply for computing the optimal mapping. The higher the value the better the result and the higher the computation time. Default value is 1.
      * @aliases n
      */
    nb_steps ?: string | number;
    /**
      * Set the maximum number of iterations to apply for computing the optimal mapping. The higher the value the better the result and the higher the computation time. Default value is 1.
      * @aliasof nb_steps
      */
    n ?: string | number;
    /**
      * Set a random seed, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
      * @aliases s
      */
    seed ?: string | number;
    /**
      * Set a random seed, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
      * @aliasof seed
      */
    s ?: string | number;
    /** Set pal8 output pixel format. This option does not work with codebook length greater than 256. */
    pal8 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.61 elbg
  * Apply a posterize effect using the ELBG (Enhanced LBG) algorithm.
  * 
  * For each input image, the filter will compute the optimal mapping from the input to the output given the codebook length, that is the number of distinct output colors.
  * 
  * This filter accepts the following options.
  */
export function videoElbg ( inputs : Stream | Stream[] = [], parameters : VideoElbgParameters = {} as any ) {
    return new VideoElbg( inputs, parameters );
}