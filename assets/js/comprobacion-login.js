const formLogin = document.querySelector("#formLogin");

/**
 * Permite validar si un correo electrónico está bien estructurado o no.
 * @param {*} email Recibe la cadena con la que hará la comprobación del correo electrónico
 */
function validarEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        return true;
    } else {
        return false;
    }
}

formLogin.addEventListener("submit", (e) =>{

    //Si no lo ponemos entonces manda una peticion get con valores vacios
    e.preventDefault(); //NEcesito que te detengas y no ejecutes lo que debes hacer
    //Evitará mandar algo como /apiJava.html?email=""&password=""
    console.log(e);

    /* Le estará pidiendo que verifique sus datos hasta que ingrese un email correcto*/
  
        //Referenciando a elementos mediante su ID.
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");

        const emailError = document.querySelector("#emailError");
        const passwordError = document.querySelector("#passwordError");

        /* IF's por si existe se mandaron los campos vacios: */
        if(email.value == ''){
            emailError.textContent = "Este campo es necesario";
        }

        if(password.value == ''){
            passwordError.textContent = "Este campo es necesario";
        }
  
    
    //Si el Email es correcto entonces 

    //Si existen valores entonces puede hacer el fetch
    if( email.value != "" && password.value!="" ){
        //Como debemos hacer una peticion post debemos poner cosas despues del URL
        let req = fetch("http://localhost:8080/login",{
            method : 'POST',
            //Aquí iría todo lo referente al contenido como en el POST-Man
            //El JSON.stringify convierte el JSON a cadena para mandarlo
            body: JSON.stringify({
                //Valoresque enviará
                username: email.value,
                password: password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( resp => {
            token = resp.headers.get('Authorization');
            console.log(token);
            //Si la respuesta contiene el Bearear entonces si es un token valido
            if(token && token.includes('Bearer')){
                console.log(token);
                //Almacena en el local storage
                localStorage.setItem('token',token);
                //Obteniendo url en donde estamos situados
                url = window.location;
                console.log(url); //imprime la localizacion en la que estamos ubicados

                //Construyendo nuestro path, es decir la ruta en donde estamos
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
                //El substring hace un recorte del texto, va del inicio hasta el ultimo "/" y devolverá ese indice

                //Lo redireccionamos a la otra pagina
                location.href= path + "profile.html";
            }
            else{
                //Indica que los datos son incorrectos
                emailError.textContent = "Usuario o contraseña incorrecta";

                //Removiendo del local storage
                localStorage.removeItem('token');
            }
        })
    }
})