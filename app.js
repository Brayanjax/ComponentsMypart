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

function CreatePerson(nameId, lastNameId, emailId, passwordId) {

    var name = document.getElementById(nameId).value;
    var lastName = document.getElementById(lastNameId).value;
    var email = document.getElementById(emailId).value;
    var password = document.getElementById(passwordId).value;


    var user = {
        id: email, 
        name: name,
        lastname: lastName,
        email: email,
        password: password
    };

    var apiUrl = API_URL_BASE + '/api/Users/CreateUser';

    $.ajax({
        url: apiUrl,
        method: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(user)
    }).done(function (outcome) {
        alert("Respuesta correcta: " + JSON.stringify(outcome));
    }).fail(function (xhr, status, error) {
        alert("Ha ocurrido un error: " + error + "\nEstado: " + status + "\nDetalles: " + xhr.responseText);
    });
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
    
       
    