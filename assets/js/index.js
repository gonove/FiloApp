// SHOW MENU
const showMenu = (toggleId, navbarId,bodyId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            // APARECER MENU
            navbar.classList.toggle('show')
            // ROTATE TOGGLE
            toggle.classList.toggle('rotate')
            // PADDING BODY
            bodypadding.classList.toggle('expander')
        })
    }
}
showMenu('nav-toggle','navbar','body')

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));

// HOVER ICONOS

const hoverIcon = document.querySelectorAll('.bx');


function animacion(){
    hoverIcon.forEach( l => l.classList.remove('bx-tada'));
    this.classList.add('bx-tada');
    
}


hoverIcon.forEach( l => l.addEventListener('click', animacion));



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






