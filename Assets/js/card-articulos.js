//Clase para el objeto tarjeta
class card
{
#imagen="";
#nombre="";
#descripcion="";


constructor(imagen,nombre,descripcion)
{
    this.#imagen=imagen;
    this.#nombre=nombre;
    this.#descripcion=descripcion;
}

//Siver para poner los valores a los atributos principales del objeto
set imagen(value){this.#imagen=value;}
set nombre(value){this.#nombre=value;}
set descripcion(value){this.#descripcion=value;}

//Obtenemos los valores
get imagen(){return this.#imagen;}
get nombre(){return this.#nombre;}
get descripcion(){return this.#descripcion;}
}



