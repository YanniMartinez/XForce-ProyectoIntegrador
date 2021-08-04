//Clase para el objeto tarjeta
let item = 0;
/**
 * TODO: FUNCON QUE CAPTURA LOS GET EN VIADOS POR URL
 * @returns La respuesta Get como una clase con atributos que contienen los mensajes Get
 */
function getGET() {
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0) {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1]; // divide la cadena por cada '?' y toma sola la peticion del get
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&'); // divide la cadena por cada '&'
        var get = {}; // Crea un array que contendra el diccionario
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('='); // divide la cadena por cada '='
            get[tmp[0]] = unescape(decodeURI(tmp[1])); // Lo agrda a un diccionario
        }
        return get; // retorna el diccionario
    }
}

/**
 * TODO: FUNCION QUE INICIALIZA LAS CARDS AL CARGAR LA PAGINA
 * Funciona como prueba para objetos por carga default
 */
 function init(){
    let inicio = getGET();
    if (typeof(inicio) == 'undefined'){
        loadCards("water");
    }
    else{
        loadCards(inicio["categoria"]);
    }
}

/**
 * TODO: FUNCION QUE REMUEVE LAS CARDS DEL HTML
 * Permite vaciar las cards contenidas en el grupo dinámico establecido
 * Esto genera una limpieza en la página y deja la columa derecha en blanco
 */
 function removeCards(){

    /* Esta función elimina a todos los hijos de cada columna */
    for(let i = 0; i < 3; i++){
        let element = document.querySelector(`#cards`);   // Referencia a la columna
        while (element.firstChild){ // Solo si hay un primer hijo
            element.removeChild(element.firstChild); // Remueve el susodicho hijo
          };
    }
}

/**
 * TODO: CREA LOS OBJETOS DE LAS CARDS
 * Convierte todo el contenido del consumo de la API en una card, se auxilia de la creación de un objeto
 * el cual inicializa mediante su constructor y genera un arreglo de objetos Card para poder saber cuantas Cards
 * se crearán de forma dinámica.
 * @param {*} data Hace referencia a la información que obtenemos al consumo de la API
 * @returns cards Hace referencia a un arreglo de objetos con información unica.
 */
 function jsonToCard(data){
    console.log(data);
        /* Esta función transforma el array de objetos JSON a un array de ojetos CARD */
        let cards = [];
        data.forEach(d => { //Para cada elemento crea un objeto tipo card de informació unica
            let card = new Card(d.imagen, d.nombre, d.descripcion, d.categoria); //Crea objeto con valores unicos
            cards.push(card); //Almacena en un arreglo de objetos
        });
        return cards; //Retorna el arreglo de cards
}


/**
 * TODO: INSERTA LAS CARDS EL EL SEGMENTO QUE LAS VA A CONTENER
 * Agrega un hijo al id Card-group- correspondiente, esto lo hará de 3 columas
 * @param {*} cards 
 */
 function insertCards(cards){
    
    let seccion_cards = document.querySelector(`#cards`); // Selecciona seccion cards
    let f; // Guarda la fila
    // Recorremos las cards para asignarlas a una columna.
    cards.forEach((card,i) => {
        /**
         * Recorremos el arreglo de cards para insertarlas
         */
        let columna = document.createElement('div'); // Creamos la columna que contendra cada card
        columna.classList = 'col-md-3'; // Agregamos sus clases
        if((i+1) % 3 == 0){ // Si la card es multiplo de 3
            // console.log(`${i}-(i+1)`);
            // console.log(`${i}-else-${f}`);
            let columna = document.createElement('div'); // Creamos la columna que contendra cada card
            columna.classList = 'col-xl-4 p-0'; // Agregamos sus clases
            columna.appendChild(card.crearCard()); // Anidamos la card en la columna
            document.querySelector(`#fila${f}`).appendChild(columna); // Anidamos la columna en su correspondiente fila
        }
        else if((i % 3) == 0){ // Si la card es la tercera
            // console.log(`${i}-(i)`);
            let fila = document.createElement('div'); // Creamos una nueva fila
            fila.classList = 'row'; // Agregamos sus clase
            fila.id = `fila${i}`; // Agregamos su id
            f = i;  // Guardamos el indice de la nueva fila
            let columna = document.createElement('div'); // Creamos la columna que contendra cada card
            columna.classList = 'col-xl-4 p-0'; // Agregamos sus clases
            columna.appendChild(card.crearCard()); // La card en la columna
            fila.appendChild(columna); // Anidamos la columna en su correspondiente fila
            // console.log(fila);
            seccion_cards.appendChild(fila); // Agregamos la card en su seccion
        }
        else{ // Si es la card es la segunda
            // console.log(`${i}-else-${f}`);
            let columna = document.createElement('div'); // Creamos la columna
            columna.classList = 'col-xl-4 p-0'; // Agregamos su clase
            columna.appendChild(card.crearCard()); // Anidamos la card en la columna
            document.querySelector(`#fila${f}`).appendChild(columna); // Anidamos la colummna en la fila
        }
    });
}

/**
 * TODO: EN ESTA FUNCION SE OBTIENEN LOS DATOS DE CADA CATEGORIA PARA GENERAL LAS CARDS
 * Esta funcion carga las imagenes del api en el HTML
 * @param {*} categoria que se van a insertar el HTML
 */
