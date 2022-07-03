const boton = document.querySelector(".header--button");
const espacioUsuario = document.querySelector('.header--container--flex');
const userList = localStorage.getItem("user") || "";
if (userList != "")
{
    const mostrarUsuario = document.createElement('p');
    mostrarUsuario.innerHTML = userList;
    mostrarUsuario.classList.add("header--user");
    espacioUsuario.appendChild(mostrarUsuario);
    boton.classList.add('invisible');
}