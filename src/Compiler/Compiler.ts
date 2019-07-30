import { IFragment, FragmentLike, Emission } from "./IFragment";
import { ICompiler } from "./ICompiler";
import { RawFragment } from "./RawFragment";
import { Stream } from "../Stream";
import { spawn } from "child_process";
import { parse as parseSpawnArgs } from 'parse-spawn-args';
import * as stream from 'stream';

export class Compiler implements ICompiler {
    emitted : Set<FragmentLike> = new Set;

    emissions : Emission[] = [];

    fragments : FragmentLike[];

    body : string;

    streams : PrefixableIdentifierGenerator<Stream> = new PrefixableIdentifierGenerator<Stream>( 'stream' );

    sources : IndexableIdentifierGenerator<Stream>;

    constructor ( fragments : FragmentLike[] = [], sources : number = 0 ) {
        this.fragments = fragments;

        this.sources = new IndexableIdentifierGenerator<Stream>( sources );

        this.body = this.build();
    }

    emit ( fragment : FragmentLike ) {
        if ( fragment && typeof fragment !== 'string' ) {
            if ( !this.emitted.has( fragment ) ) {
                this.emitted.add( fragment );

                const contents = fragment.emit( this );

                this.emissions.push( ...contents );
            }
        }
    }

    compile ( fragment : FragmentLike ) : string {
        if ( typeof fragment === 'string' ) {
            return fragment;
        }

        return fragment.compile( this );
    }

    build () : string {
        return new RawFragment( this.fragments ).compile( this );
    }

    hasStreamName ( stream : Stream ) : boolean {
        return this.streams.has( stream );
    }

    getStreamName ( stream : Stream ) : string {
        return this.streams.get( stream );
    }

    setStreamName ( stream : Stream, name : string ) {
        this.streams.set( stream, name );
    }

    getInputStreamName ( stream : Stream ) : number {
        return this.sources.get( stream );
    }

    getEmissionsFor ( type : string ) : string[] {
        return this.emissions
            .filter( emission => emission.type === type )
            .map( emission => emission.content );
    }

    toString () : string {
        return this.body;
    }
}

export abstract class IdentifierGenerator<T, K> {
    cache : Map<T, K> = new Map;

    seed : number = 0;

    constructor ( seed : number = 0 ) {
        this.seed = seed;
    }

    abstract generate ( id : number ) : K;

    has ( key : T ) : boolean {
        return this.cache.has( key );
    }

    getCached ( key : T ) : K {
        return this.cache.get( key );
    }

    get ( key : T ) : K {
        if ( this.has( key ) ) {
            return this.getCached( key );
        }

        const value = this.generate( this.seed++ );

        this.cache.set( key, value );

        return value;
    }

    set ( key : T, name : K ) {
        this.cache.set( key, name );
    }
}

export class PrefixableIdentifierGenerator<T> extends IdentifierGenerator<T, string> {
    prefix : string = 'stream';

    constructor ( prefix : string, seed : number = 0 ) {
        super( seed );

        this.prefix = prefix;
    }

    generate ( id : number ) : string {
        return `${ this.prefix }${ id }`;
    }
}

export class IndexableIdentifierGenerator<T> extends IdentifierGenerator<T, number> {
    generate ( id : number ) : number {
        return id;
    }
}


export function compile ( fragments : FragmentLike | FragmentLike[] ) : Compiler {
    if ( !( fragments instanceof Array ) ) {
        fragments = [ fragments ];
    }

    const compiler = new Compiler( fragments );

    return compiler;
}

export class EmissionsFragment implements IFragment {
    streams : Stream[];

    emission : string;

    separator : string;

    mapper ?: ( string : string ) => string;

    constructor ( streams : Stream[], emission : string, separator : string ) {
        this.streams = streams;
        this.emission = emission;
        this.separator = separator;
    }

    map ( mapper : ( string : string ) => string ) : this {
        this.mapper = mapper;

        return this;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        for ( let stream of this.streams ) {
            if ( typeof stream !== 'string' ) {
                compiler.emit( stream );
            }
        }

        return [];
    }

    compile ( compiler : ICompiler ) : string {
        for ( let stream of this.streams ) {
            if ( typeof stream !== 'string' ) {
                compiler.compile( stream );
            }
        }

        let emissions = compiler.getEmissionsFor( this.emission ).join( this.separator );

        if ( this.mapper ) {
            emissions = this.mapper( emissions );
        }

        return emissions;
    }
}

export class MapsFragment implements IFragment {
    streams : Stream[];

    constructor ( streams : Stream[] ) {
        this.streams = streams;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        for ( let stream of this.streams ) {
            if ( typeof stream !== 'string' ) {
                compiler.emit( stream );
            }
        }

        return [];
    }

    compile ( compiler : ICompiler ) : string {
        return this.streams.map( stream => `-map [${ compiler.compile( stream ) }]` ).join( ' ' );
    }
}

export function filters ( streams : Stream[], wrap : boolean = false ) : IFragment {
    const filters = new EmissionsFragment( streams, 'filter', ';' ).map( s => '"' + s + '"' );

    if ( wrap ) {
        return new RawFragment( [ '-filter_complex ', filters ] );
    }

    return filters;
}

export function sources ( streams : Stream[] ) : EmissionsFragment {
    return new EmissionsFragment( streams, 'source', ' ' );
}

export function maps ( streams : Stream[] ) : MapsFragment {
    return new MapsFragment( streams );
}

export class CommandFragment {
    outputs : Stream[];

    options : CommandOptions;

    constructor ( outputs : Stream[], options : Partial<CommandOptions> ) {
        this.outputs = outputs;

        this.options = {
            output: '',
            args: [],
            inputArgs : [],
            outputArgs : [],
            ...options
        };
    }

    fragments () : FragmentLike[] {
        const vf = filters( this.outputs, true );

        const outputs = maps( this.outputs );

        const inputArgs = ' ' + this.options.inputArgs.join( ' ' ) + ' ';

        const args = ' ' + this.options.args.join( ' ' ) + ' ';

        const outputArgs = ' ' + this.options.outputArgs.join( ' ' ) + ' ';

        return [ 'ffmpeg ', inputArgs, sources( this.outputs ), args, vf, ' ', outputs, ' ', outputArgs, this.options.output || 'pipe:1' ];
    }

    compile () : Compiler {
        return compile( this.fragments() );
    }

    generate () : string {
        return this.compile().toString();
    }

    execute () : stream.Readable {
        const args : string[] = parseSpawnArgs( this.generate() );

        let client = spawn( args[ 0 ], args.slice( 1 ), {
            stdio: 'inherit'
        } );

        return client.stdout;
    }

    executeSync () : void {
        throw new Error( `Not implemented yet` );
    }
}

export interface CommandOptions {
    output: string;
    args : string[];
    inputArgs : string[];
    outputArgs : string[];
}

export function command ( outputs : Stream[], output : string = '', options : Partial<CommandOptions> = {} ) : CommandFragment {
    return new CommandFragment( outputs, {
        output, 
        ...options
    } );
}