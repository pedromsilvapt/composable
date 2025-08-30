import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.18 settb
  * Set the timebase to use for the output frames timestamps. It is mainly useful for testing timebase configuration.
  * 
  * It accepts the following parameters:
  */
export class Settb extends Filter<SettbParameters> {
    outputs : FilterStreamRef<SettbParameters, Settb>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : SettbParameters = {} as any ) {
        super( inputs, 'settb', parameters );
    }
}

export interface SettbParameters {
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
  * 16.18 settb
  * Set the timebase to use for the output frames timestamps. It is mainly useful for testing timebase configuration.
  * 
  * It accepts the following parameters:
  */
export function settb ( inputs : Stream | Stream[] = [], parameters : SettbParameters = {} as any ) {
    return new Settb( inputs, parameters );
}