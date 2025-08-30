import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.165 removegrain
  * The removegrain filter is a spatial denoiser for progressive video.
  */
export class VideoRemoveGrain extends Filter<VideoRemoveGrainParameters> {
    outputs : FilterStreamRef<VideoRemoveGrainParameters, VideoRemoveGrain>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRemoveGrainParameters = {} as any ) {
        super( inputs, 'removegrain', parameters );
    }
}

export interface VideoRemoveGrainParameters {
    /** Set mode for the first plane. */
    m0 ?: string | number;
    /** Set mode for the second plane. */
    m1 ?: string | number;
    /** Set mode for the third plane. */
    m2 ?: string | number;
    /** Set mode for the fourth plane. */
    m3 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.165 removegrain
  * The removegrain filter is a spatial denoiser for progressive video.
  */
export function videoRemoveGrain ( inputs : Stream | Stream[] = [], parameters : VideoRemoveGrainParameters = {} as any ) {
    return new VideoRemoveGrain( inputs, parameters );
}