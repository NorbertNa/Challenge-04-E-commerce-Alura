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

        const link = document.createElement('a');
        link.innerHTML = "Ver detalles";

    espacioArticulo.appendChild(articuloImagen);
    espacioArticulo.appendChild(articuloNombre);
    espacioArticulo.appendChild(articuloPrecio);
    espacioArticulo.appendChild(link);
    console.log(espacioArticulo);

    espacioParaArticulosExternos.appendChild(espacioArticulo);
}