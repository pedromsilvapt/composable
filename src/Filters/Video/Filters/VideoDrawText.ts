import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.59 drawtext
  * Draw a text string or text from a specified file on top of a video, using the libfreetype library.
  * 
  * To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-libfreetype. To enable default font fallback and the font option you need to configure FFmpeg with --enable-libfontconfig. To enable the text_shaping option, you need to configure FFmpeg with
  * --enable-libfribidi.
  */
export class VideoDrawText extends Filter<VideoDrawTextParameters> {
    outputs : FilterStreamRef<VideoDrawTextParameters, VideoDrawText>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoDrawTextParameters = {} as any ) {
        super( inputs, 'drawtext', parameters );
    }
}

export interface VideoDrawTextParameters {


    [key : string] : string | number;
}

/**
  * 11.59 drawtext
  * Draw a text string or text from a specified file on top of a video, using the libfreetype library.
  * 
  * To enable compilation of this filter, you need to configure FFmpeg with
  * --enable-libfreetype. To enable default font fallback and the font option you need to configure FFmpeg with --enable-libfontconfig. To enable the text_shaping option, you need to configure FFmpeg with
  * --enable-libfribidi.
  */
export function videoDrawText ( inputs : Stream | Stream[] = [], parameters : VideoDrawTextParameters = {} as any ) {
    return new VideoDrawText( inputs, parameters );
}