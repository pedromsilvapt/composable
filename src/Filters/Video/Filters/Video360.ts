import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.214 v360
  * Convert 360 videos between various formats.
  * 
  * The filter accepts the following options:
  */
export class Video360 extends Filter<Video360Parameters> {
    outputs : FilterStreamRef<Video360Parameters, Video360>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : Video360Parameters = {} as any ) {
        super( inputs, 'v360', parameters );
    }
}

export interface Video360Parameters {
    /**
      * Set format of the input/output video.
      * Available formats:
      * ‘e’
      * ‘equirect’
      * Equirectangular projection.
      * ‘c3x2’
      * ‘c6x1’
      * ‘c1x6’
      * Cubemap with 3x2/6x1/1x6 layout.
      * Format specific options:
      * in_pad
      * out_pad
      * Set padding proportion for the input/output cubemap. Values in decimals.
      * Example values:
      * ‘0’
      * No padding.
      * ‘0.01’
      * 1% of face is padding. For example, with 1920x1280 resolution face size would be 640x640 and padding would be 3 pixels from each side. (640 * 0.01 = 6 pixels)
      * Default value is ‘0’.
      * fin_pad
      * fout_pad
      * Set fixed padding for the input/output cubemap. Values in pixels.
      * Default value is ‘0’. If greater than zero it overrides other padding options.
      * in_forder
      * out_forder
      * Set order of faces for the input/output cubemap. Choose one direction for each position.
      * Designation of directions:
      * ‘r’
      * right
      * ‘l’
      * left
      * ‘u’
      * up
      * ‘d’
      * down
      * ‘f’
      * forward
      * ‘b’
      * back
      * Default value is ‘rludfb’.
      * in_frot
      * out_frot
      * Set rotation of faces for the input/output cubemap. Choose one angle for each position.
      * Designation of angles:
      * ‘0’
      * 0 degrees clockwise
      * ‘1’
      * 90 degrees clockwise
      * ‘2’
      * 180 degrees clockwise
      * ‘3’
      * 270 degrees clockwise
      * Default value is ‘000000’.
      * ‘eac’
      * Equi-Angular Cubemap.
      * ‘flat’
      * ‘gnomonic’
      * ‘rectilinear’
      * Regular video.
      * Format specific options:
      * h_fov
      * v_fov
      * d_fov
      * Set output horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ih_fov
      * iv_fov
      * id_fov
      * Set input horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ‘dfisheye’
      * Dual fisheye.
      * Format specific options:
      * in_pad
      * out_pad
      * Set padding proportion. Values in decimals.
      * Example values:
      * ‘0’
      * No padding.
      * ‘0.01’
      * 1% padding.
      * Default value is ‘0’.
      * ‘barrel’
      * ‘fb’
      * Facebook’s 360 format.
      * ‘sg’
      * Stereographic format.
      * Format specific options:
      * h_fov
      * v_fov
      * d_fov
      * Set output horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ih_fov
      * iv_fov
      * id_fov
      * Set input horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ‘mercator’
      * Mercator format.
      * ‘ball’
      * Ball format, gives significant distortion toward the back.
      * ‘hammer’
      * Hammer-Aitoff map projection format.
      * ‘sinusoidal’
      * Sinusoidal map projection format.
      * ‘fisheye’
      * Fisheye projection.
      * Format specific options:
      * h_fov
      * v_fov
      * d_fov
      * Set output horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ih_fov
      * iv_fov
      * id_fov
      * Set input horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ‘pannini’
      * Pannini projection. (output only)
      * Format specific options:
      * h_fov
      * Set pannini parameter.
      * ‘cylindrical’
      * Cylindrical projection.
      * Format specific options:
      * h_fov
      * v_fov
      * d_fov
      * Set output horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ih_fov
      * iv_fov
      * id_fov
      * Set input horizontal/vertical/diagonal field of view. Values in degrees.
      * If diagonal field of view is set it overrides horizontal and vertical field of view.
      * ‘perspective’
      * Perspective projection. (output only)
      * Format specific options:
      * v_fov
      * Set perspective parameter.
      * ‘tetrahedron’
      * Tetrahedron projection.
      */
    input ?: string | number;
    /**
      * Set interpolation method.
      * Note: more complex interpolation methods require much more memory to run.
      * Available methods:
      * ‘near’
      * ‘nearest’
      * Nearest neighbour.
      * ‘line’
      * ‘linear’
      * Bilinear interpolation.
      * ‘cube’
      * ‘cubic’
      * Bicubic interpolation.
      * ‘lanc’
      * ‘lanczos’
      * Lanczos interpolation.
      * ‘sp16’
      * ‘spline16’
      * Spline16 interpolation.
      * ‘gauss’
      * ‘gaussian’
      * Gaussian interpolation.
      * Default value is ‘line’.
      */
    output ?: string | number;
    /**
      * Set the output video resolution.
      * Default resolution depends on formats.
      */
    interp ?: string | number;
    /**
      * Set the input/output stereo format.
      * ‘2d’
      * 2D mono
      * ‘sbs’
      * Side by side
      * ‘tb’
      * Top bottom
      * Default value is ‘2d’ for input and output format.
      */
    w ?: string | number;
    /** Set rotation for the output video. Values in degrees. */
    h ?: string | number;
    /**
      * Set rotation order for the output video. Choose one item for each position.
      * ‘y, Y’
      * yaw
      * ‘p, P’
      * pitch
      * ‘r, R’
      * roll
      * Default value is ‘ypr’.
      */
    in_stereo ?: string | number;
    /** Flip the output video horizontally(swaps left-right)/vertically(swaps up-down)/in-depth(swaps back-forward). Boolean values. */
    out_stereo ?: string | number;
    /** Set if input video is flipped horizontally/vertically. Boolean values. */
    yaw ?: string | number;
    /** Set if input video is transposed. Boolean value, by default disabled. */
    pitch ?: string | number;
    /** Set if output video needs to be transposed. Boolean value, by default disabled. */
    roll ?: string | number;
    /** Build mask in alpha plane for all unmapped pixels by marking them fully transparent. Boolean value, by default disabled. */
    rorder ?: string | number;
    h_flip ?: string | number;
    v_flip ?: string | number;
    d_flip ?: string | number;
    ih_flip ?: string | number;
    iv_flip ?: string | number;
    in_trans ?: string | number;
    out_trans ?: string | number;
    alpha_mask ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.214 v360
  * Convert 360 videos between various formats.
  * 
  * The filter accepts the following options:
  */
export function video360 ( inputs : Stream | Stream[] = [], parameters : Video360Parameters = {} as any ) {
    return new Video360( inputs, parameters );
}