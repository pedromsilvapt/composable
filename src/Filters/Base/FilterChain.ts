import { NativeFilter } from "./Filter";
import { ICompiler } from "../../Compiler/ICompiler";
import { IFilter } from "./IFilter";
import { Stream } from "../../Stream";

export class FilterChain implements IFilter {
    filters : NativeFilter[];

    inputs : Stream[];
    outputs : Stream[];

    constructor ( filters : NativeFilter[] ) {
        this.filters = filters;
    }

    emit () : any {
        throw new Error( `Not yet implemented` );
    }

    compile ( compiler : ICompiler ) : string {
        return this.filters.map( filter => filter.compile( compiler ) ).join( ',' );
    }

    redirect ( source : Stream, redirected : Stream ) : IFilter {
        return new FilterChain( this.filters.slice() );
    }
}