
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

   

    return true;
}

// Evento 
document.querySelector("form").addEventListener("submit", function (event) {
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});
