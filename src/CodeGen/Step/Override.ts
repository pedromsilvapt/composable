import ts, { ScriptKind, SourceFile, ClassDeclaration, isCallExpression, SyntaxKind, isStringLiteral, isExpressionStatement, isJSDoc, InterfaceDeclaration, isInterfaceDeclaration, isClassDeclaration, isConstructorDeclaration, PropertySignature, isPropertySignature, isPropertyDeclaration } from 'typescript';
import { CodeGenStep, FilterDocumentation, FilterParameterDocumentation } from './CodeGenStep';
import glob from 'glob-promise';
import path from 'path';
import fs from 'mz/fs';
import { CodeQuery } from '../CodeQuery';
import assertOriginal from 'assert';
import jiff from 'jiff';
import hash from 'object-hash';

function assert ( condition : any, msg ?: string ) : asserts condition {
    assertOriginal( condition, msg );
}

export class OverrideStep extends CodeGenStep {
    static hash ( x : any ) {
        if ( x && x.aliases ) {
            return x.name;
        }
        
        return hash( x );
    }

    overrideFilterGetName ( classDeclaration : ClassDeclaration ) : string {
        assert( classDeclaration != null, "There is a class extending Filter" );

        const constructor = classDeclaration.members.find( isConstructorDeclaration );

        assert( constructor != null, "Filter class has constructor" );
        assert( constructor.body.statements.length > 0, "Constructor body has statements" );

        const statement = constructor.body.statements[ 0 ];

        assert( isExpressionStatement( statement ), "Constructor first statement is an expression" );

        const expression = statement.expression;

        assert( isCallExpression( expression ), "First constructor expression to be a call function" );
        assert( expression.expression.kind == SyntaxKind.SuperKeyword, "Constructor expression is a super call expression" );
        assert( expression.arguments.length > 0, "Super call has arguments" );

        const arg = expression.arguments[ 0 ];

        assert( isStringLiteral( arg ), "First super call argument is a string literal" );

        return arg.text;
    }

    overrideFilterMembers ( classDeclaration : ClassDeclaration ) : string[] {
        const members = classDeclaration.members
            .filter( member => !isConstructorDeclaration( member ) && ( !isPropertyDeclaration( member ) || member.name.getText() != 'outputs' ) )

        
        const printer = ts.createPrinter( { newLine: ts.NewLineKind.LineFeed } );

        return members.map( member => printer.printNode( ts.EmitHint.Unspecified, member, member.getSourceFile() ) )
    }

    overrideFilterDescription ( jsdoc : ts.JSDoc ) : { chapter: string, description: string[] } {        
        assert( jsdoc != null, "Filter class has JSDoc comment leading it" );
        
        let comment = jsdoc.comment.trim();

        const firstLineBreak = comment.indexOf( '\n' );

        const chapter : string = comment.slice( 0, firstLineBreak ).split( ' ' )[ 0 ];

        const description : string[] = comment.slice( firstLineBreak ).trim().split( '\n' );

        return { chapter, description };
    }

    overrideFilterParameter ( parameter : PropertySignature ) : FilterParameterDocumentation {
        const jsdoc = parameter.getChildren().find( isJSDoc );

        let aliases : string[] = [];

        if ( jsdoc != null && jsdoc.tags != null ) {
            const aliasTag = jsdoc.tags.find( t => t.tagName.text == 'aliasof' );

            if ( aliasTag != null ) {
                return null;
            }

            const aliasesTag = jsdoc.tags.find( t => t.tagName.text == 'aliases' );

            aliases = aliasesTag.comment.split( ',' ).map( a => a.trim() );
        }

        const printer = ts.createPrinter( { newLine: ts.NewLineKind.LineFeed } );

        const result = printer.printNode( ts.EmitHint.Unspecified, parameter.type, parameter.getSourceFile() );
        
        let name = isStringLiteral( parameter.name ) ? parameter.name.text : parameter.name.getText();

        return {
            name: name,
            aliases: aliases,
            description: jsdoc != null && jsdoc.comment != null ? jsdoc.comment.split( '\n' ) : [],
            optional: parameter.questionToken != null,
            type: result,
        };
    }

    overrideFilterParametersList ( parameters : InterfaceDeclaration ) : FilterParameterDocumentation[] {
        return parameters.members.filter( isPropertySignature ).map( s => this.overrideFilterParameter( s ) ).filter( s => !!s );
    }

    overrideFilter ( file : string, source : SourceFile ) : FilterDocumentation {
        const categories = file.split( /[\\/]/g ).slice( 0, -1 );

        const classDeclaration = source.statements.filter( isClassDeclaration ).find( CodeQuery.classExtends( 'Filter' ) );

        const parameters = source.statements.find( isInterfaceDeclaration );

        const jsdoc = classDeclaration.getChildren().find( isJSDoc );
        
        const { chapter, description } = this.overrideFilterDescription( jsdoc );

        const members = this.overrideFilterMembers( classDeclaration );

        const doc : FilterDocumentation = {
            chapter: chapter,
            name: this.overrideFilterGetName( classDeclaration ),
            nameNormalized: classDeclaration.name.getText(),
            categories: categories,
            description: description,
            parameters: this.overrideFilterParametersList( parameters ),
            members: members
        };

        return doc;
    }

    async execute () {
        const cwd = this.getSourcePath( 'Filters' );

        const files = await glob( '**/*.ts', { cwd } );

        const docs : FilterDocumentation[] = await this.loadJSON( 'doc.json' );

        const overrides : Record<string, any[]> = {};

        for ( let file of files ) {
            if ( path.basename( file ) == 'index.ts' ) continue;

            const sourceFile = ts.createSourceFile(
                file,
                fs.readFileSync( path.join( cwd, file ) ).toString(),
                ts.ScriptTarget.ES2015,
                /*setParentNodes */ true,
                ScriptKind.TS
            );

            try {
                const doc = this.overrideFilter( file, sourceFile );

                const originalDoc = docs.find( filter => filter.name == doc.name );
    
                var patch : any[] = jiff.diff( originalDoc || {}, doc, { hash: OverrideStep.hash } );
    
                if ( patch.length > 0 ) {
                    overrides[ doc.name ] = patch;
                }
            } catch ( error ) {
                console.log( file, error );
            }
        }

        await this.saveJSON( overrides, 'overrides.json' );

        console.log( 'tested', files.length );
    }
}