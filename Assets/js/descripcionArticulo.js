document.body.onload = addElement;

function addElement (categoria) {
    console.log(categoria)
      fetch(`https://workshop-mongo.herokuapp.com/pokemon/types/${categoria}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
      .then(data => data.json())
      .then(data => {

            var newDiv = document.createElement("div");//Crea un div
            newDiv.classList="card p-3  border-0"; //Le añade una clase
           // newDiv.style.height = "18rem"; //Le añade el estilo para la altura
  
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
  
              h5.textContent = data[0].name;
              p.textContent = data[0].abilities[1];
              a.textContent = "Comprar";
              //Agregando hijos en el Div2
              newDiv2.appendChild(h5); 
              newDiv2.appendChild(p); 
              newDiv2.appendChild(a); 
  
            newImg.src = data[0].img;
            newDiv.appendChild(newImg); //añade texto al div creado.
            newDiv.appendChild(newDiv2);
  
            // añade el elemento creado y su contenido al DOM
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
  
      }).catch(e => console.log(e));
  
  }
  
  let button=document.querySelector('#button'); //Relacionando con el botón.
  button.addEventListener('click', event => {
      //Llamamos a nuestra funcion mian
      
      addElement("water");
      //const Agua = new Card("water"); 
      //Agua.getInfo();
  
  })