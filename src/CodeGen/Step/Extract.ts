import { CodeGenStep, FilterDocumentation } from './CodeGenStep';
import cheerio from 'cheerio';
import fs from 'mz/fs';

export class ExtractStep extends CodeGenStep {
    getFilterCategories ( chapter : string ) : string[] {
        if ( chapter.startsWith( '8.' ) ) {
            return [ 'Audio', 'Filters' ];
        } else if ( chapter.startsWith( '9.' ) ) {
            return [ 'Audio', 'Sources' ];
        } else if ( chapter.startsWith( '10.' ) ) {
            return [ 'Audio', 'Sinks' ];
        } else if ( chapter.startsWith( '11.' ) ) {
            return [ 'Video', 'Filters' ];
        } else if ( chapter.startsWith( '14.' ) ) {
            return [ 'Video', 'Sources' ];
        } else if ( chapter.startsWith( '15.' ) ) {
            return [ 'Video', 'Sinks' ];
        } else if ( chapter.startsWith( '16.' ) ) {
            return [ 'Multimedia', 'Filters' ];
        } else if ( chapter.startsWith( '17.' ) ) {
            return [ 'Multimedia', 'Sources' ];
        }
    }

    extractFilterName ( name : string, categories : string[] ) : string {
        if ( categories[ 0 ] == 'Audio' ) {
            if ( name.startsWith( 'a' ) ) {
                name = name.slice( 1 );
            }

            return 'Audio' + name[ 0 ].toUpperCase() + name.slice( 1 );
        } else if ( categories[ 0 ] == 'Video' ) {
            if ( name.startsWith( 'v' ) ) {
                name = name.slice( 1 );
            }

            return 'Video' + name[ 0 ].toUpperCase() + name.slice( 1 );
        } else if ( categories[ 0 ] == 'Multimedia' ) {
            return name[ 0 ].toUpperCase() + name.slice( 1 );
        }
    }
    
    extractDescription ( description : string[] ) {
        description = description.flatMap( l => l.split( '\n' ) ).map( l => l.trim() );

        let end = description.length;

        for ( let i = description.length - 1; i >= 0; i-- ) {
            if ( description[ i ] == '' ) {
                end = i;
            } else {
                break;
            }
        }

        return description.slice( 0, end );
    }

    extractFilter ( $ : CheerioStatic, element : Cheerio ) : FilterDocumentation[] {
        const text = element.text().split( / (.+)/ ).filter( n => n != '' );

        let names : string[] = [ text[ 1 ] ];

        if ( text[ 1 ].includes( ',' ) ) {
            names = text[ 1 ].split( ',' ).map( n => n.trim() );
            // TODO Handle bundled filters
            // console.log( element.text() );

            // return null;
        }
        
        return names.map( name => {
            const categories = this.getFilterCategories( text[ 0 ] );
    
            const doc : FilterDocumentation = {
                categories: categories,
                chapter: text[ 0 ],
                description: null,
                name: name,
                nameNormalized: this.extractFilterName( name, categories ),
                parameters: []
            };
            
            let descriptionNodes = element.nextUntil( 'h3, h4, dl' )
    
            doc.description = this.extractDescription( descriptionNodes.toArray().map( a => $( a ).text() ) );
    
            if ( descriptionNodes.next().is( 'dl' ) ) {
                const dd = descriptionNodes = descriptionNodes.next();
    
                const parameters = dd.children( 'dt' ).toArray();
                const descriptions = dd.children( 'dd' ).toArray();
    
                for ( let i = 0; i < parameters.length; i++ ) {
                    const aliases = $( parameters[ i ] ).text().split( ',' ).map( n => n.trim() );
    
                    doc.parameters.push( {
                        name: aliases[ 0 ],
                        optional: true,
                        aliases: aliases.slice( 1 ),
                        description: $( descriptions[ i ] ).text().split( '\n' ).map( n => n.trim() ).filter( n => n != '' ),
                        type: 'string | number'
                    } );
                }
            }
    
            return doc;
        } );
    }

    extractList ( $ : CheerioStatic, elements : Cheerio[] ) : FilterDocumentation[] {
        return elements.flatMap( el => this.extractFilter( $, el ) ).filter( f => !!f );
    }
    
    async execute () {
        const data = await fs.readFile( this.getPath( 'doc.html' ), { encoding: 'utf8' } );

        const $ = cheerio.load( data );

        const headers = $( 'h3' ).toArray().map( el => $( el ) );

        const audio = headers
            .filter( el =>  el.text().startsWith( '8.' ) || el.text().startsWith( '9.' ) || el.text().startsWith( '10.' ) );

        const video = headers
            .filter( el =>  el.text().startsWith( '11.' ) || el.text().startsWith( '14.' ) || el.text().startsWith( '15.' ) );

        const multimedia = headers
            .filter( el =>  el.text().startsWith( '16.' ) || el.text().startsWith( '17.' ) );

        console.log( 'audio', audio.length, 'video', video.length, 'multimedia', multimedia.length );

        const audioDoc = this.extractList( $, audio );

        const videoDoc = this.extractList( $, video );

        const multimediaDoc = this.extractList( $, multimedia );

        await this.saveJSON( [ ...audioDoc, ...videoDoc, ...multimediaDoc ], 'doc.json' );
    }
}