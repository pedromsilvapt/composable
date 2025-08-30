import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.3 alphamerge
  * Add or replace the alpha component of the primary input with the grayscale value of a second input. This is intended for use with
  * alphaextract to allow the transmission or storage of frame sequences that have alpha in a format that doesn’t support an alpha channel.
  * 
  * For example, to reconstruct full frames from a normal YUV-encoded video and a separate video created with alphaextract, you might use:
  * 
  * 
  * movie=in_alpha.mkv [alpha]; [in][alpha] alphamerge [out]
  * 
  * Since this filter is designed for reconstruction, it operates on frame sequences without considering timestamps, and terminates when either input reaches end of stream. This will cause problems if your encoding pipeline drops frames. If you’re trying to apply an image as an overlay to a video stream, consider the overlay filter instead.
  */
export class VideoAlphaMerge extends Filter<VideoAlphaMergeParameters> {
    outputs : FilterStreamRef<VideoAlphaMergeParameters, VideoAlphaMerge>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoAlphaMergeParameters = {} as any ) {
        super( inputs, 'alphamerge', parameters );
    }
}

export interface VideoAlphaMergeParameters {


    [key : string] : string | number;
}

/**
  * 11.3 alphamerge
  * Add or replace the alpha component of the primary input with the grayscale value of a second input. This is intended for use with
  * alphaextract to allow the transmission or storage of frame sequences that have alpha in a format that doesn’t support an alpha channel.
  * 
  * For example, to reconstruct full frames from a normal YUV-encoded video and a separate video created with alphaextract, you might use:
  * 
  * 
  * movie=in_alpha.mkv [alpha]; [in][alpha] alphamerge [out]
  * 
  * Since this filter is designed for reconstruction, it operates on frame sequences without considering timestamps, and terminates when either input reaches end of stream. This will cause problems if your encoding pipeline drops frames. If you’re trying to apply an image as an overlay to a video stream, consider the overlay filter instead.
  */
export function videoAlphaMerge ( inputs : Stream | Stream[] = [], parameters : VideoAlphaMergeParameters = {} as any ) {
    return new VideoAlphaMerge( inputs, parameters );
}