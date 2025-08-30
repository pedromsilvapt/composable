import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.135 nnedi
  * Deinterlace video using neural network edge directed interpolation.
  * 
  * This filter accepts the following options:
  */
export class VideoNnedi extends Filter<VideoNnediParameters> {
    outputs : FilterStreamRef<VideoNnediParameters, VideoNnedi>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoNnediParameters = {} as any ) {
        super( inputs, 'nnedi', parameters );
    }
}

export interface VideoNnediParameters {
    /** Mandatory option, without binary file filter can not work. Currently file can be found here: https://github.com/dubhater/vapoursynth-nnedi3/blob/master/src/nnedi3_weights.bin */
    weights ?: string | number;
    /** Set which frames to deinterlace, by default it is all. Can be all or interlaced. */
    deint ?: string | number;
    /**
      * Set mode of operation.
      * Can be one of the following:
      * ‘af’
      * Use frame flags, both fields.
      * ‘a’
      * Use frame flags, single field.
      * ‘t’
      * Use top field only.
      * ‘b’
      * Use bottom field only.
      * ‘tf’
      * Use both fields, top first.
      * ‘bf’
      * Use both fields, bottom first.
      */
    field ?: string | number;
    /** Set which planes to process, by default filter process all frames. */
    planes ?: string | number;
    /**
      * Set size of local neighborhood around each pixel, used by the predictor neural network.
      * Can be one of the following:
      * ‘s8x6’
      * ‘s16x6’
      * ‘s32x6’
      * ‘s48x6’
      * ‘s8x4’
      * ‘s16x4’
      * ‘s32x4’
      */
    nsize ?: string | number;
    /**
      * Set the number of neurons in predictor neural network. Can be one of the following:
      * ‘n16’
      * ‘n32’
      * ‘n64’
      * ‘n128’
      * ‘n256’
      */
    nns ?: string | number;
    /**
      * Controls the number of different neural network predictions that are blended together to compute the final output value. Can be fast, default or
      * slow.
      */
    qual ?: string | number;
    /**
      * Set which set of weights to use in the predictor. Can be one of the following:
      * ‘a’
      * weights trained to minimize absolute error
      * ‘s’
      * weights trained to minimize squared error
      */
    etype ?: string | number;
    /**
      * Controls whether or not the prescreener neural network is used to decide which pixels should be processed by the predictor neural network and which can be handled by simple cubic interpolation. The prescreener is trained to know whether cubic interpolation will be sufficient for a pixel or whether it should be predicted by the predictor nn. The computational complexity of the prescreener nn is much less than that of the predictor nn. Since most pixels can be handled by cubic interpolation, using the prescreener generally results in much faster processing. The prescreener is pretty accurate, so the difference between using it and not using it is almost always unnoticeable.
      * Can be one of the following:
      * ‘none’
      * ‘original’
      * ‘new’
      * Default is new.
      */
    pscrn ?: string | number;
    /** Set various debugging flags. */
    fapprox ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.135 nnedi
  * Deinterlace video using neural network edge directed interpolation.
  * 
  * This filter accepts the following options:
  */
export function videoNnedi ( inputs : Stream | Stream[] = [], parameters : VideoNnediParameters = {} as any ) {
    return new VideoNnedi( inputs, parameters );
}