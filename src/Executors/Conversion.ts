import { Executor } from './Executor';
import { ICompiler, Compiler } from '../Compiler';
import { CommandExecutor } from './Command';
import { FFmpegProcess } from '../Utils/FFmpegProcess';

/**
 * @hidden
 */
export interface Class<T, A extends any[] = []> {
    new ( ...args : A ) : T;
}

/**
 * @category composable/executors
 */
export class ConversionExecutor extends Executor<FFmpegProcess> {
    public static execute ( compiler ?: ICompiler ) : FFmpegProcess {
        return new ConversionExecutor( compiler ).execute();
    }

    compiler: ICompiler;

    command : CommandExecutor;
    
    public constructor ( compiler : ICompiler = new Compiler() ) {
        super();
        
        this.compiler = compiler;
    }

    createProcess<T> ( factory : Class<T, [string[]]> ) : T;
    createProcess () : FFmpegProcess;
    createProcess<T = FFmpegProcess> ( factory ?: Class<T, [string[]]> ) : T {
        if ( factory == null ) {
            factory = FFmpegProcess as any;
        }

        const command = new CommandExecutor( this.compiler );

        const process = new factory( command.getCommandArguments() );

        return process;
    }

    execute () : FFmpegProcess {
        const process = this.createProcess();

        process.start();

        return process;
    }

    toString () {
        const command = new CommandExecutor( this.compiler );

        return command.toString();
    }
}
