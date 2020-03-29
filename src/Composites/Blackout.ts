import { Composite } from '../Filter';
import { Stream } from '../Compiler';
import { VideoOverlay } from '../Filters/Video/Filters/VideoOverlay';
import { VideoColor } from '../Filters/Video/Sources/VideoColor';

/**
 * @category composable/composites
 */
export class BlackoutComposite extends Composite {
    public width : number;

    public height : number;

    public start : number;

    public end : number;

    public original : Stream;

    public constructor ( original : Stream, width : number, height : number, start : number, end : number ) {
        super();

        this.original = original;
        this.width = width;
        this.height = height;
        this.start = start;
        this.end = end;
    }

    public compose () : Stream {
        const black = new VideoColor( null, { 
            color: 'black',
            size: '' + this.width + 'x' + this.height, 
            duration: this.end - this.start 
        } );
        
        return new VideoOverlay( [ this.original, black ], { enable: `'between(t,${ this.start },${ this.end })'` } );
    }
    
    public clone () : Composite {
        return new BlackoutComposite( this.original, this.width, this.height, this.start, this.end );
    }
}

/**
 * @category composable/composites
 */
export function blackout ( input : Stream, width : number, height : number, start : number, end : number ) : BlackoutComposite {
    return new BlackoutComposite( input, width, height, start, end );
}