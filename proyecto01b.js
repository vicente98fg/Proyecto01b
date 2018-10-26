//Zona de variables

var fila = Number(prompt("Introduzca numero de fila"));
var columna = Number(prompt("Introduza numero de columna"));


//Zona de funciones

function comprobar(fila,columna) {
    if ((fila > 6)&&(columna > 6)) {
        return (false);

    } else if ((fila > 6)&&(columna <= 6)) {
        return (false);

    } else if ((fila <= 6)&&(columna > 6)) {
        return (false);

    } else if ((fila <= 6)&&(columna <= 6)) {
        return (true);
    }
}

var resultado = comprobar(fila,columna);


//Zona de console.log

console.log(`La operación ha sido ${resultado}`);