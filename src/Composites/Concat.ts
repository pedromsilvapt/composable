import { Composite } from '../Filter';
import { Stream } from '../Compiler';
import { Concat } from '../Filters';

/**
 * @category composable/composites
 */
function checkDimensions ( videos : Stream[][], audios : Stream[][] ) {
    const segments = [ ...videos, ...audios ];

    const segmentLength = segments[ 0 ].length;

    const allSame = segments.every( seg => seg.length == segmentLength );

    if ( !allSame ) {
        throw new Error( `Concat: All video & audio segments must have the same length, instead got [${ segments.map( a => a.length ).join( ', ' ) }]` );
    }
}

/**
 * @category composable/composites
 */
export class ConcatComposite extends Composite {
    public videos : Stream[][];

    public audios : Stream[][];

    public segments : number;

    public constructor ( videos : Stream[][], audios : Stream[][] ) {
        super();
        
        this.videos = videos;
        this.audios = audios;
        this.segments = [ ...videos, audios ][ 0 ].length;
        
        checkDimensions( videos, audios );
    }

    public compose () : Stream {
        const inputs = [];

        for ( let i = 0; i < this.segments; i++ ) {
            for ( let video of this.videos ) inputs.push( video[ i ] );

            for ( let audio of this.audios ) inputs.push( audio[ i ] );
        }

        return new Concat( inputs, {
            v: this.videos.length,
            a: this.audios.length,
            n: this.segments
        } );
    }
    
    public clone () : Composite {
        return new ConcatComposite( this.videos, this.audios );
    }
}

/**
 * @category composable/composites
 */
export function concat ( videos : Stream[][], audios : Stream[][] ) : ConcatComposite {
    return new ConcatComposite( videos, audios );
}

/**
 * @category composable/composites
 */
export function separator<T> ( items : T[], separator : ( index : number, item : T ) => T ) : T[] {
    const separated : T[] = [];

    for ( let i = 0; i < items.length; i++ ) {
        separated.push( items[ i ] );

        if ( i + 1 < items.length ) {
            separated.push( separator( i, items[ i ] ) );
        }
    }

    return separated;
}
