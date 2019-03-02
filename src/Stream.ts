import { IFragment, Emission } from "./Compiler/IFragment";
import { ICompiler } from "./Compiler/ICompiler";
import { IFilter } from "./Filters/Base/IFilter";
import * as jsesc from 'jsesc';

export type Stream = string | OutputStream | DyanamicInputStream;

export abstract class OutputStream implements IFragment {
    source : IFilter;

    constructor ( source : IFilter ) {
        this.source = source;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.emit( this.source );

        return [];
    }

    abstract compile ( compiler : ICompiler ) : string;

    redirect ( name : string ) : StaticStream {
        return new StaticStream( this.source, name );
    }

    select ( selection : string ) : SelectionStream {
        return new SelectionStream( this, selection );
    }
}

export class DynamicStream extends OutputStream {
    compile ( compiler : ICompiler ) : string {
        compiler.emit( this );

        return compiler.getStreamName( this );
    }
}

export class StaticStream extends OutputStream {
    name : string;

    constructor ( source : IFilter, name : string ) {
        super( source );

        this.name = name;
    }
    
    compile ( compiler : ICompiler ) {
        compiler.emit( this );
        
        return this.name;
    }
}

export class DyanamicInputStream extends OutputStream {
    emit ( compiler : ICompiler ) : Emission[] {
        if ( this.source ) {
            compiler.emit( this.source );
        }
        
        return [];
    }

    compile ( compiler : ICompiler ) : string {
        compiler.emit( this );

        return '' + compiler.getInputStreamName( this );
    }
}

export class SourceStream extends OutputStream {
    input : string;

    args : string[];

    constructor ( input : string, args : string[] = [] ) {
        super( null );

        this.input = input;
        this.args = args;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.getInputStreamName( this );

        // const content = `-i ${ jsesc( this.input, { quotes: 'double', wrap: true } ) }`;
        // const content = `-i 1`;
        const content = `${ this.args.join( ' ' ) } -i ${ '"' + this.input.replace( /\\/g, '\\\\' ) + '"' }`;

        return [ { type: 'source', content } ];
    }

    compile ( compiler : ICompiler ) : string {
        compiler.emit( this );

        return '' + compiler.getInputStreamName( this );
    }
}

export class SelectionStream extends OutputStream {
    parent : OutputStream;

    specification : string;

    constructor ( parent : OutputStream, specification : string ) {
        super( parent.source );

        this.parent = parent;
        this.specification = specification;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.emit( this.parent );

        return [];
    }

    compile ( compiler : ICompiler ) : string {
        return this.parent.compile( compiler ) + ':' + this.specification;
    }
}

export function source ( input : string, args : string[] = [] ) : SourceStream {
    return new SourceStream( input, args );
}

export function named ( name : string ) : StaticStream {
    return new StaticStream( null, name );
}