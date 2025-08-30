import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.3 acopy
  * Copy the input audio source unchanged to the output. This is mainly useful for testing purposes.
  */
export class AudioCopy extends Filter<AudioCopyParameters> {
    outputs : FilterStreamRef<AudioCopyParameters, AudioCopy>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioCopyParameters = {} as any ) {
        super( inputs, 'acopy', parameters );
    }
}

export interface AudioCopyParameters {


    [key : string] : string | number;
}

/**
  * 8.3 acopy
  * Copy the input audio source unchanged to the output. This is mainly useful for testing purposes.
  */
export function audioCopy ( inputs : Stream | Stream[] = [], parameters : AudioCopyParameters = {} as any ) {
    return new AudioCopy( inputs, parameters );
}