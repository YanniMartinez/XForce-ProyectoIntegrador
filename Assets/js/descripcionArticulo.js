//Clase para el objeto tarjeta
class Card
{
    #imagen="";
    #nombre="";
    #descripcion="";
    #etiqueta="";


    constructor(imagen,nombre,descripcion,etiqueta)
    {
        this.#imagen=imagen;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#etiqueta=etiqueta;
    }

    //Siver para poner los valores a los atributos principales del objeto
    set imagen(value){this.#imagen=value;}
    set nombre(value){this.#nombre=value;}
        set descripcion(value){this.#descripcion=value;}
    set etiqueta(value){this.#etiqueta=value;}

    //Obtenemos los valores
    get imagen(){return this.#imagen;}
    get nombre(){return this.#nombre;}
    get descripcion(){return this.#descripcion;}
    get etiqueta(){return this.#etiqueta;}

    /**
     * Permite la creación de etiquetas necesarias para el card
     * @returns div Retorna una etiqueta div con todo el contenido basado en el objeto o en el pokemon
     */
    crearCard()
    {
        console.log("*********** ");
        let div= document.createElement("div");
        div.classList="card p-3  border-0";

        let img=document.createElement("img");
        img.classList="card-img-top";
        img.src=this.#imagen;

        let div2=document.createElement("div");
        div2.classList="card-body ";

        let h5=document.createElement("h5");
        h5.classList="card-title";
        h5.textContent=this.#nombre;

        let p=document.createElement("p");
        p.classList="card-text";
        p.textContent=this.#descripcion;

        let button=document.createElement("button");
        button.classList="btn btn-outline-primary";
        button.textContent="Ver más...";

        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(button);

        div.appendChild(img);
        div.appendChild(div2);

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

//Se mantuvo igual
function jsonToCard(data){
    let cards = [];
    
    let card = new Card(data[0].img, data[0].name, data[0].species, data[0].evolution);
    cards.push(card);
   
    return cards;
}
// document.body.onload = loadCards();
loadCards("water"); //Despliega un sólo elemento de tipo AGUA

//***************Haciendo una relación del boton search con el espacio de cards********************** */

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
        //console.log("El nombre fue" + data[0].name + " :D");
        let cards = jsonToCard(data); //Convierte el JSON a objeto CARD
        //console.log(cards);
        insertCards(cards); //Inserta el objeto en un div
    });
}

/**
 * Le Decimos ubique el elemento con el id "Card-group-1" y en él agregue como hijo todo lo indicado en la 
 * clase crearCard.
 * @param {*} cards Es el arreglo de objetos tipo Card, es decir toda la información de la imagen, del nombre
 * de la descripción y evoluciones
 */
function insertCard(cards){
    console.log("pikachu ya mero");
    document.querySelector(`#card-group-1`).appendChild(cards[0].crearCard());

    
}

/**
 * Relacionamos una variable botón con el boton cuyo ID es botonBusqueda
 * HAcemos un EventListener que al apretarse nos ejecutará la función "loadCardName" la cual nos
 * desplegará un pokemon con ese nombre en un espacio designado
 */
let buttonSearch = document.querySelector("#botonBusqueda");
buttonSearch.addEventListener("click", event =>{
    //alert("Q pdo");
    loadCardName("pikachu");

});
