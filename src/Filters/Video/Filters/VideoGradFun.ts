import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.88 gradfun
  * Fix the banding artifacts that are sometimes introduced into nearly flat regions by truncation to 8-bit color depth. Interpolate the gradients that should go where the bands are, and dither them.
  * 
  * It is designed for playback only. Do not use it prior to lossy compression, because compression tends to lose the dither and bring back the bands.
  * 
  * It accepts the following parameters:
  */
export class VideoGradFun extends Filter<VideoGradFunParameters> {
    outputs : FilterStreamRef<VideoGradFunParameters, VideoGradFun>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoGradFunParameters = {} as any ) {
        super( inputs, 'gradfun', parameters );
    }
}

export interface VideoGradFunParameters {
    /** The maximum amount by which the filter will change any one pixel. This is also the threshold for detecting nearly flat regions. Acceptable values range from .51 to 64; the default value is 1.2. Out-of-range values will be clipped to the valid range. */
    strength ?: string | number;
    /** The neighborhood to fit the gradient to. A larger radius makes for smoother gradients, but also prevents the filter from modifying the pixels near detailed regions. Acceptable values are 8-32; the default value is 16. Out-of-range values will be clipped to the valid range. */
    radius ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.88 gradfun
  * Fix the banding artifacts that are sometimes introduced into nearly flat regions by truncation to 8-bit color depth. Interpolate the gradients that should go where the bands are, and dither them.
  * 
  * It is designed for playback only. Do not use it prior to lossy compression, because compression tends to lose the dither and bring back the bands.
  * 
  * It accepts the following parameters:
  */
export function videoGradFun ( inputs : Stream | Stream[] = [], parameters : VideoGradFunParameters = {} as any ) {
    return new VideoGradFun( inputs, parameters );
}