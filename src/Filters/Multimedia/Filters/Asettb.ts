import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.18 asettb
  * Set the timebase to use for the output frames timestamps. It is mainly useful for testing timebase configuration.
  * 
  * It accepts the following parameters:
  */
export class Asettb extends Filter<AsettbParameters> {
    outputs : FilterStreamRef<AsettbParameters, Asettb>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AsettbParameters = {} as any ) {
        super( inputs, 'asettb', parameters );
    }
}

export interface AsettbParameters {
    /**
      * The expression which is evaluated into the output timebase.
      * @aliases tb
      */
    expr ?: string | number;
    /**
      * The expression which is evaluated into the output timebase.
      * @aliasof expr
      */
    tb ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.18 asettb
  * Set the timebase to use for the output frames timestamps. It is mainly useful for testing timebase configuration.
  * 
  * It accepts the following parameters:
  */
export function asettb ( inputs : Stream | Stream[] = [], parameters : AsettbParameters = {} as any ) {
    return new Asettb( inputs, parameters );
}