const focusArticleRaw = localStorage.getItem('articuloDetail');

const articuloEspacio = document.createElement('div');
const main = document.querySelector('main');
main.appendChild(articuloEspacio);
articuloEspacio.outerHTML = focusArticleRaw;