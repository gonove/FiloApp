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


// // Conexion a MySQL

// const app = require('./config/server');

// require('./routes/news')(app);


// // INICIAR SERVIDOR

// app.listen(app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// });


// AGREGAR ELEMENTOS PARA TABLA

let columna = document.createElement( 'th' );
columna.setAttribute( 'scope', 'col' );

let textoColumna = document.createTextNode( 'Columna Agregada' );
columna.appendChild( textoColumna );

columnaContenedor = document.querySelector( 'tr' );
columnaContenedor.appendChild( columna );




const tr = document.querySelector( '.trRow' );
let filaRow = document.createElement( 'tr' );
let fila    = document.createElement( 'th' );
fila.setAttribute( 'scope', 'row' );

//let textoFila = document.createTextNode( 3 );
//fila.appendChild( textoFila );

filaRow.appendChild( fila );

const tdRow = document.createElement( 'td' );
let textoTdRow = document.createTextNode( "Fila creada" );
tdRow.appendChild( textoTdRow);

tdRow.appendChild( textoTdRow );


console.log( filaRow );
filaRow.appendChild( tdRow )


const trRow = document.querySelector( '.trRow' );
trRow.appendChild( filaRow );
console.log(trRow);




