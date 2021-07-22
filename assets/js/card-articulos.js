//Clase para el objeto tarjeta
let item = 0;

/**
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
        /* Este método crea el codigo HTML de la card */
        let div= document.createElement("div"); //Contenedor de la card.
        div.classList="card p-3  border-0 shadow p-3 mb-5 bg-white rounded" ;
        div.style = "width: 18rem;";

        let div3 = document.createElement('div'); //Contenedor de la imagen.
        div3.style.height = '285px';

        let img=document.createElement("img");  //Imagen, se asigna la dirección de la imagen obtenida del API.
        img.classList="card-img-top";   
        img.src=this.#imagen;
        img.style.margin = "10% 0px";

        let div2=document.createElement("div"); //Contenedor del Cuerpo de la card.
        div2.classList="card-body ";

        let h5=document.createElement("h5"); //Titulo de la card, se asigna el nombre del objeto.
        h5.classList="card-title";
        h5.textContent=this.#nombre;

        let p=document.createElement("p");  //Parrafo de la card, se asigna la descripción del objeto.
        p.classList="card-text";
        p.textContent=this.#descripcion;

        let button=document.createElement("a"); // Botón con etiqueta a
        button.classList="btn btn-outline-primary";
        button.textContent="Ver más...";
        button.href=`descripcionArticulo.html?nombre=${this.#nombre}`;

        /* Aquí se mete cada elemento dentro del que le corresponde para ser insertado en el HTML */
        div2.appendChild(h5); // h5 -> div2
        div2.appendChild(p);  // p -> div2
        div2.appendChild(button); // boton -> div2
        div3.appendChild(img); // img -> div3
        div.appendChild(div3); //div3 -> div
        div.appendChild(div2); //div3 -> div

        return div; //regresamos el elemento.
    }
}

/**
 * Agrega un hijo al id Card-group- correspondiente, esto lo hará de 3 columas
 * @param {*} cards 
 */
function insertCards(cards){

    /* Esta funcion inserta las Cards en la columna correspondente */
    let j = 0;
    let i = item; 
    //Nosé para que era este if pero favor de retirarlo si no se usa
    if (i == 0){

    }
    // Recorremos las cards para asignarlas a una columna.
    cards.forEach((card) => {
        document.querySelector(`#card-group-${i-j}`).appendChild(card.crearCard());
        // console.log(i,j,i-j); Si quieren ver como se asignan, pueden descomentar este console.
        if((i-j+1)%3 == 0){
            j = j + 3
        }
        item = (i - j + 1);
        i++;
    });
}

/* Esta funcion carga las imagenes del api en el HTML */
function loadCards(categoria){

    //Realizamos la consulta
    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`)
    .then(resp => resp.json())
    .then(data => {
        let cards = jsonToCard(data); // Convetimos de un objeto tipo JSON a uno tipo CARD.
        insertCards(cards); // Inserta las cards en el HTML
    });
}

/**
 * Convierte todo el contenido del consumo de la API en una card, se auxilia de la creación de un objeto
 * el cual inicializa mediante su constructor y genera un arreglo de objetos Card para poder saber cuantas Cards
 * se crearán de forma dinámica.
 * @param {*} data Hace referencia a la información que obtenemos al consumo de la API
 * @returns cards Hace referencia a un arreglo de objetos con información unica.
 */
function jsonToCard(data){

    /* Esta función transforma el array de objetos JSON a un array de ojetos CARD */
    let cards = [];
    data.forEach(d => { //Para cada elemento crea un objeto tipo card de informació unica
        let card = new Card(d.img,d.name,d.species,d.evolution); //Crea objeto con valores unicos
        cards.push(card); //Almacena en un arreglo de objetos
    });
    return cards; //Retorna el arreglo de cards
}

/**
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
 * Permite vaciar las cards contenidas en el grupo dinámico establecido
 * Esto genera una limpieza en la página y deja la columa derecha en blanco
 */
function removeCards(){

    /* Esta función elimina a todos los hijos de cada columna */
    for(let i = 0; i < 3; i++){
        let element = document.querySelector(`#card-group-${i}`);   // Referencia a la columna
        while (element.firstChild){ // Solo si hay un primer hijo
            element.removeChild(element.firstChild); // Remueve el susodicho hijo
          };
    }
}

document.body.onload = init; // Funcion que inicial cuando la pagina carga
//