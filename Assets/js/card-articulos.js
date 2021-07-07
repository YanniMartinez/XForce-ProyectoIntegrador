//Clase para el objeto tarjeta
let item = 0;


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

    crearCard()
    {
        /* Este método crea el codigo HTML de la card */

        let div= document.createElement("div"); //Contenedor de la card.
        div.classList="card p-3  border-0";
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
        button.href="descripcionArticulo.html";

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

function insertCards(cards){

    /* Esta funcion inserta las Cards en la columna correspondente */
    
    let j = 0;
    let i = item;
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


function loadCards(categoria){

    /* Esta funcion carga las imagenes del api en el HTML */

    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`)
    .then(resp => resp.json())
    .then(data => {
        let cards = jsonToCard(data); // Convetimos de un objeto tipo JSON a uno tipo CARD.
        // console.log(cards); Si quieren ver el resultado, descomenten este consol
        insertCards(cards); // Inserta las cards en el HTML
    });
}

function jsonToCard(data){

    /* Esta función transforma el array de objetos JSON a un array de ojetos CARD */
    let cards = [];
    data.forEach(d => {
        let card = new Card(d.img,d.name,d.species,d.evolution);
        cards.push(card);
    });
    return cards;
}

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

function init(){
    loadCards('water');
}

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



