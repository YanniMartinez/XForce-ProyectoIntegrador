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
        div.style = "width: 18rem;";

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
    let j = 0;
    cards.forEach((card,i) => {
        document.querySelector(`#card-group-${i-j}`).appendChild(card.crearCard());
        if((i+1)%3 == 0){
            j = j + 3
        }
    });
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
    let obj = [];
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
    data.forEach(d => {
        let card = new Card(d.img,d.name,d.species,d.evolution);
        cards.push(card);
    });
    return cards;
}
// document.body.onload = loadCards();
loadCards("water");


// let array = [];
// for (let i = 0; i < 10; i++) {
//     let carro = new Card('https://http2.mlstatic.com/D_NQ_NP_633264-MLM44666763261_012021-O.jpg','Carro','Color: rojo', ['Automóvil','Transporte']);
//     array.push(carro);
// }

// insertarCards(array);
// document.querySelector('#producto').appendChild(crearSeccion(array));
// let carro = new Card('https://http2.mlstatic.com/D_NQ_NP_633264-MLM44666763261_012021-O.jpg','Carro','Color: rojo', ['Automóvil','Transporte']);
// document.querySelector('#card-group-1').appendChild(carro.crearCard());
// console.log();


/**<div class="card p-3  border-0">
                        <img src="" class="card-img-top" alt="..." id="card">
                        <div class="card-body ">
                            <h5 class="card-title">Agency About Page</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-outline-primary">Ver más...</button>
                        </div>
                    </div> */

