import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.7 bench
  * Benchmark part of a filtergraph.
  * 
  * The filter accepts the following options:
  */
export class Bench extends Filter<BenchParameters> {
    outputs : FilterStreamRef<BenchParameters, Bench>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : BenchParameters = {} as any ) {
        super( inputs, 'bench', parameters );
    }
}

export interface BenchParameters {
    /**
      * Start or stop a timer.
      * Available values are:
      * ‘start’
      * Get the current time, set it as frame metadata (using the key
      * lavfi.bench.start_time), and forward the frame to the next filter.
      * ‘stop’
      * Get the current time and fetch the lavfi.bench.start_time metadata from the input frame metadata to get the time difference. Time difference, average, maximum and minimum time (respectively t, avg, max and
      * min) are then printed. The timestamps are expressed in seconds.
      */
    action ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.7 bench
  * Benchmark part of a filtergraph.
  * 
  * The filter accepts the following options:
  */
export function bench ( inputs : Stream | Stream[] = [], parameters : BenchParameters = {} as any ) {
    return new Bench( inputs, parameters );
}