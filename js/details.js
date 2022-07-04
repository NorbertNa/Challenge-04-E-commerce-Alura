const starWars = document.querySelectorAll('.main--producto--link--starwars');
var elementoADetallar;

for (var i = 0; i < starWars.length; i++)
{
    starWars[i].addEventListener('click', () => 
    {
        elementoADetallar = event.composedPath()[1];
        localStorage.setItem('articuloDetail', (elementoADetallar.outerHTML));
    });
};

const consoles = document.querySelectorAll('.main--producto--link--consoles');

for (var i = 0; i < consoles.length; i++)
{
    consoles[i].addEventListener('click', () => 
    {
        elementoADetallar = event.composedPath()[1];
        localStorage.setItem('articuloDetail', (elementoADetallar.outerHTML));
    })
};

const diversos = document.querySelectorAll('.main--producto--link--diversos');

for (var i = 0; i < diversos.length; i++)
{
    diversos[i].addEventListener('click', () => 
    {
        elementoADetallar = event.composedPath()[1];
        localStorage.setItem('articuloDetail', (elementoADetallar.outerHTML));
    })
};
