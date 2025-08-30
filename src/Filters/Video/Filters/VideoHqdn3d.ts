import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.95 hqdn3d
  * This is a high precision/quality 3d denoise filter. It aims to reduce image noise, producing smooth images and making still images really still. It should enhance compressibility.
  * 
  * It accepts the following optional parameters:
  */
export class VideoHqdn3d extends Filter<VideoHqdn3dParameters> {
    outputs : FilterStreamRef<VideoHqdn3dParameters, VideoHqdn3d>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoHqdn3dParameters = {} as any ) {
        super( inputs, 'hqdn3d', parameters );
    }
}

export interface VideoHqdn3dParameters {
    /** A non-negative floating point number which specifies spatial luma strength. It defaults to 4.0. */
    luma_spatial ?: string | number;
    /** A non-negative floating point number which specifies spatial chroma strength. It defaults to 3.0*luma_spatial/4.0. */
    chroma_spatial ?: string | number;
    /**
      * A floating point number which specifies luma temporal strength. It defaults to 6.0*
      * luma_spatial/4.0.
      */
    luma_tmp ?: string | number;
    /**
      * A floating point number which specifies chroma temporal strength. It defaults to
      * luma_tmp*chroma_spatial/luma_spatial.
      */
    chroma_tmp ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.95 hqdn3d
  * This is a high precision/quality 3d denoise filter. It aims to reduce image noise, producing smooth images and making still images really still. It should enhance compressibility.
  * 
  * It accepts the following optional parameters:
  */
export function videoHqdn3d ( inputs : Stream | Stream[] = [], parameters : VideoHqdn3dParameters = {} as any ) {
    return new VideoHqdn3d( inputs, parameters );
}