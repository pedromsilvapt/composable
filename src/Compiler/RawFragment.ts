import { FragmentLike, IFragment, Emission } from "./IFragment";
import { ICompiler } from "./ICompiler";

export class RawFragment implements IFragment {
    fragments : FragmentLike[];

    constructor ( fragments : FragmentLike[] | FragmentLike ) {
        if ( !( fragments instanceof Array ) ) {
            fragments = [ fragments ];
        }

        this.fragments = fragments;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        for ( let fragment of this.fragments ) {
            if ( typeof fragment === 'string' ) {
                continue;
            }

            compiler.emit( fragment );
        }

        return [];
    }

    compile ( compiler : ICompiler ) : string {
        compiler.emit( this );

        return this.fragments.map( fragment => {
            if ( typeof fragment === 'string' ) {
                return fragment;
            }

            return fragment.compile( compiler );
        } ).join( '' );
    }
}