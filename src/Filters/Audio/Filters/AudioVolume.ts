import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.94 volume
  * Adjust the input audio volume.
  * 
  * It accepts the following parameters:
  */
export class AudioVolume extends Filter<AudioVolumeParameters> {
    outputs : FilterStreamRef<AudioVolumeParameters, AudioVolume>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioVolumeParameters = {} as any ) {
        super( inputs, 'volume', parameters );
    }
}

export interface AudioVolumeParameters {
    /**
      * Set audio volume expression.
      * Output values are clipped to the maximum value.
      * The output audio volume is given by the relation:
      * output_volume = volume * input_volume
      * The default value for volume is "1.0".
      */
    volume ?: string | number;
    /**
      * This parameter represents the mathematical precision.
      * It determines which input sample formats will be allowed, which affects the precision of the volume scaling.
      * fixed
      * 8-bit fixed-point; this limits input sample format to U8, S16, and S32.
      * float
      * 32-bit floating-point; this limits input sample format to FLT. (default)
      * double
      * 64-bit floating-point; this limits input sample format to DBL.
      */
    precision ?: string | number;
    /**
      * Choose the behaviour on encountering ReplayGain side data in input frames.
      * drop
      * Remove ReplayGain side data, ignoring its contents (the default).
      * ignore
      * Ignore ReplayGain side data, but leave it in the frame.
      * track
      * Prefer the track gain, if present.
      * album
      * Prefer the album gain, if present.
      */
    replaygain ?: string | number;
    /**
      * Pre-amplification gain in dB to apply to the selected replaygain gain.
      * Default value for replaygain_preamp is 0.0.
      */
    replaygain_preamp ?: string | number;
    /**
      * Prevent clipping by limiting the gain applied.
      * Default value for replaygain_noclip is 1.
      */
    replaygain_noclip ?: string | number;
    /**
      * Set when the volume expression is evaluated.
      * It accepts the following values:
      * ‘once’
      * only evaluate expression once during the filter initialization, or when the ‘volume’ command is sent
      * ‘frame’
      * evaluate expression for each incoming frame
      * Default value is ‘once’.
      */
    'eval' ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.94 volume
  * Adjust the input audio volume.
  * 
  * It accepts the following parameters:
  */
export function audioVolume ( inputs : Stream | Stream[] = [], parameters : AudioVolumeParameters = {} as any ) {
    return new AudioVolume( inputs, parameters );
}