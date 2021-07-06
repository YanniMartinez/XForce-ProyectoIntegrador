document.body.onload = addElement;

/* function addElement () {
  
  var newDiv = document.createElement("div");//Crea un div
  newDiv.classList.add("card"); //Le añade una clase
  newDiv.style.height = "18rem"; //Le añade el estilo para la altura

  var newImg =  document.createElement("img"); 
  newImg.classList.add("card-img-top"); 
  //newImg.height=300;

    var newDiv2 = document.createElement("div");
    newDiv2.classList.add("card-body"); //Le añade una clase

      var h5 = document.createElement("h5");
      h5.classList.add("card-title");

      var p = document.createElement("p");
      p.classList.add("card-text");

      var a = document.createElement("a");
      a.href = "#";
      a.classList.add("btn","btn-primary");

    h5.textContent = "H5 dentro del div2";
    p.textContent = "Parrafo dentro del div2";
    a.textContent = "Presiona aqui (dentro del div2)";
    //Agregando hijos en el Div2
    newDiv2.appendChild(h5); 
    newDiv2.appendChild(p); 
    newDiv2.appendChild(a); 

  newImg.src = "https://static.wikia.nocookie.net/zelda/images/2/26/Link_Artwork_LAR.png/revision/latest?cb=20191015020845&path-prefix=es"
  newDiv.appendChild(newImg); //añade texto al div creado.
  newDiv.appendChild(newDiv2);

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
} */

/* ELEMENTOS DINÁMICOS */
function addElement (categoria) {
  console.log(categoria)
    fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
    .then(data => data.json())
    .then(data => {
        console.log(data)
        data.forEach(element => { /* Recorre el arreglo */

          var newDiv = document.createElement("div");//Crea un div
          newDiv.classList.add("card"); //Le añade una clase
          newDiv.style.height = "18rem"; //Le añade el estilo para la altura

          var newImg =  document.createElement("img"); 
          newImg.classList.add("card-img-top"); 
          //newImg.height=300;

            var newDiv2 = document.createElement("div");
            newDiv2.classList.add("card-body"); //Le añade una clase

              var h5 = document.createElement("h5");
              h5.classList.add("card-title");

              var p = document.createElement("p");
              p.classList.add("card-text");

              var a = document.createElement("a");
              a.href = "#";
              a.classList.add("btn","btn-primary");

            h5.textContent = element.name;
            p.textContent = element.abilities[1];
            a.textContent = "Comprar";
            //Agregando hijos en el Div2
            newDiv2.appendChild(h5); 
            newDiv2.appendChild(p); 
            newDiv2.appendChild(a); 

          newImg.src = element.img;
          newDiv.appendChild(newImg); //añade texto al div creado.
          newDiv.appendChild(newDiv2);

          // añade el elemento creado y su contenido al DOM
          var currentDiv = document.getElementById("div1");
          document.body.insertBefore(newDiv, currentDiv);
        });

    }).catch(e => console.log(e));

}

let button=document.querySelector('#button'); //Relacionando con el botón.
button.addEventListener('click', event => {
    //Llamamos a nuestra funcion mian
    
    addElement("water");
    //const Agua = new Card("water"); 
    //Agua.getInfo();

})