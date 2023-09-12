//validacion de formulario clinica dental

let passwordStoraged = "ataque";
let userStoreged = "angel";

function login(userStoraged, pwStoraged) {
    let strike = 0;
    let loginSuccessful = true;

    while (loginSuccessful && strike < 3) {
        let user = prompt("ingrese su nombre de usuario");
        let pw = prompt("ingrese su contraseña debe contener \n -almenos 8 caracteres \n");
        console.log(user, pw, userStoraged === user);
        if (userStoraged === user && pw === pwStoraged) {
            loginSuccessful = false;
        } else {
            strike++;
            alert("intento fallido " + strike);
        }
    }
    if (strike === 3) {
        alert("login fallido");
    } else {
        alert("login exitoso");
    }
}

login(userStoreged, passwordStoraged);
