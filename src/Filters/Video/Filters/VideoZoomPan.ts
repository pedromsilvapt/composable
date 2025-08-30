import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.235 zoompan
  * Apply Zoom & Pan effect.
  * 
  * This filter accepts the following options:
  */
export class VideoZoomPan extends Filter<VideoZoomPanParameters> {
    outputs : FilterStreamRef<VideoZoomPanParameters, VideoZoomPan>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoZoomPanParameters = {} as any ) {
        super( inputs, 'zoompan', parameters );
    }
}

export interface VideoZoomPanParameters {
    /**
      * Set the zoom expression. Range is 1-10. Default is 1.
      * @aliases z
      */
    zoom ?: string | number;
    /**
      * Set the zoom expression. Range is 1-10. Default is 1.
      * @aliasof zoom
      */
    z ?: string | number;
    /** Set the x and y expression. Default is 0. */
    x ?: string | number;
    /** Set the duration expression in number of frames. This sets for how many number of frames effect will last for single input image. */
    y ?: string | number;
    /** Set the output image size, default is ’hd720’. */
    d ?: string | number;
    /** Set the output frame rate, default is ’25’. */
    s ?: string | number;
    fps ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.235 zoompan
  * Apply Zoom & Pan effect.
  * 
  * This filter accepts the following options:
  */
export function videoZoomPan ( inputs : Stream | Stream[] = [], parameters : VideoZoomPanParameters = {} as any ) {
    return new VideoZoomPan( inputs, parameters );
}