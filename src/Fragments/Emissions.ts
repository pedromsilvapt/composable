import { Stream } from '../Stream';
import { IFragment, Emission } from '../Compiler/IFragment';
import { ICompiler } from '../Compiler/ICompiler';
import { FragmentsArray } from './FragmentsArray';

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
        compiler.emit( this.streams );

        return [];
    }

    compile ( compiler : ICompiler ) : string {
        compiler.compile( this.streams );
        
        let emissions = compiler.getEmissionsFor( this.emission ).join( this.separator );

        if ( this.mapper ) {
            emissions = this.mapper( emissions );
        }

        return emissions;
    }
}

export function filters ( streams : Stream[], wrap : boolean = false ) : IFragment {
    const filters = new EmissionsFragment( streams, 'filter', ';' ).map( s => '"' + s + '"' );

    if ( wrap ) {
        return new FragmentsArray( [ '-filter_complex ', filters ] );
    }

    return filters;
}

export function sources ( streams : Stream[] ) : EmissionsFragment {
    return new EmissionsFragment( streams, 'source', ' ' );
}