document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var endereco = document.getElementById("endereco").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var isValid = true;

    if (nome === "") {
        showError("nome", " Nome é obrigatório");
        isValid = false;
    } else {
        removeError("nome");
    }

    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        showError("email", " E-mail inválido");
        isValid = false;
    } else {
        removeError("email");
    }

    if (endereco === "") {
        showError("endereco", " Endereço é obrigatório");
        isValid = false;
    } else {
        removeError("endereco");
    }

    if (telefone === "" || isNaN(telefone)) {
        showError("telefone", " Telefone é obrigatório e deve conter apenas números");
        isValid = false;
    } else {
        removeError("telefone");
    }

    if (cpf === "" || isNaN(cpf)) {
        showError("cpf", " CPF é obrigatório e deve conter apenas números");
        isValid = false;
    } else {
        removeError("cpf");
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
    field.classList.add("error");
    var errorMessage = document.createElement("span");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    field.parentNode.insertBefore(errorMessage, field.nextSibling);
}

function removeError(fieldId) {
    var field = document.getElementById(fieldId);
    field.classList.remove("error");
    if (field.nextSibling && field.nextSibling.style.color === "red") {
        field.parentNode.removeChild(field.nextSibling);
    }
}