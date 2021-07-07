//Clase para el objeto tarjeta
class Check
{
    
    #nombre="";
    #etiqueta="";

    constructor(nombre)
    {
        this.#nombre=nombre;

    }

    //Siver para poner los valores a los atributos principales del objeto
    
    set nombre(value){this.#nombre=value;}
    

    //Obtenemos los valores
    get nombre(){return this.#nombre;}
    

    /**
     *  <div class="col-sm-3" >
     * <div class="form-check">
                        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="Arts">
                        <label class="form-check-label" for="blankCheckbox">
                            Art & Design
                        </label>
                    </div>
     */

    crearCategorias(i)
    {
        


        let div2=document.createElement("div")
        div2.classList="form-check";

        let input=document.createElement("input");
        input.classList="form-check-input position-static";
        input.type="checkbox";
        input.id="blankCheckbox"+i;
        input.value=this.#nombre;
        

        let label=document.createElement("label");
        label.classList="form-check-label";
        label.for="blankCheckbox";
        //Esto simplemente hace que la palabra inicie con una letra Mayuscula
        label.textContent=  this.#nombre.charAt(0).toUpperCase() + this.#nombre.slice(1);

        
        

        div2.appendChild(input);
        div2.appendChild(label);
        


        return div2;

    }
    
}

function insertarCategorias(categorias){
    let p=document.querySelector("#categoriaslat");
    categorias.forEach((check,i) => {
        p.appendChild(check.crearCategorias(i));
    });
}

let checks=[];

let array = ["water", "fire","grass","electric"];
array.forEach(element => {
    let checkbox=new Check(element);
    checks.push(checkbox);
});



insertarCategorias(checks); 
