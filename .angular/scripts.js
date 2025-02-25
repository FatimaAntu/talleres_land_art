document.getElementById("inscripcionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    // Validación de los campos antes de preguntar si está seguro
    const nombreNino = document.getElementById("nombreNino").value;
    const edad = document.getElementById("edad").value;
    const nombrePadre = document.getElementById("nombrePadre").value;
    const telefono = document.getElementById("telefono").value;
    const taller = document.getElementById("taller").value;

    // Si algún campo está vacío, mostrar alerta
    if (!nombreNino || !edad || !nombrePadre || !telefono || !taller) {
        alert("Por favor, rellena todos los campos antes de enviar.");
        return; // Detiene el proceso si algún campo está vacío
    }

    // Mostrar el modal de confirmación para enviar
    document.getElementById("confirmacionModal").style.display = "flex";
    document.getElementById("mensajeConfirmacion").innerText = "¿Está seguro de que desea enviar la inscripción?";
});

document.getElementById("confirmarBtn").onclick = function() {
    // Si el usuario confirma, enviar el formulario
    alert("Inscripción enviada con éxito.");
    document.getElementById("inscripcionForm").reset(); // Limpiar formulario
    document.getElementById("confirmacionModal").style.display = "none"; // Cerrar modal
};

document.getElementById("cancelarModalBtn").onclick = function() {
    // Si el usuario no confirma, cerrar el modal
    document.getElementById("confirmacionModal").style.display = "none";
    alert("Formulario no enviado.");
};

document.getElementById("cancelarBtn").addEventListener("click", function () {
    // Mostrar el modal de confirmación para cancelar
    document.getElementById("confirmacionModal").style.display = "flex";
    document.getElementById("mensajeConfirmacion").innerText = "¿Está seguro de que desea cancelar la inscripción?";
});



