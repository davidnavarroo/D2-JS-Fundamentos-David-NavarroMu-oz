"use strict";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const today = currentDate.getDate();
const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
const maximumEventDay = Math.min(30, lastDayOfMonth);

let eventDay;
if (today > maximumEventDay) {
    // Si ya pasó el día 30 y no queda un día permitido, el evento es hoy.
    eventDay = today;
} else {
    do {
        eventDay = Math.floor(Math.random() * maximumEventDay) + 1;
    } while (eventDay < today);
}

const eventDate = new Date(year, month, eventDay);
const daysUntilEvent = Math.round(
    (Date.UTC(year, month, eventDay) - Date.UTC(year, month, today)) / 86400000
);
const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

document.write(
    `<section><h2>Versión con Date</h2>` +
    `<p>La fecha actual es ${dateFormatter.format(currentDate)}.</p>` +
    `<p>La fecha del evento: ${dateFormatter.format(eventDate)}.</p>` +
    `<p>Días que faltan para el evento: ${daysUntilEvent} ${daysUntilEvent === 1 ? "día" : "días"}.</p></section>`
);