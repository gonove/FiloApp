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

// let nuevoDiv = document.createElement('div');
// nuevoDiv.className = 'row';
// nuevoDiv.id = 'table'
// nuevoDiv.setAttribute( 'scope', 'Hola mundo' );

// let nuevoNodoText = document.createTextNode( 'Hola World' );

// nuevoDiv.appendChild( nuevoNodoText );

// console.log( nuevoDiv );


let columna = document.createElement( 'th' );
let fila    = document.createElement( 'th' );

fila.setAttribute( 'scope', 'row' );
columna.setAttribute( 'scope', 'col' );

let textoColumna = document.createTextNode( 'Nueva Columna' );
let textoFila = document.createTextNode( '4' );


columna.appendChild( textoColumna );
fila.appendChild( textoFila );

columnaContenedor = document.querySelector( 'tr' );
columnaContenedor.appendChild( columna );

filaColumna = document.querySelector( 'td' );

console.log(filaColumna);
filaColumna = document.insertBefore( fila, columnaContenedor);