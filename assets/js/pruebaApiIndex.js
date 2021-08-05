alert("hola");

let titulo = document.querySelector("#titulo");
let imagen = document.querySelector("#imagenPrueba");
let req = fetch("http://localhost:8080/article/category?tag=gamer")
.then( resp => resp.json())
.then( data => {
    console.log(data[13].name);
    titulo.textContent = data[13].name;

    imagen.src = data[13].img1;
})