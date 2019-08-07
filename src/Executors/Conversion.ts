import { Executor } from './Executor';
import { ICompiler } from '../Compiler/ICompiler';
import { Stream } from '../Stream';
import { Compiler } from '../Compiler/Compiler';
import { CommandOptions } from '../Fragments/Command';
import { CommandExecutor } from './Command';
import { FFmpegProcess } from '../Utils/FFmpegProcess';

export interface Class<T, A extends any[] = []> {
    new ( ...args : A ) : T;
}

export class ConversionExecutor extends Executor<FFmpegProcess> {
    compiler: ICompiler;

    streams: any[];

    options : Partial<CommandOptions>;

    command : CommandExecutor;
    
    public constructor ( streams : Stream | Stream[], options : Partial<CommandOptions> = {}, compiler : ICompiler = new Compiler() ) {
        super();
        
        if ( !( streams instanceof Array ) ) {
            streams = [ streams ];
        }
        
        this.compiler = compiler;
        this.streams = streams;
        this.options = options;
    }

    createProcess<T> ( factory : Class<T, [string[]]> ) : T;
    createProcess () : FFmpegProcess;
    createProcess<T = FFmpegProcess> ( factory ?: Class<T, [string[]]> ) : T {
        if ( factory == null ) {
            factory = FFmpegProcess as any;
        }
        
        const command = new CommandExecutor( this.streams, this.options, this.compiler );

        const process = new factory( command.getCommandArguments() );

        return process;
    }

    execute () : FFmpegProcess {
        const process = this.createProcess();

        process.start();

        return process;
    }
}
