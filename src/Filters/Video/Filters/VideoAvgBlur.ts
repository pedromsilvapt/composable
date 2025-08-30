import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.7 avgblur
  * Apply average blur filter.
  * 
  * The filter accepts the following options:
  */
export class VideoAvgBlur extends Filter<VideoAvgBlurParameters> {
    outputs : FilterStreamRef<VideoAvgBlurParameters, VideoAvgBlur>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAvgBlurParameters = {} as any ) {
        super( inputs, 'avgblur', parameters );
    }
}

export interface VideoAvgBlurParameters {
    /** Set horizontal radius size. */
    sizeX ?: string | number;
    /** Set which planes to filter. By default all planes are filtered. */
    planes ?: string | number;
    /** Set vertical radius size, if zero it will be same as sizeX. Default is 0. */
    sizeY ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.7 avgblur
  * Apply average blur filter.
  * 
  * The filter accepts the following options:
  */
export function videoAvgBlur ( inputs : Stream | Stream[] = [], parameters : VideoAvgBlurParameters = {} as any ) {
    return new VideoAvgBlur( inputs, parameters );
}