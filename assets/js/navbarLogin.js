//Obtiene el token en caso de que exista en el localStorage
token = localStorage.getItem('token');

if(!token){//Si no hay token no le permite acceder a funcionalidades del carrito
   
}
else{
    /** Obtiene los valores del usuario que ha iniciado sesión */
    fetch(`http://localhost:8080/user/auth`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `${token}`
        }
    }).then(resp => resp.json())
    .then(data => {
        // variable de tipo div para ontener el valor por medio de su id
        let div=document.querySelector('#nombre');
        //Creo un elemento de tipo parrafo
        let nombre=document.createElement('p');
        //Agrego el nombre obtenido del fetch al elemento nombre
        nombre.textContent=data.name;
        //Agrego la clase para colocar el color blanco al nombre
        nombre.classList.add('text-white');
        //Agrego el valor al div que obtuve de nombre
        div.appendChild(nombre);
        //console.log(data.name);
    }) 
}





