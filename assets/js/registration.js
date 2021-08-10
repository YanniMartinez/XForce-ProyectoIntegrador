const loginForm = document.querySelector('#login-form'); // Conectamos con el form

/**
 * Si el form es SUBMIT, se ejecuta el siguiente algoritmo
 */
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el dormulario ejecute el codigo por default

    const nombre = document.querySelector('#nombre'); // Conectamos con nombres
    const apellidos = document.querySelector('#apellidos'); // Conectamos con Apellidos
    const username = document.querySelector('#username'); // Conectamos con username
    const birthdate = document.querySelector('#birtdate'); // Conectamos con birthdate
    const email = document.querySelector('#email'); // Conectamos con email
    const password = document.querySelector('#password'); // Conectamos con password
    let idUser=0;
    /**
     * Sehace la petición fetch a la api por me método POST y se segura que lo que recibe es 
     * contenido tipo json
     */
    fetch('http://localhost:8080/users/', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            date: birthdate.value,
            email: email.value,
            name: nombre.value
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(resp => {
        /**
         * Si la respuesta es Ok, se envia una alerta del estado satisfactorio al ususario
         * y se redirige la pagina a inicio se sesión.
         */

        if (resp.status == 200){
             alert('Usuario Registrado. Ahora Inicia sesión'); 

            
        }
        /**
         *  Si no da una alerta de que la informacion no fue valida y que lo vuelva a intentar.
         */ 
        else{
            alert('Datos invalidos intenta de nuevo');
        }
        return resp.json()
    })
    .then(data => {
        /* Manda a crear un carrito UNICO para el usuario recién creado */
        fetch(`http://localhost:8080/shoppingcard/`,{
            method: 'POST',
            body: JSON.stringify({
                lot: 1,
                usuario: { id : data.id }
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(resp2 => resp2.json())
        .then(data2 => {
            let url = window.location;
            let path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
            location.href = path + 'login.html';
        })
    })
    .catch(error => console.log(error));

});