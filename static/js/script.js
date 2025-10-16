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
});