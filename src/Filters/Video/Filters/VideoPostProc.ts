import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.153 pp
  * Enable the specified chain of postprocessing subfilters using libpostproc. This library should be automatically selected with a GPL build (--enable-gpl). Subfilters must be separated by ’/’ and can be disabled by prepending a ’-’. Each subfilter and some options have a short and a long name that can be used interchangeably, i.e. dr/dering are the same.
  * 
  * The filters accept the following options:
  */
export class VideoPostProc extends Filter<VideoPostProcParameters> {
    outputs : FilterStreamRef<VideoPostProcParameters, VideoPostProc>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoPostProcParameters = {} as any ) {
        super( inputs, 'pp', parameters );
    }
}

export interface VideoPostProcParameters {
    /** Set postprocessing subfilters string. */
    subfilters ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.153 pp
  * Enable the specified chain of postprocessing subfilters using libpostproc. This library should be automatically selected with a GPL build (--enable-gpl). Subfilters must be separated by ’/’ and can be disabled by prepending a ’-’. Each subfilter and some options have a short and a long name that can be used interchangeably, i.e. dr/dering are the same.
  * 
  * The filters accept the following options:
  */
export function videoPostProc ( inputs : Stream | Stream[] = [], parameters : VideoPostProcParameters = {} as any ) {
    return new VideoPostProc( inputs, parameters );
}