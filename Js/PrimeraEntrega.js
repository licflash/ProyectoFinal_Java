// Calculadora del costo final de un juego virtual.

// Valor de las divisas
let us = 262;
let eu = 288;
let li = 338;

// Funciones para el programa
function convertir(divisa, monto) {
    switch (divisa) {
        case "dolar":
            pesos = monto * us;
            break;
        case "euro":
            pesos = monto * eu;
            break;
        case "libra":
            pesos = monto * li;
            break;
    }
    return pesos;
}


function impuesto(costo, impuesto) {
    const cuenta = (impuesto * costo) / 100;
    return cuenta;
}

// Programa principal
let moneda = 0;
let pais = 0;
let monto = 0;
let ingreso = 0; // Variables de validación
let val = 0;
let val_2 = 0;
let pesos = 0;
let cuenta = 0;
let imp = 0;
let valor_pesos = 0;
let adicional = 0;
let total = 0;

// Ingreso y validación de valores
while (val_2 === 0) {
    monto = prompt("Ingrese el monto del juego en moneda extranjera. Solo el número. Para cortar el programa ingrese -1");
    if (isNaN(monto) || monto === null ) {
        console.log("Ingrese un número");
    }
    if (monto == -1){
        break
    }
    else val_2 = 1;
}

while (ingreso === 0) {
    moneda = prompt("Escriba el nombre de la moneda en la que comprará el videojuego. Para cortar el programa ingrese -1");
    if (moneda == -1){
        break
    }
    else{
        moneda = moneda.toLowerCase();
        switch (moneda) {
            case "dolar":
                ingreso = 1;
                break;
            case "euro":
                ingreso = 1;
                break;
            case "libra":
                ingreso = 1;
                break;
        }
    }
}

valor_pesos = convertir(moneda, monto);

while (val === 0) {
    pais = prompt("Escriba el porcentaje del impuesto sin el signo %. Solo el número. Para cortar el programa ingrese -1");
    if (isNaN(pais) || pais === null) {
        console.log("Ingrese un número");
        pais = 0;
    } 
    if (pais == -1){
        val = 1;
        break;
    }
    else {
        val = 1;
    }
}

adicional = impuesto(valor_pesos, pais);
total = valor_pesos + adicional;

alert("El costo total del juego es de $" + total);