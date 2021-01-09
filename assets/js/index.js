// Mostrar Modal
const addModal = document.querySelector( '.add-modal' );

const btnAdd = document.querySelector( '.btn-modal' );

// Click Nuevo
btnAdd.addEventListener( 'click', () => {
    addModal.classList.add( 'modal-show' );
});

// Click fuera modal
window.addEventListener( 'click', e => {
    if ( e.target === addModal) {
        addModal.classList.remove( 'modal-show' );
    }
})


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
const renderUser = doc => {
    const tr = `
    <tr>
        <td>${doc.data().ViaPedido}</td>
        <td>${doc.data().NroPedido}</td>
        <td>${doc.data().Fecha}</td>
        <td>${doc.data().Nombre}</td>
        <td>${doc.data().Celular}</td>
        <td>${doc.data().Direccion}</td>
        <td>${doc.data().Ciudad}</td>
        <td>${doc.data().Correo}</td>
        <td>${doc.data().Producto}</td>
        <td>${doc.data().Precio}</td>
        <td>${doc.data().ModoEntrega}</td>
        <td>${doc.data().PrecioDelivery}</td>
        <td>${doc.data().Total}</td>
        <td>${doc.data().MetodoPago}</td>
        <td>${doc.data().EstadoPago}</td>
        <td>${doc.data().Comprobante}</td>
        <td>${doc.data().Sticker}</td>
        <td>${doc.data().Obs}</td>
    </tr>
    `;
    tablaInventario.insertAdjacentHTML( 'beforeend', tr );
}


// Obtener usuarios

db.collection( 'Inventario' ).get().then( querySnapshot => {
    querySnapshot.forEach( doc => {
        renderUser(doc);
    })
})



