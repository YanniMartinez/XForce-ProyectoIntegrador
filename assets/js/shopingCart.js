//Obtiene el token en caso de que exista en el localStorage
token = localStorage.getItem('token');

if(!token){//Si no hay token no le permite acceder a funcionalidades del carrito
    console.log("Para acceder a funcionalidades de carrito porfaovr inicie sesión");
}
else{

}

let elements = localStorage.length();

function loadCard(id){
    fetch(`https//localhost:8080/article/${id}`)
    .then(resp => resp.json())
    .then(data => {
        let cards = jsonToCard(data);
        console.log(cards);
        insertCards(cards);
    });
}
//  /article/{id}