function loadCards(categoria){

    //Realizamos la consulta
    /*fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`)
    .then(resp => resp.json())
    .then(data => {*/
        let data; // Contendra la categorìa que se va a cargar
        switch (categoria) {
            /**
             * Selecciona la categoria que se desa cargar
             */
            case 'gamer':
                data = gamer;
                break;
            case 'celulares':
                data = celulares;
                break;
            case 'impresoras':
                data = impresoras;
                break;
            case 'laptops':
                data = laptops;
                break;
            case 'monitores':
                data = monitores;
                break;
            default:
                data = gamer;
                break;
        }
        let cards = jsonToCard(data); // Convetimos de un objeto tipo JSON a uno tipo CARD.
        insertCards(cards); // Inserta las cards en el HTML
    //});
}

/**
 * TODO: CLASE CARD
 * Clase Card, como su nombre lo dice, está destinada a ser la que represente lo mejor posible una card
 * contiene atributos como:
 * Imagen, nombre, descripción y etiqueta
 * Permitiendonos abstraer lo máximo posible el objeto y así poder darle diversas utilidades cuando trabajemos
 * con cualquier API, el motivo de declararla es automatizar procesos como la creación de cards de manera dinámica
 * en base a la API que consumamos.
 */
class Card
{
    /**Declaración de ATRIBUTOS privados */
    #imagen="";
    #nombre="";
    #descripcion="";
    #etiqueta="";

    /**
     * Constructor, nos permite inicializar los valores de nuestro objeto en base a la información brindada por la API
     * @param {*} imagen Hace referencia al valor SRC que asignaremos a la etiqueta img posteriormente
     * @param {*} nombre Hace referencia al nombre del articulo
     * @param {*} descripcion Hace referencia a la breve descripción obtenida del articulo
     * @param {*} etiqueta Hace referencia a la etiqueta o categoria a la que pertenece el articulo
     */
    constructor(imagen,nombre,descripcion,etiqueta)
    {
        this.#imagen=imagen;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#etiqueta=etiqueta;
    }

    /**Metodos Set's Permiten modificar los atributos privados del objeto (Les asigna valores)*/
    set imagen(value){this.#imagen=value;}
    set nombre(value){this.#nombre=value;}
        set descripcion(value){this.#descripcion=value;}
    set etiqueta(value){this.#etiqueta=value;}

    /**Metodos Get's permiten obtener información de los atributos del objeto */
    get imagen(){return this.#imagen;}
    get nombre(){return this.#nombre;}
    get descripcion(){return this.#descripcion;}
    get etiqueta(){return this.#etiqueta;}

    /**
     * Permite la creación de etiquetas necesarias para poder construir una Card basada en las clases de BootStrap 4.6
     * Además de permitir la automatización de las etiquetas, también permite automatizar la información en base a
     * los valores que tiene el objeto
     * @returns div Retorna una etiqueta div con todo el contenido basado en el objeto, incluidas las demás
     * etiquetas que contienen toda la información necesaria para describir el articulo.
     */
    crearCard()
    {
        // <div class="container m-4">
        //         <div class="card">
        //             <img src="https://telmov.mx/pub/media/catalog/product/cache/b16575678386db1ef77c8f34ab4968cf/p/o/poco_x3_pro_negro_1_.jpg" alt="" id="imagen2" height="">
        //             <h4>Motorola Moto One Fusion Plus 128GB Desbloqueado - Azul Blackout</h4>
        //             <p>Procesador Snapdragon 860 2.96GHz</p>
        //             <a href="#">Ver mas</a>
        //     </div> 
        /* Este método crea el codigo HTML de la card */
        let div1 = document.createElement("div");
        div1.classList = 'container';

        let div2 = document.createElement("div"); //Contenedor de la card.
        div2.classList="card p-2 mt-3" ;

        let img=document.createElement("img");  //Imagen, se asigna la dirección de la imagen obtenida del API.
        // img.classList="card-img-top";   
        img.src=this.#imagen;
        // img.style.margin = "10% 0px";
        // img.height = 255;


        let h4=document.createElement("h4"); //Titulo de la card, se asigna el nombre del objeto.
        h4.classList="card-title";
        if(this.#nombre.length > 25){
            h4.textContent=this.#nombre.substr(0,45) + '... ';
        }
        else{
            h4.textContent=this.#nombre;
        }

        let p=document.createElement("p");  //Parrafo de la card, se asigna la descripción del objeto.
        p.classList="card-text";
        p.textContent=this.#descripcion;

        let button=document.createElement("a"); // Botón con etiqueta a
        button.classList="btn btn-outline-primary";
        button.textContent="Ver más...";
        button.href=`descripcionArticulo.html?nombre=${this.#nombre}&categoria=${this.#etiqueta}`;

        /* Aquí se mete cada elemento dentro del que le corresponde para ser insertado en el HTML */
        div2.appendChild(img); // img -> div3
        div2.appendChild(h4); // h5 -> div2
        div2.appendChild(p);  // p -> div2
        div2.appendChild(button); // boton -> div2
        div1.appendChild(div2); //div3 -> div

        return div1; //regresamos el elemento.
    }
}

/**
 * TODO: BOTON DE AGREGAR CATEGORIAS
 * Relaciona la acción de presionar el botón de las categorias con remover las cartas existentes en la columna derecha
 * y se encarga de crear nuevas en función del valor que el usuario quiere de categoria
 */
let button=document.querySelector('#btn-categorias-lat'); //Relacionando con el botón.
button.addEventListener('click', event => {
    removeCards();
    let elements = document.querySelector("#categoriaslat").elements; // Seleccionamos los elementos del formulario.
    for(let i = 0; i < elements.length; i++){ // Recorremos cada elemento
        if (elements[i].checked){   // Verificamos que este marcado
            loadCards(elements[i].value); // Cargamos las categorias marcadas.
        }    
    }


})

/**
 * TODO: INICIALIZA EL HTML CUANDO CARGA
 */
document.body.onload = init; // Funcion que inicial cuando la pagina carga
//