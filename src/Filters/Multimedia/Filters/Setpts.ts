import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.16 setpts
  * Change the PTS (presentation timestamp) of the input frames.
  * 
  * setpts works on video frames, asetpts on audio frames.
  * 
  * This filter accepts the following options:
  */
export class Setpts extends Filter<SetptsParameters> {
    outputs : FilterStreamRef<SetptsParameters, Setpts>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : SetptsParameters = {} as any ) {
        super( inputs, 'setpts', parameters );
    }
}

export interface SetptsParameters {
    /** The expression which is evaluated for each frame to construct its timestamp. */
    expr ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.16 setpts
  * Change the PTS (presentation timestamp) of the input frames.
  * 
  * setpts works on video frames, asetpts on audio frames.
  * 
  * This filter accepts the following options:
  */
export function setpts ( inputs : Stream | Stream[] = [], parameters : SetptsParameters = {} as any ) {
    return new Setpts( inputs, parameters );
}