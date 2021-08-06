/**
 * TODO: FUNCON QUE CAPTURA LOS GET EN VIADOS POR URL
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

function init(){
    let get=getGET();
    console.log(get);

}
init();
/*
contructor(id,category,description, img1,img2,img3,img4,name, price,stock)

 get  articles(id){
      this.id;
      this.category;
      this.description,
      this.img1;
      this.img2;
      this.img3;
      this.img4;
      this.name;
      this.price;
      this.stock;

 }


var description= document.querySelector('#description')
    function traer(){
    fetch(`https://localhost:3306/xcommerce/{id}/`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data.Idarticulo[0].description)
    });
var description= document.querySelector('#price')
    function traer(){
    fetch(`https://localhost:3306/xcommerce/articles/category/${id}/`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data.Idarticulo[0].price)
    });
var description= document.querySelector('#img1')
    function traer(){
    fetch(`https://localhost:3306/xcommerce/articles/category/${id}/`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data.Idarticulo['0'].img1)
        description.innerHTML=
        <img src="${data.Idarticulo['0'].img1.large}" whith=100px >
    });
var description= document.querySelector('#img2')
    function traer(){
    fetch(`https://localhost:3306/xcommerce/articles/category/${id}/`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data.Idarticulo[0].img2)
    });
var description= document.querySelector('#img3')
    function traer(){
    fetch(`https://localhost:3306/xcommerce/articles/category/${id}/`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data.Idarticulo[0].img3)
    });
    var description= document.querySelector('#img4')
        function traer(){
        fetch(`https://localhost:3306/xcommerce/articles/category/${id}/`)
        .then(data=>data.json())
        .then(data=>{
            console.log(data.Idarticulo[0].img4)
        });
   
    var description= document.querySelector('name')
        function traer(){
        fetch(`https://localhost:3306/xcommerce/articles/category/${id}/`)
        .then(data=>data.json())
        .then(data=>{
            console.log(data.Idarticulo[0].name)
        });

    }
        
*/