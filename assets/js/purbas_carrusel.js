{/* <div class="carousel-item active">
    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-og-201809?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1535560276044"
        class="d-block w-100" alt="..." height="600">
    <div class="carousel-caption d-none d-md-block">
        <h5>Expresa lo mejor de ti con asombrosas fotografias</h5>
        <p>Expresa lo que llevas dentro con el nuevo Iphone</p>
    </div>

    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</div> */}

class Carrusel {
    _imagen = '';
    _titulo = '';
    _descripción = '';
    constructor(imagen, titulo, descripcion){
        this._imagen = imagen;
        this._titulo = titulo;
        this._descripción = descripcion;
    }
    crear_elemento_carricel(ifIsFirst){
        let div_carrusel = document.createElement('div');
        div_carrusel.classList = 'carousel-item';
        if(ifIsFirst){
            div_carrusel.classList.add('active')
        }
        let img = document.createElement('img');
        img.classList = 'd-block w-100';
        img.height = 600;
        img.src = this._imagen;
        let div_c = document.createElement('div');
        div_c.classList = 'carousel-caption d-none d-md-block';
        let h5 = document.createElement('h5');
        h5.textContent = this._titulo;
        let p = document.createElement('p');
        p.textContent = this._descripción;

        div_c.appendChild(h5);
        div_c.appendChild(p);
        div_carrusel.appendChild(img);
        div_carrusel.appendChild(div_c);
        return div_carrusel;
    }
    insertar_elemento(carruceles,indicadores){
        let ifIsFirst = false;
        let indicador = document.createElement('li');
        let l_indicadores = indicadores.childElementCount;
        let li = document.createElement('li');
        li.setAttribute('data-target','#carouselExampleCaptions');
        li.setAttribute('data-slide-to',`${l_indicadores}`);
        if(l_indicadores == 0){
            li.classList = 'active'
            ifIsFirst = true;
        }
        console.log(this.crear_elemento_carricel(ifIsFirst))
        console.log(li);
        indicadores.appendChild(li);
        carruceles.appendChild(this.crear_elemento_carricel(ifIsFirst));
    }
}

let elemnt = new Carrusel('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-og-201809?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1535560276044','Prueba','Esta es una prueba');
elemnt.insertar_elemento(document.querySelector('#carrusel'),document.querySelector('#indicador-carrusel'));
let elemnt2 = new Carrusel('https://i.blogs.es/958640/logitech-raton/1366_2000.jpg','Prueba 2','Esta es una prueba 2');
elemnt2.insertar_elemento(document.querySelector('#carrusel'),document.querySelector('#indicador-carrusel'));