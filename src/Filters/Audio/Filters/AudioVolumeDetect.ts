import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.95 volumedetect
  * Detect the volume of the input video.
  * 
  * The filter has no parameters. The input is not modified. Statistics about the volume will be printed in the log when the input stream end is reached.
  * 
  * In particular it will show the mean volume (root mean square), maximum volume (on a per-sample basis), and the beginning of a histogram of the registered volume values (from the maximum value to a cumulated 1/1000 of the samples).
  * 
  * All volumes are in decibels relative to the maximum PCM value.
  */
export class AudioVolumeDetect extends Filter<AudioVolumeDetectParameters> {
    outputs : FilterStreamRef<AudioVolumeDetectParameters, AudioVolumeDetect>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioVolumeDetectParameters = {} as any ) {
        super( inputs, 'volumedetect', parameters );
    }
}

export interface AudioVolumeDetectParameters {


    [key : string] : string | number;
}

/**
  * 8.95 volumedetect
  * Detect the volume of the input video.
  * 
  * The filter has no parameters. The input is not modified. Statistics about the volume will be printed in the log when the input stream end is reached.
  * 
  * In particular it will show the mean volume (root mean square), maximum volume (on a per-sample basis), and the beginning of a histogram of the registered volume values (from the maximum value to a cumulated 1/1000 of the samples).
  * 
  * All volumes are in decibels relative to the maximum PCM value.
  */
export function audioVolumeDetect ( inputs : Stream | Stream[] = [], parameters : AudioVolumeDetectParameters = {} as any ) {
    return new AudioVolumeDetect( inputs, parameters );
}