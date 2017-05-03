import { Stream, OutputStream, DynamicStream } from "../Stream";
import { trim, vtrim } from "./TrimFilter";
import { concat } from "./ConcatFilter";
import { NativeFilter, FilterNamedArguments, FilterArgument } from "./Base/Filter";
import { format } from "./FormatFilter";
import { fade } from "./FadeFilter";
import { overlay } from "./OverlayFilter";

export class FifoFilter extends NativeFilter {
    name : string = 'fifo';
}

export class ACrossfadeFilter extends NativeFilter {
    name : string = 'acrossfade';

    parameters : string[] = [ 'nb_samples', 'duration', 'overlap', 'curve1', 'curve2' ];
}

export function fifo ( input : Stream ) : OutputStream {
    return new FifoFilter().from( [ input ] ).outputs[ 0 ];
}

export function crossfade( intro : Stream, introDuration : number, outro : Stream, outroDuration : number, fadeDuration : number ) : OutputStream {
    if ( introDuration < fadeDuration || outroDuration < fadeDuration ) {
        throw new Error( `Fade Duration is too long.` );
    }

     const firstclip = vtrim( intro, 0, introDuration - fadeDuration );
     const secondclip = vtrim( outro, fadeDuration, outroDuration );

     const fadeOutSrc = vtrim( intro, introDuration - fadeDuration, introDuration );
     const fadeInSrc = vtrim( intro, 0, fadeDuration );

     const fadeIn = fifo( fade( format( fadeInSrc, 'yuva420p' ), 'in', 0, fadeDuration, 1 ) );
     const fadeOut = fifo( fade( format( fadeOutSrc, 'yuva420p' ), 'out', 0, fadeDuration, 1 ) );

     const crossfade = overlay( fadeIn, fadeOut );

     const [ video ] = concat( [ firstclip, crossfade, secondclip ], [] ) as OutputStream[];

     return video;
    // [0:v]trim=start=0:end=9,setpts=PTS-STARTPTS[firstclip];
    // [1:v]trim=start=1,setpts=PTS-STARTPTS[secondclip];
    // [0:v]trim=start=9:end=10,setpts=PTS-STARTPTS[fadeoutsrc];
    // [1:v]trim=start=0:end=1,setpts=PTS-STARTPTS[fadeinsrc];
    // [fadeinsrc]format=pix_fmts=yuva420p,      
    //             fade=t=in:st=0:d=1:alpha=1[fadein];
    // [fadeoutsrc]format=pix_fmts=yuva420p,
    //             fade=t=out:st=0:d=1:alpha=1[fadeout];
    // [fadein]fifo[fadeinfifo];
    // [fadeout]fifo[fadeoutfifo];
    // [fadeoutfifo][fadeinfifo]overlay[crossfade];
    // [firstclip][crossfade][secondclip]concat=n=3[output];
    // [0:a][1:a] acrossfade=d=1 [audio]
}

export function acrossfade ( intro : Stream, outro : Stream, duration : number ) : OutputStream {
    const filter = new ACrossfadeFilter( { d: duration } ).from( [ intro, outro ] );

    return filter.outputs[ 0 ];
}