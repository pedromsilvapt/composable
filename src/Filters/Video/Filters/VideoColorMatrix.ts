import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.27 colormatrix
  * Convert color matrix.
  * 
  * The filter accepts the following options:
  */
export class VideoColorMatrix extends Filter<VideoColorMatrixParameters> {
    outputs : FilterStreamRef<VideoColorMatrixParameters, VideoColorMatrix>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoColorMatrixParameters = {} as any ) {
        super( inputs, 'colormatrix', parameters );
    }
}

export interface VideoColorMatrixParameters {
    /**
      * Specify the source and destination color matrix. Both values must be specified.
      * The accepted values are:
      * ‘bt709’
      * BT.709
      * ‘fcc’
      * FCC
      * ‘bt601’
      * BT.601
      * ‘bt470’
      * BT.470
      * ‘bt470bg’
      * BT.470BG
      * ‘smpte170m’
      * SMPTE-170M
      * ‘smpte240m’
      * SMPTE-240M
      * ‘bt2020’
      * BT.2020
      */
    src ?: string | number;
    dst ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.27 colormatrix
  * Convert color matrix.
  * 
  * The filter accepts the following options:
  */
export function videoColorMatrix ( inputs : Stream | Stream[] = [], parameters : VideoColorMatrixParameters = {} as any ) {
    return new VideoColorMatrix( inputs, parameters );
}