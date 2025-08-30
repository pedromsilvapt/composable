import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.140 ocr
  * Optical Character Recognition
  * 
  * This filter uses Tesseract for optical character recognition. To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-libtesseract.
  * 
  * It accepts the following options:
  */
export class VideoOcr extends Filter<VideoOcrParameters> {
    outputs : FilterStreamRef<VideoOcrParameters, VideoOcr>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoOcrParameters = {} as any ) {
        super( inputs, 'ocr', parameters );
    }
}

export interface VideoOcrParameters {
    /** Set datapath to tesseract data. Default is to use whatever was set at installation. */
    datapath ?: string | number;
    /** Set language, default is "eng". */
    language ?: string | number;
    /** Set character whitelist. */
    whitelist ?: string | number;
    /** Set character blacklist. */
    blacklist ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.140 ocr
  * Optical Character Recognition
  * 
  * This filter uses Tesseract for optical character recognition. To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-libtesseract.
  * 
  * It accepts the following options:
  */
export function videoOcr ( inputs : Stream | Stream[] = [], parameters : VideoOcrParameters = {} as any ) {
    return new VideoOcr( inputs, parameters );
}