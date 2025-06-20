document.addEventListener('DOMContentLoaded', () => {

    let articulos = {};

    fetch('articulos.json')
        .then(response => response.json())
        .then(data => {
            articulos = data;
            inicializarEventos(); // Llamar después de cargar los datos
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });

    function inicializarEventos() {
        const bloques = document.querySelectorAll('.bloque');
        const articuloGeneral = document.getElementById('articulo-general');
        const contenidoArticulo = document.querySelector('.contenido-articulo');
        const cerrarBtn = document.getElementById('cerrar-articulo');

        bloques.forEach(bloque => {
            bloque.addEventListener('click', () => {
                const id = bloque.getAttribute('data-articulo');
                const contenido = articulos[id];

                if (contenido) {
                    contenidoArticulo.textContent = contenido;
                    articuloGeneral.classList.remove('oculto');
                }
            });
        });

        cerrarBtn.addEventListener('click', () => {
            articuloGeneral.classList.add('oculto');
            contenidoArticulo.textContent = '';
        });
    }

    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(this);

            fetch("contact.php", {
                method: "POST",
                body: formData
            })
                .then(response => response.text())
                .then(data => {
                    if (data.trim() === "success") {
                        alert("Mensaje enviado com sucesso.");
                        this.reset();
                    } else {
                        alert("Erro ao enviar mensagem.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Não foi possível enviar a mensagem.");
                });
        });
    }

});