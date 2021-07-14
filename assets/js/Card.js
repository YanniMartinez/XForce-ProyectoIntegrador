/**
 * Clase Card, como su nombre lo dice, está destinada a ser la que represente lo mejor posible una card
 * contiene atributos como:
 * Imagen, nombre, descripción y etiqueta
 * Permitiendonos abstraer lo máximo posible el objeto y así poder darle diversas utilidades cuando trabajemos
 * con cualquier API, el motivo de declararla es automatizar procesos como la creación de cards de manera dinámica
 * en base a la API que consumamos.
 */
class Card{

     /**Declaración de ATRIBUTOS  */
    name = "";
    sticker = "";
    description = "";
    img = "";
    
    /**
     * Se encarga de inicializar al objeto
     * @param {*} etiqueta Hace referencia a la categoria del elemento.
     */
    constructor(etiqueta){
        this.sticker = etiqueta;
    }

    /*  Consumimos el API  y guardamos los valores en nuestros atributos*/
    getInfo(){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${this.sticker}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
        .then(data => data.json())
        .then(data => {
            
            /* Cuando son nombres significa que son atributos y se usa el .
            Cuando son numeros significa que son arreglos y van entre [] */
            var aleatoria = Math.floor(Math.random() * (data.length - 0) + 0); //Obtenemos un número aleatorio de 0 hasta el número de elementos que retornó la API
            

            this.name = data[aleatoria].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[aleatoria].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[aleatoria].img; //Almancenamos el url en nuestro atributo img
            this.modifTitle("#titulo"); //Modificando el titulo
            this.modifDescription("#descripcion"); //Modificando la descripción
            this.modifImg("#imagen"); //Modificando el id imagen
            this.modifButton("#popular1");

            //Los siguientes 2 casos son una reutirlización de código:
            aleatoria = Math.floor(Math.random() * (data.length - 0) + 0);

            this.name = data[aleatoria].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[aleatoria].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[aleatoria].img; //Almancenamos el url en nuestro atributo img
            this.modifTitle("#titulo2");
            this.modifDescription("#descripcion2");
            this.modifImg("#imagen2");
            this.modifButton("#popular2");

            aleatoria = Math.floor(Math.random() * (data.length - 0) + 0);
            
            this.name = data[aleatoria].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[aleatoria].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[aleatoria].img; //Almancenamos el url en nuestro atributo img
            this.modifTitle("#titulo3");
            this.modifDescription("#descripcion3");
            this.modifImg("#imagen3");
            this.modifButton("#popular3");
        }).catch(e => console.log(e));
        
            
    }
    

    /**
     * Declaramos un método que permita actualizar el titulo.
     * @param {*} id Recibe como parametro el id de la etiqueta
     */
    modifTitle(id){
        let title = document.querySelector(id); //Enlazamos una variable con el id deseado
        title.textContent = this.name; //Actualizamos el contenido de nuestro h2.
    }

    /**
     * Declaramos un método que permita actualizar La descripción
     * @param {*} id Recibe como parametro el id de la etiqueta
     */
    modifDescription(id){
        let description = document.querySelector(id); //Enlazamos una variable con el id deseado
        description.textContent = this.description; //Actualizamos el contenido de nuestro P
    }

    /**
     * Declaramos un método que permita actualizar el enlace de la Imagen
     * @param {*} id Recibe como parametro el id de la etiqueta
     */
    modifImg(id){
        let image = document.querySelector(id); //Enlazamos una variable con el id deseado
        image.src = this.img; //Actualizamos el contenido de nuestra propiedad SRC de la imagen
    }

    /**
     * Declaración del método que permite actualizar el enlace del botón
     * @param {*} id Hace refencia al id de la etiqueta en este caso será el botón
     */
    modifButton(id){
        let enlace = document.querySelector(id); //Enlazamos una variable con el id deseado
        enlace.href = `descripcionArticulo.html?nombre=${this.name}`;
    }

}

const Fuego = new Card("electric");  //Creación de objeto tipo electrico
Fuego.getInfo() //Obtención de card arbitraria

/* Probando */    
/*const Pikachu = new Card("pikachu"); //Declaramos un objeto tipo card y le mandamos como etiqueta "pikachu", esto de forma más profesional puede ser la categoria general como "hombre, mujer, etc".
Pikachu.getInfo();*/

/**
 * Relación de botones de de categorias destacadas con contenido dinámico acorde a la etiqueta
 */

let button=document.querySelector('#Agua'); //Relacionando con el botón.
button.addEventListener('click', event => {
    //Llamamos a nuestra funcion mian
    
    const Agua = new Card("water"); 
    Agua.getInfo();

})

let button1=document.querySelector('#Fuego'); //Relacionando con el botón.
button1.addEventListener('click', event => {
    //Llamamos a nuestra funcion mian
    
    const Fuego = new Card("fire"); 
    Fuego.getInfo()
    
})

let button2=document.querySelector('#Hierva'); //Relacionando con el botón.
button2.addEventListener('click', event => {
    //Llamamos a nuestra funcion mian
    
    const Hierva = new Card("grass"); 
    Hierva.getInfo()

})