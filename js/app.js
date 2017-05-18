$(document).ready(function () {
    var firstname = document.getElementById('first_name');
        firstname.oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.name == "username") {
                    e.target.setCustomValidity("Completa este campo");
                }
                else {
                    e.target.setCustomValidity("Este campo no puede estar vacio");
                }
            }
        };
})
$(document).ready(function () {
    var lastname = document.getElementsByTagName("INPUT");
        lastname.oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.name == "lastname") {
                    e.target.setCustomValidity("Completa este campo");
                }
                else {
                    e.target.setCustomValidity("Este campo no puede estar vacío");
                }
            }
        };
})
$(document).ready(function () {
    var email = document.getElementById('email');
        email.oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.name == "email") {
                    e.target.setCustomValidity("Completa este campo");
                }
                else {
                    e.target.setCustomValidity("Formato ejemplo@ejem.com");
                }
            }
        };
})
$(document).ready(function () {
    var message = document.getElementById('message');
        message.oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.name == "message") {
                    e.target.setCustomValidity("Completa este campo");
                }
                else {
                    e.target.setCustomValidity("Este campo no puede estar en blanco");
                }
            }
        };
})
