// CONFIGURACION FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyDvaucJj0cRUZOveAnIoJEKAwy06xrLeEg",
    authDomain: "crudfiloapp.firebaseapp.com",
    projectId: "crudfiloapp",
    storageBucket: "crudfiloapp.appspot.com",
    messagingSenderId: "674713923526",
    appId: "1:674713923526:web:7a1f89272d300c7bf84cc7"
};


// INICIAR FIREBASE
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


let id;
let idPre;
const modalWrapper = document.querySelector( '.modal-wrapper' );


// RENDERIZAR REGISTROS DE FIREBASE
const tablaInventario = document.querySelector( '#tablaInventario' );
const tablaPreparar = document.querySelector( '#tablaPreparar' );
const tablaDelivery = document.querySelector( '#tablaDelivery' );

const renderUser = ( doc ) => {
    
    // INVENTARIO
    const total = parseInt( doc.data().PrecioDelivery ) + parseInt( doc.data().Precio );
    const tr = `
      <tr id='Inv${doc.id}'>
          <td onclick='abrirEditar()'>${doc.data().ViaPedido}</td>
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
          <td onclick='abrirEditar()'>${ total }</td>
          <td onclick='abrirEditar()'>${doc.data().ModoPago}</td>
          <td onclick='abrirEditar()'>${doc.data().EstadoPago}</td>
          <td onclick='abrirEditar()'>${doc.data().Comprobante}</td>
          <td onclick='abrirEditar()'>${doc.data().Sticker}</td>
          <td onclick='abrirEditar()'>${doc.data().EstadoPedido}</td>
          <td onclick='abrirEditar()'>${doc.data().Obs}</td>
          <td id='Inv${doc.id}'>
              <button class="btn btn-delete">Eliminar</button>
          </td>
      </tr>`;

    tablaInventario.insertAdjacentHTML("beforeend", tr);

    // RENDIZAR DATOS DE REGISTRO -> INVENTARIO
    const btnEdit = document.querySelector(`#Inv${doc.id}`);
    btnEdit.addEventListener("click", () => {
        id = doc.id; //Para reconocer el ID que se dio click
        editModalForm.ViaPedido.value       = doc.data().ViaPedido
        editModalForm.NroPedido.value       = doc.data().NroPedido
        editModalForm.Fecha.value           = doc.data().Fecha
        editModalForm.Nombre.value          = doc.data().Nombre
        editModalForm.Celular.value         = doc.data().Celular
        editModalForm.Direccion.value       = doc.data().Direccion
        editModalForm.Ciudad.value          = doc.data().Ciudad
        editModalForm.Correo.value          = doc.data().Correo
        editModalForm.Producto.value        = doc.data().Producto
        editModalForm.Precio.value          = doc.data().Precio
        editModalForm.ModoEntrega.value     = doc.data().ModoEntrega
        editModalForm.PrecioDelivery.value  = doc.data().PrecioDelivery
        editModalForm.ModoPago.value        = doc.data().ModoPago
        editModalForm.EstadoPago.value      = doc.data().EstadoPago
        editModalForm.Comprobante.value     = doc.data().Comprobante
        editModalForm.Sticker.value         = doc.data().Sticker
        editModalForm.EstadoPedido.value    = doc.data().EstadoPedido
        editModalForm.Obs.value             = doc.data().Obs
    });
    
    // BOTON ELIMINAR -> INVENTARIO
    const btnDelete = document.querySelector(`#Inv${doc.id} .btn-delete`);

    btnDelete.addEventListener("click", () => {
        db.collection("Inventario")
        .doc(`${doc.id}`)
        .delete()
        .then(() => {
            const modalDelete = document.querySelector( '.delete-modal' );

            modalDelete.classList.add( 'modal-show' );
            window.addEventListener( 'click', e => {
                if ( e.target === modalDelete) {
                    modalDelete.classList.remove( 'modal-show' );
                }
            });
        })
        .catch((err) => {
            console.log("</3");
        });
    });
    
    // PREPARAR
    if ( doc.data().EstadoPedido == 'REALIZAR' ) {
        const trPre = `
            <tr id='Pre${doc.id}'>
                <td onclick='abrirEditar2()'>${doc.data().ViaPedido}</td>
                <td onclick='abrirEditar2()'>${doc.data().NroPedido}</td>
                <td onclick='abrirEditar2()'>${doc.data().Fecha}</td>
                <td onclick='abrirEditar2()'>${doc.data().Nombre}</td>
                <td onclick='abrirEditar2()'>${doc.data().Producto}</td>
                <td onclick='abrirEditar2()'>${doc.data().ModoEntrega}</td>
                <td onclick='abrirEditar2()'>${doc.data().Sticker}</td>
                <td onclick='abrirEditar2()'>${doc.data().EstadoPedido}</td>
                <td onclick='abrirEditar2()'>${doc.data().Obs}</td>
                <td id='Pre${doc.id}'>
                    <button class="btn btn-listo">Listo</button>
                </td>
            </tr>`;
        tablaPreparar.insertAdjacentHTML("beforeend", trPre);

        // RENDERIZAR DATOS DE REGISTRO -> PREPARAR
        const btnEdit2 = document.querySelector( `#Pre${doc.id}` );
        btnEdit2.addEventListener("click", () => {
            editModalForm2.ViaPedido.value       = doc.data().ViaPedido
            editModalForm2.NroPedido.value       = doc.data().NroPedido
            editModalForm2.Fecha.value           = doc.data().Fecha
            editModalForm2.Nombre.value          = doc.data().Nombre
            editModalForm2.Producto.value        = doc.data().Producto
            editModalForm2.ModoEntrega.value     = doc.data().ModoEntrega
            editModalForm2.Sticker.value         = doc.data().Sticker
            editModalForm2.EstadoPedido.value    = doc.data().EstadoPedido
            editModalForm2.Obs.value             = doc.data().Obs
        });

        // BOTON LISTO -> PREPARAR
        const btnListo = document.querySelector( `#Pre${doc.id} .btn-listo` );

        btnListo.addEventListener( 'click', () => {
            db.collection( 'Inventario' ).doc( `${doc.id}` ).update({
                EstadoPedido: 'REALIZADO'
            })
            let trPre = document.querySelector( `#Pre${doc.id}` ).style.display = 'none'; //Para ocultar la fila en vez de borrar
        });
    };

    // DELIVERY

    if ( doc.data().EstadoPedido == 'REALIZADO' ) {
        
        const trDel = `
        <tr id='Del${doc.id}'>
            <td>${doc.data().NroPedido}</td>
            <td>${doc.data().Fecha}</td>
            <td>${doc.data().Nombre}</td>
            <td>${doc.data().Celular}</td>
            <td>${doc.data().Direccion}</td>
            <td>${doc.data().Ciudad}</td>
            <td>${doc.data().Producto}</td>
            <td>${ total }</td>
            <td>${doc.data().EstadoPago}</td>
            <td>${doc.data().Obs}</td>
            <td>${doc.data().EstadoPedido}</td>
            <td id='Del${doc.id}'>
                <button class="btn btn-enviado">Enviado</button>
            </td>
        </tr>`;
        tablaDelivery.insertAdjacentHTML("beforeend", trDel);

    
        // BOTON ENVIADO -> DELIVERY
        
        const btnEnviado =  document.querySelector( `#Del${doc.id} .btn-enviado` );
        
        btnEnviado.addEventListener( 'click', () => {
            db.collection( 'Inventario' ).doc( `${doc.id}` ).update({
                EstadoPedido: 'ENVIADO'
            });
            
            const changeEstado = document.querySelector( `#Del${doc.id}` ).lastElementChild.previousElementSibling.textContent = 'ENVIADO';
            
        });
    
    };
}

