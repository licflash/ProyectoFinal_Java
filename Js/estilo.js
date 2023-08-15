// Defino las variables
const cuerpo = document.body;
const titulo = document.getElementsByClassName('titulo')[0];
const juego = document.getElementsByClassName('juego')[0];
const moneda = document.getElementsByClassName('moneda')[0];
const impuesto = document.getElementsByClassName('porcentajeimpuesto')[0];
const nuevojuegoboton = document.getElementById('nuevojuego');

cuerpo.style.backgroundColor = 'black';
cuerpo.style.color = 'white';
document.body.style.textAlign = 'center';

const contenedores = document.querySelectorAll('.formulario, .section-title, .juego, .moneda, .porcentajeimpuesto, .text-center');

for (const contenedor of contenedores) {
    contenedor.style.marginBottom = '20px'; // Ajusta el valor según tu preferencia
}

// Selecciona todos los elementos con clase 'text-center' y 'text-center2'
const buttonContainers = document.querySelectorAll('.text-center, .text-center2');

// Aplica estilos a cada contenedor seleccionado
for (const buttonContainers of buttonContainers) {
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between';
    container.style.alignItems = 'center'; // Alinea los elementos verticalmente en el centro
    container.style.marginTop = '20px'; // Agregar margen arriba
}
