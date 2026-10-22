"use strict";

let running = true;

while (running) {
    const choice = prompt(
        "Menú:\n" +
        "1 - Tabla de multiplicar\n" +
        "2 - Sumar números\n" +
        "3 - Mostrar impares del 1 al 20\n" +
        "4 - Cuenta atrás\n" +
        "0 - Salir"
    );

    if (choice === null) {
        running = false;
        continue;
    }

    switch (choice.trim()) {
        case "1": {
            const input = prompt("¿De qué número quieres la tabla?");
            if (input === null || input.trim() === "" || Number.isNaN(Number(input))) {
                alert("Introduce un número válido.");
                break;
            }

            const number = Number(input);
            const lines = [];
            // El bucle for recorre los multiplicadores del 1 al 10.
            for (let multiplier = 1; multiplier <= 10; multiplier++) {
                lines.push(`${number} × ${multiplier} = ${number * multiplier}`);
            }
            alert(lines.join("\n"));
            break;
        }
        case "2": {
            let sum = 0;
            // while(true) sigue pidiendo números hasta una entrada vacía o Cancelar.
            while (true) {
                const input = prompt("Introduce un número para sumar (vacío o Cancelar para terminar):");
                if (input === null || input.trim() === "") {
                    break;
                }

                const number = Number(input);
                if (Number.isNaN(number)) {
                    alert("Ese valor no es un número; no se ha sumado.");
                    continue;
                }
                sum += number;
            }
            alert(`La suma total es: ${sum}`);
            break;
        }
        case "3": {
            const oddNumbers = [];
            // El bucle for recorre del 1 al 20 y continue omite los números pares.
            for (let number = 1; number <= 20; number++) {
                if (number % 2 === 0) {
                    continue;
                }
                oddNumbers.push(number);
            }
            alert(`Números impares: ${oddNumbers.join(", ")}`);
            break;
        }
        case "4": {
            const input = prompt("¿Desde qué número empezamos la cuenta atrás?");
            const start = input === null || input.trim() === "" ? NaN : Number(input);
            if (!Number.isInteger(start) || start < 0) {
                alert("Introduce un número entero igual o mayor que 0.");
                break;
            }

            let current = start;
            const countdown = [];
            // do...while muestra el valor actual antes de comprobar si llegó a 0.
            do {
                countdown.push(current);
                current--;
            } while (current >= 0);
            alert(`Cuenta atrás: ${countdown.join(", ")}`);
            break;
        }
        case "0":
            running = false;
            alert("Hasta luego.");
            break;
        default:
            alert("Opción desconocida. Elige 0, 1, 2, 3 o 4.");
    }
}