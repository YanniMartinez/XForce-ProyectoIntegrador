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
/**
 * TODO: FUNCION QUE CAPTURA LOS DATOS JSON    
 * */
function init(){
    let get=getGET();
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
