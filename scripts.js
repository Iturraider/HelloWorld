// Selectionar contenedor
let container = document.getElementById('container');


function esconder(){
    container.style.display = 'none';
}
function mostrar(){
    container.style.display = 'flex';
}

let btnmostrar = document.getElementById('btnmostrar');
btnmostrar.addEventListener('click', mostrar);

let btnesconder = document.getElementById('btnesconder');
btnesconder.addEventListener('click', esconder);