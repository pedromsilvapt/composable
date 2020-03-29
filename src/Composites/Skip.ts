import { Composite } from '../Filter';
import { Stream } from '../Compiler';
import { AudioSkipComposite } from './AudioSkip';
import { VideoSkipComposite } from './VideoSkip';

/**
 * @category composable/composites
 */
export class SkipComposite extends Composite {
    public video : Stream;

    public audio : Stream;

    public start : number;

    public end : number;
    
    public constructor ( video : Stream, audio : Stream, start : number, end : number ) {
        super();

        this.video = video;
        this.audio = audio;
        this.start = start;
        this.end = end;
    }

    public compose () : Stream[] {
        const video = new VideoSkipComposite( this.video, this.start, this.end );
        const audio = new AudioSkipComposite( this.audio, this.start, this.end );

        return [ video, audio ];
    }

    public clone () : SkipComposite {
        return new SkipComposite( this.video, this.audio, this.start, this.end );
    }
}

/**
 * @category composable/composites
 */
export function skip ( video : Stream, audio : Stream, start : number, end : number ) : SkipComposite {
    return new SkipComposite( video, audio, start, end );
}