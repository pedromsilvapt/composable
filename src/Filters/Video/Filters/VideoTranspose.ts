import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.208 transpose
  * Transpose rows with columns in the input video and optionally flip it.
  * 
  * It accepts the following parameters:
  */
export class VideoTranspose extends Filter<VideoTransposeParameters> {
    outputs : FilterStreamRef<VideoTransposeParameters, VideoTranspose>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTransposeParameters = {} as any ) {
        super( inputs, 'transpose', parameters );
    }
}

export interface VideoTransposeParameters {
    /**
      * Specify the transposition direction.
      * Can assume the following values:
      * ‘0, 4, cclock_flip’
      * Rotate by 90 degrees counterclockwise and vertically flip (default), that is:
      * L.R     L.l
      * . . ->  . .
      * l.r     R.r
      * ‘1, 5, clock’
      * Rotate by 90 degrees clockwise, that is:
      * L.R     l.L
      * . . ->  . .
      * l.r     r.R
      * ‘2, 6, cclock’
      * Rotate by 90 degrees counterclockwise, that is:
      * L.R     R.r
      * . . ->  . .
      * l.r     L.l
      * ‘3, 7, clock_flip’
      * Rotate by 90 degrees clockwise and vertically flip, that is:
      * L.R     r.R
      * . . ->  . .
      * l.r     l.L
      * For values between 4-7, the transposition is only done if the input video geometry is portrait and not landscape. These values are deprecated, the passthrough option should be used instead.
      * Numerical values are deprecated, and should be dropped in favor of symbolic constants.
      */
    dir ?: string | number;
    /**
      * Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values:
      * ‘none’
      * Always apply transposition.
      * ‘portrait’
      * Preserve portrait geometry (when height >= width).
      * ‘landscape’
      * Preserve landscape geometry (when width >= height).
      * Default value is none.
      */
    passthrough ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.208 transpose
  * Transpose rows with columns in the input video and optionally flip it.
  * 
  * It accepts the following parameters:
  */
export function videoTranspose ( inputs : Stream | Stream[] = [], parameters : VideoTransposeParameters = {} as any ) {
    return new VideoTranspose( inputs, parameters );
}