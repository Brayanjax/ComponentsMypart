document.getElementById('registroBtn').addEventListener('click', function() {
    document.getElementById('ladoIzquierdo').style.display = 'none';
    document.getElementById('imagenIzquierda').style.display = 'none';
    document.getElementById('ladoDerecho').style.display = 'block';
    document.getElementById('imagenDerecha').style.display = 'block';
});

document.getElementById('inicioBtn').addEventListener('click', function() {
    document.getElementById('ladoDerecho').style.display = 'none';
    document.getElementById('imagenDerecha').style.display = 'none';
    document.getElementById('ladoIzquierdo').style.display = 'block';
    document.getElementById('imagenIzquierda').style.display = 'block';
});

function enviarDatos(formularioId) {
    var emailInput = document.getElementById('emailInput' );
    var passwordInput = document.getElementById('passwordInput' );

    
    if (emailInput && passwordInput) {
        var email = emailInput.value;
        var password = passwordInput.value;

       
        console.log("Email:", email);
        console.log("Password:", password);
    } else {
        console.error("Los elementos de entrada no fueron encontrados.");
    }
}



function CreatePerson() {
    this.SubmitPersonToCreate = function () {
        var person = {};
        person.identification = $('#identification').val();
        person.email = $('#email').val();
        person.userPassword = $('#password').val();
        person.name = $('#firstName').val();
        person.firstLastName = $('#firstLastName').val();
        person.secondLastName = $('#secondLastName').val();
        person.phone = $('#phoneNumber').val();
        person.address = finalAddress;
        person.photograph = $('#imgUser').attr('src');

        var apiUrl = API_URL_BASE + "/api/Person/CreatePerson";

        $.ajax({
            url: apiUrl,
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json",
            data: JSON.stringify(person),
            hasContent: true
        }).done(function (outcome) {
            if (outcome.result === "OK")
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario registrado',
                    text: outcome.message,
                    confirmButtonColor: 'var(--dark-purple)',
                    confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/Home/Index'
                    }
                });
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de registro',
                    text: outcome.message,
                    confirmButtonColor: 'var(--dark-purple)',
                    confirmButtonText: 'Aceptar'
                })
            }
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error inesperado',
                text: 'Ha ocurrido el siguiente error: ' + error,
                confirmButtonColor: 'var(--dark-purple)',
                confirmButtonText: 'Aceptar'
            })
        });
    }
}
    
    
/*function CreateUser() {
    this.SubmitPersonToActivate = function (nombre,apellido,gmail,contraseña) {
        var apiUrl = API_URL_BASE + "/api/Person/ActivateAccountByEmailAndOtp" +
        "?id=" + encodeURIComponent(gmail) +
        "?nombre=" + encodeURIComponent(nombre) +
        "?apellido=" + encodeURIComponent(apellido) +
        "?gmail=" + encodeURIComponent(gmail) +
        "&contraseña=" + encodeURIComponent(contraseña);

    $.ajax({
        method: "POST",
        url: apiUrl
    }).done(function (outcome) {
        if (outcome.result === "OK")
            Swal.fire({
                icon: 'success',
                title: 'Cuenta activada',
                text: outcome.message,
                 confirmButtonColor: 'var(--dark-purple)',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.value) {
                    window.location.href = '/Login/Login';
                }
            })
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error de activacion',
                text: 'Revise los datos suministrados',
                confirmButtonColor: 'var(--dark-purple)',
                confirmButtonText: 'Aceptar'
            })
        }
    }).fail(function (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ha ocurrido el siguiente error: ' + error,
            confirmButtonColor: 'var(--dark-purple)',
            confirmButtonText: 'Aceptar'
        })
    });
    }
}*/
    
       
    