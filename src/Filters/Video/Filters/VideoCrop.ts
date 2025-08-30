import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.34 crop
  * Crop the input video to given dimensions.
  * 
  * It accepts the following parameters:
  */
export class VideoCrop extends Filter<VideoCropParameters> {
    outputs : FilterStreamRef<VideoCropParameters, VideoCrop>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoCropParameters = {} as any ) {
        super( inputs, 'crop', parameters );
    }
}

export interface VideoCropParameters {
    /**
      * The width of the output video. It defaults to iw. This expression is evaluated only once during the filter configuration, or when the ‘w’ or ‘out_w’ command is sent.
      * @aliases out_w
      */
    w ?: string | number;
    /**
      * The width of the output video. It defaults to iw. This expression is evaluated only once during the filter configuration, or when the ‘w’ or ‘out_w’ command is sent.
      * @aliasof w
      */
    out_w ?: string | number;
    /**
      * The height of the output video. It defaults to ih. This expression is evaluated only once during the filter configuration, or when the ‘h’ or ‘out_h’ command is sent.
      * @aliases out_h
      */
    h ?: string | number;
    /**
      * The height of the output video. It defaults to ih. This expression is evaluated only once during the filter configuration, or when the ‘h’ or ‘out_h’ command is sent.
      * @aliasof h
      */
    out_h ?: string | number;
    /** The horizontal position, in the input video, of the left edge of the output video. It defaults to (in_w-out_w)/2. This expression is evaluated per-frame. */
    x ?: string | number;
    /** The vertical position, in the input video, of the top edge of the output video. It defaults to (in_h-out_h)/2. This expression is evaluated per-frame. */
    y ?: string | number;
    /** If set to 1 will force the output display aspect ratio to be the same of the input, by changing the output sample aspect ratio. It defaults to 0. */
    keep_aspect ?: string | number;
    /** Enable exact cropping. If enabled, subsampled videos will be cropped at exact width/height/x/y as specified and will not be rounded to nearest smaller value. It defaults to 0. */
    exact ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.34 crop
  * Crop the input video to given dimensions.
  * 
  * It accepts the following parameters:
  */
export function videoCrop ( inputs : Stream | Stream[] = [], parameters : VideoCropParameters = {} as any ) {
    return new VideoCrop( inputs, parameters );
}