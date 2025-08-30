import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.55 dnn_processing
  * Do image processing with deep neural networks. It works together with another filter which converts the pixel format of the Frame to what the dnn network requires.
  * 
  * The filter accepts the following options:
  */
export class VideoDnnProcessing extends Filter<VideoDnnProcessingParameters> {
    outputs : FilterStreamRef<VideoDnnProcessingParameters, VideoDnnProcessing>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDnnProcessingParameters = {} as any ) {
        super( inputs, 'dnn_processing', parameters );
    }
}

export interface VideoDnnProcessingParameters {
    /**
      * Specify which DNN backend to use for model loading and execution. This option accepts the following values:
      * ‘native’
      * Native implementation of DNN loading and execution.
      * ‘tensorflow’
      * TensorFlow backend. To enable this backend you need to install the TensorFlow for C library (see
      * https://www.tensorflow.org/install/install_c) and configure FFmpeg with
      * --enable-libtensorflow
      * Default value is ‘native’.
      */
    dnn_backend ?: string | number;
    /**
      * Set path to model file specifying network architecture and its parameters. Note that different backends use different file formats. TensorFlow and native backend can load files for only its format.
      * Native model file (.model) can be generated from TensorFlow model file (.pb) by using tools/python/convert.py
      */
    model ?: string | number;
    /** Set the input name of the dnn network. */
    input ?: string | number;
    /** Set the output name of the dnn network. */
    output ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.55 dnn_processing
  * Do image processing with deep neural networks. It works together with another filter which converts the pixel format of the Frame to what the dnn network requires.
  * 
  * The filter accepts the following options:
  */
export function videoDnnProcessing ( inputs : Stream | Stream[] = [], parameters : VideoDnnProcessingParameters = {} as any ) {
    return new VideoDnnProcessing( inputs, parameters );
}