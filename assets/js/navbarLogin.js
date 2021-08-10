
function agregarUsuario(){
    //Obtiene el token en caso de que exista en el localStorage
let token = localStorage.getItem('token');


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
}


//Creamos nuestro arreglo para lo que se muestra si no hay token
const listPerfil = [
    {
        title: "Inicia Sesión",
        href: "login.html"
    },
    {
        title: "Registrate",
        href: "registration.html"
    },
];


//Creamos nuestro arreglo para lo que se muestra si  hay token
const listPerfil2 = [
    {
        title: "Cerrar sesión",
        href: "login.html"
    },
    {
        title: "Perfil",
        href: "profile.html"
    },
];


function displayList(lists){
    let list = document.querySelector('#menuPerfil');
    
    lists.forEach(l => {
       
        const item=document.createElement('a');
        item.textContent=l.title;
        item.href=l.href;
        if(l.title=="Cerrar sesión"){
        item.id="logout";
        }
        item.classList.add('dropdown-item');
        list.appendChild(item);
        console.log(list);
    })
}

function agregarlist(){
    let token = localStorage.getItem('token');
    if(!token){//Si no hay token pinta el primer arreglo
    
        displayList(listPerfil);
            
        
        
        }
        else{
        displayList(listPerfil2 );
        }
        
}

/* */
function init(){
 agregarUsuario();
 agregarlist();
}

init();







