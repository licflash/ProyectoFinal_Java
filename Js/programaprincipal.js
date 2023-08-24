// Defino las variables
const cuerpo = document.body;
const container = document.querySelector('.container');
const formulario = document.querySelector('.formulario');
const tablaJuegos = document.getElementById('tablaJuegos');
const textCenterButtons = document.querySelectorAll('.text-center, .text-center2');
const inputJuego = document.getElementById('name');
const inputMoneda = document.getElementById('moneda');
const inputPorcentaje = document.getElementById('porcentaje');
const calculoButton = document.getElementById('calculo');
const nuevoJuegoButton = document.getElementById('nuevojuego');

cuerpo.style.backgroundColor = 'black';
cuerpo.style.color = 'white';
cuerpo.style.textAlign = 'center';

// Estilo
container.style.display = 'flex';
container.style.flexDirection = 'column'; // Stack elements vertically
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.minHeight = '100vh';

formulario.style.width = '100%';

//Centrado
tablaJuegos.style.margin = '20px auto';
tablaJuegos.style.width = '80%';
tablaJuegos.style.textAlign = 'center';

///////////////////////////

//Clase Juego
class Juego {
    constructor(id_juego, nombre_juego, moneda_juego, precio_juego) {
        this.id_juego = id_juego;
        this.nombre_juego = nombre_juego;
        this.moneda_juego = moneda_juego;
        this.precio_juego = precio_juego;
    }
}

//Clase Moneda
class Moneda {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }
}

const monedas = []; //MonedasLista
const juegos = []; //ConstanteLista

monedas.push(new Moneda(1, "Peso", 1))
monedas.push(new Moneda(2, "Dolar", 367.46))
monedas.push(new Moneda(3, "Euro", 376.67))
monedas.push(new Moneda(4, "Libra", 445, 63))
monedas.push(new Moneda(5, "Yen", 38.27))

//Carga de juegos iniciales
juegos.push(new Juego(0, "Fifa 2023", "Dolar", 60.50));
juegos.push(new Juego(1, "Los sims", "Peso", 4500));
juegos.push(new Juego(2, "God of War", "Libra", 20));
juegos.push(new Juego(3, "OnlyUp", "Yen", 2));
juegos.push(new Juego(4, "League of Legends", "Dolar", 100));

const savedJuegos = sessionStorage.getItem('juegos');
if (savedJuegos) {
    juegos.push(...JSON.parse(savedJuegos));
}



//Mostrar los juegos

function llenarTablaJuegos() {
    const tablaJuegos = document.getElementById('tablaJuegos').getElementsByTagName('tbody')[0];

    // Limpiar la tabla antes de llenarla nuevamente
    tablaJuegos.innerHTML = "";

    for (const juego of juegos) {
        const fila = tablaJuegos.insertRow();
        const celdaId = fila.insertCell(0);
        const celdaNombre = fila.insertCell(1);
        const celdaMoneda = fila.insertCell(2);
        const celdaPrecio = fila.insertCell(3);

        celdaId.textContent = juego.id_juego;
        celdaNombre.textContent = juego.nombre_juego;
        celdaMoneda.textContent = juego.moneda_juego;
        celdaPrecio.textContent = juego.precio_juego;
    }
}

///////////////////////////////////////


//Defino las funciones 

let impuestopais = 0;

function seleccionjuego(videojuego) {
    let j = 0;
    switch (videojuego) {
        case -2:
            nombrenuevoj = prompt("Ingrese el nombre del nuevo juego"),
                precionuevoj = parseFloat(prompt("Ingrese el precio del nuevo juego")),
                val = 0
            while (val == 0) {
                monedanuevoj = prompt("Ingrese el nombre de la moneda del nuevo juego")
                switch (monedanuevoj.toLowerCase()) {
                    case "peso":
                        monedanuevoj = "Peso"
                        val = 1
                        break;
                    case "dolar":
                        monedanuevoj = "Dolar"
                        val = 1
                        break;
                    case "euro":
                        monedanuevoj = "Euro"
                        val = 1
                        break;
                    case "libra":
                        monedanuevoj = "Libra"
                        val = 1
                        break;
                    case "yen":
                        monedanuevoj = "Yen"
                        val = 1
                        break;
                    case "":
                        val = 0
                        break;
                }
            }
            nj = juegos.length
            const nuevojuego = {
                id_juego: nj,
                nombre_juego: nombrenuevoj,
                moneda_juego: monedanuevoj,
                precio_juego: precionuevoj
            }
            juegos.push(nuevojuego)
            j = nj
            break;
        case 1:
            j = 1
            break;
        case 2:
            j = 2
            break;
        case 3:
            j = 3
            break;
        case 4:
            j = 4
            break;
        case 5:
            j = 5
            break;
        case -1:
            break;
    }
    return j
}

