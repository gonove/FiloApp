// // Conexion a MySQL

// const app = require('./config/server');

// require('./routes/news')(app);


// // INICIAR SERVIDOR

// app.listen(app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// });



const tr = document.querySelector( '.trRow' );
let filaRow = document.createElement( 'tr' );
let fila    = document.createElement( 'th' );
fila.setAttribute( 'scope', 'row' );

let textoFila = document.createTextNode( 3 );
fila.appendChild( textoFila );

filaRow.appendChild( fila );

const tdRow = document.createElement( 'td' );
let textoTdRow = document.createTextNode( "Fila creada" );
tdRow.appendChild( textoTdRow);

tdRow.appendChild( textoTdRow );


console.log( filaRow );
filaRow.appendChild( tdRow )


const trRow = document.querySelector( '.trRow' );
console.log(trRow);
trRow.appendChild( filaRow );
console.log(trRow);




