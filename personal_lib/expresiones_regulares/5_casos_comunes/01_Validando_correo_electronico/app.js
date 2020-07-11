$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿El correo es válido?', isValidEmail());
    }

    var isValidEmail = function () {
        var email = document.getElementById('email');
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
    }

});