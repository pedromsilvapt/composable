import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.171 rotate
  * Rotate video by an arbitrary angle expressed in radians.
  * 
  * The filter accepts the following options:
  * 
  * A description of the optional parameters follows.
  */
export class VideoRotate extends Filter<VideoRotateParameters> {
    outputs : FilterStreamRef<VideoRotateParameters, VideoRotate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRotateParameters = {} as any ) {
        super( inputs, 'rotate', parameters );
    }
}

export interface VideoRotateParameters {
    /**
      * Set an expression for the angle by which to rotate the input video clockwise, expressed as a number of radians. A negative value will result in a counter-clockwise rotation. By default it is set to "0".
      * This expression is evaluated for each frame.
      * @aliases a
      */
    angle ?: string | number;
    /**
      * Set an expression for the angle by which to rotate the input video clockwise, expressed as a number of radians. A negative value will result in a counter-clockwise rotation. By default it is set to "0".
      * This expression is evaluated for each frame.
      * @aliasof angle
      */
    a ?: string | number;
    /**
      * Set the output width expression, default value is "iw". This expression is evaluated just once during configuration.
      * @aliases ow
      */
    out_w ?: string | number;
    /**
      * Set the output width expression, default value is "iw". This expression is evaluated just once during configuration.
      * @aliasof out_w
      */
    ow ?: string | number;
    /**
      * Set the output height expression, default value is "ih". This expression is evaluated just once during configuration.
      * @aliases oh
      */
    out_h ?: string | number;
    /**
      * Set the output height expression, default value is "ih". This expression is evaluated just once during configuration.
      * @aliasof out_h
      */
    oh ?: string | number;
    /** Enable bilinear interpolation if set to 1, a value of 0 disables it. Default value is 1. */
    bilinear ?: string | number;
    /**
      * Set the color used to fill the output area not covered by the rotated image. For the general syntax of this option, check the
      * (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. If the special value "none" is selected then no background is printed (useful for example if the background is never shown).
      * Default value is "black".
      * @aliases c
      */
    fillcolor ?: string | number;
    /**
      * Set the color used to fill the output area not covered by the rotated image. For the general syntax of this option, check the
      * (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. If the special value "none" is selected then no background is printed (useful for example if the background is never shown).
      * Default value is "black".
      * @aliasof fillcolor
      */
    c ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.171 rotate
  * Rotate video by an arbitrary angle expressed in radians.
  * 
  * The filter accepts the following options:
  * 
  * A description of the optional parameters follows.
  */
export function videoRotate ( inputs : Stream | Stream[] = [], parameters : VideoRotateParameters = {} as any ) {
    return new VideoRotate( inputs, parameters );
}