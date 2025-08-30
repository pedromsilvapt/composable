import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.110 lenscorrection
  * Correct radial lens distortion
  * 
  * This filter can be used to correct for radial distortion as can result from the use of wide angle lenses, and thereby re-rectify the image. To find the right parameters one can use tools available for example as part of opencv or simply trial-and-error. To use opencv use the calibration sample (under samples/cpp) from the opencv sources and extract the k1 and k2 coefficients from the resulting matrix.
  * 
  * Note that effectively the same filter is available in the open-source tools Krita and Digikam from the KDE project.
  * 
  * In contrast to the vignette filter, which can also be used to compensate lens errors, this filter corrects the distortion of the image, whereas vignette corrects the brightness distribution, so you may want to use both filters together in certain cases, though you will have to take care of ordering, i.e. whether vignetting should be applied before or after lens correction.
  */
export class VideoLensCorrection extends Filter<VideoLensCorrectionParameters> {
    outputs : FilterStreamRef<VideoLensCorrectionParameters, VideoLensCorrection>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLensCorrectionParameters = {} as any ) {
        super( inputs, 'lenscorrection', parameters );
    }
}

export interface VideoLensCorrectionParameters {


    [key : string] : string | number;
}

/**
  * 11.110 lenscorrection
  * Correct radial lens distortion
  * 
  * This filter can be used to correct for radial distortion as can result from the use of wide angle lenses, and thereby re-rectify the image. To find the right parameters one can use tools available for example as part of opencv or simply trial-and-error. To use opencv use the calibration sample (under samples/cpp) from the opencv sources and extract the k1 and k2 coefficients from the resulting matrix.
  * 
  * Note that effectively the same filter is available in the open-source tools Krita and Digikam from the KDE project.
  * 
  * In contrast to the vignette filter, which can also be used to compensate lens errors, this filter corrects the distortion of the image, whereas vignette corrects the brightness distribution, so you may want to use both filters together in certain cases, though you will have to take care of ordering, i.e. whether vignetting should be applied before or after lens correction.
  */
export function videoLensCorrection ( inputs : Stream | Stream[] = [], parameters : VideoLensCorrectionParameters = {} as any ) {
    return new VideoLensCorrection( inputs, parameters );
}