"use strict";

const nameInput = prompt("Introduce tu nombre:");
const nicknameInput = prompt("Introduce tu apodo:");
const ageInput = prompt("Introduce tu edad:");

const name = nameInput === null ? "" : nameInput.trim();
const nickname = nicknameInput === null ? "" : nicknameInput.trim();
const age = ageInput === null || ageInput.trim() === "" ? NaN : Number(ageInput);

const displayName = name || nickname || "Anónimo";
const accessMessage =
    !Number.isNaN(age) &&
    age >= 18 &&
    (name || nickname) &&
    "Acceso permitido";

const height = 0;
// || sustituye cualquier valor falsy como 0; ?? solo sustituye null o undefined.
const heightWithOr = height || 170;
const heightWithNullish = height ?? 170;

const hasNickname = !!nickname;

document.write(
    `<ul>` +
    `<li>Nombre para mostrar: ${displayName}</li>` +
    `<li>${accessMessage || "Acceso denegado"}</li>` +
    `<li>Altura con ||: ${heightWithOr} cm</li>` +
    `<li>Altura con ??: ${heightWithNullish} cm</li>` +
    `<li>¿Se indicó un apodo?: ${hasNickname}</li>` +
    `</ul>`
);