// NUEVO REGISTRO
const addModal      = document.querySelector( '.add-modal' );
const addModalForm  = document.querySelector( '.add-modal .form')
const btnAdd        = document.querySelector( '.btn-add' );

// CLICK NUEVO REGISTRO
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

// EDITAR REGISTRO

const editModalInv = document.querySelector( '.edit-modal' );
const editModal2 = document.querySelector( '.edit-modal2' );

const editModalForm = document.querySelector( '.edit-modal .form' ); //Para agregar usuarios
const editModalForm2 = document.querySelector( '.edit-modal2 .form' ); //Para agregar usuarios

const abrirEditar = () => editModalInv.classList.add( 'modal-show' );
const abrirEditar2 = () => editModal2.classList.add( 'modal-show' );

// QUITAR MODAL EDITAR REGISTRO
window.addEventListener( 'click', e => {
    if ( e.target === editModalInv || e.target === editModal2 ) {
        editModalInv.classList.remove( 'modal-show' );
        editModal2.classList.remove( 'modal-show' );
        editModalForm.reset();
    }
})

// CLICK GUARDAR NUEVO REGISTRO
editModalForm.addEventListener( 'submit', e => {
    e.preventDefault();
    db.collection( 'Inventario' ).doc( id ).update({
        ViaPedido:      editModalForm.ViaPedido.value,
        NroPedido:      editModalForm.NroPedido.value,
        Fecha:          editModalForm.Fecha.value,
        Nombre:         editModalForm.Nombre.value,
        Celular:        editModalForm.Celular.value,
        Direccion:      editModalForm.Direccion.value,
        Ciudad:         editModalForm.Ciudad.value,
        Correo:         editModalForm.Correo.value,
        Producto:       editModalForm.Producto.value,
        Precio:         editModalForm.Precio.value,
        ModoEntrega:    editModalForm.ModoEntrega.value,
        PrecioDelivery: editModalForm.PrecioDelivery.value,
        ModoPago:       editModalForm.ModoPago.value,
        EstadoPago:     editModalForm.EstadoPago.value,
        Comprobante:    editModalForm.Comprobante.value,
        Sticker:        editModalForm.Sticker.value,
        EstadoPedido:   editModalForm.EstadoPedido.value,
        Obs:            editModalForm.Obs.value,
    });
    editModalInv.classList.remove( 'modal-show' );
});

