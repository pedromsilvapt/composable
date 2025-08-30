import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 17.1 amovie
  * This is the same as movie source, except it selects an audio stream by default.
  */
export class AudioMovie extends Filter<AudioMovieParameters> {
    outputs : FilterStreamRef<AudioMovieParameters, AudioMovie>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioMovieParameters = {} as any ) {
        super( inputs, 'amovie', parameters );
    }
}

export interface AudioMovieParameters {


    [key : string] : string | number;
}

/**
  * 17.1 amovie
  * This is the same as movie source, except it selects an audio stream by default.
  */
export function audioMovie ( inputs : Stream | Stream[] = [], parameters : AudioMovieParameters = {} as any ) {
    return new AudioMovie( inputs, parameters );
}