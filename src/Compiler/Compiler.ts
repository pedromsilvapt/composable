import { IFragment, FragmentLike, Emission } from "./IFragment";
import { ICompiler } from "./ICompiler";
import { RawFragment } from "./RawFragment";
import { Stream } from "../Stream";

export class Compiler implements ICompiler {
    emitted : Set<FragmentLike> = new Set;

    emissions : Emission[] = [];

    fragments : FragmentLike[];

    body : string;

    streams : PrefixableIdentifierGenerator<Stream> = new PrefixableIdentifierGenerator<Stream>( 'stream' );

    sources : IndexableIdentifierGenerator<Stream>;

    constructor ( fragments : FragmentLike[], sources : number = 0 ) {
        this.fragments = fragments;

        this.sources = new IndexableIdentifierGenerator<Stream>( sources );

        this.body = this.build();
    }

    emit ( fragment : IFragment ) {
        if ( !this.emitted.has( fragment ) ) {
            this.emitted.add( fragment );

            const contents = fragment.emit( this );

            this.emissions.push( ...contents );
        }
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

    constructor ( streams : Stream[], emission : string, separator : string ) {
        this.streams = streams;
        this.emission = emission;
        this.separator = separator;
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
        return compiler.getEmissionsFor( this.emission ).join( this.separator );
    }
}

export function filters ( streams : Stream[] ) : EmissionsFragment {
    return new EmissionsFragment( streams, 'filter', ';\n' );
}

export function sources ( streams : Stream[] ) : EmissionsFragment {
    return new EmissionsFragment( streams, 'source', ' ' );
}