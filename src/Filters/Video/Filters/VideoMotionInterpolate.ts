import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.130 minterpolate
  * Convert the video to specified frame rate using motion interpolation.
  * 
  * This filter accepts the following options:
  */
export class VideoMotionInterpolate extends Filter<VideoMotionInterpolateParameters> {
    outputs : FilterStreamRef<VideoMotionInterpolateParameters, VideoMotionInterpolate>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMotionInterpolateParameters = {} as any ) {
        super( inputs, 'minterpolate', parameters );
    }
}

export interface VideoMotionInterpolateParameters {
    /** Specify the output frame rate. This can be rational e.g. 60000/1001. Frames are dropped if fps is lower than source fps. Default 60. */
    fps ?: string | number;
    /**
      * Motion interpolation mode. Following values are accepted:
      * ‘dup’
      * Duplicate previous or next frame for interpolating new ones.
      * ‘blend’
      * Blend source frames. Interpolated frame is mean of previous and next frames.
      * ‘mci’
      * Motion compensated interpolation. Following options are effective when this mode is selected:
      * ‘mc_mode’
      * Motion compensation mode. Following values are accepted:
      * ‘obmc’
      * Overlapped block motion compensation.
      * ‘aobmc’
      * Adaptive overlapped block motion compensation. Window weighting coefficients are controlled adaptively according to the reliabilities of the neighboring motion vectors to reduce oversmoothing.
      * Default mode is ‘obmc’.
      * ‘me_mode’
      * Motion estimation mode. Following values are accepted:
      * ‘bidir’
      * Bidirectional motion estimation. Motion vectors are estimated for each source frame in both forward and backward directions.
      * ‘bilat’
      * Bilateral motion estimation. Motion vectors are estimated directly for interpolated frame.
      * Default mode is ‘bilat’.
      * ‘me’
      * The algorithm to be used for motion estimation. Following values are accepted:
      * ‘esa’
      * Exhaustive search algorithm.
      * ‘tss’
      * Three step search algorithm.
      * ‘tdls’
      * Two dimensional logarithmic search algorithm.
      * ‘ntss’
      * New three step search algorithm.
      * ‘fss’
      * Four step search algorithm.
      * ‘ds’
      * Diamond search algorithm.
      * ‘hexbs’
      * Hexagon-based search algorithm.
      * ‘epzs’
      * Enhanced predictive zonal search algorithm.
      * ‘umh’
      * Uneven multi-hexagon search algorithm.
      * Default algorithm is ‘epzs’.
      * ‘mb_size’
      * Macroblock size. Default 16.
      * ‘search_param’
      * Motion estimation search parameter. Default 32.
      * ‘vsbmc’
      * Enable variable-size block motion compensation. Motion estimation is applied with smaller block sizes at object boundaries in order to make the them less blur. Default is 0 (disabled).
      */
    mi_mode ?: string | number;
    /**
      * Scene change detection method. Scene change leads motion vectors to be in random direction. Scene change detection replace interpolated frames by duplicate ones. May not be needed for other modes. Following values are accepted:
      * ‘none’
      * Disable scene change detection.
      * ‘fdiff’
      * Frame difference. Corresponding pixel values are compared and if it satisfies scd_threshold scene change is detected.
      * Default method is ‘fdiff’.
      */
    scd ?: string | number;
    /** Scene change detection threshold. Default is 5.0. */
    scd_threshold ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.130 minterpolate
  * Convert the video to specified frame rate using motion interpolation.
  * 
  * This filter accepts the following options:
  */
export function videoMotionInterpolate ( inputs : Stream | Stream[] = [], parameters : VideoMotionInterpolateParameters = {} as any ) {
    return new VideoMotionInterpolate( inputs, parameters );
}