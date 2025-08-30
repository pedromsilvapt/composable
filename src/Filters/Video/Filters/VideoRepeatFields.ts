import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.167 repeatfields
  * This filter uses the repeat_field flag from the Video ES headers and hard repeats fields based on its value.
  */
export class VideoRepeatFields extends Filter<VideoRepeatFieldsParameters> {
    outputs : FilterStreamRef<VideoRepeatFieldsParameters, VideoRepeatFields>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoRepeatFieldsParameters = {} as any ) {
        super( inputs, 'repeatfields', parameters );
    }
}

export interface VideoRepeatFieldsParameters {


    [key : string] : string | number;
}

/**
  * 11.167 repeatfields
  * This filter uses the repeat_field flag from the Video ES headers and hard repeats fields based on its value.
  */
export function videoRepeatFields ( inputs : Stream | Stream[] = [], parameters : VideoRepeatFieldsParameters = {} as any ) {
    return new VideoRepeatFields( inputs, parameters );
}