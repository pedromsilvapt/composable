import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.111 lensfun
  * Apply lens correction via the lensfun library (http://lensfun.sourceforge.net/).
  * 
  * The lensfun filter requires the camera make, camera model, and lens model to apply the lens correction. The filter will load the lensfun database and query it to find the corresponding camera and lens entries in the database. As long as these entries can be found with the given options, the filter can perform corrections on frames. Note that incomplete strings will result in the filter choosing the best match with the given options, and the filter will output the chosen camera and lens models (logged with level "info"). You must provide the make, camera model, and lens model as they are required.
  * 
  * The filter accepts the following options:
  */
export class VideoLensFun extends Filter<VideoLensFunParameters> {
    outputs : FilterStreamRef<VideoLensFunParameters, VideoLensFun>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLensFunParameters = {} as any ) {
        super( inputs, 'lensfun', parameters );
    }
}

export interface VideoLensFunParameters {
    /** The make of the camera (for example, "Canon"). This option is required. */
    make ?: string | number;
    /** The model of the camera (for example, "Canon EOS 100D"). This option is required. */
    model ?: string | number;
    /** The model of the lens (for example, "Canon EF-S 18-55mm f/3.5-5.6 IS STM"). This option is required. */
    lens_model ?: string | number;
    /**
      * The type of correction to apply. The following values are valid options:
      * ‘vignetting’
      * Enables fixing lens vignetting.
      * ‘geometry’
      * Enables fixing lens geometry. This is the default.
      * ‘subpixel’
      * Enables fixing chromatic aberrations.
      * ‘vig_geo’
      * Enables fixing lens vignetting and lens geometry.
      * ‘vig_subpixel’
      * Enables fixing lens vignetting and chromatic aberrations.
      * ‘distortion’
      * Enables fixing both lens geometry and chromatic aberrations.
      * ‘all’
      * Enables all possible corrections.
      */
    mode ?: string | number;
    /** The focal length of the image/video (zoom; expected constant for video). For example, a 18–55mm lens has focal length range of [18–55], so a value in that range should be chosen when using that lens. Default 18. */
    focal_length ?: string | number;
    /** The aperture of the image/video (expected constant for video). Note that aperture is only used for vignetting correction. Default 3.5. */
    aperture ?: string | number;
    /** The focus distance of the image/video (expected constant for video). Note that focus distance is only used for vignetting and only slightly affects the vignetting correction process. If unknown, leave it at the default value (which is 1000). */
    focus_distance ?: string | number;
    /** The scale factor which is applied after transformation. After correction the video is no longer necessarily rectangular. This parameter controls how much of the resulting image is visible. The value 0 means that a value will be chosen automatically such that there is little or no unmapped area in the output image. 1.0 means that no additional scaling is done. Lower values may result in more of the corrected image being visible, while higher values may avoid unmapped areas in the output. */
    scale ?: string | number;
    /**
      * The target geometry of the output image/video. The following values are valid options:
      * ‘rectilinear (default)’
      * ‘fisheye’
      * ‘panoramic’
      * ‘equirectangular’
      * ‘fisheye_orthographic’
      * ‘fisheye_stereographic’
      * ‘fisheye_equisolid’
      * ‘fisheye_thoby’
      */
    target_geometry ?: string | number;
    /** Apply the reverse of image correction (instead of correcting distortion, apply it). */
    reverse ?: string | number;
    /**
      * The type of interpolation used when correcting distortion. The following values are valid options:
      * ‘nearest’
      * ‘linear (default)’
      * ‘lanczos’
      */
    interpolation ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.111 lensfun
  * Apply lens correction via the lensfun library (http://lensfun.sourceforge.net/).
  * 
  * The lensfun filter requires the camera make, camera model, and lens model to apply the lens correction. The filter will load the lensfun database and query it to find the corresponding camera and lens entries in the database. As long as these entries can be found with the given options, the filter can perform corrections on frames. Note that incomplete strings will result in the filter choosing the best match with the given options, and the filter will output the chosen camera and lens models (logged with level "info"). You must provide the make, camera model, and lens model as they are required.
  * 
  * The filter accepts the following options:
  */
export function videoLensFun ( inputs : Stream | Stream[] = [], parameters : VideoLensFunParameters = {} as any ) {
    return new VideoLensFun( inputs, parameters );
}