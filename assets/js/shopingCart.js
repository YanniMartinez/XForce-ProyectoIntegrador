//Obtiene el token en caso de que exista en el localStorage
token = localStorage.getItem('token');

if(!token){//Si no hay token no le permite acceder a funcionalidades del carrito
    alert('Para acceder a funcionalidades de carrito porfaovr inicie sesión');

    let url = window.location;
    let path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
    location.href = path + 'login.html';
}
else{
    /** Obtiene los valores del carrito en función del carrito asignado */
    fetch(`http://localhost:8080/cartbytoken`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data => {
        console.log(data);
    }) 
}


/**
 * TODO: Consulta para obtener info del usuario mediante token
 * 
    fetch(`http://localhost:8080/user/auth`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data => {
<<<<<<< HEAD
        let cards = jsonToCard(data);
        console.log(cards);
        insertCards(cards);
    });
}
//  /article/{id}
    alert('Para acceder a funcionalidades de carrito porfaovr inicie sesión');

    let url = window.location;
    let path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
    location.href = path + 'login.html';
}
else{
    /** Obtiene los valores del carrito en función del carrito asignado */
    fetch(`http://localhost:8080/cartbytoken`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data => {
        console.log(data);
    }) 
}


/**
 * TODO: Consulta para obtener info del usuario mediante token
 * 
    fetch(`http://localhost:8080/user/auth`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data => {
        console.log(data);
    }) 
 */
=======
        console.log(data);
    }) 
 */
>>>>>>> bea7deea6197f623e6e38646563da552273cdae9
