"use strict";

const userName = prompt("¿Cómo te llamas?");
if (userName === null) {
    alert("Operación cancelada.");
} else {
    const city = prompt("¿En qué ciudad vives?");
    if (city === null) {
        alert("Operación cancelada.");
    } else {
        const birthYear = prompt("¿En qué año naciste?");
        if (birthYear === null) {
            alert("Operación cancelada.");
        } else {
            const age = new Date().getFullYear() - Number(birthYear);
            alert(`¡Bienvenido/a, ${userName} de ${city}! Este año cumples ${age} años.`);
        }
    }
}