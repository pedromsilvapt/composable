import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.203 tile
  * Tile several successive frames together.
  * 
  * The filter accepts the following options:
  */
export class VideoTile extends Filter<VideoTileParameters> {
    outputs : FilterStreamRef<VideoTileParameters, VideoTile>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoTileParameters = {} as any ) {
        super( inputs, 'tile', parameters );
    }
}

export interface VideoTileParameters {
    /**
      * Set the grid size (i.e. the number of lines and columns). For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual.
      */
    layout ?: string | number;
    /** Set the maximum number of frames to render in the given area. It must be less than or equal to wxh. The default value is 0, meaning all the area will be used. */
    nb_frames ?: string | number;
    /** Set the outer border margin in pixels. */
    margin ?: string | number;
    /** Set the inner border thickness (i.e. the number of pixels between frames). For more advanced padding options (such as having different values for the edges), refer to the pad video filter. */
    padding ?: string | number;
    /**
      * Specify the color of the unused area. For the syntax of this option, check the
      * (ffmpeg-utils)"Color" section in the ffmpeg-utils manual. The default value of color is "black".
      */
    color ?: string | number;
    /** Set the number of frames to overlap when tiling several successive frames together. The value must be between 0 and nb_frames - 1. */
    overlap ?: string | number;
    /** Set the number of frames to initially be empty before displaying first output frame. This controls how soon will one get first output frame. The value must be between 0 and nb_frames - 1. */
    init_padding ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.203 tile
  * Tile several successive frames together.
  * 
  * The filter accepts the following options:
  */
export function videoTile ( inputs : Stream | Stream[] = [], parameters : VideoTileParameters = {} as any ) {
    return new VideoTile( inputs, parameters );
}