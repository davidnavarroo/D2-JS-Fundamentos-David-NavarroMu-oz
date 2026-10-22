"use strict";

let userName = "David";
let age = 20;
let city = "Madrid";

const COLOR_FAVORITO = "#3366CC";
const loadTime = Date.now();

alert(
    `Nombre: ${userName}\nEdad: ${age}\nCiudad: ${city}\n` +
    `Color favorito: ${COLOR_FAVORITO}\nHora de carga: ${loadTime}`
);

// COLOR_FAVORITO = "#FF0000"; // TypeError: Assignment to constant variable.