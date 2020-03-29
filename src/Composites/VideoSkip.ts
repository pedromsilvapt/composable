import { Composite, Filter } from '../Filter';
import { Stream } from '../Compiler';
import { VideoSelect } from '../Filters';

/**
 * @category composable/composites
 */
export class VideoSkipComposite extends Composite {
    public input : Stream;

    public start : number;

    public end : number;
    
    public constructor ( input : Stream, start : number, end : number ) {
        super();

        this.input = input;
        this.start = start;
        this.end = end;
    }

    public compose () : Stream {
        const video = new VideoSelect( this.input, { expr: `'not(between(t,${ this.start },${ this.end }))'` } );

        return new Filter( video, 'setpts', { expr: 'PTS-STARTPTS' } );
    }

    public clone () : VideoSkipComposite {
        return new VideoSkipComposite( this.input, this.start, this.end );
    }
}

/**
 * @category composable/composites
 */
export function videoSkip ( input : Stream, start : number, end : number ) : VideoSkipComposite {
    return new VideoSkipComposite( input, start, end );
}