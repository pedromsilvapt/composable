import { OutputStream } from "../../Stream";
import { ICompiler, Emission } from "../../main";
import { NativeFilter } from "../Base/Filter";

export class ColorSourceStream extends OutputStream {
    color : string;
    width : number;
    height : number;

    constructor ( color : string, width : number, height : number ) {
        super( null );

        this.color = color;
        this.width = width;
        this.height = height;
    }

    emit ( compiler : ICompiler ) : Emission[] {
        compiler.getInputStreamName( this );

        // const content = `-i ${ jsesc( this.input, { quotes: 'double', wrap: true } ) }`;
        const content = `-f lavfi -i color=${this.color}:s=${this.width}x${this.height}:r=24000/1001`;
        // const content = `-i 1`;

        return [ { type: 'source', content } ];
    }

    compile ( compiler : ICompiler ) : string {
        return '' + compiler.getInputStreamName( this ) + ':v';
    }
}

export class ColorSourceFilter extends NativeFilter {
    name : string = 'color';

    parameters : string[] = [ 'color', 'size', 'rate' ]
}

export function color ( color : string, width : number, height : number, duration : number = null ) : OutputStream {
    return new ColorSourceFilter( [ color ], {
        size: '' + width + 'x' + height,
        rate: '24000/1001',
        duration: duration
    } ).outputs[ 0 ];
}