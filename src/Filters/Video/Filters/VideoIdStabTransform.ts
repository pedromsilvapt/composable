import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.218 vidstabtransform
  * Video stabilization/deshaking: pass 2 of 2, see vidstabdetect for pass 1.
  * 
  * Read a file with transform information for each frame and apply/compensate them. Together with the vidstabdetect filter this can be used to deshake videos. See also
  * http://public.hronopik.de/vid.stab. It is important to also use the unsharp filter, see below.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libvidstab.
  */
export class VideoIdStabTransform extends Filter<VideoIdStabTransformParameters> {
    outputs : FilterStreamRef<VideoIdStabTransformParameters, VideoIdStabTransform>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoIdStabTransformParameters = {} as any ) {
        super( inputs, 'vidstabtransform', parameters );
    }
}

export interface VideoIdStabTransformParameters {


    [key : string] : string | number;
}

/**
  * 11.218 vidstabtransform
  * Video stabilization/deshaking: pass 2 of 2, see vidstabdetect for pass 1.
  * 
  * Read a file with transform information for each frame and apply/compensate them. Together with the vidstabdetect filter this can be used to deshake videos. See also
  * http://public.hronopik.de/vid.stab. It is important to also use the unsharp filter, see below.
  * 
  * To enable compilation of this filter you need to configure FFmpeg with
  * --enable-libvidstab.
  */
export function videoIdStabTransform ( inputs : Stream | Stream[] = [], parameters : VideoIdStabTransformParameters = {} as any ) {
    return new VideoIdStabTransform( inputs, parameters );
}