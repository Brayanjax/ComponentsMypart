

var API_URL_BASE  = 'https://task-manager-backend2.azurewebsites.net';
  

//movimiento
const registryBtn = document.getElementById('registroBtn') as HTMLInputElement;
 registryBtn.addEventListener('click', function() {  
    document.getElementById('ladoIzquierdo')!.style.display = 'none';
    document.getElementById('imagenIzquierda')!.style.display = 'none';
    document.getElementById('ladoDerecho')!.style.display = 'block';  
    document.getElementById('imagenDerecha')!.style.display = 'block'; 
}); 
const loginBtn = document.getElementById('inicioBtn') as HTMLInputElement;
 loginBtn.addEventListener('click', function() {
    document.getElementById('ladoDerecho')!.style.display = 'none';
    document.getElementById('imagenDerecha')!.style.display = 'none';
    document.getElementById('ladoIzquierdo')!.style.display = 'block';
    document.getElementById('imagenIzquierda')!.style.display = 'block';
});




function CreatePerson(nameId: string, lastNameId: string, emailId: string, passwordId: string) {

    let nameInput: HTMLInputElement = document.getElementById(nameId) as HTMLInputElement;
    let lastNameInput: HTMLInputElement = document.getElementById(lastNameId) as HTMLInputElement;
    let emailInput: HTMLInputElement = document.getElementById(emailId) as HTMLInputElement;
    let passwordInput: HTMLInputElement = document.getElementById(passwordId) as HTMLInputElement;

let name: string = nameInput.value;
let lastName: string = lastNameInput.value;
let email: string = emailInput.value;
let password: string = passwordInput.value;
  
    const user : {
        id: string, 
        name: string,
        lastname: string,
        email: string,
        password: string
    }={
        id: email, 
        name: name,
        lastname: lastName,
        email: email,
        password: password
    };

    var apiUrl  = API_URL_BASE + '/api/Users/CreateUser';
 
    $.ajax({   
        url: apiUrl,
        method: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(user)
    }).done(function (outcome) {
        
        Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: 'Respuesta correcta: ' + JSON.stringify(outcome),
            confirmButtonColor: 'var(--dark-purple)',
            confirmButtonText: 'Aceptar'
        })
    }).fail(function (xhr, status, error) {
        alert("Ha ocurrido un error: " + error + "\nEstado: " + status + "\nDetalles: " + xhr.responseText);
    });
}


    
//hacer funcion de comprovacion
function GetUser(emailI: string, passwordId: string) {
    let emailInput: HTMLInputElement = document.getElementById(emailI) as HTMLInputElement;
    let passwordInput: HTMLInputElement = document.getElementById(passwordId) as HTMLInputElement;
    var email: string = emailInput.value;
    var password: string = passwordInput.value;

    var apiUrl = API_URL_BASE + '/api/Users/GetUser/' + encodeURIComponent(email);
    console.log("hola")
    $.ajax({
        url: apiUrl,
        method: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json"
    }).done(function (outcome) {
       
        if (outcome && outcome.email && outcome.password) {
            var responseEmail : string = outcome.email;
            var responsePassword = outcome.password;

            
            console.log('Email recibido:', responseEmail);
            console.log('Contraseña recibida:', responsePassword);
            if(responseEmail===email && responsePassword===password){
                
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'Respuesta correcta: ' + JSON.stringify(outcome),
                confirmButtonColor: 'var(--dark-purple)',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                // Redirigir a la página deseada después de que el usuario haya hecho clic en Aceptar
                window.location.href = 'pagina.html';
            });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Completado',
                    text: 'Pero falta que sea igual: ' + JSON.stringify(outcome),
                    confirmButtonColor: 'var(--dark-purple)',
                    confirmButtonText: 'Aceptar'
                });
            }
            
           
            
        } else {
            
            alert('La respuesta de la API no contiene los campos esperados.');
        }
    }).fail(function (xhr, status, error) {
        alert("Ha ocurrido un error: " + error + "\nEstado: " + status + "\nDetalles: " + xhr.responseText);
    });
}

/*
function CreateUser() {
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
    
       