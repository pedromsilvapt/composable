import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.3 agraphmonitor
  * See graphmonitor.
  */
export class AGraphMonitor extends Filter<AGraphMonitorParameters> {
    outputs : FilterStreamRef<AGraphMonitorParameters, AGraphMonitor>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AGraphMonitorParameters = {} as any ) {
        super( inputs, 'agraphmonitor', parameters );
    }
}

export interface AGraphMonitorParameters {


    [key : string] : string | number;
}

/**
  * 16.3 agraphmonitor
  * See graphmonitor.
  */
export function aGraphMonitor ( inputs : Stream | Stream[] = [], parameters : AGraphMonitorParameters = {} as any ) {
    return new AGraphMonitor( inputs, parameters );
}