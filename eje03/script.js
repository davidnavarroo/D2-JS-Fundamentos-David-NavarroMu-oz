"use strict";

const numberValue = 42;
const bigintValue = 9007199254740991n;
const stringValue = "Hola, mundo";
const booleanValue = true;
const nullValue = null;
const undefinedValue = undefined;
const symbolValue = Symbol("identificador");
const objectValue = { modulo: "JavaScript" };

const values = [
    ["number", numberValue],
    ["bigint", bigintValue],
    ["string", stringValue],
    ["boolean", booleanValue],
    ["null", nullValue],
    ["undefined", undefinedValue],
    ["symbol", symbolValue],
    ["object", objectValue]
];

document.write(
    "<ul>" +
    values.map(([name, value]) => {
        const displayValue = value !== null && typeof value === "object"
            ? JSON.stringify(value)
            : String(value);
        return `<li>${name}: ${displayValue} (typeof: ${typeof value})</li>`;
    }).join("") +
    "</ul>"
);

// typeof null devuelve "object" por una peculiaridad histórica de JavaScript que se conserva por compatibilidad.