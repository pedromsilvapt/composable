import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.150 photosensitivity
  * Reduce various flashes in video, so to help users with epilepsy.
  * 
  * It accepts the following options:
  */
export class VideoPhotoSensitivity extends Filter<VideoPhotoSensitivityParameters> {
    outputs : FilterStreamRef<VideoPhotoSensitivityParameters, VideoPhotoSensitivity>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPhotoSensitivityParameters = {} as any ) {
        super( inputs, 'photosensitivity', parameters );
    }
}

export interface VideoPhotoSensitivityParameters {
    /**
      * Set how many frames to use when filtering. Default is 30.
      * @aliases f
      */
    frames ?: string | number;
    /**
      * Set how many frames to use when filtering. Default is 30.
      * @aliasof frames
      */
    f ?: string | number;
    /**
      * Set detection threshold factor. Default is 1. Lower is stricter.
      * @aliases t
      */
    threshold ?: string | number;
    /**
      * Set detection threshold factor. Default is 1. Lower is stricter.
      * @aliasof threshold
      */
    t ?: string | number;
    /** Set how many pixels to skip when sampling frames. Default is 1. Allowed range is from 1 to 1024. */
    skip ?: string | number;
    /** Leave frames unchanged. Default is disabled. */
    bypass ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.150 photosensitivity
  * Reduce various flashes in video, so to help users with epilepsy.
  * 
  * It accepts the following options:
  */
export function videoPhotoSensitivity ( inputs : Stream | Stream[] = [], parameters : VideoPhotoSensitivityParameters = {} as any ) {
    return new VideoPhotoSensitivity( inputs, parameters );
}