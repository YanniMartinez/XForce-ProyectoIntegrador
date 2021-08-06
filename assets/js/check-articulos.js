/**
 * Clase Check, su principal funcionamiento radica en poder conectar las categorias contenidas en el side bar
 * y ser creadas de forma dinámica en base a un arreglo dinámico de momento, más adelante estarán definidas por las
 * categorias de todos y cada uno de las etiquetas que tengan los articulos de nuestra plataforma
 */
class Check
{
    //Declaración de ATRIBUTOS privados
    #nombre="";
    _cantidad="";

    /**
     * Permite inicializar el objeto con un nombre que recibe
     * @param {*} nombre Hace referencia al nombre de la categoria
     */
    constructor(nombre)
    {
        this.#nombre=nombre;
    }

    //Método SET permite establecer un valor al atributo
    set nombre(value){this.#nombre=value;}
    
    //Método GET permite obtener el valor de un atributo del objeto
    get nombre(){return this.#nombre;}
    
    /**
     * Método crear categorias, como su nombre lo dice, se encarga de generar categorias
     * de formá automática en función de una lista de posibilidades. Todo esto se ve representado
     * en la SideBar correspondiente a ello.
     * @param {*} i Hace referencia al indice de la lista de posibilidades de categorias que ofrece la plataforma
     * @returns div Retorna un elemento dinámico con información unica referente a la categoria de articulo
     */
    crearCategorias(i)
    {

        let div2=document.createElement("div") //Creación de una etiqueta Div
        div2.classList="form-check"; //Asignación de clases

        let input=document.createElement("input"); //Creación de una etiqueta input
        input.classList="form-check-input position-static";  //Asignación de clases
        input.type="checkbox"; //Asigna que es un tipo Checkbox
        input.id="blankCheckbox"+i; //Asignación de id dinámico a partir del indice recibido
        input.value=this.#nombre; //Asignación de información única.
        

        let label=document.createElement("label"); //Creación de una etiqueta label
        label.classList="form-check-label";  //Asignación de clases
        label.for="blankCheckbox"; //Hace referencia de que input corresponde

        //Esto simplemente hace que la palabra inicie con una letra Mayuscula y se vea bonito
        label.textContent=  this.#nombre.charAt(0).toUpperCase() + this.#nombre.slice(1);

        //Inserción de hijos
        div2.appendChild(input);
        div2.appendChild(label);
        
        //Retorna un elemento dinámico con información unica
        return div2;

    }
    
}

/**
 * Como su nombre lo dice, se encarga de insertar categorias de forma dinámica en el sideBar
 * @param {*} categorias Hace referencia a la lista de categorias disponibles en la plataforma
 */
function insertarCategorias(categorias){
    let p=document.querySelector("#categoriaslat"); //Relaciona con el ID indicado
    categorias.forEach((check,i) => { //Recorre todos los elementos y además obtiene el indice
        p.appendChild(check.crearCategorias(i)); //Manda a llamar al método que crea categorias de forma dinámica
    });
}

let checks=[]; //Declaración de un arreglo vacio, donde almacenaremos todos los objetos check a plasmar en el front

/**
 * Declaración de lista de categorias.
 * Para cada uno de los elementos se crea un objeto check y este es almacenado en el arreglo vacio de la parte superior
 */


function init(){
    fetch(`http://localhost:8080/article/categories`,{
        headers: {
            'content-type': 'application/json'
        }
    }).then(resp => resp.json())
    .then(data => {
        let array = []
        data.forEach(d => {
            array.push(d.split(',')[0] + ` (${d.split(',')[1]})`);
        });
        array.forEach(element => {
            let checkbox=new Check(element);
            checks.push(checkbox);
        });
        console.log(array);
        insertarCategorias(checks); 
    })
}

init();
//Manda a llamar a la automatización de Categorias tipo checkbox
