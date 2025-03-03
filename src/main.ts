let turno = 1;

function incrementarTurno() {
    turno = turno + 1;
    actualizarVista();
}

function decrementarTurno() {
    turno = turno - 1;
    actualizarVista();
}

function resetearTurno() {
    turno = 0;
    actualizarVista();
}

function setearValor() {
    const setearHtmlElement = document.getElementById("turnoInput");
    if (setearHtmlElement !== null && setearHtmlElement !== undefined && setearHtmlElement instanceof HTMLInputElement) {
        const setearHtmlInputElement = setearHtmlElement as HTMLInputElement;
        const valor = setearHtmlInputElement.value;
        if (valor !== null && valor !== undefined) {
            actualizarVistaConValor(valor)
        }
    }
}

function actualizarVista() {
    const turnoString: string = "" + turno;
    actualizarVistaConValor(turnoString);
}

function actualizarVistaConValor(valor: string) {
    const turnoH1 = document.getElementById("turno");
    turnoH1!.innerHTML = valor.padStart(2, "0");
}

const botonmenos = document.getElementById("botonmenos");
const botonmas = document.getElementById("botonmas");
const reset = document.getElementById("reset");
const botonSetearValor = document.getElementById("setear");

if (botonmas !== null && botonmas !== undefined) {
    botonmas.addEventListener("click", () => incrementarTurno());
}

if (botonmenos !== null && botonmenos !== undefined) {
    botonmenos.addEventListener("click", () => decrementarTurno());
}

if (reset !== null && reset !== undefined) {
    reset.addEventListener("click", () => resetearTurno());
}

if (botonSetearValor !== null && botonSetearValor !== undefined) {
    botonSetearValor.addEventListener("click", () => setearValor());
}

