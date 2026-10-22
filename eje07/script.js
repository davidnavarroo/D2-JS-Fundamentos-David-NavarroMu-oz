"use strict";

const comparisons = [
    // Son dos números y 2 es mayor que 1.
    ["2 > 1", 2 > 1],
    // El operador > convierte el string numérico "2" al número 2.
    ['"2" > 1', "2" > 1],
    // == convierte "01" al número 1 antes de comparar.
    ['"01" == 1', "01" == 1],
    // == convierte false a 0, por lo que ambos valores coinciden.
    ["0 == false", 0 == false],
    // La cadena vacía se convierte a 0 y false también equivale a 0 con ==.
    ['"" == false', "" == false],
    // === no convierte tipos: number y boolean son distintos.
    ["0 === false", 0 === false],
    // == considera null e undefined iguales en este caso especial.
    ["null == undefined", null == undefined],
    // === exige mismo tipo y valor; null y undefined tienen tipos distintos.
    ["null === undefined", null === undefined],
    // Al comparar null con un número mediante >, null se convierte a 0.
    ["null > 0", null > 0],
    // null se convierte a 0, que sí es mayor o igual que 0.
    ["null >= 0", null >= 0],
    // undefined no se convierte en 0 mediante ==, así que no son iguales.
    ["undefined == 0", undefined == 0],
    // Las cadenas se comparan lexicográficamente: 'o' va después de 'l'.
    ['"Glow" > "Glee"', "Glow" > "Glee"],
    // Con ===, dos strings iguales tienen el mismo tipo y contenido.
    ['"JavaScript" === "JavaScript"', "JavaScript" === "JavaScript"],
    // La conversión numérica de la cadena vacía es 0.
    ['"" == 0', "" == 0]
];

document.write(
    "<ul>" +
    comparisons.map(([expression, result]) =>
        `<li>${expression} → ${result}</li>`
    ).join("") +
    "</ul>"
);