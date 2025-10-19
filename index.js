const opciones = document.getElementById('opciones');
const listGroup = document.getElementById('list-group');

opciones.addEventListener('click', () => {
    listGroup.classList.toggle('d-none')
});

opciones.addEventListener('focusout', () => {
    listGroup.classList.toggle('d-none')
})