import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.49 derain
  * Remove the rain in the input image/video by applying the derain methods based on convolutional neural networks. Supported models:
  * 
  * 
  * Recurrent Squeeze-and-Excitation Context Aggregation Net (RESCAN). See http://openaccess.thecvf.com/content_ECCV_2018/papers/Xia_Li_Recurrent_Squeeze-and-Excitation_Context_ECCV_2018_paper.pdf.
  * 
  * 
  * Training as well as model generation scripts are provided in the repository at https://github.com/XueweiMeng/derain_filter.git.
  * 
  * Native model files (.model) can be generated from TensorFlow model files (.pb) by using tools/python/convert.py
  * 
  * The filter accepts the following options:
  */
export class VideoDerain extends Filter<VideoDerainParameters> {
    outputs : FilterStreamRef<VideoDerainParameters, VideoDerain>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDerainParameters = {} as any ) {
        super( inputs, 'derain', parameters );
    }
}

export interface VideoDerainParameters {
    /**
      * Specify which filter to use. This option accepts the following values:
      * ‘derain’
      * Derain filter. To conduct derain filter, you need to use a derain model.
      * ‘dehaze’
      * Dehaze filter. To conduct dehaze filter, you need to use a dehaze model.
      * Default value is ‘derain’.
      */
    filter_type ?: string | number;
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
    /** Set path to model file specifying network architecture and its parameters. Note that different backends use different file formats. TensorFlow and native backend can load files for only its format. */
    model ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.49 derain
  * Remove the rain in the input image/video by applying the derain methods based on convolutional neural networks. Supported models:
  * 
  * 
  * Recurrent Squeeze-and-Excitation Context Aggregation Net (RESCAN). See http://openaccess.thecvf.com/content_ECCV_2018/papers/Xia_Li_Recurrent_Squeeze-and-Excitation_Context_ECCV_2018_paper.pdf.
  * 
  * 
  * Training as well as model generation scripts are provided in the repository at https://github.com/XueweiMeng/derain_filter.git.
  * 
  * Native model files (.model) can be generated from TensorFlow model files (.pb) by using tools/python/convert.py
  * 
  * The filter accepts the following options:
  */
export function videoDerain ( inputs : Stream | Stream[] = [], parameters : VideoDerainParameters = {} as any ) {
    return new VideoDerain( inputs, parameters );
}