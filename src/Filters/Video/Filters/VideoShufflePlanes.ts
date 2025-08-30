import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.185 shuffleplanes
  * Reorder and/or duplicate video planes.
  * 
  * It accepts the following parameters:
  */
export class VideoShufflePlanes extends Filter<VideoShufflePlanesParameters> {
    outputs : FilterStreamRef<VideoShufflePlanesParameters, VideoShufflePlanes>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoShufflePlanesParameters = {} as any ) {
        super( inputs, 'shuffleplanes', parameters );
    }
}

export interface VideoShufflePlanesParameters {
    /** The index of the input plane to be used as the first output plane. */
    map0 ?: string | number;
    /** The index of the input plane to be used as the second output plane. */
    map1 ?: string | number;
    /** The index of the input plane to be used as the third output plane. */
    map2 ?: string | number;
    /** The index of the input plane to be used as the fourth output plane. */
    map3 ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.185 shuffleplanes
  * Reorder and/or duplicate video planes.
  * 
  * It accepts the following parameters:
  */
export function videoShufflePlanes ( inputs : Stream | Stream[] = [], parameters : VideoShufflePlanesParameters = {} as any ) {
    return new VideoShufflePlanes( inputs, parameters );
}