import { AsyncStream } from 'data-async-iterators';
import { Duration, DurationUnit } from 'data-unit';
import { Executor } from './Executor';
import { Stream, ICompiler, Compiler } from '../Compiler';
import { FilterParams } from '../Filter';
import { VideoBlackDetect } from '../Filters/Video/Filters/VideoBlackDetect';
import { ConversionExecutor, Class } from './Conversion';
import { FFmpegProcess } from '../Utils/FFmpegProcess';
import { Hook } from '../Utils/Hookable';
import { Output } from '../Output';

/**
 * @category composable/executors
 */
export interface Scene {
    start : number;
    end : number;
}

/**
 * @category composable/executors
 */
export interface BlackSceneOptions {
    minDuration ?: number | Duration;
    pictureThreshold ?: number;
    pixelRatioThreshold ?: number;
}

/**
 * @category composable/executors
 */
export var BlackScenePattern = /black_start:\s*(?<start>[0-9]+(\.[0-9]+)?)\s+black_end:\s*(?<end>[0-9]+(\.[0-9]+)?)/i;

/**
 * @category composable/executors
 */
export class BlackSceneDetector extends Executor<AsyncStream<Scene>> {
    stream : Stream;

    compiler : ICompiler;

    options : BlackSceneOptions;

    public constructor ( stream : Stream, options : BlackSceneOptions = {}, compiler : ICompiler = new Compiler() ) {
        super();
        this.compiler = compiler;
        this.stream = stream;
        this.options = options;
    }

    createProcess<T extends BlackSceneProcess> ( factory : Class<T, [string[]]> ) : T;
    createProcess () : BlackSceneProcess;
    createProcess<T extends BlackSceneProcess = BlackSceneProcess> ( factory ?: Class<T, [string[]]> ) : T {
        if ( factory == null ) {
            factory = BlackSceneProcess as any;
        }

        const filterOptions : FilterParams = {};

        if ( typeof this.options.minDuration === 'number' ) {
            filterOptions.black_min_duration = this.options.minDuration;
        } else if ( this.options.minDuration instanceof Duration ) {
            filterOptions.black_min_duration = this.options.minDuration.as( DurationUnit.SECONDS, 2 );
        }

        if ( typeof this.options.pictureThreshold === 'number' ) {
            filterOptions.pixel_black_th = this.options.pictureThreshold;
        }

        if ( typeof this.options.pixelRatioThreshold === 'number' ) {
            filterOptions.picture_black_ratio_th = this.options.pixelRatioThreshold;
        }

        const outStream = new VideoBlackDetect( this.stream, filterOptions );

        const output = new Output( '-', [ '-f', 'null', '-map', outStream.outputs[ 0 ] ] );

        this.compiler.compile( outStream, output )

        const conversion = new ConversionExecutor( this.compiler );

        return conversion.createProcess( factory );
    }

    execute () : AsyncStream<Scene> {
        const process = this.createProcess();

        const stream = process.onBlackScene.toAsyncStream( process.onError, process.onEnd )
        
        process.start();

        return stream;
    }
}

/**
 * @category composable/executors
 */
export class BlackSceneProcess extends FFmpegProcess {
    onBlackScene : Hook<Scene> = new Hook( 'onBlackScene' );

    processBlackSceneLine ( line : string ) {
        const match = line.match( BlackScenePattern );

        if ( match != null ) {
            const scene : Scene = {
                start: parseFloat( match.groups.start ),
                end: parseFloat( match.groups.end )
            };

            this.onBlackScene.notify( scene );
        }
    }

    public setup () : void {
        super.setup();

        this.onOutputLine.subscribe( this.processBlackSceneLine.bind( this ) );
    }
}