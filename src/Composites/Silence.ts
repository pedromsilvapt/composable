import { Composite } from '../Filter';
import { Stream } from '../Compiler';
import { AudioEvalSrc, AudioEvalSrcParameters } from '../Filters';

/**
 * @category composable/composites
 */
export class SilenceComposite extends Composite {
    public duration : number;
    
    public options : AudioEvalSrcParameters;

    public constructor ( duration : number, options : AudioEvalSrcParameters = {} ) {
        super();

        this.duration = duration;
        this.options = options;
    }

    public compose () : Stream {
        return new AudioEvalSrc( null, {
            ...this.options,
            exprs: 0,
            duration: this.duration
        } );
    }
    
    public clone () : Composite {
        return new SilenceComposite( this.duration, this.options );
    }
}

/**
 * @category composable/composites
 */
export function silence ( duration : number, options : AudioEvalSrcParameters = {} ) : SilenceComposite {
    return new SilenceComposite( duration, options );
}