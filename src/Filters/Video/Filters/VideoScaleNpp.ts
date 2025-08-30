import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.174 scale_npp
  * Use the NVIDIA Performance Primitives (libnpp) to perform scaling and/or pixel format conversion on CUDA video frames. Setting the output width and height works in the same way as for the scale filter.
  * 
  * The following additional options are accepted:
  */
export class VideoScaleNpp extends Filter<VideoScaleNppParameters> {
    outputs : FilterStreamRef<VideoScaleNppParameters, VideoScaleNpp>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoScaleNppParameters = {} as any ) {
        super( inputs, 'scale_npp', parameters );
    }
}

export interface VideoScaleNppParameters {
    /** The pixel format of the output CUDA frames. If set to the string "same" (the default), the input format will be kept. Note that automatic format negotiation and conversion is not yet supported for hardware frames */
    format ?: string | number;
    /**
      * The interpolation algorithm used for resizing. One of the following:
      * nn
      * Nearest neighbour.
      * linear
      * cubic
      * cubic2p_bspline
      * 2-parameter cubic (B=1, C=0)
      * cubic2p_catmullrom
      * 2-parameter cubic (B=0, C=1/2)
      * cubic2p_b05c03
      * 2-parameter cubic (B=1/2, C=3/10)
      * super
      * Supersampling
      * lanczos
      */
    interp_algo ?: string | number;
    /**
      * Enable decreasing or increasing output video width or height if necessary to keep the original aspect ratio. Possible values:
      * ‘disable’
      * Scale the video as specified and disable this feature.
      * ‘decrease’
      * The output video dimensions will automatically be decreased if needed.
      * ‘increase’
      * The output video dimensions will automatically be increased if needed.
      * One useful instance of this option is that when you know a specific device’s maximum allowed resolution, you can use this to limit the output video to that, while retaining the aspect ratio. For example, device A allows 1280x720 playback, and your video is 1920x800. Using this option (set it to decrease) and specifying 1280x720 to the command line makes the output 1280x533.
      * Please note that this is a different thing than specifying -1 for w or h, you still need to specify the output resolution for this option to work.
      */
    force_original_aspect_ratio ?: string | number;
    /**
      * Ensures that both the output dimensions, width and height, are divisible by the given integer when used together with force_original_aspect_ratio. This works similar to using -n in the w and h options.
      * This option respects the value set for force_original_aspect_ratio, increasing or decreasing the resolution accordingly. The video’s aspect ratio may be slightly modified.
      * This option can be handy if you need to have a video fit within or exceed a defined resolution using force_original_aspect_ratio but also have encoder restrictions on width or height divisibility.
      */
    force_divisible_by ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.174 scale_npp
  * Use the NVIDIA Performance Primitives (libnpp) to perform scaling and/or pixel format conversion on CUDA video frames. Setting the output width and height works in the same way as for the scale filter.
  * 
  * The following additional options are accepted:
  */
export function videoScaleNpp ( inputs : Stream | Stream[] = [], parameters : VideoScaleNppParameters = {} as any ) {
    return new VideoScaleNpp( inputs, parameters );
}