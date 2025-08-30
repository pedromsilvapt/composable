import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.9 openclsrc
  * Generate video using an OpenCL program.
  */
export class VideoOpenCLSrc extends Filter<VideoOpenCLSrcParameters> {
    outputs : FilterStreamRef<VideoOpenCLSrcParameters, VideoOpenCLSrc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoOpenCLSrcParameters = {} as any ) {
        super( inputs, 'openclsrc', parameters );
    }
}

export interface VideoOpenCLSrcParameters {
    /** OpenCL program source file. */
    source ?: string | number;
    /** Kernel name in program. */
    kernel ?: string | number;
    /**
      * Size of frames to generate. This must be set.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Size of frames to generate. This must be set.
      * @aliasof size
      */
    s ?: string | number;
    /** Pixel format to use for the generated frames. This must be set. */
    format ?: string | number;
    /**
      * Number of frames generated every second. Default value is ’25’.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Number of frames generated every second. Default value is ’25’.
      * @aliasof rate
      */
    r ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.9 openclsrc
  * Generate video using an OpenCL program.
  */
export function videoOpenCLSrc ( inputs : Stream | Stream[] = [], parameters : VideoOpenCLSrcParameters = {} as any ) {
    return new VideoOpenCLSrc( inputs, parameters );
}