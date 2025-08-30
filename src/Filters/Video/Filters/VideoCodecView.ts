import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.21 codecview
  * Visualize information exported by some codecs.
  * 
  * Some codecs can export information through frames using side-data or other means. For example, some MPEG based codecs export motion vectors through the
  * export_mvs flag in the codec flags2 option.
  * 
  * The filter accepts the following option:
  */
export class VideoCodecView extends Filter<VideoCodecViewParameters> {
    outputs : FilterStreamRef<VideoCodecViewParameters, VideoCodecView>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCodecViewParameters = {} as any ) {
        super( inputs, 'codecview', parameters );
    }
}

export interface VideoCodecViewParameters {
    /**
      * Set motion vectors to visualize.
      * Available flags for mv are:
      * ‘pf’
      * forward predicted MVs of P-frames
      * ‘bf’
      * forward predicted MVs of B-frames
      * ‘bb’
      * backward predicted MVs of B-frames
      */
    mv ?: string | number;
    /** Display quantization parameters using the chroma planes. */
    qp ?: string | number;
    /**
      * Set motion vectors type to visualize. Includes MVs from all frames unless specified by frame_type option.
      * Available flags for mv_type are:
      * ‘fp’
      * forward predicted MVs
      * ‘bp’
      * backward predicted MVs
      * @aliases mvt
      */
    mv_type ?: string | number;
    /**
      * Set motion vectors type to visualize. Includes MVs from all frames unless specified by frame_type option.
      * Available flags for mv_type are:
      * ‘fp’
      * forward predicted MVs
      * ‘bp’
      * backward predicted MVs
      * @aliasof mv_type
      */
    mvt ?: string | number;
    /**
      * Set frame type to visualize motion vectors of.
      * Available flags for frame_type are:
      * ‘if’
      * intra-coded frames (I-frames)
      * ‘pf’
      * predicted frames (P-frames)
      * ‘bf’
      * bi-directionally predicted frames (B-frames)
      * @aliases ft
      */
    frame_type ?: string | number;
    /**
      * Set frame type to visualize motion vectors of.
      * Available flags for frame_type are:
      * ‘if’
      * intra-coded frames (I-frames)
      * ‘pf’
      * predicted frames (P-frames)
      * ‘bf’
      * bi-directionally predicted frames (B-frames)
      * @aliasof frame_type
      */
    ft ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.21 codecview
  * Visualize information exported by some codecs.
  * 
  * Some codecs can export information through frames using side-data or other means. For example, some MPEG based codecs export motion vectors through the
  * export_mvs flag in the codec flags2 option.
  * 
  * The filter accepts the following option:
  */
export function videoCodecView ( inputs : Stream | Stream[] = [], parameters : VideoCodecViewParameters = {} as any ) {
    return new VideoCodecView( inputs, parameters );
}