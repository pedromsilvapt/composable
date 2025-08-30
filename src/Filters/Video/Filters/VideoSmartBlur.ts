import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.188 smartblur
  * Blur the input video without impacting the outlines.
  * 
  * It accepts the following options:
  */
export class VideoSmartBlur extends Filter<VideoSmartBlurParameters> {
    outputs : FilterStreamRef<VideoSmartBlurParameters, VideoSmartBlur>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSmartBlurParameters = {} as any ) {
        super( inputs, 'smartblur', parameters );
    }
}

export interface VideoSmartBlurParameters {
    /**
      * Set the luma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is 1.0.
      * @aliases lr
      */
    luma_radius ?: string | number;
    /**
      * Set the luma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is 1.0.
      * @aliasof luma_radius
      */
    lr ?: string | number;
    /**
      * Set the luma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is 1.0.
      * @aliases ls
      */
    luma_strength ?: string | number;
    /**
      * Set the luma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is 1.0.
      * @aliasof luma_strength
      */
    ls ?: string | number;
    /**
      * Set the luma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is 0.
      * @aliases lt
      */
    luma_threshold ?: string | number;
    /**
      * Set the luma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is 0.
      * @aliasof luma_threshold
      */
    lt ?: string | number;
    /**
      * Set the chroma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is luma_radius.
      * @aliases cr
      */
    chroma_radius ?: string | number;
    /**
      * Set the chroma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is luma_radius.
      * @aliasof chroma_radius
      */
    cr ?: string | number;
    /**
      * Set the chroma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is luma_strength.
      * @aliases cs
      */
    chroma_strength ?: string | number;
    /**
      * Set the chroma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is luma_strength.
      * @aliasof chroma_strength
      */
    cs ?: string | number;
    /**
      * Set the chroma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is luma_threshold.
      * @aliases ct
      */
    chroma_threshold ?: string | number;
    /**
      * Set the chroma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is luma_threshold.
      * @aliasof chroma_threshold
      */
    ct ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.188 smartblur
  * Blur the input video without impacting the outlines.
  * 
  * It accepts the following options:
  */
export function videoSmartBlur ( inputs : Stream | Stream[] = [], parameters : VideoSmartBlurParameters = {} as any ) {
    return new VideoSmartBlur( inputs, parameters );
}