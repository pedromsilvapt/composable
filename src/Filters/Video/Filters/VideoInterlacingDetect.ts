import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.104 idet
  * Detect video interlacing type.
  * 
  * This filter tries to detect if the input frames are interlaced, progressive, top or bottom field first. It will also try to detect fields that are repeated between adjacent frames (a sign of telecine).
  * 
  * Single frame detection considers only immediately adjacent frames when classifying each frame. Multiple frame detection incorporates the classification history of previous frames.
  * 
  * The filter will log these metadata values:
  */
export class VideoInterlacingDetect extends Filter<VideoInterlacingDetectParameters> {
    outputs : FilterStreamRef<VideoInterlacingDetectParameters, VideoInterlacingDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoInterlacingDetectParameters = {} as any ) {
        super( inputs, 'idet', parameters );
    }
}

export interface VideoInterlacingDetectParameters {
    /** Detected type of current frame using single-frame detection. One of: “tff” (top field first), “bff” (bottom field first), “progressive”, or “undetermined” */
    'single.current_frame' ?: string | number;
    /** Cumulative number of frames detected as top field first using single-frame detection. */
    'single.tff' ?: string | number;
    /** Cumulative number of frames detected as top field first using multiple-frame detection. */
    'multiple.tff' ?: string | number;
    /** Cumulative number of frames detected as bottom field first using single-frame detection. */
    'single.bff' ?: string | number;
    /** Detected type of current frame using multiple-frame detection. One of: “tff” (top field first), “bff” (bottom field first), “progressive”, or “undetermined” */
    'multiple.current_frame' ?: string | number;
    /** Cumulative number of frames detected as bottom field first using multiple-frame detection. */
    'multiple.bff' ?: string | number;
    /** Cumulative number of frames detected as progressive using single-frame detection. */
    'single.progressive' ?: string | number;
    /** Cumulative number of frames detected as progressive using multiple-frame detection. */
    'multiple.progressive' ?: string | number;
    /** Cumulative number of frames that could not be classified using single-frame detection. */
    'single.undetermined' ?: string | number;
    /** Cumulative number of frames that could not be classified using multiple-frame detection. */
    'multiple.undetermined' ?: string | number;
    /** Which field in the current frame is repeated from the last. One of “neither”, “top”, or “bottom”. */
    'repeated.current_frame' ?: string | number;
    /** Cumulative number of frames with no repeated field. */
    'repeated.neither' ?: string | number;
    /** Cumulative number of frames with the top field repeated from the previous frame’s top field. */
    'repeated.top' ?: string | number;
    /** Cumulative number of frames with the bottom field repeated from the previous frame’s bottom field. */
    'repeated.bottom' ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.104 idet
  * Detect video interlacing type.
  * 
  * This filter tries to detect if the input frames are interlaced, progressive, top or bottom field first. It will also try to detect fields that are repeated between adjacent frames (a sign of telecine).
  * 
  * Single frame detection considers only immediately adjacent frames when classifying each frame. Multiple frame detection incorporates the classification history of previous frames.
  * 
  * The filter will log these metadata values:
  */
export function videoInterlacingDetect ( inputs : Stream | Stream[] = [], parameters : VideoInterlacingDetectParameters = {} as any ) {
    return new VideoInterlacingDetect( inputs, parameters );
}