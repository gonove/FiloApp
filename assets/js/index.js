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
firebase.initializeApp( firebaseConfig );
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
let id;
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

const renderUser = ( doc ) => {
    const tr = `
      <tr id='${doc.id}'>
          <td onclick='abrirEditar()' id='${doc.id}'>${doc.data().ViaPedido}</td>
          <td onclick='abrirEditar()'>${doc.data().NroPedido}</td>
          <td onclick='abrirEditar()'>${doc.data().Fecha}</td>
          <td onclick='abrirEditar()'>${doc.data().Nombre}</td>
          <td onclick='abrirEditar()'>${doc.data().Celular}</td>
          <td onclick='abrirEditar()'>${doc.data().Direccion}</td>
          <td onclick='abrirEditar()'>${doc.data().Ciudad}</td>
          <td onclick='abrirEditar()'>${doc.data().Correo}</td>
          <td onclick='abrirEditar()'>${doc.data().Producto}</td>
          <td onclick='abrirEditar()'>${doc.data().Precio}</td>
          <td onclick='abrirEditar()'>${doc.data().ModoEntrega}</td>
          <td onclick='abrirEditar()'>${doc.data().PrecioDelivery}</td>
          <td onclick='abrirEditar()'>${doc.data().Total}</td>
          <td onclick='abrirEditar()'>${doc.data().MetodoPago}</td>
          <td onclick='abrirEditar()'>${doc.data().EstadoPago}</td>
          <td onclick='abrirEditar()'>${doc.data().Comprobante}</td>
          <td onclick='abrirEditar()'>${doc.data().Sticker}</td>
          <td onclick='abrirEditar()'>${doc.data().Obs}</td>
          <td id='${doc.id}'>
              <button class="btn btn-delete">Eliminar</button>
          </td>
      </tr>`;
    tablaInventario.insertAdjacentHTML("beforeend", tr);

    id = doc.id;
    
    // Boton Editar
    const btnEdit = document.querySelector(`#${doc.id}`);

    btnEdit.addEventListener("click", () => {

        editModalForm.ViaPedido.value = doc.data().ViaPedido
        editModalForm.NroPedido.value = doc.data().NroPedido
        editModalForm.Fecha.value = doc.data().Fecha
        editModalForm.Nombre.value = doc.data().Nombre
        editModalForm.Celular.value = doc.data().Celular
        editModalForm.Direccion.value = doc.data().Direccion
        editModalForm.Ciudad.value = doc.data().Ciudad
        editModalForm.Correo.value = doc.data().Correo
        editModalForm.Producto.value = doc.data().Producto
        editModalForm.Precio.value = doc.data().Precio
        editModalForm.ModoEntrega.value = doc.data().ModoEntrega
        editModalForm.PrecioDelivery.value = doc.data().PrecioDelivery
        editModalForm.ModoPago.value = doc.data().ModoPago
        editModalForm.EstadoPago.value = doc.data().EstadoPago
        editModalForm.Comprobante.value = doc.data().Comprobante
        editModalForm.Sticker.value = doc.data().Sticker
        editModalForm.Obs.value = doc.data().Obs
  });

    // Boton eliminar
    const btnDelete = document.querySelector(`#${doc.id} .btn-delete`);

    btnDelete.addEventListener("click", () => {
      db.collection("Inventario")
        .doc(`${doc.id}`)
        .delete()
        .then(() => {
          console.log("Agregar refresh o algo<3");
        })
        .catch((err) => {
          console.log("Agregar algun modal de fallo o algo </3");
        });
    });
};

// MODAL EDITAR REGISTRO

const abrirEditar = () => {
    editModal.classList.add( 'modal-show' ); 
}

const editModal = document.querySelector( '.edit-modal' );
const editModalForm = document.querySelector( '.edit-modal .form' ); //Para agregar usuarios

// QUITAR MODAL EDITAR REGISTRO
window.addEventListener( 'click', e => {
    if ( e.target === editModal) {
        editModal.classList.remove( 'modal-show' );
        editModalForm.reset();
    }
})

// CLICK CARGAR NUEVO REGISTRO
addModalForm.addEventListener( 'submit', e => {
    e.preventDefault();
    db.collection( 'Inventario' ).add( {
        ViaPedido: addModalForm.ViaPedido.value,
        NroPedido: addModalForm.NroPedido.value,
        Fecha: addModalForm.Fecha.value,
        Nombre: addModalForm.Nombre.value,
        Celular: addModalForm.Celular.value,
        Direccion: addModalForm.Direccion.value,
        Ciudad: addModalForm.Ciudad.value,
        Correo: addModalForm.Correo.value,
        Producto: addModalForm.Producto.value,
        Precio: addModalForm.Precio.value,
        ModoEntrega: addModalForm.ModoEntrega.value,
        PrecioDelivery: addModalForm.PrecioDelivery.value,
        ModoPago: addModalForm.ModoPago.value,
        EstadoPago: addModalForm.EstadoPago.value,
        Comprobante: addModalForm.Comprobante.value,
        Sticker: addModalForm.Sticker.value,
        Obs: addModalForm.Obs.value,
    } );
    modalWrapper.classList.remove( 'modal-show' );
})

// CLICK GUARDAR
editModalForm.addEventListener( 'submit', e => {
    e.preventDefault();
    db.collection( 'Inventario' ).doc( id ).update({
        Nombre: editModalForm.Nombre.value,
        ViaPedido: editModalForm.ViaPedido.value,
        Celular: editModalForm.Celular.value,
        Correo: editModalForm.Correo.value,
        MetodoPago: editModalForm.MetodoPago.value,
    });
    editModal.classList.remove( 'modal-show' );
} )

// Obtener usuarios

// db.collection( 'Inventario' ).get().then( querySnapshot => {
//     querySnapshot.forEach( doc => {
//         renderUser(doc);
//     })
// })

// REALTIME LISTENER

db.collection( 'Inventario' ).onSnapshot( snapshot => {
    snapshot.docChanges().forEach( change => {
        if ( change.type === 'added') {
            renderUser( change.doc );
        }
        if ( change.type === 'removed' ) {
            let tr = document.querySelector( `#${change.doc.id}` );
            let tbody = tr.parentElement;
            tablaInventario.removeChild( tbody );
        }
        if ( change.type === 'modified' ) {
            let tr = document.querySelector( `#${change.doc.id}` );
            let tbody = tr.parentElement;
            tablaInventario.removeChild( tbody );
            renderUser( change.doc );
        }
    } )
} )