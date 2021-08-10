let carritoElemento = document.querySelector("#carrito");

carritoElemento.addEventListener('click', event => {
    //Obtiene el token en caso de que exista en el localStorage
    token = localStorage.getItem('token');

    if(!token){//Si no hay token no le permite acceder a funcionalidades del carrito
        alert('Para acceder a funcionalidades de carrito porfavor inicie sesión');
        carritoVacio();
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
});


/* Crea carrito vacio */
function carritoVacio(){
    let carritoVacio = document.querySelector("#carrito2");

    let boton = document.createElement("a");
    boton.classList="dropdown-item";

    let item = document.createElement("span")
    item.classList="item";
    item.textContent = "Presione aquí para iniciar sesión";

    let login = document.createElement("a");
    login.classList="btn btn-light";
    login.href="login.html";

    item.appendChild(login);
    boton.appendChild(item);
    carritoVacio.appendChild(boton);
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

function botonDetalles(){
    let div = document.createElement("div");
    div.classList="dropdown-divider";
    let a = document.createElement("a");
    a.classList="dropdown-item text-center";
    a.href = "pago.html"
    a.textContent="Ver Detalles"

    div.appendChild(a);
    return div;
}
/**
 * TODO: INSERTA LAS CARDS EL EL SEGMENTO QUE LAS VA A CONTENER
 * Agrega un hijo al id Card-group- correspondiente, esto lo hará de 3 columas
 * @param {*} cards 
 */
 function insertCards(cards){
    console.log("Entrando a insertarCards")
    let carrito = document.querySelector("#carrito2");
    cards.forEach(card => {
        carrito.appendChild(card.crearCard());
    });
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
         let a1 = document.createElement("a");
         a1.classList = 'dropdown-item';
         a1.href="#";
 
         let span1 = document.createElement("span"); //Contenedor de la card.
         span1.classList="item" ;

         let span2 = document.createElement("span"); //Contenedor de la card.
         span2.classList="item-left" ;
 
         let img = document.createElement("img"); // Contenedor de la imagen
         img.src = this._imagen;
         img.width="50";
         img.height="50";
 
         let span3=document.createElement("span");  //Imagen, se asigna la dirección de la imagen obtenida del API.
         span3.classList="item-info";

         let span4=document.createElement("span");  //Imagen, se asigna la dirección de la imagen obtenida del API.
         span4.textContent=this._nombre;

         let span5=document.createElement("span");  //Imagen, se asigna la dirección de la imagen obtenida del API.
         span5.textContent="$"+this._precio;
 
         let span6=document.createElement("span");  //Imagen, se asigna la dirección de la imagen obtenida del API.
         span6.classList="item-right";
         span6.style.marginLeft="15px";

         let boton1=document.createElement("button");
         boton1.textContent="X";
         boton1.classList="btn btn-xs btn-danger pull-right";

         let divisor = document.createElement("div");
         divisor.classList="dropdown-divider";

         span6.appendChild(boton1); /* span6 -> boton1 */
         span3.appendChild(span4); /* span3 -> span4, span5 */
         span3.appendChild(span5);
         span2.appendChild(img);  /* span2 -> img, span3 */
         span2.appendChild(span3);
         span1.appendChild(span2); /* span1 -> span2, span6 */
         span1.appendChild(span6);
         a1.appendChild(span1);  /* a1->span1 */
         a1.appendChild(divisor);

         return a1; //regresamos el elemento.
     }
 }
/**
 * TODO: Consulta para obtener info del usuario mediante token
 * 
    fetch(`http://localhost:8080/user/auth`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data => {
        console.log(data);
    }) 
 */