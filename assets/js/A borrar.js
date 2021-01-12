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





// AGREGAR ELEMENTOS PARA TABLA

// Columna
const thColumna = document.createElement( 'th' );
thColumna.setAttribute( 'scope', 'col' );

const textoColumna = document.createTextNode( 'Columna Agregada' );
thColumna.appendChild( textoColumna );

columnaContenedor = document.querySelector( 'tr' );
columnaContenedor.appendChild( thColumna );


// Fila
const trRow = document.querySelector( '.trRow');

const textFila = document.createTextNode( 'Fila Agregada' );
trRow.appendChild( textFila );

console.log( trRow );

// Fila con AddRow

const addRow = ( tableID ) => {
    // Obtener una referencia de la tabla
    const tablaRef = document.getElementById( tableID );

    // Insertar una fila en la tabla, en el indice 0
    const newRow = tablaRef.insertRow( 4 );
    

    // Insertar una celda en la fila, indice 0
    const newCell = newRow.insertCell( 0 );

    // Anade un nodo de texto a la celda
    const newText = document.createTextNode( 'XX agregada con super funcion' );
    newCell.appendChild( newText );

}

const addColumn = ( tableID ) => {
    // Obtener una referencia de la tabla
    const tablaRef2 = document.getElementById( tableID );

    // Insertar una fila en la tabla, en el indice 0
    const newRow2 = tablaRef2.insertRow( 0 );
    

    // Insertar una celda en la fila, indice 0
    const newCell2 = newRow2.insertCell( 0 );

    // Anade un nodo de texto a la celda
    const newText = document.createTextNode( 'XX agregada con super funcion' );
    newCell2.appendChild( newText );

}

// Llamar a la funcion addRow con el id de la tabla que deseas.

addRow( 'tabla' );
addColumn( 'trCol' );



const rowCount = document.getElementById( 'tabla' ).rows.length;
console.log( `It's: ${rowCount}` );