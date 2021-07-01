let categorias = ['niños','niñas','mujer','hombre']; // Simulamos obtener la información en un arreglo

function actualizarCategoriasNavBar(categorias){
/*     Con esta función actualizamos el menú desplegable de la barra de navegación superior */

    let dropmenu = document.querySelector('#drop-category-menu'); // Conectamos con el menú desplegable

    categorias.forEach((categoria,index) => {
        /* Creamos un forEach para recorrer el arreglo de categorias*/

        let item = document.createElement('a'); //Creamos un elemento 'a'
        item.textContent = categoria; // Agregamos el contendo de la etiqueta
        item.classList.add('dropdown-item'); // Agregamos una classe dropdown-item
        item.href = '#' // Agregamos la referencia
        item.id = `dropdown-item-${index}`;   //  Agregamos un id
        dropmenu.appendChild(item); //Se lo agregamos al dropmenu
    });
}

actualizarCategoriasNavBar(categorias);

// <3 Me agradan amigos