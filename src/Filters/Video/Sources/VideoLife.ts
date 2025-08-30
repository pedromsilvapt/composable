import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 14.7 life
  * Generate a life pattern.
  * 
  * This source is based on a generalization of John Conway’s life game.
  * 
  * The sourced input represents a life grid, each pixel represents a cell which can be in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
  * 
  * At each interaction the grid evolves according to the adopted rule, which specifies the number of neighbor alive cells which will make a cell stay alive or born. The rule option allows one to specify the rule to adopt.
  * 
  * This source accepts the following options:
  */
export class VideoLife extends Filter<VideoLifeParameters> {
    outputs : FilterStreamRef<VideoLifeParameters, VideoLife>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLifeParameters = {} as any ) {
        super( inputs, 'life', parameters );
    }
}

export interface VideoLifeParameters {
    /**
      * Set the file from which to read the initial grid state. In the file, each non-whitespace character is considered an alive cell, and newline is used to delimit the end of each row.
      * If this option is not specified, the initial grid is generated randomly.
      * @aliases f
      */
    filename ?: string | number;
    /**
      * Set the file from which to read the initial grid state. In the file, each non-whitespace character is considered an alive cell, and newline is used to delimit the end of each row.
      * If this option is not specified, the initial grid is generated randomly.
      * @aliasof filename
      */
    f ?: string | number;
    /**
      * Set the video rate, that is the number of frames generated per second. Default is 25.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set the video rate, that is the number of frames generated per second. Default is 25.
      * @aliasof rate
      */
    r ?: string | number;
    /**
      * Set the random fill ratio for the initial random grid. It is a floating point number value ranging from 0 to 1, defaults to 1/PHI. It is ignored when a file is specified.
      * @aliases ratio
      */
    random_fill_ratio ?: string | number;
    /**
      * Set the random fill ratio for the initial random grid. It is a floating point number value ranging from 0 to 1, defaults to 1/PHI. It is ignored when a file is specified.
      * @aliasof random_fill_ratio
      */
    ratio ?: string | number;
    /**
      * Set the seed for filling the initial random grid, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
      * @aliases seed
      */
    random_seed ?: string | number;
    /**
      * Set the seed for filling the initial random grid, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
      * @aliasof random_seed
      */
    seed ?: string | number;
    /**
      * Set the life rule.
      * A rule can be specified with a code of the kind "SNS/BNB", where NS and NB are sequences of numbers in the range 0-8,
      * NS specifies the number of alive neighbor cells which make a live cell stay alive, and NB the number of alive neighbor cells which make a dead cell to become alive (i.e. to "born"). "s" and "b" can be used in place of "S" and "B", respectively.
      * Alternatively a rule can be specified by an 18-bits integer. The 9 high order bits are used to encode the next cell state if it is alive for each number of neighbor alive cells, the low order bits specify the rule for "borning" new cells. Higher order bits encode for an higher number of neighbor cells. For example the number 6153 = (12<<9)+9 specifies a stay alive rule of 12 and a born rule of 9, which corresponds to "S23/B03".
      * Default value is "S23/B3", which is the original Conway’s game of life rule, and will keep a cell alive if it has 2 or 3 neighbor alive cells, and will born a new cell if there are three alive cells around a dead cell.
      */
    rule ?: string | number;
    /**
      * Set the size of the output video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual.
      * If filename is specified, the size is set by default to the same size of the input file. If size is set, it must contain the size specified in the input file, and the initial grid defined in that file is centered in the larger resulting area.
      * If a filename is not specified, the size value defaults to "320x240" (used for a randomly generated initial grid).
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set the size of the output video. For the syntax of this option, check the
      * (ffmpeg-utils)"Video size" section in the ffmpeg-utils manual.
      * If filename is specified, the size is set by default to the same size of the input file. If size is set, it must contain the size specified in the input file, and the initial grid defined in that file is centered in the larger resulting area.
      * If a filename is not specified, the size value defaults to "320x240" (used for a randomly generated initial grid).
      * @aliasof size
      */
    s ?: string | number;
    /** If set to 1, stitch the left and right grid edges together, and the top and bottom edges also. Defaults to 1. */
    stitch ?: string | number;
    /**
      * Set cell mold speed. If set, a dead cell will go from death_color to
      * mold_color with a step of mold. mold can have a value from 0 to 255.
      */
    mold ?: string | number;
    /** Set the color of living (or new born) cells. */
    life_color ?: string | number;
    /** Set the color of dead cells. If mold is set, this is the first color used to represent a dead cell. */
    death_color ?: string | number;
    /**
      * Set mold color, for definitely dead and moldy cells.
      * For the syntax of these 3 color options, check the (ffmpeg-utils)"Color" section in the
      * ffmpeg-utils manual.
      */
    mold_color ?: string | number;

    [key : string] : string | number;
}

/**
  * 14.7 life
  * Generate a life pattern.
  * 
  * This source is based on a generalization of John Conway’s life game.
  * 
  * The sourced input represents a life grid, each pixel represents a cell which can be in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
  * 
  * At each interaction the grid evolves according to the adopted rule, which specifies the number of neighbor alive cells which will make a cell stay alive or born. The rule option allows one to specify the rule to adopt.
  * 
  * This source accepts the following options:
  */
export function videoLife ( inputs : Stream | Stream[] = [], parameters : VideoLifeParameters = {} as any ) {
    return new VideoLife( inputs, parameters );
}