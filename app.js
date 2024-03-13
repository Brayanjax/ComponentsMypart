let API_URL_BASE = 'https://task-manager-backend2.azurewebsites.net';
  

//movimiento
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

var nameR;
var lastNameR;
var emailR;
var passwordR;




//function CreatePerson() {
    this.SubmitUserToCreate = function () {
        var user = {};
        user.id = $('#emailR').val();
        user.name = $('#nameR').val();
        user.firstLastName = $('#lastNameR').val();
        user.email = $('#emailR').val();
        user.userPassword = $('#passwordR').val();
        
         

        var apiUrl = API_URL_BASE + "/api/User/CreateUser";

        $.ajax({
            url: apiUrl,
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json",
            data: JSON.stringify(user),
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
//}
    
function CreatePerson(name, lastName, email, password) {
    var user = {
        id: email,
        name: name,
        lastName: lastName,
        email: email,
        password: password
    };

    var apiUrl = API_URL_BASE + '/api/Users/CreateUser';

    $.ajax({
        url: apiUrl,
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json",
        data: JSON.stringify(user),
        success: function (outcome) {
            handleOutcome(outcome);
        },
        
    });
}

function handleOutcome(outcome) {
    if (outcome.result === "OK") {
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
            text: outcome.message,
            confirmButtonColor: 'var(--dark-purple)',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index';
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error de registro',
            text: outcome.message,
            confirmButtonColor: 'var(--dark-purple)',
            confirmButtonText: 'Aceptar'
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
    
       
    