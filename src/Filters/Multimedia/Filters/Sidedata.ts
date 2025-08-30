import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.27 sidedata
  * Delete frame side data, or select frames based on it.
  * 
  * This filter accepts the following options:
  */
export class Sidedata extends Filter<SidedataParameters> {
    outputs : FilterStreamRef<SidedataParameters, Sidedata>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : SidedataParameters = {} as any ) {
        super( inputs, 'sidedata', parameters );
    }
}

export interface SidedataParameters {
    /**
      * Set mode of operation of the filter.
      * Can be one of the following:
      * ‘select’
      * Select every frame with side data of type.
      * ‘delete’
      * Delete side data of type. If type is not set, delete all side data in the frame.
      */
    mode ?: string | number;
    /**
      * Set side data type used with all modes. Must be set for select mode. For the list of frame side data types, refer to the AVFrameSideDataType enum in libavutil/frame.h. For example, to choose
      * AV_FRAME_DATA_PANSCAN side data, you must specify PANSCAN.
      */
    type ?: string | number;

    [key : string] : string | number;
}

/**
  * 16.27 sidedata
  * Delete frame side data, or select frames based on it.
  * 
  * This filter accepts the following options:
  */
export function sidedata ( inputs : Stream | Stream[] = [], parameters : SidedataParameters = {} as any ) {
    return new Sidedata( inputs, parameters );
}