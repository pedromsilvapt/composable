import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.209 transpose_npp
  * Transpose rows with columns in the input video and optionally flip it. For more in depth examples see the transpose video filter, which shares mostly the same options.
  * 
  * It accepts the following parameters:
  */
export class VideoTransposeNpp extends Filter<VideoTransposeNppParameters> {
    outputs : FilterStreamRef<VideoTransposeNppParameters, VideoTransposeNpp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTransposeNppParameters = {} as any ) {
        super( inputs, 'transpose_npp', parameters );
    }
}

export interface VideoTransposeNppParameters {
    /**
      * Specify the transposition direction.
      * Can assume the following values:
      * ‘cclock_flip’
      * Rotate by 90 degrees counterclockwise and vertically flip. (default)
      * ‘clock’
      * Rotate by 90 degrees clockwise.
      * ‘cclock’
      * Rotate by 90 degrees counterclockwise.
      * ‘clock_flip’
      * Rotate by 90 degrees clockwise and vertically flip.
      */
    dir ?: string | number;
    /**
      * Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values:
      * ‘none’
      * Always apply transposition. (default)
      * ‘portrait’
      * Preserve portrait geometry (when height >= width).
      * ‘landscape’
      * Preserve landscape geometry (when width >= height).
      */
    passthrough ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.209 transpose_npp
  * Transpose rows with columns in the input video and optionally flip it. For more in depth examples see the transpose video filter, which shares mostly the same options.
  * 
  * It accepts the following parameters:
  */
export function videoTransposeNpp ( inputs : Stream | Stream[] = [], parameters : VideoTransposeNppParameters = {} as any ) {
    return new VideoTransposeNpp( inputs, parameters );
}