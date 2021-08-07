![X-Force] (media/banner.jpg)
![GitHub ultimo commit](https://img.shields.io/github/last-commit/YanniMartinez/XForce-ProyectoIntegrador?style=for-the-badge) <br>
![GitHub tamaño de repositorio](https://img.shields.io/github/repo-size/YanniMartinez/XForce-ProyectoIntegrador?style=for-the-badge) <br>

# X-Commerce

Proyecto integrador de Generation. Esta plataforma tiene como proposito ser un ecommerce construido desde cero mediante algunas tecnologías que veremos más adelante.

## ¿Qué encontrarás aquí? 🚀

_Se encontrará el código fuente del desarrollo de un ecommerce desde cero incluyendo tanto el Front-End como el Back-End._

Mira el apartado de **Deployment** para conocer más sobre como fue desarrollado el proyecto.


### Pre-requisitos 📋

_Tener conocimientos de Programación orientada a objetos, API's, API Rest, Bases de datos y manejo de protocolos HTTP_

```
Se consumió una API desarrollada por nosotros mismos que permite alimentar todo el sistema y así no depender de servicios de terceros.
```

### Instalación 🔧

_Dirigirte a la página principal del proyecto e interactuar con el ecommerce desarrollado_

```
Aquí podrás encontrar el enlace: https://yannimartinez.github.io/XForce-ProyectoIntegrador/
```

## Ejecución de pruebas ⚙️

_La ejecución del sistema puede hacerse en tiempo real mediante el enlace proporcionado anteriormente, de esta manera tú como usuario tienes la capacidad de sentir la experiencia del ecommerce como si fuera uno ya establecido, permitiendo registrarte, iniciar sesión, agregar a carrito y más._

### Buena seguridad con los datos 🔩

_Este proyecto hace 3 tipos de verificaciones del usuario:_

```
Comprobación mediante HTML con el llenado de campos.
Mediante JS con parámetros como la longitud, la existencia de datos y más.
A nivel de Base de datos, hace la comprobación de que se está recibiendo valores en los campos requeridos.

De no cumplirse lo campos anteriores entonces le indicará al usuario que preste mayor atención en ello.
```

### Prácticas respecto a la codificación ⌨️

_Se buscó la automatización lo mayor posible para reutilizar código o simplemente hacer toda la plataforma dinámica y modular para poder abordar de forma sencilla los errores o bugs que se presenten._

```
Ejemplo de Clase Card:

class Card
{
    /**Declaración de ATRIBUTOS privados */
    #imagen="";
    #nombre="";
    #descripcion="";
    #etiqueta="";

    /**
     * Constructor, nos permite inicializar los valores de nuestro objeto en base a la información brindada por la API
     * @param {*} imagen Hace referencia al valor SRC que asignaremos a la etiqueta img posteriormente
     * @param {*} nombre Hace referencia al nombre del articulo
     * @param {*} descripcion Hace referencia a la breve descripción obtenida del articulo
     * @param {*} etiqueta Hace referencia a la etiqueta o categoria a la que pertenece el articulo
     */
    constructor(imagen,nombre,descripcion,etiqueta)
    {
        this.#imagen=imagen;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#etiqueta=etiqueta;
    }

    /**Metodos Set's Permiten modificar los atributos privados del objeto (Les asigna valores)*/
    set imagen(value){this.#imagen=value;}
    set nombre(value){this.#nombre=value;}
        set descripcion(value){this.#descripcion=value;}
    set etiqueta(value){this.#etiqueta=value;}

    /**Metodos Get's permiten obtener información de los atributos del objeto */
    get imagen(){return this.#imagen;}
    get nombre(){return this.#nombre;}
    get descripcion(){return this.#descripcion;}
    get etiqueta(){return this.#etiqueta;}

```

## Desarollo 📦

_Aquí podrás encontrar algunos datos importantes que tomamos en cuenta a la hora de desarrollar este proyecto:_

```
Puntos fuertes del proyecto:

* Reutilización de código.
* Programación modular.
* Diseño explicito referente a variables, funciones, clases y métodos implementados.
* Automatización en el llenado de:
    - Barra de navegación.
    - Pie de Página.
    - Generación automática de tarjetas que describen los productos.
* Manejo de Bases de datos relacionales.
* Diseño, construcción e implementación de API.
```

## Construido con 🛠️

_Las tecnologías implementadas en el desarrollo de este proyecto fueron:_

_Referente al Front-End_
* [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Lenguaje de etiquetas de hipertexto, permite conexión con la web.
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Hoja de estilo en cascada, permite darle estilo al código en HTML.
* [BootStrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - Framework que facilita el manejo de código CSS.
* [JavaScript](https://maven.apache.org/) - Manejador de dependencias

_Referente al Back-End_
* [JAVA](https://www.java.com/es/) - Lenguaje de alto nivel usado para desarrollar el Back-End
* [Spring Boot](https://spring.io/projects/spring-boot) - Framework de Java para desarrollo de aplicaciones web y APIS's.
* [Maven](https://maven.apache.org/) - Manejador de dependencias


## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos una solicitud de cambio.

## Versionado 📌
Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/YanniMartinez/XForce-ProyectoIntegrador).

## Autores ✒️

_Aquí verás a todas las personas que contribuyeron al desarrollo del proyecto:_

* **Camacho Uriel** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Gómez Miguel Alexis** - *Documentación* - [fulanitodetal](#fulanito-de-tal)
* **Martínez Martínez Yanni** - *Documentación* - [fulanitodetal](#fulanito-de-tal)
* **Perez Jaquelin** - *Documentación* - [fulanitodetal](#fulanito-de-tal)
* **Velazquez Fernando Joel** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/YanniMartinez/XForce-ProyectoIntegrador/graphs/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia del equipo X-Force - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita unos taquitos 🌮, una cerveza 🍺 ó un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Haznos saber en que mejorar.
* Gracias por estar aquí.



---
Desarrollado con ❤️ por [X-Force](https://github.com/YanniMartinez/XForce-ProyectoIntegrador) 😊
