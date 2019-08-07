import { FragmentLike, IFragment, Emission } from "../Compiler/IFragment";
import { ICompiler } from "../Compiler/ICompiler";

export class FragmentsArray implements IFragment {
    fragments : FragmentLike[];

    constructor ( fragments : FragmentLike[] | FragmentLike ) {
        if ( !( fragments instanceof Array ) ) {
            fragments = [ fragments ];
        }

        this.fragments = fragments;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.emit( this.fragments );
        
        return [];
    }

    compile ( compiler : ICompiler ) : string {
        return compiler.compile( this.fragments );
    }
}