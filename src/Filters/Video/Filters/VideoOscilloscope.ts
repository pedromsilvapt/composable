import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.142 oscilloscope
  * 2D Video Oscilloscope.
  * 
  * Useful to measure spatial impulse, step responses, chroma delays, etc.
  * 
  * It accepts the following parameters:
  */
export class VideoOscilloscope extends Filter<VideoOscilloscopeParameters> {
    outputs : FilterStreamRef<VideoOscilloscopeParameters, VideoOscilloscope>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoOscilloscopeParameters = {} as any ) {
        super( inputs, 'oscilloscope', parameters );
    }
}

export interface VideoOscilloscopeParameters {
    /** Set scope center x position. */
    x ?: string | number;
    /** Set scope center y position. */
    y ?: string | number;
    /** Set scope size, relative to frame diagonal. */
    s ?: string | number;
    /** Set scope tilt/rotation. */
    t ?: string | number;
    /** Set trace opacity. */
    o ?: string | number;
    /** Set trace center x position. */
    tx ?: string | number;
    /** Set trace center y position. */
    ty ?: string | number;
    /** Set trace width, relative to width of frame. */
    tw ?: string | number;
    /** Set trace height, relative to height of frame. */
    th ?: string | number;
    /** Set which components to trace. By default it traces first three components. */
    c ?: string | number;
    /** Draw trace grid. By default is enabled. */
    g ?: string | number;
    /** Draw some statistics. By default is enabled. */
    st ?: string | number;
    /** Draw scope. By default is enabled. */
    sc ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.142 oscilloscope
  * 2D Video Oscilloscope.
  * 
  * Useful to measure spatial impulse, step responses, chroma delays, etc.
  * 
  * It accepts the following parameters:
  */
export function videoOscilloscope ( inputs : Stream | Stream[] = [], parameters : VideoOscilloscopeParameters = {} as any ) {
    return new VideoOscilloscope( inputs, parameters );
}