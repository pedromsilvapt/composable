import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.212 unsharp
  * Sharpen or blur the input video.
  * 
  * It accepts the following parameters:
  */
export class VideoUnSharp extends Filter<VideoUnSharpParameters> {
    outputs : FilterStreamRef<VideoUnSharpParameters, VideoUnSharp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoUnSharpParameters = {} as any ) {
        super( inputs, 'unsharp', parameters );
    }
}

export interface VideoUnSharpParameters {
    /**
      * Set the luma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliases lx
      */
    luma_msize_x ?: string | number;
    /**
      * Set the luma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliasof luma_msize_x
      */
    lx ?: string | number;
    /**
      * Set the luma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliases ly
      */
    luma_msize_y ?: string | number;
    /**
      * Set the luma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliasof luma_msize_y
      */
    ly ?: string | number;
    /**
      * Set the luma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5.
      * Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
      * Default value is 1.0.
      * @aliases la
      */
    luma_amount ?: string | number;
    /**
      * Set the luma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5.
      * Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
      * Default value is 1.0.
      * @aliasof luma_amount
      */
    la ?: string | number;
    /**
      * Set the chroma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliases cx
      */
    chroma_msize_x ?: string | number;
    /**
      * Set the chroma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliasof chroma_msize_x
      */
    cx ?: string | number;
    /**
      * Set the chroma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliases cy
      */
    chroma_msize_y ?: string | number;
    /**
      * Set the chroma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
      * @aliasof chroma_msize_y
      */
    cy ?: string | number;
    /**
      * Set the chroma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5.
      * Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
      * Default value is 0.0.
      * @aliases ca
      */
    chroma_amount ?: string | number;
    /**
      * Set the chroma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5.
      * Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
      * Default value is 0.0.
      * @aliasof chroma_amount
      */
    ca ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.212 unsharp
  * Sharpen or blur the input video.
  * 
  * It accepts the following parameters:
  */
export function videoUnSharp ( inputs : Stream | Stream[] = [], parameters : VideoUnSharpParameters = {} as any ) {
    return new VideoUnSharp( inputs, parameters );
}