import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.2 alphaextract
  * Extract the alpha component from the input as a grayscale video. This is especially useful with the alphamerge filter.
  */
export class VideoAlphaExtract extends Filter<VideoAlphaExtractParameters> {
    outputs : FilterStreamRef<VideoAlphaExtractParameters, VideoAlphaExtract>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAlphaExtractParameters = {} as any ) {
        super( inputs, 'alphaextract', parameters );
    }
}

export interface VideoAlphaExtractParameters {


    [key : string] : string | number;
}

/**
  * 11.2 alphaextract
  * Extract the alpha component from the input as a grayscale video. This is especially useful with the alphamerge filter.
  */
export function videoAlphaExtract ( inputs : Stream | Stream[] = [], parameters : VideoAlphaExtractParameters = {} as any ) {
    return new VideoAlphaExtract( inputs, parameters );
}