/*
    * Author: Daniel Meza
    * Date: Septiembre 2025
    * Descripcion: Archivo JavaScript para gestionar la validación y la interactividad del formulario.
*/

document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('myCard');

    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });

    // Form submit: mostrar mensaje de agradecimiento sin recargar la página
    const recursosSection = document.getElementById('Recursos');
    if (recursosSection) {
        const form = recursosSection.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // prevenir recarga

                // Validación nativa (HTML5)
                if (!form.checkValidity()) {
                    // Si hay campos inválidos, dejar que el navegador muestre los mensajes
                    form.reportValidity();
                    return;
                }

                // Buscar o crear contenedor de mensaje
                let msg = recursosSection.querySelector('.thankyou-message');
                if (!msg) {
                    msg = document.createElement('div');
                    msg.className = 'thankyou-message alert alert-success mt-3';
                    msg.setAttribute('role', 'status');
                    recursosSection.appendChild(msg);
                }

                // Personalizar mensaje con el nombre si está presente
                const nameInput = form.querySelector('#formGroupExampleInput');
                const name = nameInput && nameInput.value ? nameInput.value.trim() : '';
                msg.textContent = name ? `¡Gracias! ${name}. Tu mensaje fue enviado.` : 'Gracias. Tu mensaje fue enviado.';

                // Limpiar formulario
                form.reset();

                // Ocultar mensaje automáticamente después de 5 segundos
                clearTimeout(msg._hideTimeout);
                msg._hideTimeout = setTimeout(() => {
                    if (msg && msg.parentNode) msg.parentNode.removeChild(msg);
                }, 10000);
            });
        }
    }
});

