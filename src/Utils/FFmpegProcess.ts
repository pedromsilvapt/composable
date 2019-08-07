
import { FFmpegProgress } from './FFmpegProgress';
// import { Future } from '@pedromsilva/data-future';
// import { Duration } from '../../ES2017/Units';
import { ChildProcess, spawn } from 'child_process';
import { AsyncStream } from 'data-async-iterators';
import { fromStream } from 'data-async-iterators/streams';
import { Hook } from './Hookable';
import { Duration } from '@pedromsilva/data-unit';

export enum FFmpegErrorDetector {
    VerboseError = 0,
    Fuzzy = 1,
    None = 2
}

export class FFmpegProcess {
    args : string[];

    process : ChildProcess;

    killed : boolean = false;

    errorDetector : FFmpegErrorDetector;

    onProgress : Hook<FFmpegProgress> = new Hook( 'onProgress' );
    
    onOutputLine : Hook<string> = new Hook( 'onOutputLine' );

    onEnd : Hook<void> = new Hook( 'onEnd' );

    onError : Hook<Error> = new Hook( 'onError' );

    protected errorMessages : string[] = [];
    
    // protected eventsIterator : AsyncIterableSubject<FFmpegProgress> = new AsyncIterableSubject();

    // events : AsyncIterable<FFmpegProgress> = this.eventsIterator;

    constructor ( args : string[], errorDetector ?: FFmpegErrorDetector );
    constructor ( process : ChildProcess, errorDetector ?: FFmpegErrorDetector );
    constructor ( process : ChildProcess | string[], errorDetector : FFmpegErrorDetector = FFmpegErrorDetector.Fuzzy ) {
        if ( process instanceof Array ) {
            this.args = process;
            
            console.log( this.args );
        } else {
            this.process = process;

            this.setup();
        }

        this.errorDetector = errorDetector;
    }

    protected setup ( duration ?: number | string | Duration ) {
        this.process.on( 'error', error => this.onError.notify( error ) );
        
        const progress = new FFmpegProgress( duration );
        
        const linesStream = new AsyncStream<Buffer>( fromStream( this.process.stderr ) )
            .map( buffer => buffer.toString( 'utf8' ) )
            // .chunkByLines();

        linesStream.forEach( line => {
            this.onOutputLine.notify( line );

            if ( progress.update( line ) ) {
                this.onProgress.notify( progress );

                if ( this.errorMessages.length > 0 ) {
                    this.errorMessages.length = 0;
                }
            } else {
                if ( this.errorMessages.length < 20 ) {
                    let isError = false;
                    
                    if ( this.errorDetector === FFmpegErrorDetector.VerboseError ) {
                        isError = true;
                    } else if ( this.errorDetector === FFmpegErrorDetector.Fuzzy ) {
                        if ( line.toLowerCase().includes( 'error' ) || this.errorMessages.length > 0 ) {
                            isError = true;
                        }
                    }
                    
                    if ( isError ) {
                        this.errorMessages.push( line );
                    }
                }
            }
        } );
        
        this.process.stderr.on( 'end', () => {
            if ( this.errorMessages.length > 0 ) {
                this.onError.notify( new Error( `Encoding error: ` + this.errorMessages.join( '\n' ) ) );
            }

            this.onEnd.notify();
        } );
    }

    start ( duration ?: number | string | Duration ) : void {
        if ( this.process == null ) {
            this.process = spawn( this.args[ 0 ], this.args.slice( 1 ) );

            this.setup( duration );
        }
    }

    pause () {
        if ( this.process ) {
            this.process.kill( 'SIGSTOP' );
        }
    }

    resume () {
        if ( this.process ) {
            this.process.kill( 'SIGCONT' );
        }
    }

    kill () {
        this.killed = true;

        if ( this.process ) {
            this.process.kill( 'SIGINT' );
        }
    }

    wait () {
        return this.onEnd.toPromise( this.onError );
    }
}