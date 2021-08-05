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

            let url = window.location;
            let path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
            location.href = path + 'login.html';
        }
        /**
         *  Si no da una alerta de que la informacion no fue valida y que lo vuelva a intentar.
         */ 
        else{
            alert('Datos invalidos intenta de nuevo');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
});