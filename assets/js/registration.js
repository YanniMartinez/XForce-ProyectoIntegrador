const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre');
    const apellidos = document.querySelector('#apellidos');
    const username = document.querySelector('#username');
    const birthdate = document.querySelector('#birtdate');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

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
    .then(resp => console.log(resp.status, typeof(resp.status)))
    .then(data => console.log(data));



    // const request = new Request('http://localhost:8080/users/', 
    // { 
    //     method: 'POST', 
    //     body: `{
    //         "username": ${username.value},
    //         "password": ${password.value},
    //         "date": ${birthdate.value},
    //         "email": ${email.value},
    //         "name": ${nombre.value}
    //     }`
    // });
    // fetch(request)
    // .then(response => console.log(response))
    // .catch(error => console.error(error));
});