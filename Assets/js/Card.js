<<<<<<< HEAD
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
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${this.sticker}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
        .then(data => data.json())
        .then(data => {
            //console.log(data[0]); Sólo para comprobar que si nos devuelve la info
            /* Cuando son nombres significa que son atributos y se usa el .
            Cuando son numeros significa que son arreglos y van entre [] */
            this.name = data[0].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[0].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[0].img; //Almancenamos el url en nuestro atributo img
            
            this.modifTitle("#titulo");
            this.modifDescription("#descripcion");
            
            this.modifImg("#imagen");
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

/* Probando */
const Pikachu = new Card("pikachu"); //Declaramos un objeto tipo card y le mandamos como etiqueta "pikachu", esto de forma más profesional puede ser la categoria general como "hombre, mujer, etc".
Pikachu.getInfo();
=======
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
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${this.sticker}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
        .then(data => data.json())
        .then(data => {
            //console.log(data[0]); Sólo para comprobar que si nos devuelve la info
            /* Cuando son nombres significa que son atributos y se usa el .
            Cuando son numeros significa que son arreglos y van entre [] */
            this.name = data[0].name; //En este paso agregamos el valor del nombre del pokemon en nuestro atributo nombre
            this.description = data[0].abilities[1]; //Asignamos una habilidad a nuestra descripción
            this.img = data[0].img; //Almancenamos el url en nuestro atributo img
            
            this.modifTitle("#titulo");
            this.modifDescription("#descripcion");
            
            this.modifImg("#imagen");
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

/* Probando */
const Pikachu = new Card("pikachu"); //Declaramos un objeto tipo card y le mandamos como etiqueta "pikachu", esto de forma más profesional puede ser la categoria general como "hombre, mujer, etc".
Pikachu.getInfo();
>>>>>>> ed07261b14a95b2f00b3b78095b914d438ff3cfc
