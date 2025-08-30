import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.40 deband
  * Remove banding artifacts from input video. It works by replacing banded pixels with average value of referenced pixels.
  * 
  * The filter accepts the following options:
  */
export class VideoDeband extends Filter<VideoDebandParameters> {
    outputs : FilterStreamRef<VideoDebandParameters, VideoDeband>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDebandParameters = {} as any ) {
        super( inputs, 'deband', parameters );
    }
}

export interface VideoDebandParameters {
    /** Set banding detection threshold for each plane. Default is 0.02. Valid range is 0.00003 to 0.5. If difference between current pixel and reference pixel is less than threshold, it will be considered as banded. */
    '1thr' ?: string | number;
    /** Banding detection range in pixels. Default is 16. If positive, random number in range 0 to set value will be used. If negative, exact absolute value will be used. The range defines square of four pixels around current pixel. */
    '2thr' ?: string | number;
    /** Set direction in radians from which four pixel will be compared. If positive, random direction from 0 to set direction will be picked. If negative, exact of absolute value will be picked. For example direction 0, -PI or -2*PI radians will pick only pixels on same row and -PI/2 will pick only pixels on same column. */
    '3thr' ?: string | number;
    /** If enabled, current pixel is compared with average value of all four surrounding pixels. The default is enabled. If disabled current pixel is compared with all four surrounding pixels. The pixel is considered banded if only all four differences with surrounding pixels are less than threshold. */
    '4thr' ?: string | number;
    /**
      * If enabled, current pixel is changed if and only if all pixel components are banded, e.g. banding detection threshold is triggered for all color components. The default is disabled.
      * @aliases r
      */
    range ?: string | number;
    /**
      * If enabled, current pixel is changed if and only if all pixel components are banded, e.g. banding detection threshold is triggered for all color components. The default is disabled.
      * @aliasof range
      */
    r ?: string | number;
    /** @aliases d */
    direction ?: string | number;
    /** @aliasof direction */
    d ?: string | number;
    /** @aliases b */
    blur ?: string | number;
    /** @aliasof blur */
    b ?: string | number;
    /** @aliases c */
    coupling ?: string | number;
    /** @aliasof coupling */
    c ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.40 deband
  * Remove banding artifacts from input video. It works by replacing banded pixels with average value of referenced pixels.
  * 
  * The filter accepts the following options:
  */
export function videoDeband ( inputs : Stream | Stream[] = [], parameters : VideoDebandParameters = {} as any ) {
    return new VideoDeband( inputs, parameters );
}