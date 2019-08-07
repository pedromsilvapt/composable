import { Stream } from '../Stream';
import { IFragment, Emission } from '../Compiler/IFragment';
import { ICompiler } from '../Compiler/ICompiler';

export class MapsFragment implements IFragment {
    streams : Stream[];

    constructor ( streams : Stream[] ) {
        this.streams = streams;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.emit( this.streams );

        return [];
    }

    compile ( compiler : ICompiler ) : string {
        return this.streams.map( stream => `-map [${ compiler.compile( stream ) }]` ).join( ' ' );
    }
}

export function maps ( streams : Stream[] ) : MapsFragment {
    return new MapsFragment( streams );
}
