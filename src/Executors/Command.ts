import { Executor } from './Executor';
import { ICompiler } from '../Compiler/ICompiler';
import { Stream } from '../Stream';
import { Compiler } from '../Compiler/Compiler';
import { parse as parseSpawnArgs } from 'parse-spawn-args';
import { CommandFragment, CommandOptions } from '../Fragments/Command';
import { spawn, ChildProcess } from "child_process";

export class CommandExecutor extends Executor<ChildProcess> {
    compiler: ICompiler;

    streams: any[];

    options : Partial<CommandOptions>;
    
    public constructor ( streams : Stream | Stream[], options : Partial<CommandOptions> = {}, compiler : ICompiler = new Compiler() ) {
        super();
        
        if ( !( streams instanceof Array ) ) {
            streams = [ streams ];
        }
        
        this.compiler = compiler;
        this.streams = streams;
        this.options = options;
    }

    getCommandArguments () : string[] {
        
        return parseSpawnArgs( this.toString() );
    }

    execute () : ChildProcess {
        const args = this.getCommandArguments();

        let client = spawn( args[ 0 ], args.slice( 1 ), {
            stdio: 'inherit'
        } );

        return client;
    }

    toString () : string {
        this.compiler.compile( this.streams );

        const command = new CommandFragment( this.streams, this.options );

        return this.compiler.compile( command );
    }
}