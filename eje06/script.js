"use strict";

const firstInput = prompt("Introduce el primer número:");
const secondInput = prompt("Introduce el segundo número:");
const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

if (
    firstInput === null ||
    secondInput === null ||
    firstInput.trim() === "" ||
    secondInput.trim() === "" ||
    Number.isNaN(firstNumber) ||
    Number.isNaN(secondNumber)
) {
    alert("Introduce dos números válidos. Operación cancelada.");
} else {
    const results = [
        `Suma: ${firstNumber + secondNumber}`,
        `Resta: ${firstNumber - secondNumber}`,
        `Multiplicación: ${firstNumber * secondNumber}`,
        `División: ${firstNumber / secondNumber}`,
        `Resto (%): ${firstNumber % secondNumber}`,
        `Potencia (**): ${firstNumber ** secondNumber}`
    ];
    alert(results.join("\n"));

    let counter = 5;
    const postfixIncrement = counter++;
    const prefixIncrement = ++counter;
    const postfixDecrement = counter--;
    const prefixDecrement = --counter;

    let assignmentCounter = 2;
    assignmentCounter += 3;
    assignmentCounter *= 2;

    alert(
        `counter++ devuelve ${postfixIncrement}; después counter vale ${postfixIncrement + 1}.\n` +
        `++counter devuelve ${prefixIncrement}.\n` +
        `counter-- devuelve ${postfixDecrement}; después counter vale ${postfixDecrement - 1}.\n` +
        `--counter devuelve ${prefixDecrement}.\n` +
        `Con += y *=, el valor final es ${assignmentCounter}.`
    );
}