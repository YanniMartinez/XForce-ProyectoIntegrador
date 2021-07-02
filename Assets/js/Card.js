//alert("Hola mundo");
class Card{
    name = "";
    sticker = "";
    description = "";
    img = "";
    
    /**
     * 
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
            //console.log(data[0]); Sólo para comprobar que si nos devuelve la info
            /* Cuando son nombres significa que son atributos y se usa el .
            Cuando son numeros significa que son arreglos y van entre [] */
           
            var aleatoria = Math.floor(Math.random() * (data.length - 0) + 0);
            

            this.name = data[aleatoria].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[aleatoria].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[aleatoria].img; //Almancenamos el url en nuestro atributo img
            this.modifTitle("#titulo");
            this.modifDescription("#descripcion");
            this.modifImg("#imagen");

            aleatoria = Math.floor(Math.random() * (data.length - 0) + 0);

            this.name = data[aleatoria].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[aleatoria].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[aleatoria].img; //Almancenamos el url en nuestro atributo img
            this.modifTitle("#titulo2");
            this.modifDescription("#descripcion2");
            this.modifImg("#imagen2");

            aleatoria = Math.floor(Math.random() * (data.length - 0) + 0);
            
            this.name = data[aleatoria].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[aleatoria].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[aleatoria].img; //Almancenamos el url en nuestro atributo img
            this.modifTitle("#titulo3");
            this.modifDescription("#descripcion3");
            this.modifImg("#imagen3");
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

}

const Fuego = new Card("electric"); 
Fuego.getInfo()

/* Probando */    
/*const Pikachu = new Card("pikachu"); //Declaramos un objeto tipo card y le mandamos como etiqueta "pikachu", esto de forma más profesional puede ser la categoria general como "hombre, mujer, etc".
Pikachu.getInfo();*/

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