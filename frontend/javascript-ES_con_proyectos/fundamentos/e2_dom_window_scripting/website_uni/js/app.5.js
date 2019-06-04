//querySelectorAll

const enlaces = document.querySelectorAll("#principal .enlace");

enlaces[1].style.background='red';
enlaces[1].textContent = 'Link mod';

console.log(enlaces);

const enlacesq = document.querySelectorAll('#principal a:nth-child(odd)'); //impares

enlacesq.forEach(
    function (impares) {
        impares.style.backgroundColor = 'red';
        impares.style.color='white';
    }
);

console.log(enlacesq);