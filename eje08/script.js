"use strict";

const input = prompt("Introduce una nota numérica entre 0 y 10:");
const grade = input === null ? NaN : Number(input);

if (
    input === null ||
    input.trim() === "" ||
    Number.isNaN(grade) ||
    grade < 0 ||
    grade > 10
) {
    alert("Error: introduce un número válido entre 0 y 10.");
} else {
    let result;

    if (grade < 5) {
        result = "Suspenso";
    } else if (grade < 7) {
        result = "Aprobado";
    } else if (grade < 9) {
        result = "Notable";
    } else {
        result = "Sobresaliente";
    }

    // Versión original: if (grade >= 5) { alert("La nota está aprobada."); } else { alert("La nota está suspensa."); }
    const approvalMessage = grade >= 5
        ? "La nota está aprobada."
        : "La nota está suspensa.";

    alert(`${result}. ${approvalMessage}`);
}