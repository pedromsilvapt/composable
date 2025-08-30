import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.12 perms
  * Set read/write permissions for the output frames.
  * 
  * These filters are mainly aimed at developers to test direct path in the following filter in the filtergraph.
  * 
  * The filters accept the following options:
  */
export class Perms extends Filter<PermsParameters> {
    outputs : FilterStreamRef<PermsParameters, Perms>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : PermsParameters = {} as any ) {
        super( inputs, 'perms', parameters );
    }
}

export interface PermsParameters {
    /**
      * Select the permissions mode.
      * It accepts the following values:
      * ‘none’
      * Do nothing. This is the default.
      * ‘ro’
      * Set all the output frames read-only.
      * ‘rw’
      * Set all the output frames directly writable.
      * ‘toggle’
      * Make the frame read-only if writable, and writable if read-only.
      * ‘random’
      * Set each output frame read-only or writable randomly.
      */
    mode ?: string | number;
    /**
      * Set the seed for the random mode, must be an integer included between
      * 0 and UINT32_MAX. If not specified, or if explicitly set to
      * -1, the filter will try to use a good random seed on a best effort basis.
      */
    seed ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.12 perms
  * Set read/write permissions for the output frames.
  * 
  * These filters are mainly aimed at developers to test direct path in the following filter in the filtergraph.
  * 
  * The filters accept the following options:
  */
export function perms ( inputs : Stream | Stream[] = [], parameters : PermsParameters = {} as any ) {
    return new Perms( inputs, parameters );
}