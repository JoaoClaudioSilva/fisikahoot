function validarFormulario() {
    let usuario = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (!caracteresValidos(usuario)){
        alert("O usuário não pode possuir caracteres especiais. Tente novamente");
        return false;
    }

    if (password !== confirmPassword) {
        alert("As senhas devem ser iguais. Tente novamente.");
        return false;
    }

    if (password.length < 8) {
        alert("A senha deve possuir no mínimo 8 caracteres. Tente novamente.");
        return false;
    }

    return true;
}


function caracteresValidos(str) {

    let regex = /^[a-zA-Z0-9_-]+$/;
    return regex.test(str);
}
