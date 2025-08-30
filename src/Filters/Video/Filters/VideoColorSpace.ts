import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.28 colorspace
  * Convert colorspace, transfer characteristics or color primaries. Input video needs to have an even size.
  * 
  * The filter accepts the following options:
  */
export class VideoColorSpace extends Filter<VideoColorSpaceParameters> {
    outputs : FilterStreamRef<VideoColorSpaceParameters, VideoColorSpace>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorSpaceParameters = {} as any ) {
        super( inputs, 'colorspace', parameters );
    }
}

export interface VideoColorSpaceParameters {
    all ?: string | number;
    /**
      * Specify all color properties at once.
      * The accepted values are:
      * ‘bt470m’
      * BT.470M
      * ‘bt470bg’
      * BT.470BG
      * ‘bt601-6-525’
      * BT.601-6 525
      * ‘bt601-6-625’
      * BT.601-6 625
      * ‘bt709’
      * BT.709
      * ‘smpte170m’
      * SMPTE-170M
      * ‘smpte240m’
      * SMPTE-240M
      * ‘bt2020’
      * BT.2020
      */
    space ?: string | number;
    /**
      * Specify output colorspace.
      * The accepted values are:
      * ‘bt709’
      * BT.709
      * ‘fcc’
      * FCC
      * ‘bt470bg’
      * BT.470BG or BT.601-6 625
      * ‘smpte170m’
      * SMPTE-170M or BT.601-6 525
      * ‘smpte240m’
      * SMPTE-240M
      * ‘ycgco’
      * YCgCo
      * ‘bt2020ncl’
      * BT.2020 with non-constant luminance
      */
    trc ?: string | number;
    /**
      * Specify output transfer characteristics.
      * The accepted values are:
      * ‘bt709’
      * BT.709
      * ‘bt470m’
      * BT.470M
      * ‘bt470bg’
      * BT.470BG
      * ‘gamma22’
      * Constant gamma of 2.2
      * ‘gamma28’
      * Constant gamma of 2.8
      * ‘smpte170m’
      * SMPTE-170M, BT.601-6 625 or BT.601-6 525
      * ‘smpte240m’
      * SMPTE-240M
      * ‘srgb’
      * SRGB
      * ‘iec61966-2-1’
      * iec61966-2-1
      * ‘iec61966-2-4’
      * iec61966-2-4
      * ‘xvycc’
      * xvycc
      * ‘bt2020-10’
      * BT.2020 for 10-bits content
      * ‘bt2020-12’
      * BT.2020 for 12-bits content
      */
    primaries ?: string | number;
    /**
      * Specify output color primaries.
      * The accepted values are:
      * ‘bt709’
      * BT.709
      * ‘bt470m’
      * BT.470M
      * ‘bt470bg’
      * BT.470BG or BT.601-6 625
      * ‘smpte170m’
      * SMPTE-170M or BT.601-6 525
      * ‘smpte240m’
      * SMPTE-240M
      * ‘film’
      * film
      * ‘smpte431’
      * SMPTE-431
      * ‘smpte432’
      * SMPTE-432
      * ‘bt2020’
      * BT.2020
      * ‘jedec-p22’
      * JEDEC P22 phosphors
      */
    range ?: string | number;
    /**
      * Specify output color range.
      * The accepted values are:
      * ‘tv’
      * TV (restricted) range
      * ‘mpeg’
      * MPEG (restricted) range
      * ‘pc’
      * PC (full) range
      * ‘jpeg’
      * JPEG (full) range
      */
    format ?: string | number;
    /**
      * Specify output color format.
      * The accepted values are:
      * ‘yuv420p’
      * YUV 4:2:0 planar 8-bits
      * ‘yuv420p10’
      * YUV 4:2:0 planar 10-bits
      * ‘yuv420p12’
      * YUV 4:2:0 planar 12-bits
      * ‘yuv422p’
      * YUV 4:2:2 planar 8-bits
      * ‘yuv422p10’
      * YUV 4:2:2 planar 10-bits
      * ‘yuv422p12’
      * YUV 4:2:2 planar 12-bits
      * ‘yuv444p’
      * YUV 4:4:4 planar 8-bits
      * ‘yuv444p10’
      * YUV 4:4:4 planar 10-bits
      * ‘yuv444p12’
      * YUV 4:4:4 planar 12-bits
      */
    fast ?: string | number;
    /** Do a fast conversion, which skips gamma/primary correction. This will take significantly less CPU, but will be mathematically incorrect. To get output compatible with that produced by the colormatrix filter, use fast=1. */
    dither ?: string | number;
    /**
      * Specify dithering mode.
      * The accepted values are:
      * ‘none’
      * No dithering
      * ‘fsb’
      * Floyd-Steinberg dithering
      */
    wpadapt ?: string | number;
    /**
      * Whitepoint adaptation mode.
      * The accepted values are:
      * ‘bradford’
      * Bradford whitepoint adaptation
      * ‘vonkries’
      * von Kries whitepoint adaptation
      * ‘identity’
      * identity whitepoint adaptation (i.e. no whitepoint adaptation)
      */
    iall ?: string | number;
    /** Override all input properties at once. Same accepted values as all. */
    ispace ?: string | number;
    /** Override input colorspace. Same accepted values as space. */
    iprimaries ?: string | number;
    /** Override input color primaries. Same accepted values as primaries. */
    itrc ?: string | number;
    /** Override input transfer characteristics. Same accepted values as trc. */
    irange ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.28 colorspace
  * Convert colorspace, transfer characteristics or color primaries. Input video needs to have an even size.
  * 
  * The filter accepts the following options:
  */
export function videoColorSpace ( inputs : Stream | Stream[] = [], parameters : VideoColorSpaceParameters = {} as any ) {
    return new VideoColorSpace( inputs, parameters );
}