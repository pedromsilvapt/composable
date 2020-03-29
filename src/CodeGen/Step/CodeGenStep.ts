import path from 'path';
import fs from 'mz/fs';

export interface FilterParameterDocumentation {
    name : string;
    aliases : string[];
    optional : boolean;
    type : string;
    description : string[];
}

export interface FilterDocumentation {
    categories : string[];
    chapter : string;
    name : string;
    nameNormalized : string;
    description : string[];
    parameters : FilterParameterDocumentation[];
    members ?: string[];
}

export abstract class CodeGenStep {
    getPath ( ...file : string[] ) {
        return path.join( '.', 'CodeGen', ...file );
    }

    getSourcePath ( ...file : string[] ) {
        return path.join( '.', 'src', ...file );
    }

    async loadJSON<T = any> ( ...file : string[] ) : Promise<T> {
        return JSON.parse( await fs.readFile( this.getPath( ...file ), { encoding: 'utf8' } ) );
    }

    async saveJSON ( data : any, ...file : string[] ) : Promise<void> {
        await fs.writeFile( this.getPath( ...file ), JSON.stringify( data, null, 4 ), { encoding: 'utf8' } );
    }

    abstract execute () : Promise<unknown>;
}