import { Composite, Filter } from '../Filter';
import { VideoTrim, AudioTrim } from '../Filters';
import { Stream } from '../Compiler';

/**
 * @category composable/composites
 */
export class TrimComposite extends Composite {
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
        let video = this.video;
        video = new VideoTrim( video, { start: this.start, end: this.end } );
        video = new Filter( video, 'setpts', { expr: 'PTS-STARTPTS' } );

        let audio = this.audio;
        audio = new AudioTrim( audio, { start: this.start, end: this.end } );
        audio = new Filter( audio, 'asetpts', { expr: 'PTS-STARTPTS' } );
        
        return [ video, audio ];
    }
    
    public clone () : Composite {
        return new TrimComposite( this.video, this.audio, this.start, this.end );
    }
}

/**
 * @category composable/composites
 */
export function trim ( video : Stream, audio : Stream, start : number, end : number ) : TrimComposite {
    return new TrimComposite( video, audio, start, end );
}