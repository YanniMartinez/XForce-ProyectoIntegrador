let carritoElemento = document.querySelector("#carrito");

token = localStorage.getItem('token');

if(!token){//Si no hay token no le permite acceder a funcionalidades del carrito
    alert('Para acceder a funcionalidades de carrito porfavor inicie sesión');
    url = window.location;
    console.log(url);
    const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)

    location.href = path + 'login.html';
}
else{
    /** Obtiene los valores del carrito en función del carrito asignado */
    fetch(`http://localhost:8080/cartbytoken`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data =>{
        /* console.log(data.articles)
        console.log("aqui") */
        loadCards(data.articles);
    })
    
}

function jsonToCard(data){
    /* Esta función transforma el array de objetos JSON a un array de ojetos CARD */
    let cards = [];
    data.forEach(d => { //Para cada elemento crea un objeto tipo card de informació unica
        let card = new Card(d.img1, d.name, d.description, d.category, d.price, d.id); //Crea objeto con valores unicos
        cards.push(card); //Almacena en un arreglo de objetos
    });

    return cards; //Retorna el arreglo de cards
}

function loadCards(data){
    if(data!= null){
        let cards = jsonToCard(data); // Convetimos de un objeto tipo JSON a uno tipo CARD.
        //console.log(cards[0].crearCard());

        insertCards(cards); // Inserta las cards en el HTML
    }
    else{
        console.log("sin elementos")
    }
    
}

function montoTotal(monto){
    let li = document.createElement("li");
    li.classList = 'list-group-item d-flex justify-content-between';

    let span = document.createElement("span");
    span.textContent="Total (MXM)";

    let strong = document.createElement("strong");
    strong.textContent=`$ ${monto}`;

    li.appendChild(span);
    li.appendChild(strong);

    return li; //regresamos el elemento.
}

/**
 * TODO: INSERTA LAS CARDS EL EL SEGMENTO QUE LAS VA A CONTENER
 * Agrega un hijo al id Card-group- correspondiente, esto lo hará de 3 columas
 * @param {*} cards 
 */
 function insertCards(cards){
    console.log("Entrando a insertarCards")
    let costoTotal=0;
    let contador = 0;
    let carrito = document.querySelector("#pagoTotal");
    cards.forEach(card => {
        carrito.appendChild(card.crearCard());
        costoTotal += card._precio;
        contador+=1
    });
    let articulos = document.querySelector("#numArts");
    articulos.textContent = contador;
    let total = montoTotal(costoTotal);
    carrito.appendChild(total);
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
     _imagen="";
     _nombre="";
     _descripcion="";
     _etiqueta="";
     _precio="";
     _id="";
 
     /**
      * Constructor, nos permite inicializar los valores de nuestro objeto en base a la información brindada por la API
      * @param {*} imagen Hace referencia al valor SRC que asignaremos a la etiqueta img posteriormente
      * @param {*} nombre Hace referencia al nombre del articulo
      * @param {*} descripcion Hace referencia a la breve descripción obtenida del articulo
      * @param {*} etiqueta Hace referencia a la etiqueta o categoria a la que pertenece el articulo
      * @param {*} id Hace referencia al id del articulo
      */
     constructor(imagen,nombre,descripcion,etiqueta,precio,id)
     {
         this._imagen=imagen;
         this._nombre=nombre;
         this._descripcion=descripcion;
         this._etiqueta=etiqueta;
         this._precio= precio;
         this._id=id;
     }
 
     /**Metodos Set's Permiten modificar los atributos privados del objeto (Les asigna valores)*/
     set imagen(value){this._imagen=value;}
     set nombre(value){this._nombre=value;}
         set descripcion(value){this._descripcion=value;}
     set etiqueta(value){this._etiqueta=value;}
 
     /**Metodos Get's permiten obtener información de los atributos del objeto */
     get imagen(){return this._imagen;}
     get nombre(){return this._nombre;}
     get descripcion(){return this._descripcion;}
     get etiqueta(){return this._etiqueta;}
 
     /**
      * Permite la creación de etiquetas necesarias para poder construir una Card basada en las clases de BootStrap 4.6
      * Además de permitir la automatización de las etiquetas, también permite automatizar la información en base a
      * los valores que tiene el objeto
      * @returns div Retorna una etiqueta div con todo el contenido basado en el objeto, incluidas las demás
      * etiquetas que contienen toda la información necesaria para describir el articulo.
      */
     crearCard()
     {
         let li = document.createElement("li");
         li.classList = 'list-group-item d-flex justify-content-between lh-condensed';
         
         let div1 = document.createElement("div");
         
         let h6= document.createElement("h6");
         h6.classList="my-0";
         h6.textContent = this._nombre.substring(0,20)+"...";

         let small=document.createElement("small");
         small.classList="text-muted";
         small.textContent=this._descripcion.substring(0,20)+"...";

         let span = document.createElement("span");
         span.classList="text-muted";
         span.textContent=`$ ${this._precio}`;

         div1.appendChild(h6);
         div1.appendChild(small);

         li.appendChild(div1);
         li.appendChild(span);

         return li; //regresamos el elemento.
     }
 }