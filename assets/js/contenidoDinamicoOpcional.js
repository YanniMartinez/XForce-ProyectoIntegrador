document.body.onload = addElement; //Hace una ejecución en cuanto carga el documento

/** ELEMENTOS DINÁMICOS
 * Es un esboso de como podemos crear cards de forma dinámica en función del consumo de la API
*/
function addElement (categoria) {
  //Realizando el consumo de la API
    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
    .then(data => data.json())
    .then(data => {
        console.log(data)
        data.forEach(element => { /* Recorre el arreglo de información proporcionado por el API */

          var newDiv = document.createElement("div");//Crea un div
          newDiv.classList.add("card"); //Le añade una clase
          newDiv.style.height = "18rem"; //Le añade el estilo para la altura

          var newImg =  document.createElement("img"); 
          newImg.classList.add("card-img-top"); 
          //newImg.height=300;

            var newDiv2 = document.createElement("div"); //Crea una etiqueta div
            newDiv2.classList.add("card-body"); //Le añade una clase

              var h5 = document.createElement("h5");
              h5.classList.add("card-title"); //Asigna clases

              var p = document.createElement("p"); //Crea una etiqueta
              p.classList.add("card-text"); //asigna una clase

              var a = document.createElement("a");//Crea una etiqueta
              a.href = "#"; //Asigna una refencia vaica
              a.classList.add("btn","btn-primary"); //asigna una clase

            h5.textContent = element.name; //Asigna un valor dinámico en función del articulo
            p.textContent = element.abilities[1];//Asigna un valor dinámico en función del articulo
            a.textContent = "Comprar";//Asigna un valor arbitario
            
            //Agregando hijos en el Div2
            newDiv2.appendChild(h5); 
            newDiv2.appendChild(p); 
            newDiv2.appendChild(a); 

          newImg.src = element.img; //Asignando url de la imagen
          newDiv.appendChild(newImg); //añade texto al div creado.
          newDiv.appendChild(newDiv2); //Asignando hijo al div1

          // añade el elemento creado y su contenido al DOM
          var currentDiv = document.getElementById("div1");
          document.body.insertBefore(newDiv, currentDiv);
        });

    }).catch(e => console.log(e)); //Excepción por si alguna razón falla el proceso

}

/**
 * Relacionando con el evento de presionar el botón
 */
let button=document.querySelector('#button'); //Relacionando con el botón.
button.addEventListener('click', event => {
    //Llamamos a nuestra funcion main
    addElement("water");
    //const Agua = new Card("water"); 
    //Agua.getInfo();

})