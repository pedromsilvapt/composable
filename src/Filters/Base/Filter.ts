import { IFilter } from "./IFilter";
import { ICompiler } from "../../Compiler/ICompiler";
import { Stream, OutputStream, DynamicStream } from "../../Stream";
import { Emission } from "../../Compiler/IFragment";

export type FilterArgument = string | number; 

export interface FilterNamedArguments {
    [ name : string ] : FilterArgument;
}

export class NativeFilter implements IFilter {
    name : string;

    positionalArguments : FilterArgument[];

    namedArguments : FilterNamedArguments;

    inputs : Stream[] = [];
    
    outputs : OutputStream[];

    parameters : string[] = [];

    outputsCount : number = 1;

    generateOutputs () : OutputStream[] {
        return Array.from( new Array( this.outputsCount ), () => new DynamicStream( this ) );
    }

    constructor ( named ?: FilterNamedArguments );
    constructor ( positional ?: FilterArgument[], named ?: FilterNamedArguments );
    constructor ( positional ?: FilterArgument[] | FilterNamedArguments, named ?: FilterNamedArguments ) {
        if ( !( positional instanceof Array ) ) {
            named = positional;
            positional = [];
        }

        this.positionalArguments = positional;
        this.namedArguments = named || {};

        this.outputs = this.generateOutputs();
    }

    from ( inputs : NativeFilter ) : this;
    from ( inputs : Stream[] ) : this;
    from ( inputs : Stream[] | NativeFilter ) : this {
        if ( inputs instanceof NativeFilter ) {
            inputs = inputs.outputs;
        }

        this.inputs = inputs;

        this.outputs = this.generateOutputs();

        return this;
    }

    into<K extends NativeFilter> ( output : K ) : K {
        return output.from( this.outputs );
    }

    getParameter<T> ( name : string, defaultValue ?: T ) : T;
    getParameter ( name : string, defaultValue ?: any ) : any;
    getParameter ( name : string, defaultValue : any = void 0 ) : any {
        if ( name in this.namedArguments ) {
            return this.namedArguments[ name ];
        } else {
            const pos = this.parameters.indexOf( name );

            if ( pos >= 0 && this.positionalArguments.length > pos ) {
                return this.positionalArguments[ pos ];
            } else {
                return defaultValue;
            }
        }
    }

    compileStreams ( compiler : ICompiler, streams : Stream[] ) : string {
        return streams.map( stream => {
            if ( typeof stream === 'string' ) {
                return '[' +  stream + ']';
            }

            compiler.emit( stream );

            return '[' +  stream.compile( compiler ) + ']';
        } ).join( '' );
    }

    compileArguments ( compiler : ICompiler ) : string {
        const positional = this.positionalArguments;

        const named = Object.keys( this.namedArguments )
            .filter( key => this.namedArguments[ key ] !== null && this.namedArguments[ key ] !== void 0 )
            .map( key => `${key}=${ this.namedArguments[ key ] }` );

        return [ ...positional, ...named ].join( ':' );
    }

    emit ( compiler : ICompiler ) : Emission[] {
        for ( let input of this.inputs ) {
            if ( input instanceof OutputStream && input.source ) {
                compiler.emit( input.source );
            }
        }

        return [ { type: 'filter', content: this.compile( compiler ) } ];
    }

    compile ( compiler : ICompiler ) : string {
        const inputs = this.compileStreams( compiler, this.inputs );

        const outputs = this.compileStreams( compiler, this.outputs );

        const args = this.compileArguments( compiler );

        return `${ inputs }${ this.name }${ args ? '=' + args : '' }${ outputs }`;
    }
    
    redirect ( source : Stream, redirected : Stream ) : IFilter {
        const instance : NativeFilter = new (this.constructor as any)();

        instance.name = this.name;
        instance.positionalArguments = this.positionalArguments;
        instance.namedArguments = this.namedArguments;
        instance.inputs = this.inputs;
        instance.outputs = this.outputs.filter( out => out === source ? redirected : out );
        instance.parameters = this.parameters;
        instance.outputsCount = this.outputsCount;
        
        return instance;
    }
}