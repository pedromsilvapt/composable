import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.122 maskedmerge
  * Merge the first input stream with the second input stream using per pixel weights in the third input stream.
  * 
  * A value of 0 in the third stream pixel component means that pixel component from first stream is returned unchanged, while maximum value (eg. 255 for 8-bit videos) means that pixel component from second stream is returned unchanged. Intermediate values define the amount of merging between both input stream’s pixel components.
  * 
  * This filter accepts the following options:
  */
export class VideoMaskedMerge extends Filter<VideoMaskedMergeParameters> {
    outputs : FilterStreamRef<VideoMaskedMergeParameters, VideoMaskedMerge>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoMaskedMergeParameters = {} as any ) {
        super( inputs, 'maskedmerge', parameters );
    }
}

export interface VideoMaskedMergeParameters {
    /** Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed. */
    planes ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.122 maskedmerge
  * Merge the first input stream with the second input stream using per pixel weights in the third input stream.
  * 
  * A value of 0 in the third stream pixel component means that pixel component from first stream is returned unchanged, while maximum value (eg. 255 for 8-bit videos) means that pixel component from second stream is returned unchanged. Intermediate values define the amount of merging between both input stream’s pixel components.
  * 
  * This filter accepts the following options:
  */
export function videoMaskedMerge ( inputs : Stream | Stream[] = [], parameters : VideoMaskedMergeParameters = {} as any ) {
    return new VideoMaskedMerge( inputs, parameters );
}