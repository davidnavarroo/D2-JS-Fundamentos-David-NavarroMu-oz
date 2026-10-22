"use strict";

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

function showPlaylist(title, songs) {
    document.write(`<h2>${title}</h2><table border="1"><tbody>`);
    songs.forEach((song) => {
        document.write(`<tr>${song.map((data) => `<td>${data}</td>`).join("")}</tr>`);
    });
    document.write("</tbody></table>");
}

playlist.push(
    ["Billie Jean", "Michael Jackson", 294, "Pop"],
    ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]
);
const removedWithPop = playlist.pop();
playlist[0].push(1975);

document.write(`<h2>Parte 1: push y pop</h2><p>Canción eliminada: ${removedWithPop[0]}</p>`);
showPlaylist("Playlist después de push y pop", playlist);

playlist.splice(1, 0, ["Like a Rolling Stone", "Bob Dylan", 369, "Rock"]);
const removedWithSplice = playlist.splice(2, 1)[0];
playlist.splice(0, 1, ["What a Wonderful World", "Louis Armstrong", 140, "Jazz"]);

document.write(
    `<h2>Parte 2: splice</h2>` +
    `<p>Canción eliminada: ${removedWithSplice.join(" | ")}</p>`
);
showPlaylist("Playlist después de splice", playlist);

const shallowCopy = [...playlist];
shallowCopy[0][0] = "Título cambiado en la copia superficial";

// El spread copia el array exterior, pero conserva las referencias a los arrays internos.
document.write(
    `<h2>Parte 3: copia superficial con spread</h2>` +
    `<p>Título en la copia: ${shallowCopy[0][0]}</p>` +
    `<p>Título en la playlist original: ${playlist[0][0]}</p>`
);

const independentCopy = playlist.map((song) => [...song]);
independentCopy[0][0] = "Título cambiado en la copia independiente";

document.write(
    `<h2>Copia independiente con map y spread</h2>` +
    `<p>Título en la copia independiente: ${independentCopy[0][0]}</p>` +
    `<p>Título en la playlist original: ${playlist[0][0]}</p>`
);