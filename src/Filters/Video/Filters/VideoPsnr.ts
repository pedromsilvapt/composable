import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.158 psnr
  * Obtain the average, maximum and minimum PSNR (Peak Signal to Noise Ratio) between two input videos.
  * 
  * This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the PSNR.
  * 
  * Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one.
  * 
  * The obtained average PSNR is printed through the logging system.
  * 
  * The filter stores the accumulated MSE (mean squared error) of each frame, and at the end of the processing it is averaged across all frames equally, and the following formula is applied to obtain the PSNR:
  * 
  * 
  * PSNR = 10*log10(MAX^2/MSE)
  * 
  * Where MAX is the average of the maximum values of each component of the image.
  * 
  * The description of the accepted parameters follows.
  */
export class VideoPsnr extends Filter<VideoPsnrParameters> {
    outputs : FilterStreamRef<VideoPsnrParameters, VideoPsnr>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPsnrParameters = {} as any ) {
        super( inputs, 'psnr', parameters );
    }
}

export interface VideoPsnrParameters {
    /**
      * If specified the filter will use the named file to save the PSNR of each individual frame. When filename equals "-" the data is sent to standard output.
      * @aliases f
      */
    stats_file ?: string | number;
    /**
      * If specified the filter will use the named file to save the PSNR of each individual frame. When filename equals "-" the data is sent to standard output.
      * @aliasof stats_file
      */
    f ?: string | number;
    /** Specifies which version of the stats file format to use. Details of each format are written below. Default value is 1. */
    stats_version ?: string | number;
    /** Determines whether the max value is output to the stats log. Default value is 0. Requires stats_version >= 2. If this is set and stats_version < 2, the filter will return an error. */
    stats_add_max ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.158 psnr
  * Obtain the average, maximum and minimum PSNR (Peak Signal to Noise Ratio) between two input videos.
  * 
  * This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the PSNR.
  * 
  * Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one.
  * 
  * The obtained average PSNR is printed through the logging system.
  * 
  * The filter stores the accumulated MSE (mean squared error) of each frame, and at the end of the processing it is averaged across all frames equally, and the following formula is applied to obtain the PSNR:
  * 
  * 
  * PSNR = 10*log10(MAX^2/MSE)
  * 
  * Where MAX is the average of the maximum values of each component of the image.
  * 
  * The description of the accepted parameters follows.
  */
export function videoPsnr ( inputs : Stream | Stream[] = [], parameters : VideoPsnrParameters = {} as any ) {
    return new VideoPsnr( inputs, parameters );
}