import { IFragment, Emission } from "./Compiler/IFragment";
import { ICompiler } from "./Compiler/ICompiler";
import { IFilter } from "./Filters/Base/IFilter";

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
        compiler.emit( this.source );
        
        return [];
    }

    compile ( compiler : ICompiler ) : string {
        compiler.emit( this );

        return '' + compiler.getInputStreamName( this );
    }
}