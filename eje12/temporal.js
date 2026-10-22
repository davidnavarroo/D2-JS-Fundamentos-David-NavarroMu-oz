"use strict";

const temporalApi = globalThis.Temporal;

if (!temporalApi) {
    document.write(
        "<section><h2>Versión con Temporal</h2>" +
        "<p>La API Temporal no está disponible en este navegador. " +
        "Consulta su compatibilidad o carga un polyfill para ejecutar esta versión.</p></section>"
    );
} else {
    const today = temporalApi.Now.plainDateISO();
    const maximumEventDay = Math.min(30, today.daysInMonth);

    let eventDay;
    if (today.day > maximumEventDay) {
        // Si ya pasó el día 30 y no queda un día permitido, el evento es hoy.
        eventDay = today.day;
    } else {
        do {
            eventDay = Math.floor(Math.random() * maximumEventDay) + 1;
        } while (eventDay < today.day);
    }

    const eventDate = temporalApi.PlainDate.from({
        year: today.year,
        month: today.month,
        day: eventDay
    });
    const daysUntilEvent = today.until(eventDate).days;
    const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const formatDate = (date) =>
        `${date.day} de ${monthNames[date.month - 1]} de ${date.year}`;

    document.write(
        `<section><h2>Versión con Temporal</h2>` +
        `<p>La fecha actual es ${formatDate(today)}.</p>` +
        `<p>La fecha del evento: ${formatDate(eventDate)}.</p>` +
        `<p>Días que faltan para el evento: ${daysUntilEvent} ${daysUntilEvent === 1 ? "día" : "días"}.</p></section>`
    );
}
