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
        let div= document.createElement("div"); //Crea un etiqueta div
        div.classList="card p-3  border-0"; //Le asigna clases de bootstrap para que se vea bonito

        let img=document.createElement("img"); //Crea una etiqueta img
        img.classList="card-img-top"; //Asigna clases para que tenga orden
        img.src=this.#imagen; //Asigna la url o dirección de la imagen que mostrará

        let div2=document.createElement("div"); //Crea una etiqueta div
        div2.classList="card-body "; //Le asigna clases

        let h5=document.createElement("h5"); //Crea un elemento H5
        h5.classList="card-title"; //Asigna clases
        h5.textContent=this.#nombre; //El valor del texto de h5 toma el valor del nombre del articulo

        let p=document.createElement("p"); //Crea un elemento P
        p.classList="card-text"; //Asigna clases
        p.textContent=this.#descripcion; //Asigna valor al texto del parrafo

        let button=document.createElement("button"); //Genera un botón
        button.classList="btn btn-outline-primary"; //Asigna clases
        button.textContent="Ver más..."; //Asigna un texto

        //Agregamos hijos en el Div2
        div2.appendChild(h5); 
        div2.appendChild(p);
        div2.appendChild(button);

        //Agregamos hijos al Div1
        div.appendChild(img);
        div.appendChild(div2);

        /*Retorna la etiqueta Div con todo el contenido dinámico, se podría decir que retorna toda
        la card dinámica*/
        return div;
    }
}

/**
 * Agrega un hijo al id Card-group-1
 * @param {*} cards 
 */
function insertCards(cards){

    document.querySelector(`#card-group-1`).appendChild(cards[0].crearCard());
    
}

//Se mantuvo igual
function loadCards(categoria){

    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`)
    .then(resp => resp.json())
    .then(data => {
        let cards = jsonToCard(data);
        console.log(cards);
        insertCards(cards);
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
    let cards = []; //Declara un arreglo
    
    //Creamos un sólo Objeto tipo card con información unica
    let card = new Card(data[0].img, data[0].name, data[0].species, data[0].evolution);
    cards.push(card); //Se agrega al arreglo
   
    //Retorna el arreglo
    return cards;
}


/* Lee el parámetro desde la url mediante el objeto URLSearchParams y genera el articulo */
let parametroUrl = new URLSearchParams(document.location.search.substring(1)); //En la variable almacena el valor de la url
loadCardName(parametroUrl.get("nombre")); //A la función le mandamos el valor que recibe desde la url

/***************************************************************
Haciendo una relación del boton search con el espacio de cards
****************************************************************/

/**
 * Hace una consulta FETCH (en este caso a la API de pokemon), dentro de ella manda a llamar a la función 
 * jsonToCard que crea un objeto y retorna un arreglo de objetos (en este caso solo es uno).
 * Posteriormente manda a llamar a la función insertCard(arregloDeObjetos) donde insertará un hijo en el 
 * div con id card-group-1
 * @param {*} nombre Hace referencia al nombre del pokemon que buscará en el API.
 */
function loadCardName(nombre){

    fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${nombre}`)
    .then(resp => resp.json())
    .then(data => {
    
        let cards = jsonToCard(data); //Convierte el JSON a objeto CARD
        insertCards(cards); //Inserta el objeto en un div con el contenido unico de la card
    });
}

/**
 * Le Decimos ubique el elemento con el id "Card-group-1" y en él agregue como hijo todo lo indicado en la 
 * clase crearCard.
 * @param {*} cards Es el arreglo de objetos tipo Card, es decir toda la información de la imagen, del nombre
 * de la descripción y evoluciones
 */
function insertCard(cards){
    document.querySelector(`#card-group-1`).appendChild(cards[0].crearCard());
    
}

/**
 * Permite vaciar las cards contenidas en el grupo "Card-group-1"
 * Esto genera una limpieza en la página y da enfasis sólo al objeto deseado
 */
function removeCards(){
    for(let i = 0; i < 3; i++){ //Borra por columna
        let element = document.querySelector(`#card-group-1`);   // Referencia a la columna
        while (element.firstChild){ // Solo si hay un primer hijo
            element.removeChild(element.firstChild); // Remueve al mismo
          };
    }
}

/**
 * Relacionamos una variable botón con el boton cuyo ID es botonBusqueda
 * Hacemos un EventListener que al apretarse nos ejecutará la función "loadCardName" la cual nos
 * desplegará un pokemon con ese nombre en un espacio designado
 */
let buttonSearch = document.querySelector("#botonBusqueda"); //Relaciona con el input de ID botonBusqueda
buttonSearch.addEventListener("click", event =>{
    removeCards(); //Removemos las tarjetas creadas
    let nameInput = document.querySelector("#busqueda"); //Relaciona con el input de ID busqueda
    loadCardName(nameInput.value);//Generamos de forma dinámica el articulo

});

