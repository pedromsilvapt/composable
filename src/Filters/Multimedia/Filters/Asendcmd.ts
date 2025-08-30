import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.15 asendcmd
  * Send commands to filters in the filtergraph.
  * 
  * These filters read commands to be sent to other filters in the filtergraph.
  * 
  * sendcmd must be inserted between two video filters,
  * asendcmd must be inserted between two audio filters, but apart from that they act the same way.
  * 
  * The specification of commands can be provided in the filter arguments with the commands option, or in a file specified by the
  * filename option.
  * 
  * These filters accept the following options:
  */
export class Asendcmd extends Filter<AsendcmdParameters> {
    outputs : FilterStreamRef<AsendcmdParameters, Asendcmd>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AsendcmdParameters = {} as any ) {
        super( inputs, 'asendcmd', parameters );
    }
}

export interface AsendcmdParameters {
    /**
      * Set the commands to be read and sent to the other filters.
      * @aliases c
      */
    commands ?: string | number;
    /**
      * Set the commands to be read and sent to the other filters.
      * @aliasof commands
      */
    c ?: string | number;
    /**
      * Set the filename of the commands to be read and sent to the other filters.
      * @aliases f
      */
    filename ?: string | number;
    /**
      * Set the filename of the commands to be read and sent to the other filters.
      * @aliasof filename
      */
    f ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.15 asendcmd
  * Send commands to filters in the filtergraph.
  * 
  * These filters read commands to be sent to other filters in the filtergraph.
  * 
  * sendcmd must be inserted between two video filters,
  * asendcmd must be inserted between two audio filters, but apart from that they act the same way.
  * 
  * The specification of commands can be provided in the filter arguments with the commands option, or in a file specified by the
  * filename option.
  * 
  * These filters accept the following options:
  */
export function asendcmd ( inputs : Stream | Stream[] = [], parameters : AsendcmdParameters = {} as any ) {
    return new Asendcmd( inputs, parameters );
}