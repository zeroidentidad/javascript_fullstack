import variableModulo, {MiClase} from "./modulo.js";

const texto = document.createElement("p");
texto.textContent = variableModulo;

//valor id div, objeto en dom
contenedor.appendChild(texto); 

const obj = {propx: 'holax', propy: 'holay'}
const usar = new MiClase(obj, 'otro valor');
usar.miFuncion();