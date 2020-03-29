import { Executor } from './Executor';
import { ICompiler, Compiler } from '../Compiler';
import { parse as parseSpawnArgs } from 'parse-spawn-args';
import { spawn, ChildProcess } from "child_process";

/**
 * @category composable/executors
 */
export class CommandExecutor extends Executor<ChildProcess> {
    public static execute ( compiler ?: ICompiler ) : ChildProcess {
        return new CommandExecutor( compiler ).execute();
    }

    compiler : ICompiler;
    
    public constructor ( compiler : ICompiler = new Compiler() ) {
        super();
                
        this.compiler = compiler;
    }

    getCommandArguments () : string[] {
        return [ this.binaryPath, ...this.compiler.command.toArray() ];
    }

    execute () : ChildProcess {
        const args = this.getCommandArguments();

        let client = spawn( args[ 0 ], args.slice( 1 ), {
            stdio: 'inherit'
        } );

        return client;
    }

    toString () : string {
        return this.binaryPath + ' ' + this.compiler.command.toString();
        // this.compiler.compile( this.streams );

        // const command = new CommandFragment( this.streams, this.options );

        // return this.compiler.compile( command );
    }
}