/**
 * TODO: FUNCION QUE CAPTURA LOS GET EN VIADOS POR URL
 * @returns La respuesta Get como una clase con atributos que contienen los mensajes Get
 */
function getGET() {
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0) {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1]; // divide la cadena por cada '?' y toma sola la peticion del get
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&'); // divide la cadena por cada '&'
        var get = {}; // Crea un array que contendra el diccionario
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('='); // divide la cadena por cada '='
            get[tmp[0]] = unescape(decodeURI(tmp[1])); // Lo agrda a un diccionario
        }
        return get; // retorna el diccionario
    }
}
let get=getGET();
/**
 * TODO: FUNCION QUE CAPTURA LOS DATOS JSON    
 * */
function init(){
    console.log(get);
    fetch(`http://localhost:8080/article/${get.id}`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
        //Definimos varibles para obtener el tipo de dato que colocaremos en los id(#identificador)
        let descripcion=document.querySelector("#descripcion")
        descripcion.textContent=data.description;
        let imagen1=document.querySelector("#img1")
        imagen1.src=data.img1;
        let imagen2=document.querySelector("#img2")
        imagen2.src=data.img2;
        let imagen3=document.querySelector("#img3")
        imagen3.src=data.img3;
        let imagen4=document.querySelector("#img4")     
        imagen4.src=data.img4;
        let nombre=document.querySelector("#name")
        nombre.textContent=data.name;
        let precio=document.querySelector("#price")
        price.textContent =data.price;
    });
}
//es el metodo que siempre se llama antes de la primera vez que se llama al método de inicio
init();

// es la funcion para el funcionamiento del zoom en las cards
$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

document.querySelector("#agregar-carrito").addEventListener('click', e =>{
    token = localStorage.getItem('token');
    console.log(token);
    if(token !=  null){
        fetch('http://localhost:8080/articles-cart/', {
            method: 'POST',
            body: JSON.stringify({
                id: get.id
            }),
            headers: {
                'content-type': 'application/json',
                'Authorization': `${token}`
            }
        }).then(resp => resp.text())
        .then(data => console.log(data));
    } else{
        alert("inicia sesión o registrate");    
    }
});

document.querySelector("#comprar-ahora").addEventListener('click', e =>{
    location.href = `pago.html?id=${get.id}`;
<<<<<<< HEAD
});
=======
});
>>>>>>> bea7deea6197f623e6e38646563da552273cdae9
