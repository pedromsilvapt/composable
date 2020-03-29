const fs = require( 'fs' );

const input = fs.readFileSync( './input.txt', { encoding: 'utf8' } );

const properties = [];

for ( let line of input.split( '\n' ) ) {
  if ( line.startsWith( ' ' ) || line == '' ) {
    const lastProperty = properties[ properties.length - 1 ];

    if ( !lastProperty ) continue;

    lastProperty.description.push( line.trim() );
  } else if ( line.trim() != '' ) {
    line = line.trim();

    const variants = line.split( ',' ).map( v => v.trim() );

    properties.push( { 
      name: variants[ 0 ], 
      aliases: variants.slice( 1 ), 
      description: [] 
    } );
  }
}

const output = [];

for ( let property of properties ) {
  let description = property.description.join( '\n' ).trim().replace( /\n/g, '\n\t  * ' );

  if ( description.split( '\n' ).length > 1 ) {
    description = description + '\n\t ';
  }

  if ( property.aliases.length == 0 ) {
    output.push( '\t/** ' + description + ' */' );
    output.push( '\t' + property.name + ' ?: string; ' );
  } else {
    output.push( '\t/**\n\t  * ' + description + '\n\t  * @alias ' + property.aliases.join( ', ' ) + '\n\t  */' );
    output.push( '\t' + property.name + ' ?: string; ' );

    for ( let alias of property.aliases ) {
      output.push( '\t/**\n\t  * ' + description + '\n\t  * @aliasof ' + property.name + '\n\t  */' );
      output.push( '\t' + alias + ' ?: string; ' );
    }
  }
}

fs.writeFileSync( './output.txt', output.join( '\n' ), { encoding: 'utf8' } );

console.log( output.join( '\n' ) );