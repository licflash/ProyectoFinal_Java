class moneda {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }
} // Creo la clase monedas

const monedas = [] //Array de monedas

monedas.push(new moneda(1, "Peso", 1))
monedas.push(new moneda(2, "Dolar", 273.62))
monedas.push(new moneda(3, "Euro", 301.65))
monedas.push(new moneda(4, "Libra", 352.04))
monedas.push(new moneda(5, "Yen", 38.27)) 
//Agrego las monedas al array


class juego {
    constructor(id_juego, nombre_juego, moneda_juego, precio_juego) {
        this.id_juego = id_juego;
        this.nombre_juego = nombre_juego;
        this.moneda_juego = moneda_juego;
        this.precio_juego = precio_juego;
    }
} //Clase juegos

const juegos = [] //Array de juegos

juegos.push(new juego(0, "Fifa 2023", "Dolar", 60.50))
juegos.push(new juego(1, "Los sims", "Peso", 4500))
juegos.push(new juego(2, "God of War", "Libra", 20))
juegos.push(new juego(3, "OnlyUp", "Yen", 2))
juegos.push(new juego(4, "League of Legends", "Dolar", 100))

impuestopais = 0 //Variable impuesto

//Funciones del programa 

//Listado de juegos
function mostrarJuegos(juegos) {
    let mensaje = "Este es el listado de juegos con su identificador:\n";

    for (let i = 0; i < juegos.length; i++) {
        mensaje += juegos[i].nombre_juego + " " + juegos[i].id_juego + "\n";
    }

    alert(mensaje);
}

//Elegir juego

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


//Calculo del juego a pesos

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

function impuesto(divisa,a){
    if (divisa !== "Peso"){
        imp = (impuestopais * juegos[a].precio_juego) / 100;
    }
    else {
        imp = 0
    }

    return imp
    }


// PROGRAMA COMPLETO

mostrarJuegos(juegos) //Muestro los juegos

videojuego = parseInt(prompt("Seleccione el juego que desea cotizar. Si desea ingresar un nuevo juego ingrese -1. Si desea salir, ingrese -2"))

let j = seleccionjuego(videojuego)

impuestopais = parseInt(prompt("Ingrese el número de porcentaje de impuestos de su país. Solo el número, sin signos, ni letras"))

//Calculo final

costofinal = convertir(juegos[j].moneda_juego,juegos[j].precio_juego) + impuesto(juegos[j].moneda_juego,j)

alert("El costo total es de: \n" + "$" + costofinal)
