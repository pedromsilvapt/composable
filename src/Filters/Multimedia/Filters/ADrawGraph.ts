import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.2 adrawgraph
  * Draw a graph using input audio metadata.
  * 
  * See drawgraph
  */
export class ADrawGraph extends Filter<ADrawGraphParameters> {
    outputs : FilterStreamRef<ADrawGraphParameters, ADrawGraph>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : ADrawGraphParameters = {} as any ) {
        super( inputs, 'adrawgraph', parameters );
    }
}

export interface ADrawGraphParameters {


    [key : string] : string | number;
}

/**
  * 16.2 adrawgraph
  * Draw a graph using input audio metadata.
  * 
  * See drawgraph
  */
export function aDrawGraph ( inputs : Stream | Stream[] = [], parameters : ADrawGraphParameters = {} as any ) {
    return new ADrawGraph( inputs, parameters );
}