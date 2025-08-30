import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.13 aemphasis
  * Audio emphasis filter creates or restores material directly taken from LPs or emphased CDs with different filter curves. E.g. to store music on vinyl the signal has to be altered by a filter first to even out the disadvantages of this recording medium. Once the material is played back the inverse filter has to be applied to restore the distortion of the frequency response.
  * 
  * The filter accepts the following options:
  */
export class AudioEmphasis extends Filter<AudioEmphasisParameters> {
    outputs : FilterStreamRef<AudioEmphasisParameters, AudioEmphasis>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioEmphasisParameters = {} as any ) {
        super( inputs, 'aemphasis', parameters );
    }
}

export interface AudioEmphasisParameters {
    /** Set input gain. */
    level_in ?: string | number;
    /** Set output gain. */
    level_out ?: string | number;
    /** Set filter mode. For restoring material use reproduction mode, otherwise use production mode. Default is reproduction mode. */
    mode ?: string | number;
    /**
      * Set filter type. Selects medium. Can be one of the following:
      * col
      * select Columbia.
      * emi
      * select EMI.
      * bsi
      * select BSI (78RPM).
      * riaa
      * select RIAA.
      * cd
      * select Compact Disc (CD).
      * 50fm
      * select 50µs (FM).
      * 75fm
      * select 75µs (FM).
      * 50kf
      * select 50µs (FM-KF).
      * 75kf
      * select 75µs (FM-KF).
      */
    type ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.13 aemphasis
  * Audio emphasis filter creates or restores material directly taken from LPs or emphased CDs with different filter curves. E.g. to store music on vinyl the signal has to be altered by a filter first to even out the disadvantages of this recording medium. Once the material is played back the inverse filter has to be applied to restore the distortion of the frequency response.
  * 
  * The filter accepts the following options:
  */
export function audioEmphasis ( inputs : Stream | Stream[] = [], parameters : AudioEmphasisParameters = {} as any ) {
    return new AudioEmphasis( inputs, parameters );
}