import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 8.40 ashowinfo
  * Show a line containing various information for each input audio frame. The input audio is not modified.
  * 
  * The shown line contains a sequence of key/value pairs of the form
  * key:value.
  * 
  * The following values are shown in the output:
  */
export class AudioShowInfo extends Filter<AudioShowInfoParameters> {
    outputs : FilterStreamRef<AudioShowInfoParameters, AudioShowInfo>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AudioShowInfoParameters = {} as any ) {
        super( inputs, 'ashowinfo', parameters );
    }
}

export interface AudioShowInfoParameters {
    /** The (sequential) number of the input frame, starting from 0. */
    n ?: string | number;
    /** The presentation timestamp of the input frame, in time base units; the time base depends on the filter input pad, and is usually 1/sample_rate. */
    pts ?: string | number;
    /** The presentation timestamp of the input frame in seconds. */
    pts_time ?: string | number;
    /** position of the frame in the input stream, -1 if this information in unavailable and/or meaningless (for example in case of synthetic audio) */
    pos ?: string | number;
    /** The sample format. */
    fmt ?: string | number;
    /** The channel layout. */
    chlayout ?: string | number;
    /** The sample rate for the audio frame. */
    rate ?: string | number;
    /** The number of samples (per channel) in the frame. */
    nb_samples ?: string | number;
    /** The Adler-32 checksum (printed in hexadecimal) of the audio data. For planar audio, the data is treated as if all the planes were concatenated. */
    checksum ?: string | number;
    /** A list of Adler-32 checksums for each data plane. */
    plane_checksums ?: string | number;

    [key : string] : string | number;
}

/**
  * 8.40 ashowinfo
  * Show a line containing various information for each input audio frame. The input audio is not modified.
  * 
  * The shown line contains a sequence of key/value pairs of the form
  * key:value.
  * 
  * The following values are shown in the output:
  */
export function audioShowInfo ( inputs : Stream | Stream[] = [], parameters : AudioShowInfoParameters = {} as any ) {
    return new AudioShowInfo( inputs, parameters );
}