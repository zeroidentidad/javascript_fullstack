// Variables
//---------------------------------------------------
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// Event Listeners
//---------------------------------------------------
eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}

// Funciones
//---------------------------------------------------
function inicioApp() {
     // deshabilitar el envio
     enviarBtn.disabled = true;
}
// Valida que el campo tengo algo escrito

function validarCampo() {
    
     // Se valida la longitud del texto y que no este vacio
     validarLongitud(this);

     // Validar unicamente el email
     if(this.type === 'email') {
          validarEmail(this);
     }

     let errores = document.querySelectorAll('.error');

     if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
          if(errores.length === 0) {
               enviarBtn.disabled = false;
          }
     }
}

// Resetear formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

// Cuando se envia correo
function enviarEmail(e) {
     // Spinner presionar Enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     // Gif envia email
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     // Ocultar Spinner y mostrar gif de enviado

     setTimeout(function() {
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild(enviado);

          setTimeout(function() {
               enviado.remove();
               formularioEnviar.reset();
          }, 3500);

     }, 2500);

     e.preventDefault();
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {
     if(campo.value.length > 0 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

function validarEmail(campo) {
     const mensaje = campo.value;
     if(mensaje.indexOf('@') === -1 ) {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');          
     } else {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }
}