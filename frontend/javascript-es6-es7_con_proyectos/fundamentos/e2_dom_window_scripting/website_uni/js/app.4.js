//elementsByClassName

let enlaces;

enlaces = document.getElementsByClassName('enlace')[3];
//enlaces = enlaces[0];

enlaces.style.background = '#333';
enlaces.textContent = 'Enlace xxx';

//console.log(enlaces);

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

//console.log(listaEnlaces);

const links = document.getElementsByTagName('a');

links[17].style.color = 'red';
links[17].textContent = 'Apps Mods'

//console.log(links);

let forenlaces = Array.from(links);

forenlaces.forEach(
    function(forenlace){
        console.log(forenlace.textContent);
    }
);