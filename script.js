document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === "success") {
                alert("Mensaje enviado con éxito.");
                document.getElementById("formulario").reset();
            } else {
                alert("Hubo un error al enviar el mensaje.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("No se pudo enviar el mensaje.");
        });
});