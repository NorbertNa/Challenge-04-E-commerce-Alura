const espacioParaExternos = document.createElement('div');
    espacioParaExternos.classList.add('main--externos');
    document.querySelector('main').appendChild(espacioParaExternos);

const menu = document.createElement('div');
    menu.classList.add('main--externos--menu');

const menuTitle = document.createElement('p');
    menuTitle.classList.add('main--title');
    menuTitle.innerHTML = "Productos externos";

const menuLink = document.createElement('a');
    menuLink.setAttribute('id', 'link--externos');
    menuLink.innerHTML = "Ver todo";
    menuLink.setAttribute('href', 'products.html')

const flecha = document.createElement('i');
    flecha.classList.add('icofont-arrow-right');

menu.appendChild(menuTitle);
menu.appendChild(menuLink);
menuLink.appendChild(flecha);
espacioParaExternos.appendChild(menu);

const espacioParaArticulosExternos = document.createElement('div');
espacioParaArticulosExternos.classList.add('main--externos--contenedor');
espacioParaExternos.appendChild(espacioParaArticulosExternos);


var articulos = JSON.parse(localStorage.getItem('articles')) || [];

if (articulos == "")
{
    espacioParaExternos.classList.add('invisible');
}
else
{
    espacioParaExternos.classList.remove('invisible');
}

for(var i = 0; i < articulos.length; i++)
{
    createArticle(articulos[i]);
}

function createArticle(article)
{
    const espacioArticulo = document.createElement('div');
    espacioArticulo.classList.add('main--externo--producto');

        const articuloImagen = document.createElement('img');
        articuloImagen.setAttribute('src', article.url);
        articuloImagen.classList.add('main--producto--imagen')

        const articuloNombre = document.createElement('p');
        articuloNombre.innerHTML = article.Nombre;
        articuloNombre.classList.add('main--producto--titulo');

        const articuloPrecio = document.createElement('p');
        articuloPrecio.innerHTML = "$" + article.Precio;
        articuloPrecio.classList.add('main--producto--precio');

        const articuloDescipcion = document.createElement('p');
        articuloDescipcion.innerHTML = article.Description;
        articuloDescipcion.classList.add('main--descripcion');

        const link = document.createElement('button');
        link.classList.add('main--producto--link--externos');
        link.classList.add('main--producto--link');
        link.setAttribute('onclick', "window.location.href='singleProduct.html';")
        link.innerHTML = "Ver detalles";

    espacioArticulo.appendChild(articuloImagen);
    espacioArticulo.appendChild(articuloNombre);
    espacioArticulo.appendChild(articuloPrecio);
    espacioArticulo.appendChild(articuloDescipcion);
    espacioArticulo.appendChild(link);

    espacioParaArticulosExternos.appendChild(espacioArticulo);
}

const externos = document.querySelectorAll('.main--producto--link--externos');

for (var i = 0; i < externos.length; i++)
{
    externos[i].addEventListener('click', () => 
    {
        elementoADetallar = event.composedPath()[1];
        localStorage.setItem('articuloDetail', (elementoADetallar.outerHTML));
    })
};