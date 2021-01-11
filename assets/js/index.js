// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvaucJj0cRUZOveAnIoJEKAwy06xrLeEg",
    authDomain: "crudfiloapp.firebaseapp.com",
    projectId: "crudfiloapp",
    storageBucket: "crudfiloapp.appspot.com",
    messagingSenderId: "674713923526",
    appId: "1:674713923526:web:7a1f89272d300c7bf84cc7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// INICIO PARTE GRAFICA
// Mostrar menu
const showMenu = ( toggleId, navbarId, bodyId ) =>{
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
// FIN PARTE GRAFICA


// ------------------------------------------------------------------------------ //

const modalWrapper = document.querySelector( '.modal-wrapper' );

// MODAL NUEVO REGISTRO
const addModal = document.querySelector( '.add-modal' );
const addModalForm = document.querySelector( '.add-modal .form')

const btnAdd = document.querySelector( '.btn-add' );

// Click Nuevo Registro
btnAdd.addEventListener( 'click', () => {
    addModal.classList.add( 'modal-show' );
});

// QUITAR MODAL DE LA PANTALLA
window.addEventListener( 'click', e => {
    if ( e.target === addModal) {
        addModal.classList.remove( 'modal-show' );
        addModalForm.reset();
    }
})

// Crear elemento y renderizar Nombre
const tablaInventario = document.querySelector( '#tablaInventario' );

const renderUser = doc => {
    const tr = `
    <tr data-id='${doc.id}'>
        <td onclick='abrirEditar(this)'>${doc.data().ViaPedido}</td>
        <td onclick='abrirEditar(this)'>${doc.data().NroPedido}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Fecha}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Nombre}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Celular}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Direccion}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Ciudad}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Correo}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Producto}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Precio}</td>
        <td onclick='abrirEditar(this)'>${doc.data().ModoEntrega}</td>
        <td onclick='abrirEditar(this)'>${doc.data().PrecioDelivery}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Total}</td>
        <td onclick='abrirEditar(this)'>${doc.data().MetodoPago}</td>
        <td onclick='abrirEditar(this)'>${doc.data().EstadoPago}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Comprobante}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Sticker}</td>
        <td onclick='abrirEditar(this)'>${doc.data().Obs}</td>
        <td>
            <button class="btn btn-delete">Eliminar</button>
        </td>
    </tr>`;
    
    tablaInventario.insertAdjacentHTML( 'beforeend', tr );

    const btnDelete = document.querySelector( `[data-id='${doc.id}'] .btn-delete` );
    
    btnDelete.addEventListener( 'click', () => {
        db.collection( 'Inventario' ).doc( `${doc.id}` ).delete().then( () => {
            console.log('<3');
        }).catch( err => {
            console.log('</3');
        })
    } );
}

// CLICK CARGAR NUEVO REGISTRO
addModalForm.addEventListener( 'submit', e => {
    e.preventDefault();
    db.collection( 'Inventario' ).add( {
        Nombre: addModalForm.Nombre.value,
        ViaPedido: addModalForm.ViaPedido.value,
        Celular: addModalForm.Celular.value,
        Correo: addModalForm.Correo.value,
        MetodoPago: addModalForm.MetodoPago.value,
    } );
    modalWrapper.classList.remove( 'modal-show' );
})

// MODAL EDITAR REGISTRO

const editModal = document.querySelector( '.edit-modal' );
const editModalForm = document.querySelector( '.edit-modal .form' ); //Para agregar usuarios

const trDelete = `
<td>
    <button class="btn btn-guardar">Guardar</button>
</td>
`

const abrirEditar = () => {
    editModalForm.insertAdjacentHTML( 'beforeend', trDelete );
    editModal.classList.add( 'modal-show' ); 
}

// QUITAR MODAL EDITAR REGISTRO
window.addEventListener( 'click', e => {
    if ( e.target === editModal) {
        editModal.classList.remove( 'modal-show' );
        editModalForm.reset();
        editModalForm.removeChild( editModalForm.lastElementChild );
        editModalForm.removeChild( editModalForm.lastElementChild );
    }
})

// Obtener usuarios

db.collection( 'Inventario' ).get().then( querySnapshot => {
    querySnapshot.forEach( doc => {
        renderUser(doc);
    })
})

