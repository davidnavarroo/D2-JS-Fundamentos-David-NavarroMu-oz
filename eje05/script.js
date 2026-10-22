"use strict";

const firstInput = prompt("Introduce el primer número:");
const secondInput = prompt("Introduce el segundo número:");

let sumMessage;
if (firstInput === null || secondInput === null) {
    sumMessage = "Se canceló la entrada de los números; no se calculó la suma.";
} else {
    const numericSum = Number(firstInput) + Number(secondInput);
    const concatenatedValues = firstInput + secondInput;
    sumMessage =
        `Suma como números: ${numericSum}<br>` +
        `Sin conversión (concatenación): ${concatenatedValues}`;
}

const values = [
    ['"123"', "123"],
    ['" 45 "', " 45 "],
    ['"abc"', "abc"],
    ['""', ""],
    ['"0"', "0"],
    ["0", 0],
    ["null", null],
    ["undefined", undefined],
    ["true", true]
];

document.write(
    `<p>${sumMessage}</p>` +
    "<table border=\"1\">" +
    "<thead><tr><th>Valor original</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr></thead>" +
    "<tbody>" +
    values.map(([label, value]) =>
        `<tr><td>${label}</td><td>${String(Number(value))}</td>` +
        `<td>${String(value)}</td><td>${String(Boolean(value))}</td></tr>`
    ).join("") +
    "</tbody></table>"
);