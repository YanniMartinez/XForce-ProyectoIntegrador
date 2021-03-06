let categorias = ["celulares", "gamers","laptops","impresoras"]; // Simulamos obtener la información en un arreglo

/**
 * Permite rellenar de forma dinámica el menú desplegable, con las categorias que reciba, esto permite
 * una mejor interacción del usuario con la plataforma y permite hacer que el contenido cambie en función
 * de la categoria que elija del menú
 * @param {*} categorias Hará referencia al listado de categorias disponibles en la plataforma
 */
function actualizarCategoriasNavBar(categorias){
/*     Con esta función actualizamos el menú desplegable de la barra de navegación superior */

    let dropmenu = document.querySelector('#drop-category-menu'); // Conectamos con el menú desplegable

    /* Creamos un forEach para recorrer el arreglo de categorias*/
    
    categorias.forEach((categoria,index) => {
        
        let item = document.createElement('a'); //Creamos un elemento 'a'
        item.textContent = categoria; // Agregamos el contendo de la etiqueta en forma de texto
        item.classList.add('dropdown-item'); // Agregamos una clase dropdown-item a la etiqueta "a"
        item.href = `articulos.html?categoria=${categoria}`; // Agregamos la referencia a otro enlace o página
        item.id = `dropdown-item-${index}`;   //  Agregamos un id dinámico mediante la variable index
        dropmenu.appendChild(item); //Se lo agregamos al dropmenu como un hijo
    });
}

/**
 * Funcion que inicia el proceso de rellenar las categorias en el nav Bar.
 */
function init () {
    // Consultamos las categorias a la API
    fetch(`http://localhost:8080/article/categories`,{
        headers: {
            'content-type': 'application/json'
        }
    }).then(resp => resp.json())
    .then(data => {
        /**
         * Tomamos los datos de la consulta y los guardamos en un array
         */
        let array = []
        data.forEach(d => {
            array.push(d.split(',')[0]); // Los separamos de el numero de elementos de cada categoría.
        });
        //Mandamos a llamar a la función que permite llenar el menú desplegable.
        actualizarCategoriasNavBar(array);
    })
    
}

init(); // Iniciamos el rellenado de las categorías.
