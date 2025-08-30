import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.127 mergeplanes
  * Merge color channel components from several video streams.
  * 
  * The filter accepts up to 4 input streams, and merge selected input planes to the output video.
  * 
  * This filter accepts the following options:
  */
export class VideoMergePlanes extends Filter<VideoMergePlanesParameters> {
    outputs : FilterStreamRef<VideoMergePlanesParameters, VideoMergePlanes>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMergePlanesParameters = {} as any ) {
        super( inputs, 'mergeplanes', parameters );
    }
}

export interface VideoMergePlanesParameters {
    /**
      * Set input to output plane mapping. Default is 0.
      * The mappings is specified as a bitmap. It should be specified as a hexadecimal number in the form 0xAa[Bb[Cc[Dd]]]. ’Aa’ describes the mapping for the first plane of the output stream. ’A’ sets the number of the input stream to use (from 0 to 3), and ’a’ the plane number of the corresponding input to use (from 0 to 3). The rest of the mappings is similar, ’Bb’ describes the mapping for the output stream second plane, ’Cc’ describes the mapping for the output stream third plane and ’Dd’ describes the mapping for the output stream fourth plane.
      */
    mapping ?: string | number;
    /** Set output pixel format. Default is yuva444p. */
    format ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.127 mergeplanes
  * Merge color channel components from several video streams.
  * 
  * The filter accepts up to 4 input streams, and merge selected input planes to the output video.
  * 
  * This filter accepts the following options:
  */
export function videoMergePlanes ( inputs : Stream | Stream[] = [], parameters : VideoMergePlanesParameters = {} as any ) {
    return new VideoMergePlanes( inputs, parameters );
}