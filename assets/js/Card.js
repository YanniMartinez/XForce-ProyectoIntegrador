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
    /*  Consumimos el API  y guardamos los valores en nuestros atributos*/
    getInfo(categoria){
        let data;
        switch (categoria) {
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
        console.log(data);


    }
    

    /**
     * Declaramos un método que permita actualizar el titulo.
     * @param {*} id Recibe como parametro el id de la etiqueta
     */
    modifTitle(id){
        let title = document.querySelector(id); //Enlazamos una variable con el id deseado
        title.textContent = this.#nombre; //Actualizamos el contenido de nuestro h2.
    }

    /**
     * Declaramos un método que permita actualizar La descripción
     * @param {*} id Recibe como parametro el id de la etiqueta
     */
    modifDescription(id){
        let description = document.querySelector(id); //Enlazamos una variable con el id deseado
        description.textContent = this.#descripcion; //Actualizamos el contenido de nuestro P
    }

    /**
     * Declaramos un método que permita actualizar el enlace de la Imagen
     * @param {*} id Recibe como parametro el id de la etiqueta
     */
    modifImg(id){
        let image = document.querySelector(id); //Enlazamos una variable con el id deseado
        image.src = this.#imagen; //Actualizamos el contenido de nuestra propiedad SRC de la imagen
    }

    /**
     * Declaración del método que permite actualizar el enlace del botón
     * @param {*} id Hace refencia al id de la etiqueta en este caso será el botón
     */
    modifButton(id){
        let enlace = document.querySelector(id); //Enlazamos una variable con el id deseado
        enlace.href = `descripcionArticulo.html?nombre=${this.#nombre}`;
    }

}

const Fuego = new Card("gamer");  //Creación de objeto tipo electrico
Fuego.getInfo("gamer") //Obtención de card arbitraria

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