const generateID = id => "Row-" +  Date.now();

// CLICK CARGAR NUEVO REGISTRO
addModalForm.addEventListener( 'submit', e => {
    e.preventDefault();
    db.collection( 'Inventario' ).doc( generateID() ).set( {
        ViaPedido:      addModalForm.ViaPedido.value,
        NroPedido:      addModalForm.NroPedido.value,
        Fecha:          addModalForm.Fecha.value,
        Nombre:         addModalForm.Nombre.value,
        Celular:        addModalForm.Celular.value,
        Direccion:      addModalForm.Direccion.value,
        Ciudad:         addModalForm.Ciudad.value,
        Correo:         addModalForm.Correo.value,
        Producto:       addModalForm.Producto.value,
        Precio:         addModalForm.Precio.value,
        ModoEntrega:    addModalForm.ModoEntrega.value,
        PrecioDelivery: addModalForm.PrecioDelivery.value,
        ModoPago:       addModalForm.ModoPago.value,
        EstadoPago:     addModalForm.EstadoPago.value,
        Comprobante:    addModalForm.Comprobante.value,
        Sticker:        addModalForm.Sticker.value,
        EstadoPedido:   addModalForm.EstadoPedido.value,
        Obs:            addModalForm.Obs.value,
    });
    modalWrapper.classList.remove( 'modal-show' );
})


// REALTIME LISTENER
let observer = db.collection( 'Inventario' ).orderBy('Fecha', 'desc').onSnapshot( snapshot => {
    snapshot.docChanges().forEach( change => {
        if ( change.type === 'added') {
            renderUser( change.doc );
        }
        if ( change.type === 'removed' ) {
            let tr = document.querySelector( `#Inv${change.doc.id}` );

            let tbody = tr.parentElement;

            tablaInventario.removeChild( tbody );
        }
        if ( change.type === 'modified' ) {
            let tr = document.querySelector( `#Inv${change.doc.id}` );
            let tbody = tr.parentElement;

            tablaInventario.removeChild( tbody );
            renderUser( change.doc );
        }
    });
});

// NAVEGAR ENTRE PAGINAS

const iconoInventario = document.querySelector( '#icon-inventario' );
const iconoPreparar = document.querySelector( '#icon-preparar' );
const iconoDelivery = document.querySelector( '#icon-delivery' );


const tabPreparar = document.querySelector( '.preparar' );
const tabInventario = document.querySelector( '.inventario' );
const tabDelivery = document.querySelector( '.delivery' );

iconoPreparar.addEventListener( 'click', () => {
    tabPreparar.style.display = 'block';
    tabInventario.style.display = 'none';
    tabDelivery.style.display = 'none';
    
});

iconoInventario.addEventListener( 'click', () => {
    tabInventario.style.display = 'block';
    tabPreparar.style.display = 'none';
    tabDelivery.style.display = 'none';

});

iconoDelivery.addEventListener( 'click', () => {
    tabDelivery.style.display = 'block';
    tabInventario.style.display = 'none';
    tabPreparar.style.display = 'none';

});