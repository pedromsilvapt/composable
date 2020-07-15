import { Executor } from './Executor';
import { ICompiler } from '../Compiler';
import { spawn } from 'child_process';
import path from 'path';

export class ProbeExecutor extends Executor<Promise<MediaMetadata>> {
    compiler: ICompiler;

    file : string;

    args : string[];

    public constructor ( file : string = null ) {
        super();
        
        this.file = file;
        this.args  = [ '-show_format', '-show_streams', '-loglevel', 'warning', '-print_format', 'json' ];

        if ( typeof file === 'string' ) {
            this.args.push( '-i', file );
        } else {
            this.args.push( '-i', 'pipe:0' );
        }
    }

    protected probeNormalizeTracks ( tracks : any[] ) : TrackMediaMetadata[] {
        const fps = ( str : string ) => {
            const [ a, b ] = str.split( '/' );

            if ( +b == 0 ) {
                return null;
            }

            return +a / +b;
        };

        for ( let track of tracks ) {
            if ( !track.tags ) {
                track.tags = {};
            }
        }

        return tracks.map<TrackMediaMetadata>( track => ( {
            index: track.index,
            typeIndex: track.typeIndex,
            file: 0,
            type: track.codec_type,
            codec: track.codec_name,
            bitrate: +track.tags.BPS,
            size: +track.tags.NUMBER_OF_BYTES,
            frames: +track.tags.NUMBER_OF_FRAMES,
            width: +track.width,
            height: +track.height,
            sampleAspectRatio: Fraction.parse( track.sample_aspect_ratio, ':' ),
            aspectRatio: Fraction.parse( track.display_aspect_ratio, ':' ),
            framerate: fps( track.r_frame_rate ),
            sampleRate: +track.sample_rate,
            channels: +track.channels,
            // Track each stream's duration as well
            duration: null
        } ) );
    }

    protected probeNormalizeFormat ( format : any ) : FormatMediaMetadata {
        return {
            name: format.format_name,
            startTime: +format.start_time,
            duration: +format.duration,
            size: +format.size,
            bitrate: +format.bit_rate
        };
    }

    protected probeNormalize ( metadata : any, track : string ) : MediaMetadata {
        return {
            files: [ {
                id: track,
                index: 0,
                format: this.probeNormalizeFormat( metadata.format ),
                duration: +metadata.format.duration,
                tracks: this.probeNormalizeTracks( metadata.streams )
            } ],
            tracks: this.probeNormalizeTracks( metadata.streams )
        }
    }

    transformResult ( resultString : string ) {
        let result = JSON.parse( resultString );

        let types : Record<string, number> = {};

        result.streams = result.streams.map( ( stream : any ) => {
            let type = stream.codec_type;

            if ( !( type in types ) ) {
                types[ type ] = 0;
            }

            stream.typeIndex = types[ type ]++;

            return stream;
        } );

        return result;
    }

    execute () : Promise<MediaMetadata> {
        return new Promise( ( resolve, reject ) => {
            try {
                let node = spawn( 'ffprobe', this.args );
        
                node.stdout.setEncoding( 'utf8' );

                let exitCode : number = null;
                let result = '';
                let resultErr = '';

                node.on( 'exit', code => exitCode = code );
                node.on( 'error', err => reject( err ) );

                node.stdout.on( 'data', data => result += Buffer.isBuffer( data ) ? data.toString( 'utf8' ) : data );
                node.stderr.on( 'data', data => resultErr += data );
                node.stdout.on( 'end', () => {
                    if ( exitCode || !result ) {
                        return reject( resultErr );
                    }

                    try {
                        const metadata = this.transformResult( result );

                        resolve( this.probeNormalize( metadata, this.file ) );
                    } catch ( ex ) {
                        reject( ex );
                    }
                } );
            } catch ( error ) {
                reject( error );
            }
        } );
    }
}

export interface TrackMediaMetadata {
    index: number;
    typeIndex: string;
    file: number;
    type: 'video' | 'audio' | string;
    codec: string;
    bitrate: number;
    size: number;
    frames: number;
    width: number;
    height: number;
    sampleAspectRatio: Fraction;
    aspectRatio: Fraction;
    framerate: number;
    sampleRate: number;
    channels: number;
    duration: number;
}

export interface FormatMediaMetadata {
    name : string;
    startTime : number;
    duration : number;
    size : number;
    bitrate : number;
}

export interface FileMediaMetadata {
    id : string;
    index : number;
    duration : number;
    format : FormatMediaMetadata;
    tracks : TrackMediaMetadata[];
}

export interface MediaMetadata {
    files : FileMediaMetadata[];
    tracks : TrackMediaMetadata[];
}

export class Fraction {
    public numerator : number;
    public denominator : number;

    public constructor ( numerator : number, denominator : number = 1 ) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public toNumber () : number {
        return this.numerator / this.denominator;
    }

    public toString ( separator : string = '/' ) : string {
        return `${ this.numerator }${ separator }${ this.denominator }`;
    }

    public static parse ( str : string, separator : string = '/' ) : Fraction {
        if ( str == null ) {
            return null;
        }

        if ( str.includes( separator ) ) {
            const seg = str.split( separator );

            return new Fraction( parseInt( seg[ 0 ], 0 ), parseInt( seg[ 0 ], 0 ) )
        } else {
            return new Fraction( parseInt( str, 10 ) );
        }
    }
}

export function probe ( file : string ) : Promise<MediaMetadata> {
    const prober = new ProbeExecutor( file );

    return prober.execute();
}