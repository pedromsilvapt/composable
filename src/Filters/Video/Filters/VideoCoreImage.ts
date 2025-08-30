import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.32 coreimage
  * Video filtering on GPU using Apple’s CoreImage API on OSX.
  * 
  * Hardware acceleration is based on an OpenGL context. Usually, this means it is processed by video hardware. However, software-based OpenGL implementations exist which means there is no guarantee for hardware processing. It depends on the respective OSX.
  * 
  * There are many filters and image generators provided by Apple that come with a large variety of options. The filter has to be referenced by its name along with its options.
  * 
  * The coreimage filter accepts the following options:
  */
export class VideoCoreImage extends Filter<VideoCoreImageParameters> {
    outputs : FilterStreamRef<VideoCoreImageParameters, VideoCoreImage>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCoreImageParameters = {} as any ) {
        super( inputs, 'coreimage', parameters );
    }
}

export interface VideoCoreImageParameters {
    /**
      * List all available filters and generators along with all their respective options as well as possible minimum and maximum values along with the default values.
      * list_filters=true
      */
    list_filters ?: string | number;
    /**
      * Specify all filters by their respective name and options. Use list_filters to determine all valid filter names and options. Numerical options are specified by a float value and are automatically clamped to their respective value range. Vector and color options have to be specified by a list of space separated float values. Character escaping has to be done. A special option name default is available to use default options for a filter.
      * It is required to specify either default or at least one of the filter options. All omitted options are used with their default values. The syntax of the filter string is as follows:
      * filter=<NAME>@<OPTION>=<VALUE>[@<OPTION>=<VALUE>][@...][#<NAME>@<OPTION>=<VALUE>[@<OPTION>=<VALUE>][@...]][#...]
      */
    filter ?: string | number;
    /**
      * Specify a rectangle where the output of the filter chain is copied into the input image. It is given by a list of space separated float values:
      * output_rect=x\ y\ width\ height
      * If not given, the output rectangle equals the dimensions of the input image. The output rectangle is automatically cropped at the borders of the input image. Negative values are valid for each component.
      * output_rect=25\ 25\ 100\ 100
      */
    output_rect ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.32 coreimage
  * Video filtering on GPU using Apple’s CoreImage API on OSX.
  * 
  * Hardware acceleration is based on an OpenGL context. Usually, this means it is processed by video hardware. However, software-based OpenGL implementations exist which means there is no guarantee for hardware processing. It depends on the respective OSX.
  * 
  * There are many filters and image generators provided by Apple that come with a large variety of options. The filter has to be referenced by its name along with its options.
  * 
  * The coreimage filter accepts the following options:
  */
export function videoCoreImage ( inputs : Stream | Stream[] = [], parameters : VideoCoreImageParameters = {} as any ) {
    return new VideoCoreImage( inputs, parameters );
}