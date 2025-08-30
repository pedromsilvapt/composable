import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.186 signalstats
  * Evaluate various visual metrics that assist in determining issues associated with the digitization of analog video media.
  * 
  * By default the filter will log these metadata values:
  */
export class VideoSignalStats extends Filter<VideoSignalStatsParameters> {
    outputs : FilterStreamRef<VideoSignalStatsParameters, VideoSignalStats>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoSignalStatsParameters = {} as any ) {
        super( inputs, 'signalstats', parameters );
    }
}

export interface VideoSignalStatsParameters {
    /** Display the minimal Y value contained within the input frame. Expressed in range of [0-255]. */
    YMIN ?: string | number;
    /** Display the Y value at the 10% percentile within the input frame. Expressed in range of [0-255]. */
    YLOW ?: string | number;
    /** Display the average Y value within the input frame. Expressed in range of [0-255]. */
    YAVG ?: string | number;
    /** Display the Y value at the 90% percentile within the input frame. Expressed in range of [0-255]. */
    YHIGH ?: string | number;
    /** Display the maximum Y value contained within the input frame. Expressed in range of [0-255]. */
    YMAX ?: string | number;
    /** Display the minimal U value contained within the input frame. Expressed in range of [0-255]. */
    UMIN ?: string | number;
    /** Display the U value at the 10% percentile within the input frame. Expressed in range of [0-255]. */
    ULOW ?: string | number;
    /** Display the average U value within the input frame. Expressed in range of [0-255]. */
    UAVG ?: string | number;
    /** Display the U value at the 90% percentile within the input frame. Expressed in range of [0-255]. */
    UHIGH ?: string | number;
    /** Display the maximum U value contained within the input frame. Expressed in range of [0-255]. */
    UMAX ?: string | number;
    /** Display the minimal V value contained within the input frame. Expressed in range of [0-255]. */
    VMIN ?: string | number;
    /** Display the V value at the 10% percentile within the input frame. Expressed in range of [0-255]. */
    VLOW ?: string | number;
    /** Display the average V value within the input frame. Expressed in range of [0-255]. */
    VAVG ?: string | number;
    /** Display the V value at the 90% percentile within the input frame. Expressed in range of [0-255]. */
    VHIGH ?: string | number;
    /** Display the maximum V value contained within the input frame. Expressed in range of [0-255]. */
    VMAX ?: string | number;
    /** Display the minimal saturation value contained within the input frame. Expressed in range of [0-~181.02]. */
    SATMIN ?: string | number;
    /** Display the saturation value at the 10% percentile within the input frame. Expressed in range of [0-~181.02]. */
    SATLOW ?: string | number;
    /** Display the average saturation value within the input frame. Expressed in range of [0-~181.02]. */
    SATAVG ?: string | number;
    /** Display the saturation value at the 90% percentile within the input frame. Expressed in range of [0-~181.02]. */
    SATHIGH ?: string | number;
    /** Display the maximum saturation value contained within the input frame. Expressed in range of [0-~181.02]. */
    SATMAX ?: string | number;
    /** Display the median value for hue within the input frame. Expressed in range of [0-360]. */
    HUEMED ?: string | number;
    /** Display the average value for hue within the input frame. Expressed in range of [0-360]. */
    HUEAVG ?: string | number;
    /** Display the average of sample value difference between all values of the Y plane in the current frame and corresponding values of the previous input frame. Expressed in range of [0-255]. */
    YDIF ?: string | number;
    /** Display the average of sample value difference between all values of the U plane in the current frame and corresponding values of the previous input frame. Expressed in range of [0-255]. */
    UDIF ?: string | number;
    /** Display the average of sample value difference between all values of the V plane in the current frame and corresponding values of the previous input frame. Expressed in range of [0-255]. */
    VDIF ?: string | number;
    /** Display bit depth of Y plane in current frame. Expressed in range of [0-16]. */
    YBITDEPTH ?: string | number;
    /** Display bit depth of U plane in current frame. Expressed in range of [0-16]. */
    UBITDEPTH ?: string | number;
    /** Display bit depth of V plane in current frame. Expressed in range of [0-16]. */
    VBITDEPTH ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.186 signalstats
  * Evaluate various visual metrics that assist in determining issues associated with the digitization of analog video media.
  * 
  * By default the filter will log these metadata values:
  */
export function videoSignalStats ( inputs : Stream | Stream[] = [], parameters : VideoSignalStatsParameters = {} as any ) {
    return new VideoSignalStats( inputs, parameters );
}