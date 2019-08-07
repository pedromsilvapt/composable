import { FragmentLike, Emission } from "./IFragment";
import { ICompiler } from "./ICompiler";
import { FragmentsArray } from '../Fragments/FragmentsArray';
import { Stream } from "../Stream";
import * as stream from 'stream';

export class Compiler implements ICompiler {
    emitted : Set<FragmentLike> = new Set;

    emissions : Emission[] = [];

    fragments : FragmentLike[];

    body : string;

    streams : PrefixableIdentifierGenerator<Stream> = new PrefixableIdentifierGenerator<Stream>( 'stream' );

    sources : IndexableIdentifierGenerator<Stream>;

    constructor ( fragments : FragmentLike | FragmentLike[] = [], sources : number = 0 ) {
        if ( !( fragments instanceof Array ) ) {
            fragments = [ fragments ];
        }

        this.fragments = fragments;

        this.sources = new IndexableIdentifierGenerator<Stream>( sources );
    }

    emit ( fragment : FragmentLike | FragmentLike[] ) {
        if ( fragment instanceof Array ) {
            for ( let frag of fragment ) this.emit( frag );
        } else if ( fragment && typeof fragment !== 'string' ) {
            if ( !this.emitted.has( fragment ) ) {
                this.emitted.add( fragment );

                const contents = fragment.emit( this );

                this.emissions.push( ...contents );
            }
        }
    }

    compile ( fragment : FragmentLike | FragmentLike[] ) : string {
        if ( fragment instanceof Array ) {
            return fragment.map( frag => this.compile( frag ) ).join( '' );
        } else {
            if ( typeof fragment === 'string' ) {
                return fragment;
            }
    
            fragment.emit( this );

            return fragment.compile( this );
        }
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
        return this.compile( this.fragments );
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

export function compile ( fragments : FragmentLike | FragmentLike[], sources ?: number ) : Compiler {
    return new Compiler( fragments, sources );
}
