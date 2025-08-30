import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.4 mandelbrot
  * Generate a Mandelbrot set fractal, and progressively zoom towards the point specified with start_x and start_y.
  * 
  * This source accepts the following options:
  */
export class VideoMandelbrot extends Filter<VideoMandelbrotParameters> {
    outputs : FilterStreamRef<VideoMandelbrotParameters, VideoMandelbrot>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMandelbrotParameters = {} as any ) {
        super( inputs, 'mandelbrot', parameters );
    }
}

export interface VideoMandelbrotParameters {
    /** Set the terminal pts value. Default value is 400. */
    end_pts ?: string | number;
    /** Set the terminal scale value. Must be a floating point value. Default value is 0.3. */
    end_scale ?: string | number;
    /**
      * Set the inner coloring mode, that is the algorithm used to draw the Mandelbrot fractal internal region.
      * It shall assume one of the following values:
      * black
      * Set black mode.
      * convergence
      * Show time until convergence.
      * mincol
      * Set color based on point closest to the origin of the iterations.
      * period
      * Set period mode.
      * Default value is mincol.
      */
    inner ?: string | number;
    /** Set the bailout value. Default value is 10.0. */
    bailout ?: string | number;
    /** Set the maximum of iterations performed by the rendering algorithm. Default value is 7189. */
    maxiter ?: string | number;
    /**
      * Set outer coloring mode. It shall assume one of following values:
      * iteration_count
      * Set iteration count mode.
      * normalized_iteration_count
      * set normalized iteration count mode.
      * Default value is normalized_iteration_count.
      */
    outer ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set frame rate, expressed as number of frames per second. Default value is "25".
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Set frame size. For the syntax of this option, check the (ffmpeg-utils)"Video
      * size" section in the ffmpeg-utils manual. Default value is "640x480".
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set frame size. For the syntax of this option, check the (ffmpeg-utils)"Video
      * size" section in the ffmpeg-utils manual. Default value is "640x480".
      * @aliasof size
      */
    s ?: string | number;
    /** Set the initial scale value. Default value is 3.0. */
    start_scale ?: string | number;
    /** Set the initial x position. Must be a floating point value between -100 and 100. Default value is -0.743643887037158704752191506114774. */
    start_x ?: string | number;
    /** Set the initial y position. Must be a floating point value between -100 and 100. Default value is -0.131825904205311970493132056385139. */
    start_y ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.4 mandelbrot
  * Generate a Mandelbrot set fractal, and progressively zoom towards the point specified with start_x and start_y.
  * 
  * This source accepts the following options:
  */
export function videoMandelbrot ( inputs : Stream | Stream[] = [], parameters : VideoMandelbrotParameters = {} as any ) {
    return new VideoMandelbrot( inputs, parameters );
}