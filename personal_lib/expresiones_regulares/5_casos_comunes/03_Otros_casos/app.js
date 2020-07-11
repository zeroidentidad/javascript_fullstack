$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿La URL es válida?', isValidUrl());
    }

    /**
     * URL/Dirección web válida
     */
    var isValidUrl = function () {
        var url = document.getElementById('url');
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url.value)
    }

    /**
     * Contraseña segura
     * Contraseñas con al menos una letra mayúscula.
     * Contraseñas con al menos una letra minúscula.
     * Contraseñas con al menos un número o caracter especial.
     * Contraseñas con mínimo 8 caracteres.
     **/
    var isValidPass = function () {
        var pass = document.getElementById('pass');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass.value)
    }

    /**
     * Teléfonos en el mundo
     * https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    var isValidPhone = function () {
        var phone = document.getElementById('phone');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(phone.value)
    }

    /**
     * Tarjetas de credito
     */
    var isValidCreditCard = function () {
        var phone = document.getElementById('phone');
        return /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(phone.value)
    }

    /**
     * Código postal
     */
    var isValidPostalCode = function () {
        var phone = document.getElementById('phone');
        return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(phone.value)
    }

    /**
     * Nombres de usuario
     * Mínimo 6 caracteres
     * Máximo 30 caracteres
     */
    var isValidUserName = function () {
        var phone = document.getElementById('phone');
        return /^[a-z\d_]{6,30}$/i.test(phone.value)
    }

});