import { Executor } from './Executor';
import { AsyncStream } from 'data-async-iterators';
import { Stream } from '../Stream';
import { ICompiler } from '../Compiler/ICompiler';
import { Duration, DurationUnit } from 'data-unit';
import { BlackDetectFilter } from '../Filters/BlackDetectFilter';
import { FilterNamedArguments } from '../Filters/Base/Filter';
import { ConversionExecutor, Class } from './Conversion';
import { FFmpegProcess } from '../Utils/FFmpegProcess';
import { Hook } from '../Utils/Hookable';
import { Compiler } from '../Compiler/Compiler';

export interface Scene {
    start : number;
    end : number;
}

export interface BlackSceneOptions {
    minDuration ?: number | Duration;
    pictureThreshold ?: number;
    pixelRatioThreshold ?: number;
}

export var BlackScenePattern = /black_start:\s*(?<start>[0-9]+(\.[0-9]+)?)\s+black_end:\s*(?<end>[0-9]+(\.[0-9]+)?)/i;

export class BlackSceneDetector extends Executor<AsyncStream<Scene>> {
    streams : Stream[];

    compiler : ICompiler;

    options : BlackSceneOptions;

    public constructor ( streams : Stream | Stream[], options : BlackSceneOptions = {}, compiler : ICompiler = new Compiler() ) {
        super();
        
        if ( !( streams instanceof Array ) ) {
            streams = [ streams ];
        }
        
        this.compiler = compiler;
        this.streams = streams;
        this.options = options;
    }

    createProcess<T extends BlackSceneProcess> ( factory : Class<T, [string[]]> ) : T;
    createProcess () : BlackSceneProcess;
    createProcess<T extends BlackSceneProcess = BlackSceneProcess> ( factory ?: Class<T, [string[]]> ) : T {
        if ( factory == null ) {
            factory = BlackSceneProcess as any;
        }

        const filterOptions : FilterNamedArguments = {};

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

        const output = new BlackDetectFilter( filterOptions ).from( [ this.streams[ 0 ] ] );

        const conversion = new ConversionExecutor( [ output.outputs[ 0 ] ], {
            output: null,
            outputArgs: [ '-f', 'null' ]
        } );

        return conversion.createProcess( factory );
    }

    execute () : AsyncStream<Scene> {
        const process = this.createProcess();

        const stream = process.onBlackScene.toAsyncStream( process.onError, process.onEnd )
        
        process.start();

        return stream;
    }
}

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