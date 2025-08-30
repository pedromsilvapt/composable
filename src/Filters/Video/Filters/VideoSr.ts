import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.191 sr
  * Scale the input by applying one of the super-resolution methods based on convolutional neural networks. Supported models:
  * 
  * 
  * Super-Resolution Convolutional Neural Network model (SRCNN). See https://arxiv.org/abs/1501.00092.
  * 
  * 
  * Efficient Sub-Pixel Convolutional Neural Network model (ESPCN). See https://arxiv.org/abs/1609.05158.
  * 
  * 
  * Training scripts as well as scripts for model file (.pb) saving can be found at
  * https://github.com/XueweiMeng/sr/tree/sr_dnn_native. Original repository is at https://github.com/HighVoltageRocknRoll/sr.git.
  * 
  * Native model files (.model) can be generated from TensorFlow model files (.pb) by using tools/python/convert.py
  * 
  * The filter accepts the following options:
  */
export class VideoSr extends Filter<VideoSrParameters> {
    outputs : FilterStreamRef<VideoSrParameters, VideoSr>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSrParameters = {} as any ) {
        super( inputs, 'sr', parameters );
    }
}

export interface VideoSrParameters {
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
    /** Set path to model file specifying network architecture and its parameters. Note that different backends use different file formats. TensorFlow backend can load files for both formats, while native backend can load files for only its format. */
    model ?: string | number;
    /** Set scale factor for SRCNN model. Allowed values are 2, 3 and 4. Default value is 2. Scale factor is necessary for SRCNN model, because it accepts input upscaled using bicubic upscaling with proper scale factor. */
    scale_factor ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.191 sr
  * Scale the input by applying one of the super-resolution methods based on convolutional neural networks. Supported models:
  * 
  * 
  * Super-Resolution Convolutional Neural Network model (SRCNN). See https://arxiv.org/abs/1501.00092.
  * 
  * 
  * Efficient Sub-Pixel Convolutional Neural Network model (ESPCN). See https://arxiv.org/abs/1609.05158.
  * 
  * 
  * Training scripts as well as scripts for model file (.pb) saving can be found at
  * https://github.com/XueweiMeng/sr/tree/sr_dnn_native. Original repository is at https://github.com/HighVoltageRocknRoll/sr.git.
  * 
  * Native model files (.model) can be generated from TensorFlow model files (.pb) by using tools/python/convert.py
  * 
  * The filter accepts the following options:
  */
export function videoSr ( inputs : Stream | Stream[] = [], parameters : VideoSrParameters = {} as any ) {
    return new VideoSr( inputs, parameters );
}