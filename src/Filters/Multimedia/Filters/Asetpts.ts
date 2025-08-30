import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.16 asetpts
  * Change the PTS (presentation timestamp) of the input frames.
  * 
  * setpts works on video frames, asetpts on audio frames.
  * 
  * This filter accepts the following options:
  */
export class Asetpts extends Filter<AsetptsParameters> {
    outputs : FilterStreamRef<AsetptsParameters, Asetpts>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AsetptsParameters = {} as any ) {
        super( inputs, 'asetpts', parameters );
    }
}

export interface AsetptsParameters {
    /** The expression which is evaluated for each frame to construct its timestamp. */
    expr ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.16 asetpts
  * Change the PTS (presentation timestamp) of the input frames.
  * 
  * setpts works on video frames, asetpts on audio frames.
  * 
  * This filter accepts the following options:
  */
export function asetpts ( inputs : Stream | Stream[] = [], parameters : AsetptsParameters = {} as any ) {
    return new Asetpts( inputs, parameters );
}