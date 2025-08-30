import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.159 pullup
  * Pulldown reversal (inverse telecine) filter, capable of handling mixed hard-telecine, 24000/1001 fps progressive, and 30000/1001 fps progressive content.
  * 
  * The pullup filter is designed to take advantage of future context in making its decisions. This filter is stateless in the sense that it does not lock onto a pattern to follow, but it instead looks forward to the following fields in order to identify matches and rebuild progressive frames.
  * 
  * To produce content with an even framerate, insert the fps filter after pullup, use fps=24000/1001 if the input frame rate is 29.97fps,
  * fps=24 for 30fps and the (rare) telecined 25fps input.
  * 
  * The filter accepts the following options:
  */
export class VideoPullup extends Filter<VideoPullupParameters> {
    outputs : FilterStreamRef<VideoPullupParameters, VideoPullup>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPullupParameters = {} as any ) {
        super( inputs, 'pullup', parameters );
    }
}

export interface VideoPullupParameters {
    /** These options set the amount of "junk" to ignore at the left, right, top, and bottom of the image, respectively. Left and right are in units of 8 pixels, while top and bottom are in units of 2 lines. The default is 8 pixels on each side. */
    jl ?: string | number;
    /** Set the strict breaks. Setting this option to 1 will reduce the chances of filter generating an occasional mismatched frame, but it may also cause an excessive number of frames to be dropped during high motion sequences. Conversely, setting it to -1 will make filter match fields more easily. This may help processing of video where there is slight blurring between the fields, but may also cause there to be interlaced frames in the output. Default value is 0. */
    jr ?: string | number;
    /**
      * Set the metric plane to use. It accepts the following values:
      * ‘l’
      * Use luma plane.
      * ‘u’
      * Use chroma blue plane.
      * ‘v’
      * Use chroma red plane.
      * This option may be set to use chroma plane instead of the default luma plane for doing filter’s computations. This may improve accuracy on very clean source material, but more likely will decrease accuracy, especially if there is chroma noise (rainbow effect) or any grayscale video. The main purpose of setting mp to a chroma plane is to reduce CPU load and make pullup usable in realtime on slow machines.
      */
    jt ?: string | number;
    jb ?: string | number;
    sb ?: string | number;
    mp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.159 pullup
  * Pulldown reversal (inverse telecine) filter, capable of handling mixed hard-telecine, 24000/1001 fps progressive, and 30000/1001 fps progressive content.
  * 
  * The pullup filter is designed to take advantage of future context in making its decisions. This filter is stateless in the sense that it does not lock onto a pattern to follow, but it instead looks forward to the following fields in order to identify matches and rebuild progressive frames.
  * 
  * To produce content with an even framerate, insert the fps filter after pullup, use fps=24000/1001 if the input frame rate is 29.97fps,
  * fps=24 for 30fps and the (rare) telecined 25fps input.
  * 
  * The filter accepts the following options:
  */
export function videoPullup ( inputs : Stream | Stream[] = [], parameters : VideoPullupParameters = {} as any ) {
    return new VideoPullup( inputs, parameters );
}