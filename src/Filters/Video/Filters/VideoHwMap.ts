import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.97 hwmap
  * Map hardware frames to system memory or to another device.
  * 
  * This filter has several different modes of operation; which one is used depends on the input and output formats:
  * 
  * 
  * Hardware frame input, normal frame output
  * 
  * Map the input frames to system memory and pass them to the output. If the original hardware frame is later required (for example, after overlaying something else on part of it), the hwmap filter can be used again in the next mode to retrieve it.
  * 
  * 
  * Normal frame input, hardware frame output
  * 
  * If the input is actually a software-mapped hardware frame, then unmap it - that is, return the original hardware frame.
  * 
  * Otherwise, a device must be provided. Create new hardware surfaces on that device for the output, then map them back to the software format at the input and give those frames to the preceding filter. This will then act like the
  * hwupload filter, but may be able to avoid an additional copy when the input is already in a compatible format.
  * 
  * 
  * Hardware frame input and output
  * 
  * A device must be supplied for the output, either directly or with the
  * derive_device option. The input and output devices must be of different types and compatible - the exact meaning of this is system-dependent, but typically it means that they must refer to the same underlying hardware context (for example, refer to the same graphics card).
  * 
  * If the input frames were originally created on the output device, then unmap to retrieve the original frames.
  * 
  * Otherwise, map the frames to the output device - create new hardware frames on the output corresponding to the frames on the input.
  * 
  * 
  * 
  * The following additional parameters are accepted:
  */
export class VideoHwMap extends Filter<VideoHwMapParameters> {
    outputs : FilterStreamRef<VideoHwMapParameters, VideoHwMap>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHwMapParameters = {} as any ) {
        super( inputs, 'hwmap', parameters );
    }
}

export interface VideoHwMapParameters {
    /**
      * Set the frame mapping mode. Some combination of:
      * read
      * The mapped frame should be readable.
      * write
      * The mapped frame should be writeable.
      * overwrite
      * The mapping will always overwrite the entire frame.
      * This may improve performance in some cases, as the original contents of the frame need not be loaded.
      * direct
      * The mapping must not involve any copying.
      * Indirect mappings to copies of frames are created in some cases where either direct mapping is not possible or it would have unexpected properties. Setting this flag ensures that the mapping is direct and will fail if that is not possible.
      * Defaults to read+write if not specified.
      */
    mode ?: string | number;
    /** Rather than using the device supplied at initialisation, instead derive a new device of type type from the device the input frames exist on. */
    'derive_device type' ?: string | number;
    /**
      * In a hardware to hardware mapping, map in reverse - create frames in the sink and map them back to the source. This may be necessary in some cases where a mapping in one direction is required but only the opposite direction is supported by the devices being used.
      * This option is dangerous - it may break the preceding filter in undefined ways if there are any additional constraints on that filter’s output. Do not use it without fully understanding the implications of its use.
      */
    reverse ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.97 hwmap
  * Map hardware frames to system memory or to another device.
  * 
  * This filter has several different modes of operation; which one is used depends on the input and output formats:
  * 
  * 
  * Hardware frame input, normal frame output
  * 
  * Map the input frames to system memory and pass them to the output. If the original hardware frame is later required (for example, after overlaying something else on part of it), the hwmap filter can be used again in the next mode to retrieve it.
  * 
  * 
  * Normal frame input, hardware frame output
  * 
  * If the input is actually a software-mapped hardware frame, then unmap it - that is, return the original hardware frame.
  * 
  * Otherwise, a device must be provided. Create new hardware surfaces on that device for the output, then map them back to the software format at the input and give those frames to the preceding filter. This will then act like the
  * hwupload filter, but may be able to avoid an additional copy when the input is already in a compatible format.
  * 
  * 
  * Hardware frame input and output
  * 
  * A device must be supplied for the output, either directly or with the
  * derive_device option. The input and output devices must be of different types and compatible - the exact meaning of this is system-dependent, but typically it means that they must refer to the same underlying hardware context (for example, refer to the same graphics card).
  * 
  * If the input frames were originally created on the output device, then unmap to retrieve the original frames.
  * 
  * Otherwise, map the frames to the output device - create new hardware frames on the output corresponding to the frames on the input.
  * 
  * 
  * 
  * The following additional parameters are accepted:
  */
export function videoHwMap ( inputs : Stream | Stream[] = [], parameters : VideoHwMapParameters = {} as any ) {
    return new VideoHwMap( inputs, parameters );
}