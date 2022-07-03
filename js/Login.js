const botonLogin = document.querySelector('#boton--login');
const formulario = document.querySelector('.main--form');
const elementoPrincipal = document.querySelector('main');
var lista = document.querySelectorAll('.main--form--input');

const espacioUsuario = document.querySelector('.header--container--flex');
const userList = localStorage.getItem("user") || "";
const mostrarUsuario = document.createElement('p');
mostrarUsuario.innerHTML = userList;
mostrarUsuario.classList.add("header--user");
espacioUsuario.appendChild(mostrarUsuario);

if(userList != "")
{
    formulario.classList.add('invisible');
    alert("¡Ya ha iniciado sesión!");
    elementoPrincipal.appendChild();
}

botonLogin.addEventListener('click', () =>
{
    event.preventDefault();
    if (userList == "")
    {
        var usuario = lista[0].value;
        var mostrarUsuario = document.createElement('p')
        mostrarUsuario.innerHTML = usuario;
        mostrarUsuario.classList.add("header--user");
        espacioUsuario.appendChild(mostrarUsuario);
        localStorage.setItem("user", usuario);
    }
});