function convertir(divisa, monto) {
    switch (divisa) {
        case "Dolar":
            pesos = monto * monedas[1].valor;
            break;
        case "Euro":
            pesos = monto * monedas[2].valor;
            break;
        case "Libra":
            pesos = monto * monedas[3].valor;
            break;
        case "Yen":
            pesos = monto * monedas[4].valor
            break;
        case "Peso":
            pesos = monto
    }
    return pesos;
}

function impuesto(divisa, a) {
    if (divisa !== "Peso") {
        imp = (impuestopais * juegos[a].precio_juego) / 100;
    }
    else {
        imp = 0
    }

    return imp
}

// ... (evento click para agregar un nuevo juego)
nuevoJuegoButton.addEventListener('click', function () {
    const monedasOptions = {
        Peso: 'Peso',
        Dolar: 'Dolar',
        Euro: 'Euro',
        Libra: 'Libra',
        Yen: 'Yen'
    };

    Swal.fire({
        title: 'Agregar un nuevo juego',
        html: '<input id="nombreNuevoJuego" class="swal2-input" placeholder="Nombre del juego">' +
            '<input id="precioNuevoJuego" class="swal2-input" placeholder="Precio del juego">' +
            '<select id="monedaNuevaJuego" class="swal2-select">' +
                Object.entries(monedasOptions).map(([key, value]) => `<option value="${key}">${value}</option>`).join('') +
            '</select>',
        showCancelButton: true,
        confirmButtonText: 'Agregar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const nombreNuevoJuego = Swal.getPopup().querySelector('#nombreNuevoJuego').value;
            const precioNuevoJuego = parseFloat(Swal.getPopup().querySelector('#precioNuevoJuego').value);
            const monedaNuevaJuego = Swal.getPopup().querySelector('#monedaNuevaJuego').value.toLowerCase();

            if (!nombreNuevoJuego || isNaN(precioNuevoJuego)) {
                Swal.showValidationMessage('Por favor, completa todos los campos correctamente.');
            }

            return { nombreNuevoJuego, precioNuevoJuego, monedaNuevaJuego };
        }
    }).then(result => {
        if (result.isConfirmed) {
            const nuevojuego = new Juego(juegos.length, result.value.nombreNuevoJuego, result.value.monedaNuevaJuego, result.value.precioNuevoJuego);
            juegos.push(nuevojuego);

            // Guardar los juegos actualizados en LocalStorage
            localStorage.setItem('juegos', JSON.stringify(juegos));
            llenarTablaJuegos();

            Swal.fire('¡Agregado!', 'El nuevo juego ha sido agregado correctamente.', 'success');
        }
    });
});



// Función para calcular el costo final
function calcular() {
    const juegoIndex = seleccionjuego(parseInt(inputJuego.value));
    
    if (juegoIndex >= 0 && juegoIndex < juegos.length) {
        const selectedJuego = juegos[juegoIndex];
        const impuestoPais = parseInt(inputPorcentaje.value);
        const costoOriginal = selectedJuego.precio_juego;
        const costoConvertido = convertir(selectedJuego.moneda_juego, costoOriginal);
        const impuestoAplicado = impuesto(selectedJuego.moneda_juego, juegoIndex, impuestoPais);
        const costoFinal = costoConvertido + impuestoAplicado;

        Swal.fire({
            title: 'Costo Total',
            text: `El costo total es de: $${costoFinal.toFixed(2)}`,
            icon: 'info',
            willClose: () => {
                inputJuego.value = '';
                inputPorcentaje.value = '';
            }
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, selecciona un juego válido.',
            icon: 'error'
        });
    }
}


// Asociar el clic del botón "Calcular" con la lógica de cálculo
calculoButton.addEventListener('click', calcular);

llenarTablaJuegos();