/**
 * Es la función general encargada de hacer todo el proceso.
 * @param id es el id del elemento que modificará del HTML. 
 */
function main(id){

    var integrantes = ["Fernando joel","Jaquelin","Miguel Alexis","Luz","Uriel","Yanni"];
    let posición = random(0,integrantes.length);
    console.log(`El lider asignado en esta ocasión será: ${integrantes[posición]}`);

    const lider=document.querySelector(id);
    lider.textContent = `El lider asignado hoy será: ${integrantes[posición]}`;
}

/**
 * Permite calcular un valor de manera aleatoria entre un rango dado. 
 * @param min Hace referencia al extremo inferior
 * @param max Hace referencia al extremo superior
 * @returns npumero entero aleatorio: hace referencia al número aleatorio comprendido entre ese rango.
 * */ 
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Evento vinculado con el botón de asignación de lider.
 * @param click indica el evento que ejecutará.
 * @param function indica las acciones a realizar cuando ocurra el evento
 */
let button=document.querySelector('#button1'); //Relacionando con el botón.
button.addEventListener('click', event => {
    //Llamamos a nuestra funcion mian
    main("#nuevoLider");

})

