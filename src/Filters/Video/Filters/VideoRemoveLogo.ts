import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.166 removelogo
  * Suppress a TV station logo, using an image file to determine which pixels comprise the logo. It works by filling in the pixels that comprise the logo with neighboring pixels.
  * 
  * The filter accepts the following options:
  */
export class VideoRemoveLogo extends Filter<VideoRemoveLogoParameters> {
    outputs : FilterStreamRef<VideoRemoveLogoParameters, VideoRemoveLogo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRemoveLogoParameters = {} as any ) {
        super( inputs, 'removelogo', parameters );
    }
}

export interface VideoRemoveLogoParameters {
    /**
      * Set the filter bitmap file, which can be any image format supported by libavformat. The width and height of the image file must match those of the video stream being processed.
      * @aliases f
      */
    filename ?: string | number;
    /**
      * Set the filter bitmap file, which can be any image format supported by libavformat. The width and height of the image file must match those of the video stream being processed.
      * @aliasof filename
      */
    f ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.166 removelogo
  * Suppress a TV station logo, using an image file to determine which pixels comprise the logo. It works by filling in the pixels that comprise the logo with neighboring pixels.
  * 
  * The filter accepts the following options:
  */
export function videoRemoveLogo ( inputs : Stream | Stream[] = [], parameters : VideoRemoveLogoParameters = {} as any ) {
    return new VideoRemoveLogo( inputs, parameters );
}