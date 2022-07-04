var botonArticle = document.querySelector('.main--form--button');
var listaArticulos = JSON.parse(localStorage.getItem('articles')) || [];
botonArticle.addEventListener('click', () =>
{
    var elementosArticulo = 
    {
        url: "",
        Category: "",
        Nombre: "",
        Precio: 0,
        Description: ""
    }
    var elementos = document.querySelectorAll('.main--form--input');
    elementosArticulo.url = elementos[0].value;
    elementosArticulo.Category = elementos[1].value;
    elementosArticulo.Nombre = elementos[2].value;
    elementosArticulo.Precio = elementos[3].value;
    elementosArticulo.Description = elementos[4].value;

    if (elementosArticulo.url == "" || elementosArticulo.Category == "" || elementosArticulo.Nombre == "" || elementosArticulo.Precio == "")
    {
        alert("El elemento está incompleto!");
        return;
    }

    listaArticulos.push(elementosArticulo);
    
    for (var i = 0; i < (listaArticulos.length - 1); i++)
    {
        if (listaArticulos[i].url == "" || listaArticulos[i].Category == "" || listaArticulos[i].Nombre == "" || listaArticulos[i].Description == "")  
        {
            listaArticulos.splice(i, 1);
            localStorage.setItem('articles', JSON.stringify(listaArticulos));
            return;
        }

        if (listaArticulos[i].url == listaArticulos[i+1].url)
        {
            alert("¡Ese elemento ya existe dentro de la base de datos!");
            //Función para eliminar o remover elemento de listaArtículos ya existente
            listaArticulos.splice(i, 1);
            localStorage.setItem('articles', JSON.stringify(listaArticulos));
            return;
        }
    }

    localStorage.setItem('articles', JSON.stringify(listaArticulos));
});