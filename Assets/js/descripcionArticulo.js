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

    crearCard()
    {
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

function insertCards(cards){

        document.querySelector(`#card-group-1`).appendChild(cards[0].crearCard());
    
}

function loadCards(){
    let obj = [];
    let categoria = "water"; 
    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`)
    .then(resp => resp.json())
    .then(data => {
        let cards = jsonToCard(data);
        console.log(cards);
        insertCards(cards);
    });
}

function loadCards(categoria){

    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`)
    .then(resp => resp.json())
    .then(data => {
        let cards = jsonToCard(data);
        console.log(cards);
        insertCards(cards);
    });
}

function jsonToCard(data){
    let cards = [];
    
    let card = new Card(data[0].img, data[0].name, data[0].species, data[0].evolution);
    cards.push(card);
   
    return cards;
}
// document.body.onload = loadCards();
loadCards("water");