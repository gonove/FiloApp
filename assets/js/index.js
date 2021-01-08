// Mostrar menu
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

// Activar color
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


// Crear elemento y renderizar Nombre
const tablaInventario = document.querySelector( '#tablaInventario' );
console.log(tablaInventario);
const renderUser = doc => {
    const tr = `
    <tr>
        <td>${doc.data().Nombre}</td>
        <td>${doc.data().Ciudad}</td>
        <td>${doc.data().Direccion}</td>
        <td>${doc.data().Celular}</td>
        <td>${doc.data().correo}</td>
    </tr>
    `;
    tablaInventario.insertAdjacentHTML( 'beforeend', tr );
}


// Obtener usuarios

db.collection( 'Nombre' ).get().then( querySnapshot => {
    querySnapshot.forEach( doc => {
        renderUser(doc);
    })
})



