import { Composite, Filter } from '../Filter';
import { Stream } from '../Compiler';
import { AudioSelect } from '../Filters';

/**
 * @category composable/composites
 */
export class AudioSkipComposite extends Composite {
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
        const audio = new AudioSelect( this.input, { expr: `'not(between(t,${ this.start },${ this.end }))'` } );

        return new Filter( audio, 'asetpts', { expr: 'PTS-STARTPTS' } );
    }

    public clone () : AudioSkipComposite {
        return new AudioSkipComposite( this.input, this.start, this.end );
    }
}

/**
 * @category composable/composites
 */
export function audioSkip ( input : Stream, start : number, end : number ) : AudioSkipComposite {
    return new AudioSkipComposite( input, start, end );
}